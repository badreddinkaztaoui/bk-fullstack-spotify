import { NextPage } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
// Styles
import styles from "./sidebar.module.scss";
// Local Data
import { navMenu, musicMenu } from "./data";

const Sidebar: NextPage = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <NextImage src="/logo.png" width={150} height={45} />
      </div>
      <ul className={styles.nav_list}>
        {navMenu.map((link) => (
          <li key={link.name}>
            <NextLink href={link.route}>
              <a className={styles.nav_list_link}>
                <i>{link.icon}</i>
                <span>{link.name}</span>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
      <ul className={styles.music_list}>
        {musicMenu.map((link) => (
          <li key={link.name}>
            <NextLink href={link.route}>
              <a className={styles.music_list_link}>
                <i>{link.icon}</i>
                <span>{link.name}</span>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
      <ul className={styles.playlists}>{/** User playlists goes here */}</ul>
    </div>
  );
};

export default Sidebar;
