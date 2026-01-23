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

const ProductCell = ({ row }: any) => (
  <div className="flex items-center gap-4 text-xs lg:text-sm">
    <div className="bg-cart flex h-15 w-15 items-center justify-center rounded-lg lg:h-20 lg:w-20">
      <img
        draggable={false}
        className="h-[60%] w-[60%] object-contain"
        src={row.image}
        alt="product"
      />
    </div>
    <h2 className="text-footer">{row.title.slice(0, 20)}</h2>
  </div>
);

const PriceCell = ({ row }: any) => (
  <p className="text-footer text-xs lg:text-sm">Rs. {row.price}</p>
);

const QuantityCell = ({ row }: any) => (
  <div className="border-footer flex h-8 w-8 items-center justify-center rounded border">
    <p className="text-xs lg:text-sm">{row.quantity}</p>
  </div>
);

const SubtotalCell = ({ row, onDelete }: any) => (
  <div className="flex w-[80%] items-center justify-between whitespace-nowrap">
    <p className="text-xs lg:text-sm">Rs. {row.price}</p>
    <DeleteCart onClick={() => onDelete(row)} />
  </div>
);

const getColumns = (onDelete: (row: any) => void) => [
  {
    name: "Product",
    cell: (row: any) => <ProductCell row={row} />,
    center: true,
    wrap: true,
  },
  {
    name: "Price",
    cell: (row: any) => <PriceCell row={row} />,
    center: true,
  },
  {
    name: "Quantity",
    cell: (row: any) => <QuantityCell row={row} />,
    center: true,
  },
  {
    name: "Subtotal",
    cell: (row: any) => <SubtotalCell row={row} onDelete={onDelete} />,
    center: true,
  },
];

const CartTotal = () => {
  const { cart, removeFromCart, setOpenModal }: any =
    useContext(ProductContext);

  const [rowData, setRowData] = useState<any>();

  const handleDelete = (row: any) => {
    setOpenModal(true);
    setRowData(row);
  };

  const columns = getColumns(handleDelete);

  const totalPrice = cart.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <section>
        <div className="flex flex-col items-center gap-8 p-5 lg:flex-row lg:items-start xl:px-20 xl:py-18 2xl:mx-auto">
          {/* cart items */}
          <div className="w-full overflow-x-auto lg:w-fit xl:overflow-x-hidden">
            <div className="w-180">
              <DataTable
                columns={columns}
                data={cart}
                customStyles={customStyles}
              />
            </div>
          </div>

          {/* cart total */}
          <div className="bg-results flex h-full w-full flex-col items-center pb-10 sm:h-97 sm:w-97 sm:pb-0">
            <h1 className="mt-4 text-2xl font-semibold lg:text-3xl">
              Cart Totals
            </h1>

            <div className="mt-15 flex w-[60%] flex-col gap-8 text-sm lg:text-base">
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
              <button className="mt-11 cursor-pointer rounded-2xl border border-black px-5 py-3 lg:px-14 lg:text-xl">
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
