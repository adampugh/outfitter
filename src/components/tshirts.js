import React from 'react';

import Question from '../images/question.png';

import PalaceWiseUp from '../images/tshirts/palacewiseup.jpg';

import SupremexVampirella from '../images/tshirts/supremexvampirella.jpg';
import SupremexHellraiser from '../images/tshirts/supremexhellraiser.jpg';
import SupremexRubber from '../images/tshirts/supremexrubber.jpg';

import KawsxUniqloxSeasame from '../images/tshirts/kawsxuniqloxseasame.jpg';
import ChinatownMarketDesigner from '../images/tshirts/chinatownmarketdesigner.jpg';
import TimberlandxMastermind from '../images/tshirts/timberlandxmastermind.png';

const Tshirts = () => (
    <div className="col">
        <h1>Ｔシャツ</h1>
        <div className="row-4">
            <div>
                <img src={SupremexVampirella} alt="Supreme x Vampirella"/>
                <p>Supreme x Vampirella</p>
            </div>
            <div>
                <img src={SupremexHellraiser} alt="Supreme x Hellraiser"/>
                <p>Supreme x Hellraiser</p>
            </div>
            <div>
                <img src={SupremexRubber} alt="Supreme x Rubber"/>
                <p>Supreme x Rubber</p>
            </div>
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>            
        </div>
        <div className="row-4">
            <div>
                <img src={KawsxUniqloxSeasame} alt="Uniqlo x Kaws"/>
                <p>Uniqlo x Kaws</p>
            </div>
            <div>
                <img src={ChinatownMarketDesigner} alt="Chinatown Market Designer"/>
                <p>Chinatown Market</p>
            </div>
            <div>
                <img src={TimberlandxMastermind} alt="Timberland x Mastermind"/>
                <p>Timberland x Mastermind</p>
            </div>
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>
        </div>
        <div className="row-4">
            <div>
                <img src={PalaceWiseUp} alt="Palace Wise Up"/>
                <p>Palace Wise Up</p>
            </div>
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>
        </div>
    </div>
);

export default Tshirts;