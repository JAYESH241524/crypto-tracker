import fetchCoinData from "./api/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import UserContext from "./api/fetchContext";
import { useContext, useState } from "react";
import Currrency from "./Currency";
export default function CoinData(){
    const [cur,setCur]=useState("inr");
    const {id}=useContext(UserContext);
    const {data,isLoading,isError,error}=useQuery({
        queryKey:['details',id],
        queryFn:()=>fetchCoinData(id),
        gcTime:10000*6*5,
        staleTime:10000*6*2
    })
    
    if(isLoading){
        return(
            <div>Loading.....</div>
        );
    }
    if(isError){
        return(
            <div>{error}</div>
        )
    }
    return(
        <div className="coinContainer">
            <div><Currrency className="currencyContainer" cur={cur} setCur={setCur}/></div>
            <div className="coinImg" style={{color:"blue"}}>
                <img src={data.image.large}/>
            </div>
            <div className="coinName" >{data.name}</div>
            <div className="currentPrice" >{data.market_data.current_price[cur].toLocaleString()}</div>
            <div className="description">{data.description.en}</div>
        </div>
    )
}