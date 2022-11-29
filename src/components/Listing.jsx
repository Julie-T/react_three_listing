import React from 'react'
import PropTypes from 'prop-types'

import '../css/main.css'

const Listing = (props) => {
    console.log(props.items)


    
  return (
    <>
    {/* {showItem} */}
    {/* {props.items.map(d => console.log(d))} */}
    {props.items.map( elem => {
            return <div className="item" key={elem.listing_id}>
                    <div className="item-image">
                        <a href={elem.url}>
                            <img src={elem.MainImage ? elem.MainImage.url_570xN : "#"} alt='#'/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{elem.title}</p>
                        <p className="item-price">{(elem.currency_code === "GBP" && (`${elem.price} ${elem.currency_code}`)) || 
                        (elem.currency_code === "EUR" && `${elem.price} €`) || 
                        (elem.currency_code === "USD" && `${elem.price} $`)}</p>
                        <p className={ (elem.quantity <= 10 && 'item-quantity level-medium level-low') || 
                        (elem.quantity <= 20 && 'item-quantity level-medium level-medium') || 
                        (elem.quantity > 20 && 'item-quantity level-medium level-high') }>{elem.quantity} left</p>
                    </div>
                </div>
     } )}
    </>
  )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {}

export default Listing