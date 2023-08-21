import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* ajout de la classe nav-active au lien actif */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>blog</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
