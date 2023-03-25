import React, { useEffect, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useState(true);
  // const [database, setDatabase] = useState([]);

  // useEffect(() => {
  //   const getApiData = async () => {
  //     const apiData = await axios.get("http://localhost:4000/users/");
  //     console.log(apiData.data);
  //   };
  //   getApiData();
  // }, [database]);

  let name, val;
  const inputHandler = (e) => {
    e.preventDefault();
    name = e.target.name;
    val = e.target.value;
    setData({
      ...data,
      [name]: val,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // setDatabase([...database, data]);
    const apiData = await axios.post(
      "http://localhost:4000/users/signin",
      data
    );
    if (apiData.data === "access granted") setAuth(false);
    setData({ email: "", password: "" });
  };
  return (
    <div>
      <form action="#">
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={inputHandler}
          value={data.email}
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={inputHandler}
          value={data.password}
        />
        <input type="submit" value="Register" onClick={submitHandler} />
      </form>
      {!auth && <div>Access Granted</div>}
    </div>
  );
};

export default SignIn;
