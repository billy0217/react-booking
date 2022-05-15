import "./header.css"
import { FaBed, FaTaxi, FaCar, FaPlane, FaCalendarDay, FaMale } from 'react-icons/fa';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({ type }) => {

	const [destination, setDestination] = useState("")
	
	const [openOptions, setOpenOptions] = useState(false);
	const [options , setOptions] = useState({
		adult: 1,
		children: 0,
		room:1
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	const [openDate , setOpenDate] = useState(false);
	const [date, setDateState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const navigate = useNavigate();

	const handleSearch = () => {
		navigate("/hotels", {state: {destination, date, options}})
	}

	return (
		<div className="c-header">
			<div className="c-header-container">
				<div className="c-header-list">
					<div className="c-header-list__item active">
						<FaBed/>
						<span>Stay</span>
					</div>
					<div className="c-header-list__item">
						<FaPlane/>
						<span>Flights</span>
					</div>
					<div className="c-header-list__item">
						<FaCar/>
						<span>Car rentals</span>
					</div>
					<div className="c-header-list__item">
						<FaBed/>
						<span>Attractions</span>
					</div>
					<div className="c-header-list__item">
						<FaTaxi/>
						<span>Airport Taxis</span>
					</div>
				</div>
			{	type !== "list" &&
				<>
				<h1 className="c-header__title">Stay more, save more. It’s Genius</h1>
				<p className="c-header__description">Enjoy discounts and travel rewards at hundreds of thousands of properties worldwide</p>	
				<button className="c-header__button">Sign in / Register</button>
				<div className="c-header-search">
					<div className="c-header-search__item">
						<FaBed className="c-header-icon" />
						<input 
							className="c-header-search__input"
							type="text"
							placeholder="Where are you going?"
							onChange={ (e) => setDestination(e.target.value)}						
						/>
					</div>
					<div className="c-header-search__item">
						<FaCalendarDay className="c-header-icon" />
						<span 
							className="c-header-search__text"
							onClick={()=>setOpenDate(!openDate)}
						>
							{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
						</span>
						{openDate && <DateRange
							editableDateInputs={true}
							onChange={item => setDateState([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={date}
							className="date"
						/>}
					</div>
					<div className="c-header-search__item">
						<FaMale className="c-header-icon" />
						<span
							onClick={() => setOpenOptions(!openOptions)}
							className="c-header-search__text"
							>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
							{openOptions && (
							<div className="options">
								<div className="optionItem">
								<span className="optionText">Adult</span>
								<div className="optionCounter">
									<button
										disabled={options.adult <= 1}
										className="optionCounterButton"
										onClick={() => handleOption("adult", "d")}
										aria-label="subtract adult value"
									>
									-
									</button>
									<span className="optionCounterNumber optionAdultValue">
										{options.adult}
									</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("adult", "i")}
										aria-label="add adult value"
									>
									+
									</button>
								</div>
								</div>
								<div className="optionItem">
								<span className="optionText">Children</span>
								<div className="optionCounter">
									<button
										disabled={options.children <= 0}
										className="optionCounterButton"
										onClick={() => handleOption("children", "d")}
									>
									-
									</button>
									<span className="optionCounterNumber">
										{options.children}
									</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("children", "i")}
									>
									+
									</button>
								</div>
								</div>
								<div className="optionItem">
								<span className="optionText">Room</span>
								<div className="optionCounter">
									<button
										disabled={options.room <= 1}
										className="optionCounterButton"
										onClick={() => handleOption("room", "d")}
									>
									-
									</button>
									<span className="optionCounterNumber">
										{options.room}
									</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("room", "i")}
									>
									+
									</button>
								</div>
								</div>
							</div>
							)}
					</div>
					<div className="c-header-search__item">
						<button className="c-header-search__btn" onClick={handleSearch}>Search</button>
					</div>
				</div>
				</>
			}
			</div>
		</div>
	)
}

export default Header