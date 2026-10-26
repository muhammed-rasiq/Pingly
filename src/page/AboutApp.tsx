import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Users,
  Heart,
  ChevronRight,
} from "lucide-react";

function AboutApp() {
  return (
    <>
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-2xl">
        <button className="mb-8 flex items-center gap-2 text-slate-600 hover:text-blue-600">
          <ArrowLeft size={20} />
          Back to Settings
        </button>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-white">
            <MessageCircle size={42} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-800">
            ChatApp
          </h1>

          <p className="mt-2 text-slate-500">
            Connect. Chat. Stay Together.
          </p>

          <span className="mt-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Version 1.0.0
          </span>

          <p className="mx-auto mt-6 max-w-md leading-7 text-slate-600">
            ChatApp helps you stay connected with friends
            and family through personal messages and group
            conversations in one simple place.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          {[
            {
              icon: ShieldCheck,
              title: "Privacy & Security",
              desc: "Your privacy matters",
            },
            {
              icon: Users,
              title: "Our Community",
              desc: "Stay connected with everyone",
            },
            {
              icon: Heart,
              title: "Made with Care",
              desc: "Designed for better conversations",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0"
            >
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <item.icon size={22} />
              </div>

              <div className="flex-1">
                <h2 className="font-medium text-slate-800">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {item.desc}
                </p>
              </div>

              <ChevronRight size={18} className="text-slate-400" />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          <p>Terms of Service · Privacy Policy</p>
          <p className="mt-2">
            © 2026 ChatApp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default AboutApp;
