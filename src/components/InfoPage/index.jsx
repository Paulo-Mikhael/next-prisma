import Image from "next/image";
import style from "./info.module.scss";
import { ArrowBack } from "@/components/ArrowBack";
import Link from "next/link";

export default function InfoPage({
  infoMessage,
  infoSubMessage,
  infoImageUrl,
}) {
  return (
    <div className={style.errorContainer}>
      <Image width={656} height={367} src={infoImageUrl} />
      <h2 className={style.errorMessage}>{infoMessage}</h2>
      <p className={style.errorSubMessage}>{infoSubMessage}</p>
      <div className={style.errorLinkContainer}>
        <Link href="/" className={style.errorLink}>
          Voltar ao feed
        </Link>
        <ArrowBack />
      </div>
    </div>
  );
}
