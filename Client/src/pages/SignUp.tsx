import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      if (res.ok) {
        alert("Successfully registered!");
        navigate("/");
      } else {
        const data = await res.json();
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="bg-blue-100 flex justify-center items-center w-full h-screen">
      <div className="bg-white border rounded-lg max-w-[25vw] shadow-lg">
        <div className="mb-5 flex flex-col justify-center items-center mt-4">
          <div className="text-5xl font-bold mb-2">Sign Up</div>
          <div className="text-[20px] text-gray-500 font-semibold text-center px-4">
            Enter your information to create an account
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="pl-6">
            <div>
              <Label title="First Name" />
              <div>
                <input
                  className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
                  type="text"
                  placeholder="John"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label title="Last Name" />
              <div>
                <input
                  className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label title="Email" />
              <div>
                <input
                  className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
                  type="email"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label title="Password" />
              <div>
                <input
                  className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
                  type="password"
                  placeholder="123"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-zinc-800 text-white w-[22vw] py-2 rounded-lg mt-4 text-2xl hover:bg-zinc-950 shadow-md"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="ml-16 mb-5 mt-3 text-[18px] font-semibold">
          Already have an account?
          <a href="/" className="ml-2">
            <u>Sign in</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
