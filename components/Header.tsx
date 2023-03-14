import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {};

function Header({}: Props) {
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="bg-black text-white max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">
              Wallet #{address.slice(0, 4) + "..." + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect Wallet
            </button>
          )}
          <div>
          <Link href="/addItem" className="flex items-center hover:link">
            List For Sale
          </Link>
          </div>
          <div className="h-4">
              🏦
          </div>
          <div>
          <Link href="/addItem" className="flex items-center hover:link">
            Pool
          </Link>
          </div>
          <div>
            🌊
          </div>
        </div>

        <div className="flex items-center space-x-4 font-bold">
          <Link href="/" className="flex items-center hover:link">
            Tokenize
          </Link>
          <Link href="/" className="flex items-center hover:link">
            Fund
          </Link>
          <Link href="/" className="flex items-center hover:link">
            Vote
          </Link>
          <Link href="/" className="flex items-center hover:link">
            Socialize
          </Link>
          <Link href="/" className="flex items-center hover:link">
            Marketplace Contract
          </Link>

          <Link href="/" className="flex items-center hover:link">
            Escrow Contract
          </Link>

          <Link href="/" className="flex items-center hover:link">
            Syndicate Contract
          </Link>
        </div>

      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="h-16 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0">
          <Link href="/">
            <Image
              className="h-full w-full object-contain"
              alt="Logo"
              src="https://gateway.pinata.cloud/ipfs/QmRHJW7EXW5fgFLWToScauhNmHhCNJYa3KqXtDqninsV6S"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20">
        <Link href="https://app.darkblock.io/?_gl=1*11pi3bb*_ga*MTkxODA3MDI3MS4xNjc2OTk1NDYx*_ga_6JNBYSH6C4*MTY3ODc0OTQ4NC4xMy4wLjE2Nzg3NDk0ODQuMC4wLjA.*_ga_LGRDB4TL48*MTY3ODc0OTQ4NC4xMy4wLjE2Nzg3NDk0ODQuMC4wLjA.*_ga_TC5HX16MTM*MTY3ODc0OTQ4NC4xMy4wLjE2Nzg3NDk0ODQuMC4wLjA." target="_blank">
          <p className="text-white text-sm hover:text-cyan-300">Click Here For Unlockable Options</p>
          <div className="h-4 flex-shrink-0">
            🔓
          </div>  
        </Link>
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
          <input
            className="flex-1 outline-none text-black"
            placeholder="Search by seller wallet address"
            type="text"
          />
        </div>

        <button className="hidden sm:inline bg-purple-600 text-white px-5 md:px-10 py-2 border-2 border-purple-600">
          Search
        </button>

        <Link href="/create">
          <button className="border-2 border-purple-600 px-5 md:px-10 py-2 text-white hover:bg-cyan-400 hover:text-purple-600  cursor-pointer">
          Wallet
          </button>
        </Link>
      </section>
      <div className="flex justify-center">
        Blocklock Real Estate NFT Hub
      </div>
      <hr />

      <section className="flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6">
        <p className="link">Avatars</p>
        <p className="link">NFT Passports</p>
        <p className="link">Documents</p>
        <p className="link">Inspections</p>
        <p className="link">Titles</p>
        <p className="link hidden sm:inline">Appraisals</p>
        <p className="link hidden md:inline">Photos</p>
        <p className="link hidden md:inline">Videos</p>
        <p className="link hidden sm:inline">3D Models</p>
      </section>
    </div>
  );
}

export default Header;
