import React from "react";
import AdventureList from "../components/adventureList";

export default function Adventure() {
  return (
    <section>
     <header className="text-3xl my-10 mx-auto border-2 rounded-md text-center bg-red-100 ring ring-red-600 ring-offset-4 ring-offset-red-100 w-1/3 h-auto">📗 Adventure Collection</header>
    <AdventureList />
    </section>
  );
}
