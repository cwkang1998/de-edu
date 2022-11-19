// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@chainlink/contracts/src/v0.8/AutomationCompatible.sol';

contract DeEdu is Ownable, AutomationCompatible {
  struct Course {
    string name;
    address author;
    address[] students;
    string courseMaterial;
    uint256 stakeAmount;
    uint256 courseEndDateTime;
    bool ended;
    bool deleted;
  }

  struct User {
    string userDetailsURI; // User profile information
    uint256[] enrolledCourses;
    uint256[] completedCourses;
    uint256[] createdCourses;
    bool exists;
  }

  Course[] public courses;

  mapping(address => User) public usersMapping;

  constructor() {
    // A null course to remove courses.
    courses.push(
      Course({
        name: 'Null course',
        author: address(0),
        students: new address[](0),
        courseMaterial: '',
        stakeAmount: 0,
        courseEndDateTime: 0,
        ended: true,
        deleted: true
      })
    );
  }

  // --- User ---

  function signUpUser(string calldata userDetailsURI) external {
    User memory user = _getUser(msg.sender);
    require(!user.exists);
    user.userDetailsURI = userDetailsURI;
    user.exists = true;
    usersMapping[msg.sender] = user;
  }

  function updateUserDetails(string calldata userDetailsURI) external {
    require(_getUser(msg.sender).exists);
    _getUser(msg.sender).userDetailsURI = userDetailsURI;
  }

  // --- Courses ---
  function getUserEnrolledCourse() external view returns (Course[] memory userCourses) {
    User storage user = _getUser(msg.sender);
    userCourses = new Course[](user.enrolledCourses.length);
    for (uint8 i = 0; i < user.enrolledCourses.length; i++) {
      if (user.enrolledCourses[i] != 0) {
        userCourses[i] = courses[user.enrolledCourses[i]];
      }
    }
  }

  function getUserCreatedCourse() external view returns (Course[] memory userCreatedCourses) {
    User storage user = _getUser(msg.sender);
    userCreatedCourses = new Course[](user.createdCourses.length);
    for (uint8 i = 0; i < user.createdCourses.length; i++) {
      if (user.createdCourses[i] != 0) {
        userCreatedCourses[i] = courses[user.createdCourses[i]];
      }
    }
  }

  function getCourse(uint256 courseId) external view returns (Course memory course) {
    course = _getCourse(courseId);
  }

  function createCourse(Course calldata courseData) external {
    User storage user = _getUser(msg.sender);
    courses.push(courseData);
    user.createdCourses.push(courses.length - 1);
  }

  function deleteCourse(uint256 courseId) external {
    require(
      msg.sender == _getCourse(courseId).author,
      'Only author allowed to delete their course'
    );
    _getCourse(courseId).deleted = true;
  }

  function enroll(uint256 courseId) external payable {
    User storage user = _getUser(msg.sender);
    require(courseId < courses.length, 'Invalid courseId');
    require(!courses[courseId].deleted, 'Course deleted');
    user.enrolledCourses.push(courseId);
  }

  function completeCourse(
    uint256 enrollmentId,
    bytes calldata hashedMessage,
    bytes32 r,
    bytes32 s,
    uint8 v
  ) external {
    bytes memory prefix = '\x19Ethereum Signed Message:\n32';
    bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, hashedMessage));
    address signer = ecrecover(prefixedHashMessage, v, r, s);

    require(signer == msg.sender, 'Invalid signature');
    _getUser(msg.sender).completedCourses.push(enrollmentId);
  }

  // this function can be called by student, and the liquidator, so msg.sender is not a legit way of
  function exitCourse(uint256 enrollmentId) internal {
    require(_getUser(msg.sender).enrolledCourses[enrollmentId] != 0);
    _getUser(msg.sender).enrolledCourses[enrollmentId] = 0;
  }

  // -- Progress checking and certification issurance --

  function checkUpkeep(
    bytes calldata /* checkData */
  )
    external
    view
    override
    returns (
      bool upkeepNeeded,
      bytes memory /* performData */
    )
  {
    for (uint8 i = 1; i < courses.length; i++) {
      if (block.timestamp > courses[i].courseEndDateTime) {
        upkeepNeeded = true;
        break;
      }
    }
  }

  function performUpkeep(
    bytes calldata /* performData */
  ) external override {
    for (uint8 i = 1; i < courses.length; i++) {
      if (block.timestamp > courses[i].courseEndDateTime && !courses[i].deleted) {
        courses[i].ended = true;
      }
    }
  }

  // -- Internal private function
  function _getUser(address userAddress) internal view returns (User storage) {
    return usersMapping[userAddress];
  }

  function _getCourse(uint256 courseId) internal view returns (Course storage) {
    require(courseId < courses.length);
    return courses[courseId];
  }
}
