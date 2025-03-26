import SignupForm from "@/components/Auth/SignupForm";

export default function Login({}) {

  return (
    <div className="flex bg-fuchsia-500 w-full bg-theme text-theme h-screen justify-center">
      <div className="flex items-center justify-center w-1/2">
        <SignupForm />
      </div>
      <div className="flex flex-col items-center justify-center bg-violet-200 w-1/2">
        <p>Hundred of brands have chosen **name** to work smarter</p>
        <p>Brands carousel</p>
      </div>
    </div>
  )
}