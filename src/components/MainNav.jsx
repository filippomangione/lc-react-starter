import { Link, NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <Link to="/"> [Home Page]</Link>
      <NavLink to="/prodotti"> [Prodotti] </NavLink>
      <NavLink to="/contatti"> [Contatti] </NavLink>
    </nav>
  );
}
