import React, { PropsWithChildren, Suspense } from 'react'
import Loading from './Loading'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Suspense fallback={<Loading />}>{children}</Suspense>
    )
}
export default Layout
