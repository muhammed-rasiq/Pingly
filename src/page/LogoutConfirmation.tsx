import React from 'react';
import { LogOut, X, ShieldCheck } from "lucide-react";

function LogoutConfirmation() {
  return (
    <>
    
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <LogOut size={30} />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-slate-800">
          Log Out?
        </h1>

        <p className="mt-3 leading-6 text-slate-500">
          Are you sure you want to log out of your account?
          You will need to sign in again to access your chats.
        </p>

        <div className="mt-8 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
            <X size={18} />
            Cancel
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700">
            <LogOut size={18} />
            Log Out
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
          <ShieldCheck size={16} />
          Your account is safe with us
        </div>
      </div>
    </div>
    
    </>
  );
}

export default LogoutConfirmation;
