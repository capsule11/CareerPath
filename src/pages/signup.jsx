import { useState } from "react";
import axios from "axios";
import { User, Mail, Lock, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 relative overflow-hidden">
      <div className="relative group">
        <div className="flex flex-col py-14 items-center space-x-3 glass rounded-4xl px-6 shadow-glass border border-white/20">
          <div className="text-5xl font-bold gradient-text mb-3 pb-6">
            Join the Movement
          </div>
          <div className="text-gray-400 w-9/12 text-lg pb-6 text-wrap text-center">
            Create your account to explore career paths, gain valuable tools,
            and take that first meaningful step toward your future.
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 w-full pl-24"
          >
            <div className="space-y-3">
              <label
                htmlFor="name"
                className="text-white font-semibold text-base"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-gray-400 z-10" />
                <input
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="pl-12 w-5/6 h-14 border-2 border-black focus:border-blue-500 transition-all duration-300 rounded-xl bg-white backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="email"
                className="text-white font-semibold text-base"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400 z-10" />
                <input
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                  className="pl-12 w-5/6 h-14 border-2 border-black focus:border-blue-500 transition-all duration-300 rounded-xl bg-white backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="password"
                className="text-white font-semibold text-base"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400 z-10" />
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter your Password"
                  required
                  className="pl-12 pr-14 w-5/6 h-14 border-2 border-slate-200 focus:border-blue-500 transition-all duration-300 rounded-xl bg-white backdrop-blur-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-5/6 h-14 glass-button bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 font-bold rounded-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Create Account
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
          <div className="mt-8 text-center flex justify-center gap-8">
            <Link
              href="/"
              className="text-sm text-slate-300 hover:text-white flex items-center gap-2 font-semibold transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/assessment"
              className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-2 font-semibold transition-colors group"
            >
              Take Assessment
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
