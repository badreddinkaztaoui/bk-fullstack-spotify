import { NextPage } from "next";
import { Fragment } from "react";
import Gradient from "../components/Gradient";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Gradient
        color={273}
        image="/bk13.png"
        subtitle="Artist"
        title="Badr Kaztaoui"
        description="TBk13 Playlist. 1,161 likes13 songs, 49 min 9 sec"
        roundedImg={false}
      >
        <h2>Hello gradient</h2>
      </Gradient>
    </Fragment>
  );
};

export default Home;
