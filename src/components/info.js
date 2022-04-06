import React from 'react'
import "../css/section.css";

export default function Info() {
  return (
    <div><section className="section-bottom">
    <div className="section-bottom__div">
      <h4>WBC Shop</h4>
      <p>Your shopping cart is empty</p>
      <button type="button" className="btn">
        Visit the shop
      </button>
    </div>
    <div className="section-bottom__div">
      <h4>Next event</h4>
      <h3>World Barsita Cup 2021</h3>
      <p>
        Copenhagen, Denmark <br/>
        Dates: 25th-27th August 2021 <br/>
        Theme: SENSORY
      </p>
      <button type="button" className="btn">
        Sign up now
      </button>
    </div>
    <div className="section-bottom__div">
      <h4>Scoreboard</h4>
      <h3>List of winners from last year</h3>
      <p>
        2021 - ? <br/>
        2021 - Sweden <br/>
        2021 - Germany <br/>
      </p>
      <button type="button" className="btn">
        Visit the shop
      </button>
    </div>
    </section></div>
  )
}
