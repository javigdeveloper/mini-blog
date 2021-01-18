import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    console.log("Hey");
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
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
