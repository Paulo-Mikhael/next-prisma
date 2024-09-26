import SearchGlass from "../SearchGlass";
import style from "./form.module.scss";

export default function Form() {
  return (
    <form className={style.formContainer}>
      <div className={style.formInput}>
        <SearchGlass />
        <input type="text" placeholder="Digite o que você procura" />
      </div>
      <button className={style.formButton}>Buscar</button>
    </form>
  );
}
