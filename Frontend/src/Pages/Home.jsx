import React from "react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <>
      <button onClick={() => toast.success("Done")}>Click</button>
    </>
  );
};

export default Home;
