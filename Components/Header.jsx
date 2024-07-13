import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 px-3 py-1 font-medium border border-black border-solid shadow-[-7px_7px_0px_#9090C0] ">
          Get Started
          <Image src={assets.arrow} width={12} />
        </button>
      </div>
      <div className="my-8 text-center">
        <h1 className="text-3xl font-medium sm:text-5xl">Dernier Blog</h1>
        <p className="mt-10 max-w-[740] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          fuga alias animi? Ex nisi provident eum eligendi voluptas quo, ut
          praesentium assumenda molestias vitae similique aliquid tempora
          voluptates sequi earum?
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#9090C0]"
          action=""
        >
          <input
            type="email"
            placeholder="Entrez votre email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="px-4 py-4 border-black border-1 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
