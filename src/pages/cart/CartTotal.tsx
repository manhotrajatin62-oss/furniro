import DataTable from "react-data-table-component";
import cart from "../../assets/cart.png";
import { DeleteCart } from "../../components/Icons";
import { Link } from "react-router-dom";

const customStyles = {
  headCells: {
    style: {
      background: "#F9F1E7",
      color: "#000",
      fontWeight: "500",
      fontSize: "1rem",
    },
  },
  rows: {
    style: {
      marginTop: "3rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
};

const columns = [
  {
    name: "Product",
    cell: (row: any) => (
      <div className="flex items-center gap-8 text-xs lg:text-sm">
        <div className="bg-cart flex h-20 w-20 items-center justify-center rounded-lg">
          <img draggable={false} src={row.image} alt="product" />
        </div>
        <h2 className="text-footer">{row.product}</h2>
      </div>
    ),
    center: true,
    wrap: true,
  },
  {
    name: "Price",
    cell: (row: any) => <p className="text-footer text-sm">{row.price}</p>,
    center: true,
  },
  {
    name: "Quantity",
    cell: (row: any) => (
      <div className="border-footer flex h-8 w-8 items-center justify-center rounded border">
        <p className="text-sm">{row.quantity}</p>
      </div>
    ),
    center: true,
  },
  {
    name: "Subtotal",
    cell: (row: any) => (
      <div className="flex items-center gap-12 whitespace-nowrap">
        <p className="text-sm">{row.subtotal}</p>
        <DeleteCart />
      </div>
    ),
    center: true,
  },
];

const data = [
  {
    id: 1,
    image: cart,
    product: "Asgaard sofa",
    price: "Rs. 250,000.00",
    quantity: 1,
    subtotal: "Rs. 250,000.00",
  },
];

const CartTotal = () => {
  return (
    <section>
      <div className="flex items-start gap-8 px-20 py-18">
        {/* cart items */}
        <div className="w-180">
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>

        {/* cart total */}
        <div className="w-97 h-97 flex flex-col items-center bg-results">
            <h1 className="font-semibold text-3xl mt-4">Cart Totals</h1>

            <div className="mt-15 flex w-[60%] flex-col gap-8">
                <h2 className="flex items-center justify-between font-medium">Subtotal<span className="text-footer">Rs. 250,000.00</span></h2>
                <h2 className="flex items-center justify-between font-medium">Total<span className="font-medium text-xl text-dark-orange">Rs. 250,000.00</span></h2>
            </div>

            <Link to={"/checkout"}>
            <button className="text-xl py-3 px-14 mt-11 cursor-pointer border rounded-2xl border-black">Check Out</button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
