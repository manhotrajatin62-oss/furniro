import { FaCheck } from "react-icons/fa";

const CheckoutOrder = ({ showCheck, onSubmit }: any) => {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center p-5 xl:px-9 xl:py-21">
        <div className="flex w-full flex-col gap-4 text-sm xl:text-base">
          <p className="flex items-center justify-between text-xl font-medium xl:text-2xl">
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
            Total{" "}
            <span className="text-dark-orange text-xl font-bold xl:text-2xl">
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

        <div className="mt-6 flex w-full cursor-pointer items-center gap-4">
          <div className="border-footer h-3.5 w-3.5 rounded-full border" />
          <p className="text-footer text-sm">Direct Bank Transfer</p>
        </div>

        <div className="mt-2 flex w-full cursor-pointer items-center gap-4">
          <div className="border-footer h-3.5 w-3.5 rounded-full border" />
          <p className="text-footer text-sm">Cash On Delivery</p>
        </div>

        <p className="mt-6 text-justify text-sm font-light">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="font-semibold">privacy policy.</span>
        </p>

        <button
          onClick={onSubmit}
          className="mt-10 cursor-pointer rounded-2xl border border-black px-5 py-3 text-sm sm:px-14 lg:text-xl"
        >
          Place Order
        </button>
        {showCheck && <FaCheck className="mt-10" size={30} color="green" />}
      </div>
    </section>
  );
};

export default CheckoutOrder;
