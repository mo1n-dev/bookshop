import React from "react";
import HorrorList from "../components/horrorList";

export default function Horror() {
  return (
    <section className="h-auto w-full">
      <header className="my-10 mx-auto text-3xl w-1/3 border-2 rounded-md text-center bg-yellow-100 ring ring-yellow-600 ring-offset-4 ring-offset-yellow-100">
      📓 Horror Collection
      </header>
     <HorrorList/>
    </section>
  );
}
