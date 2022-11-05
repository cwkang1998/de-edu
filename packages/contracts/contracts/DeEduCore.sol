// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DeEdu {

    struct Course {
        uint256 id; 
        string name;
        address author;
        address[] students;
        string courseMaterial;
        uint256 stakeAmount;
        uint256 courseEndDateTime;
    }

    struct User {
        string userDetailsURI; // User profile information
        uint256[] enrolledCourses;
        uint256[] createdCourses;
        bool exists;
    }

    Course[] public courses;

    mapping(address => User) public addrMappingToUser;

    constructor() {}

    // --- User ---

    function signUpUser(string calldata userDetailsURI) external {
        require(!addrMappingToUser[msg.sender].exists);
        User memory user;
        user.userDetailsURI = userDetailsURI;
        user.exists = true;
        addrMappingToUser[msg.sender] = user;
    }

    function updateUserDetails(string calldata userDetailsURI) external {
        require(addrMappingToUser[msg.sender].exists);
        addrMappingToUser[msg.sender].userDetailsURI = userDetailsURI;
    }



    // --- Courses ---

    // function getCourse(uint courseId) external view returns (Course memory) {
    //     require(courseId < courses.length, "Invalid courseId");
    //     return courses[courseId];
    // }

    
    // function createCourse(Course calldata courseData) external {
    //     // create a new course object, add it to array and teacher
    //     // increase totalCourses count by 1
    //     Teacher memory teacher = getTeacher();
    //     teacher.activeCourses.push(totalCourses);
    //     teacher.activeCoursesCount += 1;
    //     courses.push(courseData);
    //     totalCourses += 1;
    // }

    // function removeCourse(uint256 courseId) external {}

    // // Enrollment related functions

    // function enroll(uint256 courseId) external payable {
    //     // create a new enroll object, add to array, and to student
    //     // increase totalEnrollment count by 1
    //     Course storage course = getCourse(courseId);
    //     (bool sent, ) = address(this).call{value: course.stakeAmount}("");
    //     require(sent, "Failed to send ether");
    //     Enrollment memory enrollment = Enrollment(courseId, msg.sender, 0, false, course.stakeAmount, block.timestamp, block.timestamp + course.studyPeriod);
    //     enrollments.push(enrollment);
        
    //     Student storage student = getStudent();
    //     student.activeEnrollments.push(totalEnrollments);
    //     student.activeEnrollmentsCount += 1;

    //     totalEnrollments += 1;
    // }

    // function finishCourse(uint256 enrollmentId)
    //     external
    //     returns (bool finished)
    // {
    //     // check if student (msg.sender) has this enrollment
    //     // check if student actually finishes the course, by comparing progress == course.totalProgress
    //     // if the student has actually finished the course, call issueCertificate()
    //     // call _removeEnrollment()

    // }

    // // this function can be called by student, and the liquidator, so msg.sender is not a legit way of
    // function _removeEnrollment(uint256 enrollmentId) internal {
    //     // remove enrollment object from enrollments array, as well as from student object
    //     // decrease totalEnrollments count by 1
    // }

    // function updateProgress(uint256 enrollmentId, uint256 progress) external {}

    // // issurance of certificate

    // function issueCertificate(uint256 enrollment) external {}

    // // UpKeep - liquidation of staking

    // function liquidateStaking(uint256 enrollmentId) external {
    //     // move fund from enrollment object to vault object
    //     // call finishCourse()
    // }
}