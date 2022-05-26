import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { Fragment } from "react";
import Gradient from "../components/Gradient";
import prisma from "../lib/prisma";

const Home = () => {
  // console.log(artists);

  return (
    <Fragment>
      <Gradient
        color={150}
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const artists = await prisma.artist.findMany({});

//   return {
//     props: { artists },
//   };
// };

export default Home;
