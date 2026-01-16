const Footer = () => {
  return (
    <section className="h-126 border-t border-black/17">
      <div className="flex flex-col gap-12 px-25 pt-12 pb-9">
        {/* links */}
        <div className="flex h-78 w-280 items-start gap-34">
          {/* address */}
          <div>
            <h1 className="text-2xl font-bold text-black">Funiro.</h1>
            <p className="text-footer mt-12">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </p>
          </div>

          <div className="flex items-start gap-18">
            {/* links container */}
            <div className="flex h-78 w-88 gap-36">
              <div>
                <p className="text-footer">Links</p>
                <ul className="mt-13 flex flex-col gap-11">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <p className="text-footer">Help</p>
                <ul className="mt-13 flex flex-col gap-11">
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            </div>

            {/* newsletter */}
            <div className="flex flex-col gap-13">
              <p className="text-footer">Newsletter</p>

              <div className="flex items-center gap-3">
                <input
                placeholder="Enter Your Email Address"
                  className="border-b text-sm pb-1 w-50 outline-0 border-black"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="on"
                />
                <button className="border-b cursor-pointer border-black pb-1">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-light-grey">
            <p className="mt-8">2023 furino. All rights reverved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
