import post1 from "../../assets/blog/post1.png";
import post2 from "../../assets/blog/post2.png";
import post3 from "../../assets/blog/post3.png";
import post4 from "../../assets/blog/post4.png";
import post5 from "../../assets/blog/post5.png";

const BlogPosts = () => {
  const postsData = [
    {
      image: post1,
      title: "Going all-in with millennial design",
    },
    {
      image: post2,
      title: "Exploring new ways of decorating",
    },
    {
      image: post3,
      title: "Handmade pieces that took time to make",
    },
    {
      image: post4,
      title: "Modern home in Milan",
    },
    {
      image: post5,
      title: "Colorful office redesign",
    },
  ];

  return (
    <div className="py-4 pr-16 pl-19">
      <h1 className="text-2xl font-medium">Recent Posts</h1>

      <div className="mt-6 flex flex-col gap-10">
        {postsData?.map((item) => {
          return (
            <div key={item?.title} className="flex items-center gap-3">
              <img  draggable={false} src={item?.image} alt="post" />

              <div>
                <p>{item?.title}</p>
                <span className="text-footer mt-1 text-sm">03 Aug 2022</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;
