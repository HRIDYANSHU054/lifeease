import Link from "next/link";

function LoginPage() {
  return (
    <div className="absolute-centering flex flex-col min-w-[36rem] py-6 pb-10 px-8 text-slate-800 bg-gray-200 rounded-md shadow-md ">
      <h1 className="uppercase text-3xl text-center font-medium  mb-4">
        Login
      </h1>

      <form className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3 "
            required
          />
        </div>

        <div className="flex justify-between my-2">
          {" "}
          <p className="text-sm font-light text-gray-500 ">Not a member?</p>
          <Link
            href="register"
            className="font-medium text-slate-800 hover:underline"
          >
            Register here
          </Link>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
