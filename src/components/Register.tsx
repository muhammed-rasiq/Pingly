import { useState } from "react";

function Register() {

    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
   <>
   <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-7">
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8M8 14h5m8-2a9 9 0 01-9 9 9.2 9.2 0 01-4.3-1.05L3 21l1.05-4.7A9 9 0 1112 21"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Join Chatly and start connecting
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-7 sm:p-8">

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full h-12 px-4 pr-16 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full h-12 px-4 pr-16 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 mb-6">
            <input
              type="checkbox"
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />

            <p className="text-xs leading-5 text-gray-500">
              I agree to the{" "}
              <button className="text-indigo-600 font-medium hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-indigo-600 font-medium hover:underline">
                Privacy Policy
              </button>
            </p>
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 active:scale-[0.99] transition shadow-lg shadow-indigo-200"
          >
            Create account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-xs text-gray-400">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full h-12 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-3"
          >
            <span className="font-bold text-lg">
              G
            </span>

            Continue with Google
          </button>
        </div>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button className="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign in
          </button>
        </p>

      </div>
    </div>
   
   </>
  );
}

export default Register;
