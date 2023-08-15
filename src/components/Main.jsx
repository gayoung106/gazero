import React from "react";
// wrapper 역할

const Main = ({ children }) => {
  return (
    <main id="main" role="main">
      {children}
    </main>
  );
};

export default Main;
