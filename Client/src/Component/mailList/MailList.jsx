import React from 'react'
import "./MailList.css"

function mailList() {
  return (
    <div className='emailList'>
        <div className="emailContainer">
            <div className="emailTitle">
                <h1>Save time, save money!
</h1>
                <p> Sign up and we'll send the best deals to you
</p>
            </div>
            <div className="emailInputContainer">
                <input type="text" className="emailInput" placeholder='Your Email address' />
                <button className="btn btn-primary">Subscribe</button>
            </div>
        </div>

      
    </div>
  )
}

export default mailList
