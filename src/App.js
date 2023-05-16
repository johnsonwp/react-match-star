import './App.css';
import { useState } from "react";

import Game from "./components/Game";

const MatchStar = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export default MatchStar;