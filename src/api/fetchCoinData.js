import axios from "axios";

export default async function fetchCoinData(id='bitcoin'){
    try{
    const res=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    console.log(res.data);
    return res.data;
    }catch(err){
        console.log(err);
        return null;
    }
}