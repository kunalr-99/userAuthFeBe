import React, { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const apiData = await axios.get("http://localhost:4000/users/");
      console.log(apiData.data);
    };
    getApiData();
    console.log("from use effect");
  }, [database]);

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
    setDatabase([...database, data]);
    await axios.post("http://localhost:4000/users/register", data);
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
      <div>
        {database.map((elem) => {
          return (
            <div key={elem.email}>
              <div>{elem.email}</div>
              <div>{elem.password}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Register;
