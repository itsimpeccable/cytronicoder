import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import Header from "./components/sections/Header";
import Profile from "./components/sections/Profile";
import Widgets from "./components/sections/Widgets";

import Icon from "@hackclub/icons";

export default function Home() {
  // check if hack mode is enabled
  const [isHack, setIsHack] = useState(false);

  const toggleHack = () => {
    setIsHack(!isHack);
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (isHack) {
      document.body.style.backgroundColor = "#ec3750";
      document.getElementsByClassName(styles.hack)[0].style.backgroundColor =
        "#000";
    } else {
      document.body.style.backgroundColor = prefersDarkScheme.matches
        ? "#000"
        : "#fff";

      document.getElementsByClassName(styles.hack)[0].style.backgroundColor =
        "#ec3750";
    }
  }, [isHack]);

  return (
    <div className={styles.container}>
      <Header />

      <Icon
        glyph="clubs"
        size={64}
        onClick={toggleHack}
        className={styles.hack}
      />

      <main className={styles.main}>
        <Profile isHack={isHack} />
        <Widgets isHack={isHack} />
      </main>
    </div>
  );
}