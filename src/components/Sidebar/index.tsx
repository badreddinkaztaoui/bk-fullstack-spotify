import { NextPage } from "next";
import NextImage from "next/image";
import Link from "next/link";
// Styles
import styles from "./sidebar.module.scss";
// Local Data
import { navMenu, musicMenu } from "./data";
import { usePlaylist } from "../../hooks";

const Sidebar: NextPage = () => {
  const { playlist } = usePlaylist();

  console.log(playlist);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <NextImage src="/logo.png" width={150} height={45} />
      </div>
      <ul className={styles.nav_list}>
        {navMenu.map((link) => (
          <li key={link.name}>
            <Link href={link.route}>
              <a className={styles.nav_list_link}>
                <i>{link.icon}</i>
                <span>{link.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.music_list}>
        {musicMenu.map((link) => (
          <li key={link.name}>
            <Link href={link.route}>
              <a className={styles.music_list_link}>
                <i>{link.icon}</i>
                <span>{link.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.playlists}>
        {playlist.map((plist) => (
          <li key={plist.id}>
            <Link href="/">
              <a className={styles.playlists_link}>
                <span>{plist.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
