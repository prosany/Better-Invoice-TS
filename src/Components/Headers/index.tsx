import React from "react";
import styles from "Styles/header.module.scss";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className={styles.header}>Header</h1>
    </React.Fragment>
  );
};

export default Header;
