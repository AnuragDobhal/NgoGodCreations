import React, { useState } from 'react'
import BankDetails from './BankDetails'
import './Donation.css'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Donation() {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_iexDNrUaOUryAG' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Gods Creation',
			description: 'Thank you for this kind step',
			image: 'http://localhost:5000/mask.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: '',
				phone_number: ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
    <>
 
    <aside className="silowp-showcase site-main">
     
	<div className="container_donation">
		<div className="row">
			<div className="col-xs-12 textcenter-xs flex-xs-middle">
				<h1 className="entry-title">All the Donated money is used for the poor clildren</h1>

        <button
					className="more-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Donate NOw
				</button>
			</div>
		</div>
	</div>
</aside>

<BankDetails/>


    </>
	)
}

export default Donation