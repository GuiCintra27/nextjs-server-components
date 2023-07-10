'use client';

import { FormEvent } from "react";

export default function StocksCreatePage() {

  async function onSubmit(event: FormEvent){
    event.preventDefault();
    
    await fetch("http://localhost:3000/api/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //@ts-expect-error
        name: event.target[0].value,
        //@ts-expect-error
        price: event.target[1].value
      })
    })
  }

  return (
    <>
      <h1>Stocks Create Page</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="name" className="text-black" />
        <br/>
        <br />
        <input type="text" name="price" placeholder="price" className="text-black" />
        <br/>
        <br />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
