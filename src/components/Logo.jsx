const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise img sont accessibles dans public, comme si on était dans index.html déjà*/}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  )
}

export default Logo
