import { useProvider } from 'wagmi'

function GetProvider() {
  const provider = useProvider()
  return provider;
}

export default GetProvider;
