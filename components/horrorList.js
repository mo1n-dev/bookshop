import React from 'react'
import { Books } from '../database/book'

export default function HorrorList() {
	return (
		<div className="flex justify-around">
		{Books.horror.map((book) => (
		  <div className="flex flex-col justify-between border-2 rounded-md w-1/4 text-center bg-purple-100 ring ring-purple-600 ring-offset-4 ring-offset-purple-100 ">
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
