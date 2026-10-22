import React from 'react';
import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  Fingerprint,
  KeyRound,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

function PrivacySecurity() {
  return (
   <>
   <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">
        <button className="mb-6 flex items-center gap-2 text-slate-600 hover:text-blue-600">
          <ArrowLeft size={20} />
          Back to Settings
        </button>

        <div className="mb-8">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ShieldCheck size={30} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">
            Privacy & Security
          </h1>
          <p className="mt-2 text-slate-500">
            Manage your privacy and keep your account secure.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 font-semibold text-slate-800">
            Security
          </h2>

          {[
            {
              icon: LockKeyhole,
              title: "Change Password",
              desc: "Update your account password",
            },
            {
              icon: Fingerprint,
              title: "Two-Step Verification",
              desc: "Add an extra layer of security",
            },
            {
              icon: KeyRound,
              title: "Active Sessions",
              desc: "Manage your logged-in devices",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex cursor-pointer items-center gap-4 border-b border-slate-100 py-4 last:border-0"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <item.icon size={21} />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {item.desc}
                </p>
              </div>

              <ChevronRight size={20} className="text-slate-400" />
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 font-semibold text-slate-800">
            Privacy
          </h2>

          {[
            {
              title: "Profile Visibility",
              desc: "Control who can view your profile",
            },
            {
              title: "Read Receipts",
              desc: "Let others know when you read messages",
            },
            {
              title: "Online Status",
              desc: "Show when you are active",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0"
            >
              <div className="flex-1">
                <h3 className="font-medium text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {item.desc}
                </p>
              </div>

              <div
                className={`flex h-6 w-11 items-center rounded-full p-1 ${
                  index === 0
                    ? "justify-start bg-slate-300"
                    : "justify-end bg-blue-600"
                }`}
              >
                <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <Eye className="mt-1 text-blue-600" size={22} />
          <div>
            <h3 className="font-medium text-blue-900">
              Your Privacy Matters
            </h3>
            <p className="mt-1 text-sm text-blue-700">
              Your personal information and conversations
              should remain private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
}

export default PrivacySecurity;
