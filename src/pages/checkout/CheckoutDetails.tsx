import CheckoutBilling from "./CheckoutBilling";
import CheckoutOrder from "./CheckoutOrder";


const CheckoutDetails = () => {
  return <section className="pt-15 pb-13 flex items-start gap-6 px-20">

    {/* billing details */}

    <CheckoutBilling/>

    {/* place order section */}
    <CheckoutOrder/>

  </section>;
};

export default CheckoutDetails;
