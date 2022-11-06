import type { NextPage } from 'next'
import Image from 'next/image'
import tw from 'twin.macro'
import sc from 'public/images/sc.webp'
import { Button } from '@components/Button'

const Courses: NextPage = () => {
  const figmaLink = 'https://www.figma.com/file/QtcY24XPryIPGxQLS9gwRo/Chainlink?node-id=71%3A456'
  return (
    <>
      <div tw="max-w-4xl m-auto">
        x
        <div tw="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((course) => (
            <div tw="border rounded-lg shadow-md" key={course}>
              <div tw="w-full h-36 relative">
                <Image src={sc} alt="course thumbnail" layout="fill" tw="rounded-lg" />
              </div>
              <div tw="p-4 flex flex-col gap-4">
                <p tw="text-base font-medium font-heading">Build a web3 app with solidity</p>
                <p>
                  A 2-week project where you will learn some Solidity, write + deploy a smart
                  contract to the blockchain, and...
                </p>
                <Button type="tertiary">Start Learning</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses
