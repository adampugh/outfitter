import React from 'react'

const WishlistItem = ({ img, title }) => (
    <div className="wishlistItem">
        <img src={img} alt={title} />
        <p>{title}</p>
    </div>
);

export default WishlistItem
