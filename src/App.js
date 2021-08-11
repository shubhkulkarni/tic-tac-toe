import React, { useState, useEffect, useCallback } from "react";
import Card from "./components/Card";
import "./styles.css";

export default function App() {
  const NEUTRAL = "NEUTRAL";
  const CIRCLE = "CIRCLE";
  const CROSS = "CROSS";
  const P1 = "Player 1's turn !";
  const P2 = "Player 2's turn !";
  const TIE = "Match tie !";
  const CIRCLEWIN = "Player 1 won the match !";
  const CROSSWIN = "Player 2 won the match !";
  const [current, setCurrent] = useState(CIRCLE);
  const [winner, setWinner] = useState([]);
  const [message, setMessage] = useState(P1);
  const resetData = {
    0: NEUTRAL,
    1: NEUTRAL,
    2: NEUTRAL,
    3: NEUTRAL,
    4: NEUTRAL,
    5: NEUTRAL,
    6: NEUTRAL,
    7: NEUTRAL,
    8: NEUTRAL
  };
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  useEffect;
  const [crossTurns, setCrossTurns] = useState([]);
  const [circleTurns, setCircleTurns] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      let crossWin = wins[i].every((i) => {
        return crossTurns.includes(i);
      });
      let circleWin = wins[i].every((i) => {
        return circleTurns.includes(i);
      });
      if (crossWin) {
        setMessage(CIRCLEWIN);
        setWinner(wins[i]);
      }
      if (circleWin) {
        setMessage(CROSSWIN);
        setWinner(wins[i]);
      }
    }
  }, [crossTurns, circleTurns, wins]);
  const turnHandler = useCallback(
    (id) => {
      if (current === CIRCLE && data[id] === NEUTRAL) {
        setCurrent(CROSS);
        setCrossTurns([...crossTurns, id]);
        setMessage(P2);
        setData({ ...data, [id]: CROSS });
      } else if (current === CROSS && data[id] === NEUTRAL) {
        console.log(id);
        setCurrent(CIRCLE);
        setMessage(P1);
        setCircleTurns([...circleTurns, id]);
        setData({ ...data, [id]: CIRCLE });
      }
    },
    [current, setCurrent]
  );

  const [data, setData] = useState(resetData);

  const reset = () => {
    setData(resetData);
    setCurrent(CIRCLE);
    setCircleTurns([]);
    setCrossTurns([]);
    setMessage(P1);
    setWinner([]);
  };
  return (
    <div className="App">
      <div className="header">{message}</div>
      <div className="header">
        <button onClick={reset}>Reset</button>
      </div>
      <div className="card_grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return (
            <Card
              winner={winner}
              id={i}
              onClick={() => turnHandler(i)}
              label={data[i]}
            />
          );
        })}
      </div>
    </div>
  );
}
