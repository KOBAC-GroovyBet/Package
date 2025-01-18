import s from "./layout.module.scss";

export default function Footer() {
  return (
    <div className={s.footer}>
      <p className={s.content}>KOBAC - Team E</p>
      <p className={s.content}>GroovyBet</p>
    </div>
  );
}
