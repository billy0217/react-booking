import './navbar.css'

const Navbar = () => {
	return (
		<div className="c-navbar">
			<div className="c-navbar-container">
				<span className="logo">Booking</span>
				<div className="c-nav__items">
					<button className="c-nav__item">Register</button>
					<button className="c-nav__item">Login</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar;