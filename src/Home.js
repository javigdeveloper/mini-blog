import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First blog", body: "lorem ipsum", author: "Jhon", id: 1 },
    { title: "Second blog", body: "lorem ipsum", author: "Joe", id: 2 },
    { title: "Third blog", body: "lorem ipsum", author: "Joseph", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Jhon")}
        title="Jhon's blogs"
      />
    </div>
  );
};

export default Home;
