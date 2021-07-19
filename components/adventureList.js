import React from 'react'
import { Books } from '../database/book'

export default function AdventureList() {
	return (
		<div className="flex justify-around">
      {Books.adventure.map((book) => (
        <div className="flex flex-col justify-between border-2 rounded-md w-1/4 text-center bg-green-300 ring ring-green-600 ring-offset-4 ring-offset-green-100">
          <h1>{book.name}</h1>
          <h5>Author :{book.author}</h5>
          <p>
            {book.prices.map((price) => (
              <div>
                {price.type} : {price.value}$
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
	)
}
