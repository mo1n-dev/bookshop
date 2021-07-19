import React from "react";
import { useState } from "react";
import HorrorList from "../components/horrorList";
import AdventureList from "../components/adventureList";
import ReligiousList from "../components/religiousList";
import Link from 'next/link'

export default function index() {
  const [horror, setHorror] = useState(true);

  const horrorVisibility = () => {
    setHorror(!horror);
  };

  const [adventure, setAdventure] = useState(true);

  const adventureVisibility = () => {
    setAdventure(!adventure);
  };

  const [religious, setReligious] = useState(true);

  const religiousVisibility = () => {
    setReligious(!religious);
  };

  return (
    <section className>
      <header className="text-center text-3xl my-5">Book Shop</header>
    <div className="flex flex-col justify-between h-auto w-9/12 mx-auto my-0">
      {/* Horror Section */}
      <div className="my-10 flex w-1/3 mx-auto">
        <header><Link href="/horror"><a>Horror List</a></Link></header>
        <button
          className="bg-red-400 p-1"
          onClick={horrorVisibility}
        >
          {horror ? "Hide List" : "Show List"}
        </button>
        </div>
        {horror ? <HorrorList /> : null}
      
      {/* Adventure Section */}
      <div className="my-10 flex w-1/3 mx-auto">
      <header><Link href="/adventure"><a>Adventure List</a></Link></header>
        <button
          className="bg-red-400 p-1"
          onClick={adventureVisibility}
        >
          {!!adventure ? "Hide List" : "Show List"}
        </button>
        </div>
        {adventure ? <AdventureList /> : null}
      
      {/* Religious Section */}
      <div className="my-10 flex w-1/3 mx-auto">
      <header><Link href="/religious"><a>Religious List</a></Link></header>
        <button
          className="bg-red-400 p-1"
          onClick={religiousVisibility}
        >
          {!!religious ? "Hide List" : "Show List"}
        </button>
        </div>
        {religious ? <ReligiousList /> : null}
        
    </div>
    </section>
  );
}
