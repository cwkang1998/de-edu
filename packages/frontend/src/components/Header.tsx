import { useState, FC } from 'react'
import Link from 'next/link'
import tw from 'twin.macro'

export const Header: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navs = [
    { name: 'Courses', slug: '/course' },
    { name: 'Create Courses', slug: '/creator' },
    { name: 'Profile', slug: '/profile' },
  ]

  return (
    <header tw="font-medium font-heading text-lg md:text-xl w-full border-b shadow">
      <nav tw="h-16 px-4 py-3 flex items-center justify-between max-w-4xl m-auto">
        <Link href="/">
          <a>De-Edu</a>
        </Link>
        <div tw="space-x-4 hidden md:block">
          {navs.map((nav) => (
            <Link key={nav.slug} href={nav.slug}>
              <a>{nav.name}</a>
            </Link>
          ))}
        </div>
        <button tw="md:hidden" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>
      <div css={[tw`md:hidden`, isMobileNavOpen ? tw`block` : tw`hidden`]}>
        {navs.map((nav) => (
          <Link href={nav.slug} key={nav.slug}>
            <a>
              <div
                tw="flex hover:cursor-pointer px-3 py-2"
                onClick={() => setIsMobileNavOpen(false)}
              >
                {nav.name}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </header>
  )
}
