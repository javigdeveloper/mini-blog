import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  const [name, setName] = useState("mario");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
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
