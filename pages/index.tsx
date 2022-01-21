import Head from "next/head";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Quoted</title>
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      {/* Main */}
      <Main />
    </div>
  );
}
