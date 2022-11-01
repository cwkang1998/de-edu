import type { NextPage } from 'next'
import tw from 'twin.macro'

const Courses: NextPage = () => {
  const figmaLink = 'https://www.figma.com/file/QtcY25XPryIPGxQLS9gwRo/Chainlink?node-id=14%3A34'
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
