import React, { useContext, useState } from "react";
import { StepperContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Complete() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { userData, setUserData } = useContext(StepperContext);
  const nav = useNavigate('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can handle the file submission logic here
    if (selectedFile) {
      setUserData({ ...userData, file: selectedFile });
      console.log(selectedFile);
    }
    nav('/Home/submitted');
  };

  return (
    <div className="container mx-auto px-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col  rounded-lg shadow-lg p-5 m-5"
      >
        <input type="file" onChange={handleFileChange} className="mx-4" />
      </form>
      <div className="flex justify-center sm:justify-center">
        {/* <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button> */}
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
