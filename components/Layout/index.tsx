import React, { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Scratches from "./Scratches";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Scratches />
      <Footer />
    </>
  );
}

export default Layout;
