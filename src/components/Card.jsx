import React from "react"

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        {/* toLocaleString() pour le séparateur de milliers */}
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  )
}

export default Card
