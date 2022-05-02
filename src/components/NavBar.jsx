import '../styles/Navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
        <div className="nav__left">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-1a6eb5e8350bc146f093a8771ba2f077_screen.jpg?ts=1612430062" alt="" />

            <div className="nav__links">
                <span>Home</span>
                <span>About</span>
                <span>Support</span>
                <span>Contact Us</span>
            </div>

        </div>

        <div className="nav__right">
            <button className='btn'>Contact Us</button>
        </div>

    </nav>
  )
}

export default NavBar