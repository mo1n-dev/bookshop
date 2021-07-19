import React from "react";
import AdventureList from "../components/adventureList";

export default function Adventure() {
  return (
    <section className="h-auto">
     <header className="text-center text-2xl p-5 mb-10 bg-indigo-100">Adventure Collection</header>
    <AdventureList />
    </section>
  );
}
