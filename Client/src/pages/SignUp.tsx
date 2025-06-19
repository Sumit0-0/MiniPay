import Input from "../components/Input";
import Label from "../components/Label";

const SignUp = () => {
  return <div className="bg-blue-100 flex justify-center items-center w-full h-screen">
    <div className="bg-white border rounded-lg max-w-[25vw] shadow-lg">
      <div className="mb-5 flex flex-col justify-center items-center mt-4">
        <div className="text-5xl font-bold mb-2">Sign Up</div>
        <div className="text-[20px] text-gray-500 font-semibold text-center px-4">
        Enter your information to create an account
      </div>
      </div>
      <div>
          <form method="Post" className="pl-6">
            <div>
              <Label title={"First Name"} />
              <Input type={"text"} placeholder={"John"} />
            </div>
            <div>
             <Label title="Last Name" />
             <Input type={"text"} placeholder={"Doe"} />
            </div>
            <div>
              <Label title="Email" />
             <Input type={"email"} placeholder={"abc@gmail.com"} />
            </div>
            <div>
             <Label title="Password" />
             <Input type={"password"} placeholder={"123"} />
            </div>
            <button type="submit"
            className="bg-zinc-800 text-white w-[22vw] py-2 rounded-lg mt-4 text-2xl hover:bg-zinc-950 shadow-md">Sign in</button>
          </form>
      </div>
      <div className="ml-16 mb-5 mt-3 text-[18px] font-semibold">
        Already have an account? 
        <a href="" className="ml-2"><u>Sign in</u></a>
      </div>
    </div>
  </div>
};

export default SignUp