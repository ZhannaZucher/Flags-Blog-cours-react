import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"

const Countries = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // on fetche les données des pays
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
  }, [])

  return (
    <div className="countries">
      <ul>
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  )
}

export default Countries
