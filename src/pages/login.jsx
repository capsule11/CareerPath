import { useState } from "react";
import axios from "axios";
import { Mail, Lock, ChevronRight } from "lucide-react";

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
    <div className="min-h-10 flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 p-6 relative overflow-hidden">
      <div>
        <div className="text-center pb-8 relative">
          <div className="text-3xl font-bold text-slate-900 mb-3">
            Welcome Back
          </div>
          <div className="text-slate-600 text-lg">
            Sign in to your account or create a new one to get started on your
            career journey
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-3">
            <label
              htmlFor="email"
              className="text-slate-700 font-semibold text-base"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-700" />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                className="pl-12 w-full h-14 border-2 border-slate-200 focus:border-blue-500 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="password"
              className="text-slate-700 font-semibold text-base"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 h-5 w-5 text-black" />
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter your Password"
                required
                className="pl-12 pr-14 w-full h-14 border-2 border-slate-200 focus:border-blue-500 transition-all duration-300 rounded-xl bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Forgot password?
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-slate-600 via-zinc-600 to-neutral-600
hover:from-slate-700 hover:via-zinc-700 hover:to-neutral-700
 text-white border-0 shadow-2xl hover:shadow-3xl shadow-blue-500/25 transition-all duration-300 font-bold rounded-xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              Sign In
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
