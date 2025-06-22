interface inputTypes{
  type: string;
  placeholder: string;
  name: string
}

const Input = (props: inputTypes) => {
  return (
    <div>
      <input 
      className="border-2 border-gray-200 w-[22vw] px-2 py-2 outline-none text-2xl rounded mb-3"
      type={props.type} placeholder={props.placeholder} required name={props.name} />
    </div>
  )
}

export default Input;