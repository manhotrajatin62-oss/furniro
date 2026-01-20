import { HeroArrow } from "../../components/Icons";

const Label = ({ label, name, sm, type }: any) => {
  return (
    <label htmlFor={name}>
      <p className="mb-5 w-fit cursor-pointer">{label}</p>{" "}
      <input
        type={type}
        className={`input ${sm ? "w-52" : "w-full"}`}
        name={name}
        id={name}
        autoComplete="on"
      />
    </label>
  );
};

const Select = ({ label, name, placeholder, options }: any) => {
  return (
    <label htmlFor={name}>
      <p className="mb-5 w-fit cursor-pointer">{label}</p>
      <div className="input relative flex cursor-pointer items-center justify-between">
        <HeroArrow />
        <select
          className="text-footer h-full w-full cursor-pointer appearance-none px-3 outline-0 focus:text-black [&>option]:text-black"
          name={name}
          id={name}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options?.map((item: any) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

const CheckoutBilling = () => {
  return (
    <div className="px-15">
      <h1 className="text-4xl font-semibold">Billing details</h1>

      <form className="flex flex-col gap-9">
        <div className="mt-9 flex items-center gap-8">
          <Label type={"text"} sm label={"First Name"} name={"first_name"} />
          <Label type={"text"} sm label={"last Name"} name={"last_name"} />
        </div>

        <Label
          type={"text"}
          label={"Company Name (Optional)"}
          name={"company"}
        />

        <Select
          label={"Country / Region"}
          name={"location"}
          placeholder={"Sri Lanka"}
          options={["Sri Lanka", "India", "Pakistan", "Bangladesh"]}
        />

        <Label type={"text"} label={"Street Address"} name={"address"} />

        <Label type={"text"} label={"Town / City"} name={"town"} />

        <Select
          label={"Province"}
          name={"province"}
          placeholder={"Western Province"}
          options={[
            "Western Province",
            "Northern Province",
            "Southern Province",
            "Eastern Province",
          ]}
        />

        <Label type={"number"} label={"ZIP code"} name={"zip-code"} />

        <Label type={"number"} label={"Phone"} name={"phone"} />

        <Label type={"email"} label={"Email address"} name={"email"} />

        <input
          type="text"
          placeholder="Additional information"
          className="input w-full px-6"
          name="info"
          id="info"
          autoComplete="on"
        />
      </form>
    </div>
  );
};

export default CheckoutBilling;
