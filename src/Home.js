import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    console.log("Hey");
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
      <h1>The name is {name}</h1>
      <button
        onClick={() => {
          let names = [
            "Jhon",
            "Lewis",
            "Justin",
            "Lance",
            "Jules",
            "Jhonathan",
            "Robert",
            "Greg",
          ];
          setName(names[Math.floor(Math.random() * names.length)]);
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default Home;
