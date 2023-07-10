import { ClientComponent } from "../components/clientComponent";
import { ListStocks } from "../components/listStocks";

export default function StocksListPage() {
  return (
    <div>
      <ListStocks />
      <ClientComponent />
    </div>
  );
}
