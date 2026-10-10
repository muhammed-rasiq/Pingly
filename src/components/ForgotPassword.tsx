import React from 'react';
import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Mail,
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function ForgotPassword() {

    const [email, setEmail] = useState("");
  return (
    <>
    

    <div className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Back to Login */}
        <button
          type="button"
          className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to login
        </button>

        {/* Logo */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200">
            <MessageCircle size={30} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Forgot password?
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
            No worries! Enter the email address associated with your account
            and we'll help you reset your password.
          </p>

        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">

          {/* Icon */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <LockKeyhole size={23} />
          </div>

          <h2 className="text-lg font-bold text-gray-900">
            Reset your password
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            We'll send password reset instructions to your email address.
          </p>

          {/* Email Input */}
          <div className="mt-7">

            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <div className="relative">

              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />

            </div>

          </div>

          {/* Submit Button - UI Only */}
          <button
            type="button"
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
          >
            Send reset instructions
            <ArrowRight size={18} />
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs text-gray-400">
              SECURE ACCOUNT RECOVERY
            </span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          {/* Security Info */}
          <div className="flex items-start gap-3 rounded-xl bg-indigo-50/70 p-4">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-indigo-600"
            />

            <p className="text-xs leading-5 text-gray-600">
              Your account security matters. Never share your password or
              reset link with anyone.
            </p>

          </div>

        </div>

        {/* Footer */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Remember your password?{" "}
          <button
            type="button"
            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            Sign in
          </button>
        </p>

        <p className="mt-8 text-center text-xs text-gray-400">
          © 2026 Chatly. All rights reserved.
        </p>

      </div>

    </div>
  
    
    </>
  );
}

export default ForgotPassword;
