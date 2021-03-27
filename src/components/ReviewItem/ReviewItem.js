import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        borderBottom:"1pc solid lightgray",
        marginBottom: '5px',
        paddingBottom: "5px",
        marginLeft: '150px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity = {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick={()=> props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;