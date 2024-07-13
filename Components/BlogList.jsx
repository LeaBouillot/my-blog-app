import React from "react";

//category
const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="px-4 py-1 text-white bg-black rounded-sm">
          All
        </button>
        <button>Technology</button>
        <button>StartUp</button>
        <button>LifeStyle</button>
      </div>
    </div>
  );
};

export default BlogList;
