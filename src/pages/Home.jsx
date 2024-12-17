import React, { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

      console.log("YOUR DATA IS : ", data);
    } catch (error) {
      console.log("YOUR ERROR IS WHEN FETCH API : ", error);
      setPosts([]);
    }

    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">No Data Found</div>
      )}
    </div>
  );
}

export default Home;
