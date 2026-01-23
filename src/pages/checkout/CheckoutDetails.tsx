import { useState } from "react";
import CheckoutBilling from "./CheckoutBilling";
import CheckoutOrder from "./CheckoutOrder";

const CheckoutDetails = () => {
  const [showCheck, setShowCheck] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    location: "",
    address: "",
    town: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!formData.first_name.trim())
      newErrors.first_name = "First name is required";

    if (!formData.last_name.trim())
      newErrors.last_name = "Last name is required";

    if (!formData.location.trim()) newErrors.location = "Country is required";

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.town.trim()) newErrors.town = "Town is required";

    if (!formData.province.trim()) newErrors.province = "Province is required";

    if (!formData.zip.trim()) newErrors.zip = "Zip is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setShowCheck(true);
  };

  return (
    <section className="flex flex-col items-start gap-6 md:flex-row md:gap-0 md:pt-15 md:pb-13 lg:gap-6 lg:px-20">
      {/* billing details */}

      <CheckoutBilling
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />

      {/* place order section */}
      <CheckoutOrder showCheck={showCheck} onSubmit={handlePlaceOrder} />
    </section>
  );
};

export default CheckoutDetails;
