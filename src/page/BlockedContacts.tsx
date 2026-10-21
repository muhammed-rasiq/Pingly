import React from 'react';
import { ArrowLeft, ShieldBan, Search, UserRound, Ban } from "lucide-react";

function BlockedContacts() {
    const contacts = [
    {
      name: "Rahul Kumar",
      username: "@rahul_k",
      avatar: "R",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Arun Das",
      username: "@arun_das",
      avatar: "A",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Vishnu Raj",
      username: "@vishnu_r",
      avatar: "V",
      color: "bg-purple-100 text-purple-600",
    },
  ];
  return (
    <>
    

     <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <button className="rounded-xl border bg-white p-2.5 text-slate-600">
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Blocked Contacts
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage your blocked contacts
            </p>
          </div>
        </div>

        {/* Information Card */}
        <div className="mb-6 flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-5">
          <div className="rounded-xl bg-red-100 p-3 text-red-600">
            <ShieldBan size={24} />
          </div>

          <div>
            <h2 className="font-semibold text-red-800">
              Your privacy matters
            </h2>
            <p className="mt-1 text-sm leading-6 text-red-700">
              Blocked contacts cannot contact you through messages or calls.
              You can manage your blocked list here.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={19} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search blocked contacts..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Contacts List */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">
              Blocked List
            </h2>

            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
              {contacts.length} contacts
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {contacts.map((contact) => (
              <div
                key={contact.username}
                className="flex items-center gap-3 py-4"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${contact.color}`}
                >
                  {contact.avatar}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-800">
                    {contact.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {contact.username}
                  </p>
                </div>

                <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                  <UserRound size={16} />
                  <span>Unblock</span>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400">
            <Ban size={15} />
            Only you can see your blocked contacts.
          </div>
        </div>

      </div>
    </div>
    
    
    
    </>
  );
}

export default BlockedContacts;
