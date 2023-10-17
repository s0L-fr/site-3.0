import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkParse from "remark-parse";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    // @ts-expect-error Remark
    .use(remarkParse)
    // @ts-expect-error Remark
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: false,
      theme:  "slack-dark"
    })
    .use(rehypeStringify)
    .process(markdown);
  console.log(String(result));
  return result.toString();
}
