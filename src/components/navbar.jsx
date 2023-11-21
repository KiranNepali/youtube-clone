import React from "react";
import logo from "../assets/favicon.ico";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar = () => {
  return (
    <div className="w-full bg-black text-white sticky top-0">
      <form
        action="
      "
      >
        <div className="flex items-center justify-between py-4 px-20 ">
          <div className="flex items-center justify-center gap-3">
            <img className="w-[20px]" src={logo} alt="logo" />
            <h2 className="font-bold tracking-wider text-md">KNtube</h2>
          </div>
          <div className="flex justify-center  text-center bg-white rounded-[5rem] overflow-hidden px-2">
            <input
              type="text"
              className="bg-white outline-none   text-black py-1"
            />
            <button>
              <SearchIcon className="bg-white text-red-400 " />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
