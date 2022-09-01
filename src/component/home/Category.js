import React from "react";
import data from "../../data/category.json";

function Category() {
  return (
    <div className="container mx-auto">
      <h3 className="text-4xl text-white text-center mb-3">Category</h3>
      <div className="text-sm text-textPrimary text-center mb-5">
        The Most Up-To-Date And Complete Archive Of Movies And Series
      </div>
      <div className="grid grid-cols-6 gap-10">
        {data.map((categories, index) => {
          return (
            <div className="w-1/2 m-auto" key={index}>
              <img
                src={categories.path}
                alt="category"
                className="w-full object-fill"
              />
              <div className="text-lg text-white text-center mt-3">
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
