import { ConnectButton } from "web3uikit"
import styles from "../styles/Home.module.css"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-col items-center items-center  background-color: linear-gradient(175deg, #ff7e5f 0%, #00d2ff 100%)">
            <h1 className="py-4 px-4 font-bold text-3xl text-center  "> Decentralized Lottery</h1>
            <h2 className="py-4 px-4 font-bold text-3xl text-center ">Powered by Chainlink VRF & Automation for the backend</h2>
            <h2 className="py-4 px-4 font-bold text-3xl text-center">Moralis Web3UiKit Nextjs V12 for the frontend </h2>
            <h3 className="py-4 px-4 font-bold text-3xl text-center blinking">Connect your wallet to get started - a random winner every 10 minutes</h3>

            <div className="py-2 px-4 items-center flex flex-col justify-center">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}