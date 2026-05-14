import { useState } from 'react'
import { fetchCoinDetails } from './api/fetchCoinDetails'
import Banner from './Banner'
import CoinTable from './CoinTable'
import './index.css';
 

function App() {
  

  return (
    <div className='topcontainer'>
      <Banner/>

      <CoinTable/>
    </div>
  )
}

export default App
