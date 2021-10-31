import { connect } from 'react-redux';
import Value from './Value';
import Controls from './Controls';
import * as actions from '../../redux/counter/counter-actions';
import s from './Counter.module.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className={s.section}>
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      >
        <Value value={value} />
      </Controls>
    </div>
  );
}

// Статические пропы из state
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

// Динамические методы
const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
