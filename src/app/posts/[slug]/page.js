import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.scss";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
      },
    });

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error) {
    logger.error(`Falha ao obter post com o slug "${slug}". Erro: ${error}`);
  }

  redirect("/not-found");
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
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postContent}>{post.body}</p>
          <footer className={styles.postFooter}>
            <Avatar imageSrc={post.author.avatar} name={post.author.name} />
          </footer>
        </section>
      </article>
      <h1 className={styles.postTitle__code}>Código:</h1>
      <section className={styles.postCodeSection}>
        <div
          dangerouslySetInnerHTML={{ __html: post.markdown }}
          className={styles.postCode}
        />
      </section>
    </div>
  );
}
