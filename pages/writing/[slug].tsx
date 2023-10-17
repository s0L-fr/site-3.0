import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../lib/components/container";
import PostBody from "../../lib/components/blog/post-body";
import Header from "../../lib/components/blog/header";
import PostHeader from "../../lib/components/blog/post-header";
import Layout from "../../lib/components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/utils/api";
import PostTitle from "../../lib/components/blog/post-title";
import { CMS_NAME } from "../../lib/utils/constants";
import markdownToHtml from "../../lib/utils/markdown/markdownToHtml";
import type PostType from "../../lib/interfaces/post";
import Head from 'next/head';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      <Container className="overflow-scroll hide-scrollbar h-screen">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {post.ogImage?.url && <meta property="og:image" content={post.ogImage.url} />}
        </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
