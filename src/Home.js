import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First blog", body: "lorem ipsum", author: "Jhon", id: 1 },
    { title: "Second blog", body: "lorem ipsum", author: "Joe", id: 2 },
    { title: "Third blog", body: "lorem ipsum", author: "Joseph", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
