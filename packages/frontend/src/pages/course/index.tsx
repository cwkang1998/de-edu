import type { NextPage } from 'next'
import Image from 'next/image'
import tw from 'twin.macro'
import sc from 'public/images/sc.webp'
import { Button } from '@components/Button'
import Link from 'next/link'
import { CourseCard } from '@components/CourseCard'
import { FeaturedCourse } from '@components/FeaturedCourse'

const Courses: NextPage = () => {
  const figmaLink = 'https://www.figma.com/file/QtcY24XPryIPGxQLS9gwRo/Chainlink?node-id=71%3A456'
  return (
    <>
      <div tw="max-w-4xl m-auto">
        <section tw="px-4 py-8 text-lg">
          <div tw="flex justify-between items-end mb-4">
            <h2 tw="text-3xl font-bold font-heading">Featured</h2>
          </div>
          <FeaturedCourse
            key="key"
            courseTitle="Build a web3 app with solidity"
            excerpt="A 2-week project where you will learn some Solidity, write + deploy a smart
              contract to the blockchain, and..."
            image={sc}
          />
        </section>
        <section tw="px-4 py-8 text-lg">
          <div tw="flex justify-between items-end mb-4">
            <h2 tw="text-3xl font-bold font-heading">All Courses</h2>
          </div>
          <div tw="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((course) => (
              <CourseCard
                key={course}
                courseTitle="Build a web3 app with solidity"
                excerpt="A 2-week project where you will learn some Solidity, write + deploy a smart
              contract to the blockchain, and..."
                image={sc}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Courses
