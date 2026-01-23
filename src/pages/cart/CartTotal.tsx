import DataTable from "react-data-table-component";
import { DeleteCart } from "../../components/Icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ModalPage from "../../UI/ModalPage";
import { toast } from "react-toastify";

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
  const { cart, removeFromCart, setOpenModal }: any =
    useContext(ProductContext);

  const [rowData, setRowData] = useState<any>();

  const columns = [
    {
      name: "Product",
      cell: (row: any) => (
        <div className="flex items-center gap-4 text-xs lg:text-sm">
          <div className="bg-cart flex h-15 w-15 lg:h-20 lg:w-20 items-center justify-center rounded-lg">
            <img
              draggable={false}
              className="h-[60%] w-[60%] object-contain"
              src={row.image}
              alt="product"
            />
          </div>
          <h2 className="text-footer">{row.title.slice(0, 20)}</h2>
        </div>
      ),
      center: true,
      wrap: true,
    },
    {
      name: "Price",
      cell: (row: any) => (
        <p className="text-footer text-xs lg:text-sm">Rs. {row.price}</p>
      ),
      center: true,
    },
    {
      name: "Quantity",
      cell: (row: any) => (
        <div className="border-footer flex h-8 w-8 items-center justify-center rounded border">
          <p className="text-xs lg:text-sm">{row.quantity}</p>
        </div>
      ),
      center: true,
    },
    {
      name: "Subtotal",
      cell: (row: any) => (
        <div className="flex w-[80%] items-center justify-between whitespace-nowrap">
          <p className="text-xs lg:text-sm">Rs. {row.price}</p>
          <DeleteCart
            onClick={() => {
              setOpenModal(true);
              setRowData(row);
            }}
          />
        </div>
      ),
      center: true,
    },
  ];

  const totalPrice = cart.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row p-5 items-center  lg:items-start gap-8  xl:px-20 xl:py-18 2xl:mx-auto">
          {/* cart items */}
         <div className="w-full lg:w-fit overflow-x-auto xl:overflow-x-hidden">
            <div className="w-180 ">
            <DataTable
              columns={columns}
              data={cart}
              customStyles={customStyles}
            />
          </div>
          </div>

          {/* cart total */}
          <div className="bg-results pb-10 sm:pb-0 flex w-full h-full sm:h-97 sm:w-97 flex-col items-center">
            <h1 className="mt-4 text-2xl lg:text-3xl font-semibold">Cart Totals</h1>

            <div className="mt-15 text-sm lg:text-base flex w-[60%] flex-col gap-8">
              <h2 className="flex items-center justify-between font-medium">
                Subtotal{""}
                <span className="text-footer">Rs. {totalPrice.toFixed(2)}</span>
              </h2>
              <h2 className="flex items-center justify-between font-medium">
                Total{""}
                <span className="text-dark-orange text-xl font-medium">
                  Rs. {totalPrice.toFixed(2)}
                </span>
              </h2>
            </div>

            <Link to={"/checkout"}>
              <button className="mt-11 cursor-pointer rounded-2xl border border-black lg:px-14 px-5 py-3 lg:text-xl">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>

      <ModalPage
        onClick={() => {
          removeFromCart(rowData?.id);
          setOpenModal(false);
          toast.error("Item removed successfully");
        }}
      >
        {"remove" + " " + rowData?.title}
      </ModalPage>
    </>
  );
};

export default CartTotal;
