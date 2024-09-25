import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  const date = new Date()
  const formatDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  if (!response.ok) {
    logger.error(`${formatDate} - Ops, alguma coisa deu errado :(`);
    return [];
  }

  logger.info(`${formatDate} - Posts obtidos com sucesso`);
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main className={styles.postsContainer}>
      {posts.map(post => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.paginationContainer}>
        {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
      </div>
    </main>
  );
}
