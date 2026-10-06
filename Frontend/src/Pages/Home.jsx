import React from "react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <>
      <button onClick={() => toast.success("Done")} className="btn btn-primary">
        Click
      </button>
      <button onClick={() => toast.success("Done")} className="btn btn-neutral">
        Click
      </button>
    </>
  );
};

export default Home;
