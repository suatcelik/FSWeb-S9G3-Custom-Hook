import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGeceModu } from "./components/hooks/geceModuAc";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  //const [geceModu, setGeceModu] = useState(false);
  const [geceModu, toggleHandler] = useGeceModu(true);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} toggleHandler={toggleHandler} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
