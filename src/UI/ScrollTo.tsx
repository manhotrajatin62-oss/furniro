import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ScrollTo = () => {
  const [show, setShow] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }

      if (scrollTop + windowHeight >= documentHeight - 10) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollHandler = () => {
    if (atBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollHandler}
      className="bg-dark-orange z-98 fixed right-10 bottom-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg text-white shadow-lg transition hover:scale-105"
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {atBottom ? <IoIosArrowUp/> : <IoIosArrowDown/>}
    </button>
  );
};

export default ScrollTo;
