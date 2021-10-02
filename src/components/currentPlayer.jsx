import React from 'react';

import xIMG from '../assets/x.png';
import oIMG from '../assets/o.png';

export default function CPlayer({player}) {
    const Jogador=()=>{
        return(
          <button className='box -noBorder -current-img'>
            <img src={xIMG} className={`${player === 1 ? '-inv' : ''}`} alt='Marcado com X' />
            <img src={oIMG} className={`${player === 2 ? '-inv' : ''}`} alt='Marcado com O' />
          </button>
        )
    }

    return(
        <div className='current-player'>
            <h2 className='current-text'>Quem joga:</h2>
            {Jogador()}
        </div>
    );
}