import Image from "next/image";
import styles from "./cardpost.module.scss";
import { Avatar } from "../Avatar";
import { incrementThumbsUp } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";

export const CardPost = ({ post }) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <figure>
          <Image
            className={styles.postImage}
            width={438}
            height={183}
            src={post.cover}
            alt={`Capa do post de título: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.postBody}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <a href={`/posts/${post.slug}`} className={styles.link}>
          Ver detalhes
        </a>
      </section>
      <footer className={styles.postFooter}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
          </form>
          <p>{post.likes}</p>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
