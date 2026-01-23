import blog1 from "../../assets/blog/blog1.jpg";
import blog2 from "../../assets/blog/blog2.png";
import blog3 from "../../assets/blog/blog3.jpg";
import { Admin, Calender, Tag } from "../../components/Icons";


const BlogSection = () => {

     const blogData = [
    {
      image: blog1,
      heading: "Going all-in with millennial design",
      tag: "Wood",
    },
    {
      image: blog2,
      heading: "Exploring new ways of decorating",
      tag: "Handmade",
    },
    {
      image: blog3,
      heading: "Handmade pieces that took time to make",
      tag: "Wood",
    },
  ];

  return (
    <div className="flex md:w-100 lg:w-150 xl:w-190 flex-col gap-13">
          {blogData?.map((item) => {
            return (
              <div key={item?.heading}>
                <img draggable={false}
                  className="h-full w-full rounded-lg object-cover"
                  src={item?.image}
                  alt="blog"
                />

                <div className="mt-4 flex text-xs sm:text-sm lg:text-base whitespace-nowrap items-center gap-4 sm:gap-9">
                  <div className="flex items-center gap-2">
                    <Admin />
                    <p className="text-footer">Admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calender />
                    <p className="text-footer">14 Oct 2022</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag />
                    <p className="text-footer">{item?.tag}</p>
                  </div>
                </div>

                <h1 className="mt-4 text-2xl xl:text-3xl font-medium">{item?.heading}</h1>

                <p className="text-footer mt-3 text-justify text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>

                <div className="w-fit">
                  <button className="mt-7 cursor-pointer">Read more</button>
                  <hr className="mx-auto mt-3 w-[85%]" />
                </div>
              </div>
            );
          })}
        </div>
  )
}

export default BlogSection