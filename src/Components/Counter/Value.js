import s from './Counter.module.css';

export default function Value({ value }) {
  return <span className={s.text}>{value}</span>;
}
