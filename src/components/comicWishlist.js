import React from 'react';

import WishlistItem from './wishlistItem';

import Spawn285 from '../images/comics/spawn285.jpg';
import BatmanWhoLaughs2 from '../images/comics/batmanwholaughs2.jpg';
import DarkNightsMetal2 from '../images/comics/darknightsmetal2.jpg';
import AmazingSpiderman252 from '../images/comics/amazingspiderman252.jpg';

const wishlistItems = [
    { title: 'Spawn #285', img: Spawn285 },
    { title: 'Batman Who Laughs #2 Dell\'Otto Virgin', img: BatmanWhoLaughs2 },
    { title: 'Dark Nights Metal #2 Mattina', img: DarkNightsMetal2 },
    { title: 'Amazing Spider-Man #252', img: AmazingSpiderman252 }
]

const ComicWishlist = () => (
    <div className="wishlistWrapper">
        <h1>ウィッシュリスト</h1>
        <div className="wishlist">
            { wishlistItems.map(({ img, title }) => <WishlistItem key={title} img={img} title={title} />) }
        </div>
    </div>
)

export default ComicWishlist;
