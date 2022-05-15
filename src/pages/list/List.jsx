import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./list.css"
import React from 'react'
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
	const location = useLocation();
	console.log(location);
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);

	return (
		<div>
			<Navbar />
			<Header  type="list"/>
			<div className="c-hotels-container">
				<div className="c-hotels-wrapper">
					<div className="c-hotel__search">
						<h2 className="c-hotel__search-title">Search</h2>
						<div className="c-hotel__search-item">
						<label className="c-hotel__search-label">Destination</label>
							<input className="c-hotel__search-input" placeholder={destination} type="text" />
						</div>
						<div className="c-hotel__search-item">
							<label className="c-hotel__search-label">Check-in Date</label>
							<span className="c-hotel__search-input" onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"dd/MM/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
								onChange={(item) => setDate([item.selection])}
								minDate={new Date()}
								ranges={date}
								/>
							)}
						</div>
						<div className="c-hotel__search-item">
							<label className="c-hotel__search-label">Options</label>
							<div className="c-hotel__search-options">
								<div className="c-hotel__search-option-item">
								<span className="lsOptionText">
									Min price <small>per night</small>
								</span>
								<input type="number" className="c-hotel__search-options" />
								</div>
								<div className="c-hotel__search-option-item">
								<span className="lsOptionText">
									Max price <small>per night</small>
								</span>
								<input type="number" className="c-hotel__search-options" />
								</div>
								<div className="c-hotel__search-option-item">
								<span className="lsOptionText">Adult</span>
								<input 
									type="number"
									min={1}
									className="c-hotel__search-options"
									placeholder={options.adult}
								/>
								</div>
								<div className="c-hotel__search-option-item">
								<span className="lsOptionText">Children</span>
								<input
									type="number"
									min={0}
									className="c-hotel__search-options"
									placeholder={options.children}
								/>
								</div>
								<div className="c-hotel__search-option-item">
								<span className="lsOptionText">Room</span>
								<input
									type="number"
									min={1}
									className="c-hotel__search-options"
									placeholder={options.room}
								/>
								</div>
							</div>
							</div>
							<button className="c-hotel__search-button">Search</button>
					</div>
					<div className="c-hotel__lists">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div> 
	)
}

export default List
