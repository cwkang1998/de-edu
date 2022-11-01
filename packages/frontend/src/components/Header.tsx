import { FC } from 'react'
import Link from 'next/link'
import 'twin.macro'

export const Header: FC = () => {
  return (
    <header tw="font-medium font-heading text-lg md:text-xl w-full border-b shadow">
      <nav tw="h-16 px-4 py-3 flex items-center justify-between max-w-4xl m-auto">
        <Link href="/">
          <a>De-Edu</a>
        </Link>
        <div tw="space-x-4">
          <Link href="/course">
            <a>Courses</a>
          </Link>
          <Link href="/creator">
            <a>Create Course</a>
          </Link>
          <Link href="/profile">
            <a>Sign In</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
