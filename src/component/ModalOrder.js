import React from "react";
import Button from "./Button";
import Input from "./Input";

const ModalOrder = ({ isOpenOrder, setOpen, data }) => {
  const handleOnclick = () => {
    setOpen(!isOpenOrder);
  };
  console.log(data);
  return (
    <div
      className={`bg-black-rgba fixed inset-0 z-21 flex items-center justify-center ${
        isOpenOrder ? "block" : "hidden"
      }`}
    >
      <div className="container w-full relative mx-auto bg-white rounded-lg">
        <span
          className="float-left text-2xl rounded-tl-lg cursor-pointer text-textPrimary hover:bg-[#eee] px-3 py-1"
          onClick={handleOnclick}
        >
          &times;
        </span>
        <div className="w-full mt-2 text-2xl text-center">Pesan Tiket</div>
        <form action="" className="px-5">
          <div className="w-full grid grid-cols-2 mb-5 mt-5 gap-3">
            <div className="">
              <label>Title: </label>
              <Input
                className="border w-full px-2 py-1 rounded-md focus:outline-none"
                readOnly={true}
                name={"title"}
                value={data.original_title}
              />
            </div>
            <div className="">
              <label>Studio: </label>
              <Input
                className="border w-full px-2 py-1 rounded-md focus:outline-none"
                name={"studio"}
              />
            </div>
            <div className="">
              <label>Name: </label>
              <Input
                className="border w-full px-2 py-1 rounded-md focus:outline-none"
                name={"name"}
              />
            </div>
            <div className="">
              <label>Qty: </label>
              <Input
                className="border w-full px-2 py-1 rounded-md focus:outline-none"
                name={"Quantity"}
                type={"number"}
              />
            </div>
          </div>
          <Button
            text={"Reserve"}
            className="bg-secondary w-full mb-2 text-white text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
