import { HeroArrow } from "../../components/Icons";

const CheckoutBilling = ({ formData, setFormData, errors, setErrors }: any) => {
  const fields = [
    {
      name: "company",
      label: "Company Name (Optional)",
      type: "text",
      required: false,
    },
    {
      name: "location",
      label: "Country / Region",
      type: "select",
      options: ["Sri Lanka", "India", "Pakistan", "Bangladesh"],
      required: true,
    },
    {
      name: "address",
      label: "Street Address",
      type: "text",
      required: true,
    },
    {
      name: "town",
      label: "Town / City",
      type: "text",
      required: true,
    },
    {
      name: "province",
      label: "Province",
      type: "select",
      options: [
        "Western Province",
        "Northern Province",
        "Southern Province",
        "Eastern Province",
      ],
      required: true,
    },
    {
      name: "zip",
      label: "ZIP Code",
      type: "number",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
  ];

  return (
    <div className="p-5 xl:px-15">
      <h1 className="text-2xl font-semibold xl:text-4xl">Billing details</h1>

      <form className="flex flex-col">
        {/* first and last name side-by-side */}
        <div className="mt-4 flex h-25 items-start gap-4 xl:mt-9 xl:h-36 xl:gap-8">
          {["first_name", "last_name"].map((item) => (
            <div key={item} className="w-full">
              <label htmlFor={item} className="block">
                <p className="mb-2 w-fit cursor-pointer text-sm capitalize xl:mb-5 xl:text-base">
                  {item.replace("_", " ")}
                </p>

                <input
                  type="text"
                  value={formData[item]}
                  onChange={(e) => {
                    setFormData({ ...formData, [item]: e.target.value });
                    setErrors({ ...errors, [item]: "" });
                  }}
                  className={`input w-full ${
                    errors[item] ? "border-red-500" : ""
                  }`}
                  name={item}
                  id={item}
                  autoComplete="on"
                />
              </label>

              {errors[item] && (
                <p className="mt-1 text-xs text-red-500 xl:text-sm">
                  {errors[item]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* company name and so on */}

        {fields.map((field) => (
          <div className="h-25 w-full xl:h-36" key={field.name}>
            {field.type !== "select" && (
              <label htmlFor={field.name} className="block">
                <p className="mb-2 w-fit cursor-pointer text-sm capitalize xl:mb-5 xl:text-base">
                  {field.label}
                </p>

                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [field.name]: e.target.value,
                    });
                    setErrors({ ...errors, [field.name]: "" });
                  }}
                  className={`input w-full ${
                    errors[field.name] ? "border-red-500" : ""
                  }`}
                  name={field.name}
                  id={field.name}
                  autoComplete="on"
                />
              </label>
            )}

            {field.type === "select" && (
              <label htmlFor={field.name}>
                <p className="mb-2 w-fit cursor-pointer text-sm xl:mb-5 xl:text-base">
                  {field.label}
                </p>
                <div
                  className={`${
                    errors[field.name] ? "border-red-500" : ""
                  } input relative flex cursor-pointer items-center justify-between`}
                >
                  <HeroArrow />
                  <select
                    value={formData[field.name]}
                    name={field.name}
                    id={field.name}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      });
                      setErrors({ ...errors, [field.name]: "" });
                    }}
                    className="text-footer h-full w-full cursor-pointer appearance-none px-3 outline-0 focus:text-black [&>option]:text-black"
                  >
                    <option value="" disabled hidden>
                      {field?.options?.[0]}
                    </option>

                    {field?.options?.map((opt: any) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            )}

            {errors[field.name] && (
              <p className="mt-1 text-xs text-red-500 xl:text-sm">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <input
          type="text"
          placeholder="Additional information"
          className="input mt-2 w-full px-6"
          name="info"
          id="info"
          autoComplete="on"
        />
      </form>
    </div>
  );
};

export default CheckoutBilling;
