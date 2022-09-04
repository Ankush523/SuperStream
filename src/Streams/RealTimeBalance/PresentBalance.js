import './presentBalance.css'
import React, { useEffect, useState } from 'react'
import GetProvider from '../../hooks/GetProvider'
import { Framework } from "@superfluid-finance/sdk-core";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const PresentBalance = () => {
    const [balance,setBalance] = useState(0)
    const provider = GetProvider();

    const getSuperfluid=async()=>{
        var time = Date.now();
        time = (time.toString()).slice(0,-3);
        console.log(time)
        const sf = await Framework.create({
            chainId: 80001, // you can also use chainId here instead
            provider: provider
          });

          const fDAIx = await sf.loadSuperToken("0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f");


          var rbal = await fDAIx.realtimeBalanceOf({
            account: "0x0fdcF87dBEE21d938944aFC3aD0cbCc271E8a5b4",
            timestamp: time,
            providerOrSigner: provider
          });


        console.log(rbal)
        
        setBalance(rbal.availableBalance)
    }

    

  return (
    <div>
        <ConnectButton/>
      
        <h1>VIEW YOUR STREAM AND CURRENT WALLET BALANCE</h1>
        <div className='balances'>
        <button onClick={()=>getSuperfluid()}>Present Balance : {(balance.toString())}</button>
        </div>
        <a href='/deleteflow'><button>Delete Flow</button></a>
    </div>
  )
}

export default PresentBalance