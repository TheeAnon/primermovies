import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Activate = () => {
  return (
    <div className="flex flex-col justify-center w-auto p-4 ml-auto mr-auto space-y-5">
      <h1 className="normal-case text-2xl font-bold text-center ">
        Verify Your Account
      </h1>
      <div className="flex justify-center w-full">
        <button
          className="btn btn-outline btn-sm md:btn-md rounded-full ml-auto mr-auto"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Activate;
