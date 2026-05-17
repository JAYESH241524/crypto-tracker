import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './Details'
import CoinData from './CoinDetail'
export default function Routing(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<CoinData/>}/>
        </Routes>
    )
}