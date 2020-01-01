import React from 'react';

import Question from '../images/question.png';

import HMxMoschino from '../images/hoodies/hmxmoschino.jpg';

import FTPBear from '../images/sweaters/ftpbear.jpg';
import TNFxDSM from '../images/sweaters/tnfxdsm.jpg';

const Tops = () => (
    <div className="col">
        <h1>パーカー</h1>
        <div className="row-4">
            <div>
                <img src={HMxMoschino} alt="H&M x Moschino"/>
                <p>H&M x Moschino</p>
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
        <h1>セーター</h1>
        <div className="row-4">
            <div>
                <img src={FTPBear} alt="FTP Bear"/>
                <p>FTP Bear</p>
            </div>
            <div>
                <img src={TNFxDSM} alt="TNFxDSM"/>
                <p>Dover Street Market x The North Face</p>
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
        <h1>上着</h1>
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

export default Tops;