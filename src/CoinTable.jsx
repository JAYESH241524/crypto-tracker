import { useState } from "react";
import { fetchCoinDetails } from "./api/fetchCoinDetails";
import { useQuery } from "@tanstack/react-query";
import Currency from "./Currency";
import { FaForward, FaBackward } from "react-icons/fa";
import { useContext } from "react";
import UserContext from "./api/fetchContext";
import { useNavigate } from "react-router-dom";

export default function CoinTable(){
    const {setId}=useContext(UserContext);
    const [cur,setCur]=useState("usd");
    const [page,setPage]=useState(1);
    const navigate=useNavigate();
    const {data,isLoading,isError,error}=useQuery({queryKey:['user',page,cur],
        queryFn:()=>fetchCoinDetails(page,cur),
        gcTime:1000*60*10,
    });
    if(isLoading){
        return <div className="loading">Loading....</div>
    }
    if(isError){
        return <div>Error: {error.message}</div>

    }
    console.log(data);
    return(
        <>
        <Currency  cur={cur} setCur={setCur}className={"currContainer"}/>
        <div className="coinTable">

            <div className="row_header">
            <div className="cell">
                Coin
            </div>
            <div className="cell">
                Price
            </div>
            <div className="cell">
                24 Change
            </div>
            <div className="cell">
                Market cap
            </div>
            </div>

            <div className="row">

            </div>
            {data.map((coin)=>(
                <div key={coin.id} onClick={()=>{setId(coin.id);navigate("/details");}} className="row">
                    <div className="cell">
                        <div className="coinDetails">

                            <div className="image"><img src={coin.image} alt="" /></div>
                            <div className="names">
                                <div className="name">{(coin.id)[0].toUpperCase()+(coin.id).substring(1)}</div>
                                <div className="sym">({coin.symbol})</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="cell curr">{coin.current_price.toLocaleString()}</div>
                    <div className={`cell curr ${coin.price_change_24h<0?"loss":"profit"}`}>{coin.price_change_24h.toLocaleString()}</div>
                    <div className="cell curr" >{coin.market_cap.toLocaleString()}</div>
                </div>
            ))}
        </div>
        <div className="pages">
            <button disabled={page===1} onClick={()=>{setPage(pre=>pre-1)} }><FaBackward/></button>
            <span>page:{page}</span>
            <button onClick={()=>{setPage(pre=>pre+1)}}>{<FaForward/>}</button>
        </div>
        </>
    )
}