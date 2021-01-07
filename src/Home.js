import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First blog", body: "lorem ipsum", author: "Jhon", id: 1 },
    { title: "Second blog", body: "lorem ipsum", author: "Joe", id: 2 },
    { title: "Third blog", body: "lorem ipsum", author: "Joseph", id: 3 },
  ]);

  const handleDelete = (id) => {
    console.log("Hey");
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
