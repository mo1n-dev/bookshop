import React from "react";
import HorrorList from "../components/horrorList";

export default function Horror() {
  return (
    <section className="h-auto w-full">
      <header className="text-center text-2xl p-5 mb-10 bg-indigo-100">
        Horror Collection
      </header>
     <HorrorList/>
    </section>
  );
}
