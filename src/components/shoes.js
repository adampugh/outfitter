import React from 'react';

import Question from '../images/question.png';

import NikeVapormax2 from '../images/shoes/nikevapormax2.jpg';
import NikeVapormaxJapan from '../images/shoes/nikevapormaxjapan.jpg';

// aftershave
import CHMenPrive from '../images/aftershave/chmenprive.jpg';

const Shoes = () => (
    <div className="col">
        <h1>靴</h1>
        <div className="row-4">
            <div>
                <img src={NikeVapormax2} alt="Nike Vapormax 2"/>
                <p>Nike Vapormax 2</p>
            </div>
            <div>
                <img src={NikeVapormaxJapan} alt="Nike Vapormax 97 Japan"/>
                <p>Nike Vapormax 97 Japan</p>
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
        <div className="row-4">
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
            <div>
                <img src={Question} alt="???"/>
                <p>???</p>
            </div>
        </div>
        <h1>芳香</h1>
        <div className="row-4">
            <div>
                <img src={CHMenPrive} alt="CH Men Prive"/>
                <p>CH Men Prive</p>
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

export default Shoes;
