import React, { PropsWithChildren, Suspense } from 'react'
import MenuBar from './menu/MenuBar'
import styles from '../styles/Layout.module.less'
import Loading from './Loading'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Suspense fallback={<Loading />}>{children}</Suspense>
    )
}
export default Layout
