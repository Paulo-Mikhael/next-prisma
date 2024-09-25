import Image from "next/image";
import styles from "./avatar.module.scss";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image width={32} height={32} src={imageSrc} alt={`Imagem de perfil do(a) ${name}`} />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  );
}