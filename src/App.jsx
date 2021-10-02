import React, {useState} from 'react';

import CPlayer from './components/currentPlayer';
import Button from './components/button';

import './App.css';
import '../src/components/currentPlayer.css';
import '../src/components/button.css';
import '../src/components/reset.css';

export default function App() {
  const [matrix, setMatrix] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [player, setPlayer] = useState(Math.floor(Math.random() * 10) > 4 ? 2 : 1);
  const [win, setWin] = useState(false);

  const Zerar=()=>{
    setMatrix([['', '', ''], ['', '', ''], ['', '', '']]);
    setPlayer(Math.floor(Math.random() * 10) > 4 ? 2 : 1);
    document.querySelector('.wrapper').classList.remove('-win1');
    document.querySelector('.wrapper').classList.remove('-win2');
    document.querySelector('.wrapper').classList.remove('-win3');
    document.querySelector('.wrapper').classList.remove('-win4');
    document.querySelector('.wrapper').classList.remove('-win5');
    document.querySelector('.wrapper').classList.remove('-win6');
    document.querySelector('.wrapper').classList.remove('-win7');
    document.querySelector('.wrapper').classList.remove('-win8');
    setWin(false)
    document.querySelector('.content').classList.remove('-blur');
    document.querySelector('.current-player').classList.remove('-desappear');
    document.querySelector('.reset-button').classList.remove('-desappear');
    document.querySelector('.reset-hidden').classList.remove('-appear');
  }
  
  const Jogar=(linha, coluna)=>{
    if ((player === 1) && (win === false)){
      let copy = [...matrix];
      if(copy[linha-1][coluna-1] === ''){
        copy[linha-1][coluna-1] = 1;
        setMatrix(copy);
        Ganhar();
        setPlayer(player === 1 ? 2 : 1);
      }
    }

    if ((player === 2) && (win === false)) {
      let copy = [...matrix];
      if(copy[linha-1][coluna-1] === ''){
        copy[linha-1][coluna-1] = 2;
        setMatrix(copy);
        Ganhar();
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  }


  const Ganhar=()=>{  
    if((matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] && matrix[1][0] !== '')) {
      document.querySelector('.wrapper').classList.add('-win1');
      setWin(true);
      winScreen();
    }else if((matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win2');
      setWin(true);
      winScreen();
    }else if((matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2] && matrix[1][2] !== '')) {
      document.querySelector('.wrapper').classList.add('-win3');
      setWin(true);
      winScreen();
    }else if((matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] && matrix[0][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win4');
      setWin(true);
      winScreen();
    }else if((matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win5');
      setWin(true);
      winScreen();
    }else if((matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] && matrix[2][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win6');
      setWin(true);
      winScreen();
    }else if((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win7');
      setWin(true);
      winScreen();
    }else if((matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2] && matrix[1][1] !== '')) {
      document.querySelector('.wrapper').classList.add('-win8');
      setWin(true);
      winScreen();
    }else {
      return
    }
  }

  const winScreen=()=>{
    document.querySelector('.content').classList.add('-blur');
    document.querySelector('.current-player').classList.add('-desappear');
    document.querySelector('.reset-button').classList.add('-desappear');
    document.querySelector('.reset-hidden').classList.add('-appear');
  }

  return (
    <main className='App'>
      <CPlayer player={player} />
      <div className='content'>
        <h1 className='main-text'>Jogo da velha</h1>
        <div className='wrapper'>  
          <div className='container'>
            <Button linha={1} coluna={1} matrix={matrix} Jogar={Jogar} />
            <Button linha={2} coluna={1} matrix={matrix} Jogar={Jogar} />
            <Button linha={3} coluna={1} matrix={matrix} Jogar={Jogar} />
            <Button linha={1} coluna={2} matrix={matrix} Jogar={Jogar} />
            <Button linha={2} coluna={2} matrix={matrix} Jogar={Jogar} />
            <Button linha={3} coluna={2} matrix={matrix} Jogar={Jogar} />
            <Button linha={1} coluna={3} matrix={matrix} Jogar={Jogar} />
            <Button linha={2} coluna={3} matrix={matrix} Jogar={Jogar} />
            <Button linha={3} coluna={3} matrix={matrix} Jogar={Jogar} />
          </div>
        </div>
      </div>
      <button className='reset-hidden' onClick={()=>Zerar()}>Reiniciar</button>
      <button className='reset-button' onClick={()=>Zerar()}>Reiniciar</button>
    </main>
  );
}
