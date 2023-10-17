import Layout from "../lib/components/layout";
import { getAllPosts } from "../lib/utils/api";
import Head from "next/head";
import Home from "../lib/components/home/home";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`jñāna!`}</title>
        </Head>
        <Home />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
