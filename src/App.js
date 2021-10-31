import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Phonebook from './views/Phonebook';

function App() {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Phonebook />
        </Route>

        <Route path="/counter" exact>
          <Counter />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
