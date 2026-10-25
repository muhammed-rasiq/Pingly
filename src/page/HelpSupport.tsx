import React from 'react';
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Mail,
  FileText,
  ChevronRight,
  Search,
} from "lucide-react";

function HelpSupport() {
  return (
    <>
    
     <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">
        <button className="mb-6 flex items-center gap-2 text-slate-600">
          <ArrowLeft size={20} />
          Back to Settings
        </button>

        <h1 className="text-3xl font-bold text-slate-800">
          Help & Support
        </h1>
        <p className="mt-2 text-slate-500">
          How can we help you today?
        </p>

        <div className="mt-6 flex items-center gap-3 rounded-xl border bg-white px-4 py-3">
          <Search className="text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: HelpCircle,
              title: "Frequently Asked Questions",
              desc: "Find answers to common questions",
            },
            {
              icon: MessageCircle,
              title: "Chat with Support",
              desc: "Get help with your account",
            },
            {
              icon: Mail,
              title: "Email Support",
              desc: "Send us your questions",
            },
            {
              icon: FileText,
              title: "Help Center",
              desc: "Read guides and tutorials",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <item.icon size={24} />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-slate-800">
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

        <div className="mt-8 rounded-2xl bg-blue-600 p-6 text-white">
          <h2 className="text-xl font-semibold">
            Still need help?
          </h2>
          <p className="mt-2 text-sm text-blue-100">
            Our support team is here to help you with any issues.
          </p>
          <button className="mt-5 rounded-lg bg-white px-5 py-2.5 font-medium text-blue-600 hover:bg-blue-50">
            Contact Support
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          ChatApp Help Center · We are here for you
        </p>
      </div>
    </div>
    
    </>
  );
}

export default HelpSupport;
