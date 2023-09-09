import React, { useEffect, useState } from "react";
import Spinner1 from "../components/Spinner1";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setposts(data);
    } catch (err) {
      console.log("Api not fetched");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div>
      {
        loading ? <Spinner1/> :
        posts.length > 0 ?
        (
          <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10">
            {posts.map((post) => {
          return <Product key={post.id} post={post} />;
        })}
          </div>
        ):
        (
          <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
        )
      }
    </div>
    
  );
};

export default Home;
