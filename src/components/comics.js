import React from 'react';

import Question from '../images/question.png';

import WebOfSpiderman1 from '../images/comics/webofspiderman1.jpg';
import Spawn1 from '../images/comics/spawn1.jpg';

const Comics = () => (
    <div className="col">
        <h1>コミック</h1>
        <div className="row-4">
            <div>
                <img src={WebOfSpiderman1} alt="Web of Spider-Man 1"/>
                <p>Web of Spider-Man 1</p>
            </div>
            <div>
                <img src={Spawn1} alt="Spawn 1"/>
                <p>Spawn 1</p>
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
    </div>
);

export default Comics;
