import React from "react";
import data from "../../data/category.json";

function Category() {
  return (
    <div className="container mx-auto">
      <h3 className="md:text-4xl text-3xl text-white text-center mb-3">
        Category
      </h3>
      <div className="md:text-sm text-xs text-textPrimary text-center mb-5">
        The Most Up-To-Date And Complete Archive Of Movies And Series
      </div>
      <div className="grid md:grid-cols-6 md:gap-10 grid-cols-3 grid-rows-2">
        {data.map((categories, index) => {
          return (
            <div className="md:w-1/2 w-14 m-auto" key={index}>
              <img
                src={categories.path}
                alt="category"
                className="w-full object-fill"
              />
              <div className="md:text-lg text-sm text-white text-center mt-3">
                {categories.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
