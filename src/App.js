import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import Counter from './Components/Counter';

function App() {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path="/" exact>
          <h4>
            Дана сторінка знаходиться у процесі розробки... Вибачте за тимчасові
            незручності.
          </h4>
        </Route>

        <Route path="/counter" exact>
          <Counter />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
