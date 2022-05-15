import React from 'react'
import "./featured.css"

const Featured = () => {
	return (
		<div className='c-featured'>
			<div className="c-featured__item">
				<img 
					className="c-featured__item-img"
					src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
					alt=""
				/>
				<div className="c-featured__item-info">
					<h3 className="c-featured__item-title">Dublin</h3>
					<p className="c-featured__item-meta">123 properties</p>
				</div>
			</div>

			<div className="c-featured__item">
				<img 
					className="c-featured__item-img"
					src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
					alt=""
				/>
				<div className="c-featured__item-info">
					<h3 className="c-featured__item-title">Dublin</h3>
					<p className="c-featured__item-meta">123 properties</p>
				</div>
				
			</div>

			<div className="c-featured__item">
				<img 
					className="c-featured__item-img"
					src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
					alt=""
				/>
				<div className="c-featured__item-info">
					<h3 className="c-featured__item-title">Dublin</h3>
					<p className="c-featured__item-meta">123 properties</p>
				</div>
				
			</div>
		</div>
	)
}
export default Featured