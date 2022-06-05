import React, { useEffect } from "react";

interface IProps {
  children: React.ReactNode;
  location: any;
}

// User has switched back to the tab
const onFocus = () => {
  console.log("Tab is in focus");
};

// User has switched away from the tab
const onBlur = () => {
  console.log("Tab is blurred");
};

const Layout: React.FC<IProps> = ({ children, location }) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    onFocus();
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  useEffect(() => {
    let currentPage = capitalizeFirstLetter(location.pathname);
    document.title = currentPage + " | BetterInvoice";
  }, [location.pathname]);
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
