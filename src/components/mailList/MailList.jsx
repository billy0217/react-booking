import "./mailList.css"

const MailList = () => {
	return (
		<div className="c-mail">
			<h3 className="c-mail__title">Save time, save money!</h3>
			<span className="c-mail__desc">Sign up and we'll send the best deals to you</span>
			<div className="c-mail_form">
				<input className="c-mail__form-input" type="text" placeholder="Your Email" />
				<button className="c-mail__form-btn">Subscribe</button>
			</div>
		</div>
	)
}

export default MailList