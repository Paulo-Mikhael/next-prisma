import InfoPage from "@/components/InfoPage";

export default function NotFound() {
  return (
    <InfoPage
      infoMessage="OPS! Página não encontrada."
      infoSubMessage="Você pode voltar ao feed e continuar buscando projetos incríveis!"
      infoImageUrl="/404.png"
    />
  );
}
