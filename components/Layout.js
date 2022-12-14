import React from "react";
import Head from "next/head";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Cars</title>
      </Head>
      <main className="main-container">{children}</main>
    </div>
  );
};

export default Layout;
