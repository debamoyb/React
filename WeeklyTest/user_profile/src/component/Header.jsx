function Header() {
    let options={
        textDecoration:"none",
        color:"white"
    }
  return (
   <div style={{backgroundColor:"black"}}>
    <header style={{height:"4rem",display:"flex",justifyContent:"flex-end",gap:"2rem",marginRight:"5rem",alignItems:"center"}}>
        <a style={options} href="#">Home</a>
        <a style={options} href="#">Products</a>
        <a style={options} href="#">Users</a>
        <a style={options} href="#">Contact</a>
    </header>

   </div>
  )
}
export default Header