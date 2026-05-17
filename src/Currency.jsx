
export default function Currrency({cur,setCur,className}){
    const currencyCodes = [
  "usd",
  "inr",
  "eur",
  "gbp",
  "jpy",
  "cny",
  "aud",
  "cad",
  "chf",
  "sgd",
  "hkd",
  "nzd",
  "sek",
  "nok",
  "dkk",
  "rub",
  "brl",
  "mxn",
  "zar",
  "aed",
  "sar",
  "try",
  "krw",
  "thb",
  "myr",
  "idr",
  "php",
  "vnd",
  "pkr",
  "bdt",
  "lkr",
  "npr",
  "egp",
  "ngn",
  "kes",
  "pln",
  "czk",
  "huf",
  "ils"
];
return(
    <div className={className}>
        <label>Currency :</label>
        <select name="currency" className="currcode" value={cur} onChange={(e)=>setCur(e.target.value)}>
            {currencyCodes.map((code)=><option key={code} value={code}>{code}</option>)}
        </select>
    </div>
)
}

