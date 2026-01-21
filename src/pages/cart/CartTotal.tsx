import DataTable from "react-data-table-component";
import cart from "../../assets/cart.png";
import { DeleteCart } from "../../components/Icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

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
      marginTop: "1rem",
      paddingBottom: "1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
};



const CartTotal = () => {

  const {cart, removeFromCart}:any = useContext(ProductContext)

  const columns = [
  {
    name: "Product",
    cell: (row: any) => (
      <div className="flex items-center gap-4 text-xs lg:text-sm">
        <div className="bg-cart flex h-20 w-20 items-center justify-center rounded-lg">
          <img draggable={false} className="w-[60%] h-[60%]" src={row.image} alt="product" />
        </div>
        <h2 className="text-footer">{row.title.slice(0,20)}</h2>
      </div>
    ),
    center: true,
    wrap: true,
  },
  {
    name: "Price",
    cell: (row: any) => <p className="text-footer text-sm">Rs. {row.price}</p>,
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
      <div className="flex w-[80%] items-center justify-between whitespace-nowrap">
        <p className="text-sm">Rs. {row.price}</p>
        <DeleteCart onClick={()=>removeFromCart(row.id)}/>
      </div>
    ),
    center: true,
  },
];

 const totalPrice = cart.reduce(
  (total:any, item:any) => total + item.price * item.quantity,
  0
);

  return (
    <section>
      <div className="flex items-start gap-8 px-20 py-18">
        {/* cart items */}
        <div className="w-180">
          <DataTable
            columns={columns}
            data={cart}
            customStyles={customStyles}
          />
        </div>

        {/* cart total */}
        <div className="w-97 h-97 flex flex-col items-center bg-results">
            <h1 className="font-semibold text-3xl mt-4">Cart Totals</h1>

            <div className="mt-15 flex w-[60%] flex-col gap-8">
                <h2 className="flex items-center justify-between font-medium">Subtotal<span className="text-footer">Rs. {totalPrice.toFixed(2)}</span></h2>
                <h2 className="flex items-center justify-between font-medium">Total<span className="font-medium text-xl text-dark-orange">Rs. {totalPrice.toFixed(2)}</span></h2>
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
