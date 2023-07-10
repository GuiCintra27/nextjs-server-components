import { Stock } from "../models";

async function getStocks(): Promise<Stock[]> {
  //cache based on time
  /* const response = await fetch("http://localhost:8000/stocks", {
    next: { revalidate: 5 },
  }); */

  //cache permanente
  //const response = await fetch("http://localhost:8000/stocks");

  const response = await fetch("http://localhost:8000/stocks", {
    next: { tags: ["stocks"] },
  });

  return response.json();
}

export async function ListStocks() {
  const stocks = await getStocks();

  return (
    <>
      <h1>Stocks List</h1>

      <ul>
        {stocks && stocks.map((stock) => (
          <li key={stock.id}>
            {stock.name} - {stock.price}
          </li>
        ))}
      </ul>
    </>
  );
}
