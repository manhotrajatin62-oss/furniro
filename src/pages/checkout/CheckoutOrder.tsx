import { FaCheck } from "react-icons/fa";

const CheckoutOrder = ({showCheck, onSubmit}:any) => {
  return (
    <section className="w-full">
      <div className="w-full px-9 flex flex-col items-center py-21">
        <div className="flex w-full flex-col gap-4">
          <p className="flex items-center justify-between text-2xl font-medium">
            Product<span>Subtotal</span>
          </p>

          <div className="flex items-center justify-between">
            <p className="text-footer">
              Asgaard sofa <span className="ml-2 text-black">X 1</span>
            </p>{" "}
            <span className="font-light">Rs. 250,000.00</span>
          </div>

          <p className="flex items-center justify-between">
            Subtotal<span className="font-light">Rs. 250,000.00</span>
          </p>

          <p className="flex items-center justify-between">
            Total <span className="text-dark-orange text-2xl font-bold">
              Rs. 250,000.00
            </span>
          </p>
        </div>

        <hr className="text-light-grey mt-8 mb-5" />

        <div>
          <h2 className="flex items-center gap-4">
            <div className="h-3.5 w-3.5 rounded-full bg-black" />
            Direct Bank Transfer
          </h2>

          <p className="text-footer mt-2.5 text-justify text-sm leading-5 font-light">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        <div className="mt-6 w-full cursor-pointer flex items-center gap-4">
          <div className="border-footer h-3.5 w-3.5 rounded-full border" />
          <p className="text-footer text-sm">Direct Bank Transfer</p>
        </div>

        <div className="mt-2 w-full cursor-pointer flex items-center gap-4">
          <div className="border-footer h-3.5 w-3.5 rounded-full border" />
          <p className="text-footer text-sm">Cash On Delivery</p>
        </div>

        <p className="mt-6 text-sm font-light text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span></p>

         <button  onClick={onSubmit} className="text-xl py-3 px-14 mt-10 cursor-pointer border rounded-2xl border-black">Place Order</button>
         {
          showCheck && <FaCheck className="mt-10" size={30} color="green"/>
         }
      </div>
    </section>
  );
};

export default CheckoutOrder;
