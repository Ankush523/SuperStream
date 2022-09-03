import React, { useEffect, useState } from 'react'
import GetProvider from '../../hooks/GetProvider'
import { Framework } from "@superfluid-finance/sdk-core";

const PresentBalance = () => {

    const provider = GetProvider();

    const getSuperfluid=async()=>{
        const sf = await Framework.create({
            chainId: 80001, // you can also use chainId here instead
            provider: provider
          });

          const fDAIx = await sf.loadSuperToken("0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f");

          var bal = await fDAIx.balanceOf({
            account: "0x0fdcF87dBEE21d938944aFC3aD0cbCc271E8a5b4",
            providerOrSigner: provider
          });

          var rbal = await fDAIx.realtimeBalanceOf({
            account: "0x0fdcF87dBEE21d938944aFC3aD0cbCc271E8a5b4",
            timestamp: "1662227030",
            providerOrSigner: provider
          });


        console.log(bal)
    }

    const [balance,setBalance] = useState(0)

  return (
    <div>
        <button >Present Balance</button>

        <a href='/deleteflow'><button>Delete Flow</button></a>
    </div>
  )
}

export default PresentBalance