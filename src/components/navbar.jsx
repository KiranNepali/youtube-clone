import React, { useState } from "react";
import logo from "../assets/favicon.ico";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <div className="w-full bg-black text-white sticky top-0 z-10">
      <form action="" onSubmit={onhandleSubmit}>
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-5 gap-5 sm:gap-0 sm:px-20 ">
          <Link to="/">
            <div className="flex items-center justify-center gap-3">
              <img className="w-[20px]" src={logo} alt="logo" />
              <h2 className="font-bold tracking-wider text-md">KNtube</h2>
            </div>
          </Link>
          <div className="flex justify-center  text-center bg-white rounded-[5rem] overflow-hidden px-2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
