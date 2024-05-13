import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";
import Link from "next/link";

const Login = () => {
  return (
    <div className="py-16 contain">
      <div className="max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7">
        <h2 className="mb-1 text-2xl font-medium uppercase">Login</h2>
        <p className="mb-6 text-sm text-gray-600">welcome back customer</p>
        <LoginForm />
        <div className="relative flex justify-center mt-6">
          <div className="relative z-10 px-3 text-gray-600 uppercase bg-white">
            Or login with
          </div>
          <div className="absolute left-0 w-full border-b-2 border-gray-200 top-3"></div>
        </div>
        <SocialLogin />

        <p className="mt-4 text-center text-gray-600">
          Dont have account?{" "}
          <Link href="/en/register" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
