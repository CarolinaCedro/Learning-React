import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [ispacient, setispacient] = useState();

  useEffect(() => {
    fetch('http://localhost:3338/datas')
      .then((Response) => Response.json())
      .then((data) => setispacient(data.data));
  }, []);

  return (
    <>
      <header>
        <h1>Checking data ...</h1>
      </header>

      <div className="container">
        <section>
          <div>
            <span> Mostrar dados de cliente Cadastrados</span>
            <span>
              <button>Mostrar</button>
            </span>

            <div id="dados">
              <h2>Dados: </h2>
              <p>{ispacient}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
