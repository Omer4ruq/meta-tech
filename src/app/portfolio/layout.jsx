import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-8xl mt-5 mb-5">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
