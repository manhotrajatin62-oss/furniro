import { useState } from "react";
import { Clock, Location, Phone } from "../../components/Icons";
import { FaCheck } from "react-icons/fa";

const Label = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: any) => {
  return (
    <div className="h-25 xl:h-36 w-full">
      <label htmlFor={name} className="block">
        <p className="mb-2 xl:mb-5 text-sm xl:text-base w-fit cursor-pointer">{label}</p>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          autoComplete="on"
          className={`input w-full px-7 ${error ? "border-red-500" : ""}`}
        />

        {error && <p className="mt-1 text-xs xl:text-sm text-red-500">{error}</p>}
      </label>
    </div>
  );
};

const ContactForm = () => {
  const [showCheck, setShowCheck] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setShowCheck(true);
  };

  return (
    <section className="xl:mx-47 lg:mx-20 p-5 xl:p-0">
      {/* heading */}
      <div className="xl:mt-25 mt-10  text-center">
        <h1 className="text-2xl xl:text-4xl font-semibold">Get In Touch With Us</h1>
        <p className="text-footer text-sm xl:text-base mx-auto mt-2 md:w-161">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="mt-3 flex flex-col  sm:flex-row items-start gap-7">
        {/* address, phone section */}
        <div className="xl:mt-28 w-full mt-10 flex xl:h-134 xl:min-w-98 flex-col gap-11">
          <div className="flex items-start gap-7">
            <Location />
            <div className="mt-2">
              <h1 className="text-xl lg:text-2xl font-medium">Address</h1>
              <p className="text-sm md:text-base w-53">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Phone />
            <div>
              <h1 className="text-xl lg:text-2xl font-medium">Phone</h1>
              <p className="text-sm md:text-base w-53">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Clock />
            <div>
              <h1 className="text-xl lg:text-2xl font-medium">Working Time</h1>
              <p className="text-sm md:text-base w-53">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="xl:mt-29 mt-10 mb-15 flex flex-col">
            <Label
              label="Your Name"
              name="name"
              type="text"
              placeholder="Abc"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />

            <Label
              label="Email address"
              name="email"
              type="email"
              placeholder="Abc@def.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />

            <Label
              label="Subject"
              name="subject"
              type="text"
              placeholder="This is optional"
              value={formData.subject}
              error={errors.subject}
              onChange={handleChange}
            />

            {/* textarea */}
            <div className="h-25 xl:h-36 w-full">
              <label htmlFor="message">
                <p className="mb-2 text-sm xl:text-base xl:mb-5 w-fit cursor-pointer">Message</p>

                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! I'd like to ask about"
                  className={`input w-full resize-none px-7 pt-4 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-xs xl:text-sm text-red-500">{errors.message}</p>
                )}
              </label>
            </div>

            <button
              type="submit"
              className="bg-dark-orange mt-4 mx-auto sm:mx-0 w-fit cursor-pointer rounded px-22 py-3 text-white"
            >
              Submit
            </button>
            {showCheck && <FaCheck className="mt-10" size={30} color="green" />}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
