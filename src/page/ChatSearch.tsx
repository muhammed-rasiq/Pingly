import React from 'react';
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Users,
  Clock,
} from "lucide-react";

function ChatSearch() {

    const results = [
    {
      name: "Anjali Menon",
      message: "Hey, how are you?",
      time: "10:30 AM",
      type: "Contact",
      icon: "A",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Weekend Gang",
      message: "Arun: Let's meet this Saturday!",
      time: "Yesterday",
      type: "Group",
      icon: "WG",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Rahul Kumar",
      message: "I'll send you the files soon.",
      time: "Yesterday",
      type: "Contact",
      icon: "R",
      color: "bg-emerald-100 text-emerald-600",
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
              Search Chats
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Find contacts, groups and messages
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-indigo-400">
          <Search size={21} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search messages or contacts..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Search Filters */}
        <div className="my-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-full border bg-white px-5 py-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <MessageCircle size={15} />
              Messages
            </span>
          </button>

          <button className="rounded-full border bg-white px-5 py-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Users size={15} />
              Contacts & Groups
            </span>
          </button>
        </div>

        {/* Recent Searches */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 font-semibold text-slate-800">
            Recent Searches
          </h2>

          <div className="flex flex-wrap gap-3">
            {["Anjali", "Weekend Gang", "Project files"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600"
              >
                <Clock size={14} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">
              Suggested Results
            </h2>
            <span className="text-xs text-slate-400">
              3 results
            </span>
          </div>

          <div className="space-y-2">
            {results.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {item.time}
                    </span>
                  </div>

                  <p className="mt-1 truncate text-sm text-slate-500">
                    {item.message}
                  </p>

                  <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  
  </>
  );
}

export default ChatSearch;
