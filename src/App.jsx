import { useState } from 'react'
import { fetchCoinDetails } from './api/fetchCoinDetails'
import Banner from './Banner'
import CoinTable from './CoinTable'
import './index.css';
import CoinDetail from './CoinDetail';
import Home from './Home';
import Routing from './Routing';
import UserContext from './api/fetchContext';


 

function App() {
  const [id,setId]=useState("bitcoin");

  return (
    <UserContext.Provider value={{id,setId}}>
    <Routing/>
    </UserContext.Provider>
  )
}

export default App
