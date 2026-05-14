import axios from "axios";
import {coin_api} from '../Keys/coinGecko'

export async function fetchCoinDetails(page=1,currency='usd'){
    try{
    const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&page=${page}&per_page=10`,
        {
            headers: {
                "x-cg-demo-api-key": coin_api
            }
        });

       
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}