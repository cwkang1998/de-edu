import { FC } from 'react'
import tw from 'twin.macro'

interface buttonParams {
  type: 'primary' | 'secondary' | 'tertiary'
  children: any
}

export const Button: FC<buttonParams> = ({ type, children }) => {
  const types = {
    primary: tw`bg-green-600 text-white`,
    secondary: tw`border-2 border-green-600 text-green-600`,
    tertiary: tw`border`,
  }

  return <button css={[tw`px-4 py-2 text-lg font-medium rounded`, types[type]]}>{children}</button>
}
