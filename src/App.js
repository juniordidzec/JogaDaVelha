import React, {useState} from 'react';
import './App.css';
import xIMG from './assets/x.png';
import oIMG from './assets/o.png'

export default function App() {
  const [matrix, setMatrix] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [player, setPlayer] = useState(Math.floor(Math.random() * 10) > 4 ? 2 : 1);
  const [win, setWin] = useState(false);

  const zerar=()=>{
    setMatrix([['', '', ''], ['', '', ''], ['', '', '']]);
    setPlayer(Math.floor(Math.random() * 10) > 4 ? 2 : 1);
    document.querySelector('.wrapper').classList.remove("-win1");
    document.querySelector('.wrapper').classList.remove("-win2");
    document.querySelector('.wrapper').classList.remove("-win3");
    document.querySelector('.wrapper').classList.remove("-win4");
    document.querySelector('.wrapper').classList.remove("-win5");
    document.querySelector('.wrapper').classList.remove("-win6");
    document.querySelector('.wrapper').classList.remove("-win7");
    document.querySelector('.wrapper').classList.remove("-win8");
  }
  
  const Jogar=(linha, coluna)=>{
    let jogador = player;

    if (jogador === 1) {
      let copy = [...matrix];
      if(copy[linha-1][coluna-1] === ''){
        copy[linha-1][coluna-1] = 1;
        setMatrix(copy);
        Ganhar();
        setPlayer(player === 1 ? 2 : 1);
      }
    }

    if (jogador === 2) {
      let copy = [...matrix];
      if(copy[linha-1][coluna-1] === ''){
        copy[linha-1][coluna-1] = 2;
        setMatrix(copy);
        Ganhar();
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  }

  const Btn=(linha, coluna)=>{
    return(
    <button className="box" onClick={(e)=>Jogar(linha, coluna)} >
      <img src={xIMG} className={`${matrix[linha-1][coluna-1] === 1 ? '-inv' : ''}`} alt="Marcado com X" />
      <img src={oIMG} className={`${matrix[linha-1][coluna-1] === 2 ? '-inv' : ''}`} alt="Marcado com O" />
    </button>     
    )
  }

  const Jogador=()=>{
    return(
      <button className="box">
        <img src={xIMG} className={`${player === 1 ? '-inv' : ''}`} alt="Marcado com X" />
        <img src={oIMG} className={`${player === 2 ? '-inv' : ''}`} alt="Marcado com O" />
      </button>
    )
  }

  const Ganhar=()=>{  
    if((matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] && matrix[1][0] !== '')) {
      document.querySelector('.wrapper').classList.add("-win1");
      setWin(true);
    }else if((matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win2");
      setWin(true);
    }else if((matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] && matrix[1][2] !== '')) {
      document.querySelector('.wrapper').classList.add("-win3");
      setWin(true);
    }else if((matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] && matrix[0][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win4");
      setWin(true);
    }else if((matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win5");
      setWin(true);
    }else if((matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] && matrix[2][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win6");
      setWin(true);
    }else if((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win7");
      setWin(true);
    }else if((matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add("-win8");
      setWin(true);
    }else {
      return
    }
  }

  return (
    <main className="App">
        <h1>Jogo da velha</h1>
        <div className="wrapper">  
          <div className="container">
            {Btn(1,1)}
            {Btn(2,1)}
            {Btn(3,1)}
            {Btn(1,2)}
            {Btn(2,2)}
            {Btn(3,2)}
            {Btn(1,3)}
            {Btn(2,3)}
            {Btn(3,3)}
          </div>
        </div>
       {Jogador()}
       <button className="reset-button" onClick={()=>zerar()}>Reiniciar</button>
    </main>
  );
}
