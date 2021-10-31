import s from './Counter.module.css';

export default function Controls({ step, onIncrement, onDecrement, children }) {
  return (
    <>
      <button type="button" onClick={onDecrement} className={s.button}>
        -{step}
      </button>
      {children}
      <button type="button" onClick={onIncrement} className={s.button}>
        +{step}
      </button>
    </>
  );
}
