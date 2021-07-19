import React from "react";
import { useState } from "react";
import HorrorList from "../components/horrorList";
import AdventureList from "../components/adventureList";
import ReligiousList from "../components/religiousList";
import Link from "next/link";

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
      <header className="text-center text-3xl my-5">
        📚Book Shop
      </header>
      <div className="flex flex-col justify-between h-auto w-9/12 mx-auto my-0">
        {/* Horror Section */}
        <div className="my-5 border-2 rounded-md text-center bg-yellow-100 ring ring-yellow-600 ring-offset-4 ring-offset-yellow-100">
          <div className="flex justify-between mx-auto py-2 px-10 ">
            <header>
              <Link href="/horror">
              📓 Horror Genre →
              </Link>
            </header>
            <button onClick={horrorVisibility}>
              {horror ? "Hide List ↑" : "Show List ↓"}
            </button>
          </div>
          {horror ? <HorrorList /> : null}
        </div>

        {/* Adventure Section */}
        <div className="my-5 border-2 border-2 rounded-md text-center bg-red-100 ring ring-red-600 ring-offset-4 ring-offset-red-100  h-auto">
          <div className="flex justify-between mx-auto py-2 px-10 ">
            <header>
              <Link href="/adventure">
              📗 Adventure Genre →
              </Link>
            </header>
            <button onClick={adventureVisibility}>
              {!!adventure ? "Hide List ↑" : "Show List ↓"}
            </button>
          </div>
          {adventure ? <AdventureList /> : null}
        </div>

        {/* Religious Section */}
        <div className="my-5 border-2 rounded-md bg-green-300 ring ring-green-600 ring-offset-4 ring-offset-green-100 h-auto">
          <div className="flex justify-between mx-auto py-2 px-10 ">
            <header>
              <Link href="/religious">
              📖 Religious Genre →
              </Link>
            </header>
            <button onClick={religiousVisibility}>
              {!!religious ? "Hide List ↑" : "Show List ↓"}
            </button>
          </div>
          {religious ? <ReligiousList /> : null}
        </div>
      </div>
    </section>
  );
}
