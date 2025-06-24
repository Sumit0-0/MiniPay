import { useState } from "react";
import Label from "../components/Label";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    const res = await fetch("http://localhost:3000/api/v1/signin", {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Token received:", data.token);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");

    } else {
      const error = await res.json();
      alert("Login failed: " + error.message);
      alert("Wrong email or password")
    }
  };

  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white max-w-[25vw] rounded-md border shadow-lg">
        <div className="mb-5 flex flex-col justify-center items-center mt-4">
          <div className="text-5xl font-bold mb-2">Sign In</div>
          <div className="text-[20px] text-gray-500 font-semibold text-center px-4">
            Enter your credentials to access your account
          </div>
        </div>

        <form onSubmit={handleSubmit} className="ml-6">
          <Label title="Email" />
           <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
          />

          <Label title="Password" />
           <input
            type="password"
            placeholder="123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
          />

          <button
            type="submit"
            className="bg-zinc-800 text-white w-[22vw] py-2 rounded-lg mt-4 text-2xl hover:bg-zinc-950 shadow-md"
          >
            Sign in
          </button>
        </form>

        <div className="ml-16 mb-5 mt-3 text-[18px] font-semibold">
          Don't have an account?
          <a href="/signup" className="ml-2">
            <u>Sign up</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
