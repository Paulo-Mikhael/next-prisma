"use client";

import { useEffect } from "react";
import InfoPage from "@/components/InfoPage";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <InfoPage
      infoMessage="Opa! Um erro ocorreu."
      infoSubMessage="Não conseguimos carregar a página, volte para seguir navegando."
      infoImageUrl="/500.png"
    />
  );
}
