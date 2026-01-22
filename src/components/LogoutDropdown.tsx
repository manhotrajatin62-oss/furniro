import { useContext, useEffect, useRef, useState } from "react";
import { User } from "./Icons";
import { IoExitOutline } from "react-icons/io5";
import { ProductContext } from "../context/ProductContext";

const LogoutDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef: any = useRef(null);

  const { setOpenModal }: any = useContext(ProductContext);

  let user: any = JSON.parse(localStorage.getItem("user") as any);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <User setShowDropdown={setShowDropdown} />
      <div
        ref={menuRef}
        className={`${showDropdown ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} absolute left-[50%] z-999 flex translate-x-[-50%] flex-col items-center bg-white p-4 shadow shadow-gray-400 transition-opacity duration-300`}
      >
        <p className="whitespace-nowrap">
          Hello{" "}
          <span className="text-dark-orange">
            {user?.name ? user.name : user.email.split("@")[0]}
          </span>
        </p>
        <div className="bg-light-grey my-2 h-0.5 w-full" />
        <button
          onClick={() => setOpenModal(true)}
          className="flex cursor-pointer items-center gap-2 text-red-500"
        >
          <IoExitOutline size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutDropdown;
