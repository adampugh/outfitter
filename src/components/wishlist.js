import React from 'react';

import WishlistItem from './wishlistItem';

import NikeSacai from '../images/wishlist/nikesacai.jpg';
import SupremeGetSome from '../images/wishlist/supremegetsome.jpg';
import SupremeLiquidSwords from '../images/wishlist/supremeliquidswords.jpg';
import PalaceRipped from '../images/wishlist/palaceripped.jpg';


const wishlistItems = [
    { title: "nike x sacai", img: NikeSacai },
    { title: "supreme liquid swords", img: SupremeLiquidSwords },
    { title: "supreme get some", img: SupremeGetSome },
    { title: "palace ripped", img: PalaceRipped },
]


const Wishlist = () => (
    <div className="wishlistWrapper">
        <h1>ウィッシュリスト</h1>
        <div className="wishlist">
            { wishlistItems.map(({ img, title }) => <WishlistItem key={title} img={img} title={title} />) }
        </div>
    </div>
);

export default Wishlist;
