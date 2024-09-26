import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
      },
    });

    return { data: posts, prev: null, next: null };
  } catch (error) {
    logger.error(error);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.postsContainer}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.paginationContainer}>
        {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
      </div>
    </main>
  );
}
