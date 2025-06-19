import Input from "../components/Input"
import Label from "../components/Label"

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white max-w-[25vw] rounded-md border shadow-lg">
        <div className="mb-5 flex flex-col justify-center items-center mt-4">
          <div className="text-5xl font-bold mb-2">Sign In</div>
          <div className="text-[20px] text-gray-500 font-semibold text-center px-4">Enter your credentials to access your account</div>
        </div>
        <div className="ml-6">
          <form>
            <div>
            <Label title="Email" />
            <Input type="email" placeholder="abc@gmail.com" />
            </div>
            <div>
              <Label title="Password" />
              <Input type="password" placeholder="123" />
            </div>
            <button type="submit"
            className="bg-zinc-800 text-white w-[22vw] py-2 rounded-lg mt-4 text-2xl hover:bg-zinc-950 shadow-md">Sign in</button>
          </form>
        </div>
        <div className="ml-16 mb-5 mt-3 text-[18px] font-semibold">
        Don't have an account? 
        <a href="" className="ml-2"><u>Sign up</u></a>
      </div>
      </div>
    </div>
  )
}

export default SignIn