import Button from "../Button";
import SearchGlass from "../SearchGlass";
import style from "./form.module.scss";

export default function Form() {
  return (
    <form action="/" className={style.formContainer}>
      <div className={style.formInput}>
        <SearchGlass />
        <input name="q" type="text" placeholder="Digite o que você procura" />
      </div>
      <Button>Buscar</Button>
    </form>
  );
}
