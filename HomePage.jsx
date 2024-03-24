import './style/home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='home-container'>
      <div id='home-content'>
        <h1>Snake Game</h1>
        <ul id='home-options'>
          <li className='option'><Link to="/game">Play Snake</Link></li>
          <li className='option'><Link to="/testgame">TEST Snake</Link></li>
          <li className='option'><Link to="/highscores">Highscores</Link></li>
          <li className='option'><Link to="/customize">Customize</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
