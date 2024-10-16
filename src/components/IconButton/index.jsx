import styles from "./iconButton.module.scss";

export const IconButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
