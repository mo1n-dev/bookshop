import React from "react";
import ReligiousList from "../components/religiousList";

export default function Religious() {
  return (
    <section className="h-auto w-full">
      <header className="text-center text-2xl p-5 mb-10 bg-indigo-100">
       Religious Collection
      </header>
    <ReligiousList />
    </section>
  );
}
