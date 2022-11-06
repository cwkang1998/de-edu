import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Button } from '@components/Button'
import tw from 'twin.macro'

interface FeaturedCourseProps {
  courseTitle: string
  image: StaticImageData
  excerpt: string
}

export const FeaturedCourse: FC<FeaturedCourseProps> = (props) => {
  return (
    <div tw="w-1/2 border rounded-lg shadow-md" key={props.courseTitle}>
      <div tw="w-full h-36 relative">
        <Image src={props.image} alt="course thumbnail" layout="fill" tw="rounded-lg" />
      </div>
      <div tw="p-4 flex flex-col gap-4">
        <p tw="text-base font-medium font-heading">{props.courseTitle}</p>
        <p>{props.excerpt}</p>
        <Button type="tertiary">Start Learning</Button>
      </div>
    </div>
  )
}
