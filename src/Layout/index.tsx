import { NextPage } from "next";
// Components
import Musicbar from "../components/Musicbar";
import Sidebar from "../components/Sidebar";
// Styles
import styles from "./layout.module.scss";

type LayoutType = {
  children: JSX.Element | React.ReactNode;
};

const Layout: NextPage<LayoutType> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.music_player}>
        <Musicbar />
      </div>
    </div>
  );
};

export default Layout;
