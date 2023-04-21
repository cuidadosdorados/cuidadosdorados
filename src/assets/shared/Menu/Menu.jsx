import './Menu.css'
export function Menu(){
return(
    <>
<div className="container-nav">
<nav className="navbar">
  <div className="navbar-container container">
    <input type="checkbox" name id />
    <div className="hamburger-lines">
      <span className="line line1" />
      <span className="line line2" />
      <span className="line line3" />
    </div>
    <ul className="menu-items">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Testimonial</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
   <div className="logo"><img src="https://firebasestorage.googleapis.com/v0/b/cuidados-dorados.appspot.com/o/Pink%20Minimalist%20Home%20Care%20Services%20Logo.png?alt=media&token=db6e554b-0fcb-46df-a818-92f5f71714bb" alt="" /></div>
  </div>
</nav>

</div>


    </>
)
}