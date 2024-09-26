import style from "./button.module.scss";

export default function Button({ children }) {
  return <button className={style.button}>{children}</button>;
}
