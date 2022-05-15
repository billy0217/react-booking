import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
	const [year , setYear] = useState();

	const getYear = () =>  setYear(new Date().getFullYear())

	useEffect( () => {
		getYear();
	},[]);
	return (
		<div className="c-footer">
			<div className="c-footer__nav-wrapper">
				<ul className="c-footer__nav-items">
					<li className="c-footer-nav-itme">Countries</li>
					<li className="c-footer-nav-itme">Regions</li>
					<li className="c-footer-nav-itme">Cities</li>
					<li className="c-footer-nav-itme">Districts</li>
					<li className="c-footer-nav-itme">Airports</li>
					<li className="c-footer-nav-itme">Hotels</li>
				</ul>
				<ul className="c-footer__nav-items">
					<li className="c-footer-nav-itme">Homes </li>
					<li className="c-footer-nav-itme">Apartments </li>
					<li className="c-footer-nav-itme">Resorts </li>
					<li className="c-footer-nav-itme">Villas</li>
					<li className="c-footer-nav-itme">Hostels</li>
					<li className="c-footer-nav-itme">Guest houses</li>
				</ul>
				<ul className="c-footer__nav-items">
					<li className="c-footer-nav-itme">Unique places to stay </li>
					<li className="c-footer-nav-itme">Reviews</li>
					<li className="c-footer-nav-itme">Unpacked: Travel articles </li>
					<li className="c-footer-nav-itme">Travel communities </li>
					<li className="c-footer-nav-itme">Seasonal and holiday deals </li>
				</ul>
				<ul className="c-footer__nav-items">
					<li className="c-footer-nav-itme">Car rental </li>
					<li className="c-footer-nav-itme">Flight Finder</li>
					<li className="c-footer-nav-itme">Restaurant reservations </li>
					<li className="c-footer-nav-itme">Travel Agents </li>
				</ul>
				<ul className="c-footer__nav-items">
					<li className="c-footer-nav-itme">Curtomer Service</li>
					<li className="c-footer-nav-itme">Partner Help</li>
					<li className="c-footer-nav-itme">Careers</li>
					<li className="c-footer-nav-itme">Sustainability</li>
					<li className="c-footer-nav-itme">Press center</li>
					<li className="c-footer-nav-itme">Safety Resource Center</li>
					<li className="c-footer-nav-itme">Investor relations</li>
					<li className="c-footer-nav-itme">Terms &amp; conditions</li>
				</ul>
			</div>
			<div className="fText">Copyright © {year} Lamabooking.</div>
		</div>
	);
};

export default Footer;