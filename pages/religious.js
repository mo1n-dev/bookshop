import React from "react";
import ReligiousList from "../components/religiousList";

export default function Religious() {
  return (
    <section className="h-auto w-full">
      <header className="text-3xl text-center my-10 mx-auto border-2 rounded-md bg-green-300 ring ring-green-600 ring-offset-4 ring-offset-green-100 w-1/3 h-auto">
      📖 Religious Collection
      </header>
    <ReligiousList />
    </section>
  );
}
