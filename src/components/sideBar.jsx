import React from "react";
import { categories } from "../../utils/constants";

export const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {/* category */}
      <div
        className="flex flex-col col-span-1  
          px-4 border-r-[1px]   overflow-y-auto border-gray-600 "
      >
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            className="category-btn  flex  justify-start text-center ml-5 items-center  py-2 px-2 gap-2  mb-1 rounded-[5rem] "
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
              className="text-sm font-medium tracking-wide"
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>
      {/* category ends  */}
    </>
  );
};
