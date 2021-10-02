import React from 'react';

import xIMG from '../assets/x.png';
import oIMG from '../assets/o.png';

export default function xORo({linha, coluna, matrix, Jogar }) {
    return(
        <button className='box' onClick={(e)=>Jogar(linha, coluna)} >
            <img src={xIMG} className={`${matrix[linha-1][coluna-1] === 1 ? '-inv' : ''}`} alt='Marcado com X' />
            <img src={oIMG} className={`${matrix[linha-1][coluna-1] === 2 ? '-inv' : ''}`} alt='Marcado com O' />
        </button>     
    );
}