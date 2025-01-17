import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";

//utiliser props à la place de  {blog_data[0].image}
const BlogItems = ({ title, description, category, image }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#9090C0]">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p className="inline-block px-1 mt-5 ml-5 text-sm text-white bg-black ">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight test-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight test-gray-700">
          {description}
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
          Lire plus{" "}
          <Image src={assets.arrow} className="ml-2" width={12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
