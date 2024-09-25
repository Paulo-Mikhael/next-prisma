import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.scss";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";

async function getPostBySlug(slug) {
  const response = await fetch(`http://localhost:3042/posts?slug=${slug}`)
  const date = new Date()
  const formatDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  if (!response.ok) {
    logger.error(`${formatDate} - Ops, alguma coisa deu errado :(`);
    return {};
  }

  logger.info(`${formatDate} - Post ${slug} obtido com sucesso`);
  const data = await response.json();
  if (!data.length === 0) {
    return {}
  }

  const post = data[0]

  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

export default async function PagePost({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <article className={styles.postContainer}>
        <header className={styles.postImageContainer}>
          <figure>
            <Image src={post.cover} width={961} height={300} />
          </figure>
        </header>
        <section className={styles.postSection}>
          <h1 className={styles.postTitle}>
            {post.title}
          </h1>
          <p className={styles.postContent}>
            {post.body}
          </p>
          <footer className={styles.postFooter}>
            <Avatar imageSrc={post.author.avatar} name={post.author.name} />
          </footer>
        </section>
      </article>
      <h1 className={styles.postTitle__code}>
        Código:
      </h1>
      <section className={styles.postCodeSection}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} className={styles.postCode} />
      </section>
    </div>
  );
}