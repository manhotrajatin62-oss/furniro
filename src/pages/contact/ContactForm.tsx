import { Clock, Location, Phone } from "../../components/Icons";
import DarkButton from "../../UI/DarkButton";

const Label = ({ label, name, sm, type, placeholder }: any) => {
  return (
    <label htmlFor={name}>
      <p className="mb-5 w-fit cursor-pointer">{label}</p>{" "}
      <input
        type={type}
        placeholder={placeholder}
        className={`input px-7 ${sm ? "w-52" : "w-full"}`}
        name={name}
        id={name}
        autoComplete="on"
      />
    </label>
  );
};

const ContactForm = () => {
  return (
    <section className="mx-47">
      {/* heading */}
      <div className="mt-25 text-center">
        <h1 className="text-4xl font-semibold">Get In Touch With Us</h1>
        <p className="text-footer mx-auto mt-2 w-161">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="mt-3 flex items-start gap-7">
        {/* address, phone section */}
        <div className="mt-28 flex h-134 min-w-98 flex-col gap-11">
          <div className="flex items-start gap-7">
            <Location />
            <div className="mt-2">
              <h1 className="text-2xl font-medium">Address</h1>
              <p className="w-53">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Phone />
            <div>
              <h1 className="text-2xl font-medium">Phone</h1>
              <p className="w-53">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Clock />
            <div>
              <h1 className="text-2xl font-medium">Working Time</h1>
              <p className="w-53">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="w-full">
          <form className="mt-29 mb-15 flex flex-col gap-9">
            <Label
              placeholder={"Abc"}
              type={"text"}
              label={"Your Name"}
              name={"name"}
            />
            <Label
              placeholder={"Abc@def.com"}
              type={"email"}
              label={"Email address"}
              name={"email"}
            />
            <Label
              placeholder={"This is an optional"}
              type={"text"}
              label={"Subject"}
              name={"subject"}
            />

            <label htmlFor="message">
              <p className="mb-5 w-fit cursor-pointer">Message</p>{" "}
              <textarea
                rows={4}
                placeholder="Hi! i'd like to ask about"
                className="input w-full resize-none pt-4 h-full px-7"
                name="message"
                id="message"
                autoComplete="on"
              />
            </label>

            <button className="text-white bg-dark-orange w-fit py-3 px-22 rounded cursor-pointer">
                Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
