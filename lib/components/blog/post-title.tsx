import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="m-auto mb-8 max-w-2xl text-3xl font-bold tracking-tighter leading-tight md:leading-none text-white text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
