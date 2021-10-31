import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <NavLink exact to="/" className={s.link} activeClassName={s.current}>
          Phonebook
        </NavLink>
        <NavLink to="/counter" className={s.link} activeClassName={s.current}>
          Counter
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
