import React from 'react'

interface DataProps {
  children: React.ReactNode
}

const Box = ({ children }: DataProps): JSX.Element => <div>{children}</div>

export default Box
