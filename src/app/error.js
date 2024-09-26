"use client";

import Image from "next/image";
import { useEffect } from "react";
import style from "./error.module.scss";
import { ArrowBack } from "@/components/ArrowBack";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={style.errorContainer}>
      <Image width={656} height={367} src="/500.png" />
      <h2 className={style.errorMessage}>Opa! Um erro ocorreu.</h2>
      <p className={style.errorSubMessage}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <div className={style.errorLinkContainer}>
        <a className={style.errorLink} href="">
          Voltar ao feed
        </a>
        <ArrowBack />
      </div>
    </div>
  );
}
