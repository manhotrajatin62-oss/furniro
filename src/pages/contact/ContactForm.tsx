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
    <div className="h-25 w-full xl:h-36">
      <label htmlFor={name} className="block">
        <p className="mb-2 w-fit cursor-pointer text-sm xl:mb-5 xl:text-base">
          {label}
        </p>

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

        {error && (
          <p className="mt-1 text-xs text-red-500 xl:text-sm">{error}</p>
        )}
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
    <section className="p-5 lg:mx-20 xl:mx-47 xl:p-0">
      {/* heading */}
      <div className="mt-10 text-center xl:mt-25">
        <h1 className="text-2xl font-semibold xl:text-4xl">
          Get In Touch With Us
        </h1>
        <p className="text-footer mx-auto mt-2 text-sm md:w-161 xl:text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="mt-3 flex flex-col items-start gap-7 sm:flex-row">
        {/* address, phone section */}
        <div className="mt-10 flex w-full flex-col gap-11 xl:mt-28 xl:h-134 xl:min-w-98">
          <div className="flex items-start gap-7">
            <Location />
            <div className="mt-2">
              <h1 className="text-xl font-medium lg:text-2xl">Address</h1>
              <p className="w-53 text-sm md:text-base">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Phone />
            <div>
              <h1 className="text-xl font-medium lg:text-2xl">Phone</h1>
              <p className="w-53 text-sm md:text-base">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-7">
            <Clock />
            <div>
              <h1 className="text-xl font-medium lg:text-2xl">Working Time</h1>
              <p className="w-53 text-sm md:text-base">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="mt-10 mb-15 flex flex-col xl:mt-29"
          >
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
            <div className="h-25 w-full xl:h-36">
              <label htmlFor="message">
                <p className="mb-2 w-fit cursor-pointer text-sm xl:mb-5 xl:text-base">
                  Message
                </p>

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
                  <p className="mt-1 text-xs text-red-500 xl:text-sm">
                    {errors.message}
                  </p>
                )}
              </label>
            </div>

            <button
              type="submit"
              className="bg-dark-orange mx-auto mt-4 w-fit cursor-pointer rounded px-22 py-3 text-white sm:mx-0"
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
