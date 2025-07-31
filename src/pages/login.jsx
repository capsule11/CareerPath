import { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/login", credentials);
      alert("Logged in successfully");
    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto gap-3">
      <input name="email" onChange={handleChange} placeholder="Email" required className="border p-2" />
      <input name="password" onChange={handleChange} type="password" placeholder="Password" required className="border p-2" />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
    </form>
  );
}

export default Login;
