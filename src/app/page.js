import { CardPost } from "@/components/CardPost";
import styles from "./page.module.scss";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page, searchTerm) {
  try {
    const where = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;
    const prev = page > 1 ? page - 1 : null;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      skip,
      take: perPage,
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    });

    return { data: posts, prev, next };
  } catch (error) {
    logger.error(error);
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchTerm = searchParams?.q;
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className={styles.postsContainer}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.paginationContainer}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página Anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Página Anterior
          </Link>
        )}
      </div>
    </main>
  );
}
