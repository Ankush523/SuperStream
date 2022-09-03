// import { useContract } from "wagmi";
// import { useSigner } from "wagmi";
import PlanABI from "../contracts/ABIs/PlanABI.json";
// const GetContract = () => {
//   const{data:signer}=useSigner();

//   const contract = useContract({
//     addressOrName: "0xd9145CCE52D386f254917e481eB44e9943F39138",
//     contractInterface: PlanABI,
//     signerOrProvider: signer,
//   });

//   return contract;
// };

// export default GetContract;
import { useContract, useSigner } from 'wagmi'

function GetContract() {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: '0x072E8bD83F1ce5C9af88b505eD0559EBA57901Bb',
    contractInterface: PlanABI,
    signerOrProvider: signer,
  })

  return contract
}

export default GetContract;