import React, { useState } from "react";
import { useGetProductsQuery } from "../services/ApiSlice";
import Input from "../ui/Input";
import Label from "../ui/Label";

const Form = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);
  const [isLogin, setIsLogin] = useState(true);

  const changeMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <>
      <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
      <form>
        <Label labelId="name" title="Name" />
        <Input type="text" placeholder="Name" inputID="name" />
        <Label labelId="name" title="Name" />
        <Input type="text" placeholder="Name" inputID="name" />
        <button className="bg-red-400 rounded-lg p-4 w-[50%]">
          {isLogin ? "LogIn" : "SignUp"}
        </button>
        <button
          onClick={changeMode}
          className="bg-blue-400 rounded-lg p-4 w-[50%]"
        >
          {isLogin ? "Create New Account" : "LogIn to Existing Account"}
        </button>
      </form>
    </>
  );
};

export default Form;
