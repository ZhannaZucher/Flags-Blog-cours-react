import React, { useState } from "react"
import axios from "axios"

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState("")

  const dateFormater = (date) => {
    let formatedDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
    return formatedDate
  }

  //update edited post in database
  const handleEdit = () => {
    //const pour stocker le post edité
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      id: article.id,
    }
    //update du post dans le database
    axios
      .put("http://localhost:3004/articles/" + article.id, data)
      .then(setIsEditing(false))
  }

  //delete post
  const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article?")) {
      axios.delete("http://localhost:3004/articles/" + article.id)
      //on recharge la page pour maj des posts affichés:
      window.location.reload()
    }
  }

  return (
    <article
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Editer</button>
        )}

        <button onClick={() => handleDelete()}>Supprimer</button>
      </div>
    </article>
  )
}

export default Article
