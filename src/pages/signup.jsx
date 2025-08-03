import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register", formData, {
        withCredentials: true,
      });
      alert("User registered successfully");
    } catch (error) {
      alert("Error registering user");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 mx-auto gap-3"
    >
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
        className="border p-2"
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
        className="border p-2"
      />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        required
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
