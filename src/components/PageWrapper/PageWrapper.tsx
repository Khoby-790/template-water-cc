import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const PageWrapper = ({ children }: Props) => {
    return (
        <div className="flex flex-1  h-full">
            {children}
        </div>
    )
}

export default PageWrapper
