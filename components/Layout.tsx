import React, { PropsWithChildren, Suspense } from "react";
import MenuBar from "./menu/MenuBar";
import styles from "../styles/Layout.module.less";
import Loading from "./Loading";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.childrenLayout}>
        <Suspense fallback={<Loading/>}>

      {children}
        </Suspense>
      </div>
    <MenuBar/>
    </div>
  );
};
export default Layout;