import type { NextPage } from 'next'
import tw from 'twin.macro'

const Courses: NextPage = () => {
  const figmaLink = 'https://www.figma.com/file/QtcY24XPryIPGxQLS9gwRo/Chainlink?node-id=71%3A456'
  return (
    <>
      implement{' '}
      <a href={figmaLink} tw="text-blue-500">
        this page
      </a>
    </>
  )
}

export default Courses
