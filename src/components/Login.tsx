import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
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
            Ping<span className="text-indigo-600">ly</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Connect. Chat. Stay close.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-7 sm:p-8">

          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Sign in to continue to your account
            </p>
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
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />

            <span className="text-sm text-gray-500">
              Remember me
            </span>
          </div>

          {/* Login button */}
          <button
            type="button"
            className="w-full h-12 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 active:scale-[0.99] transition shadow-lg shadow-indigo-200"
          >
            Sign in
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
            <span className="font-bold text-lg">G</span>
            Continue with Google
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <button className="font-semibold text-indigo-600 hover:text-indigo-700">
            Create account
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;