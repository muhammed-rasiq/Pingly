import React from 'react';
import { ArrowLeft, Archive, Search, MessageCircle } from "lucide-react";

function ArchivedChats() {
    const chats = [
    {
      name: "Anjali Menon",
      message: "See you tomorrow!",
      time: "10:30 AM",
      avatar: "A",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Weekend Gang",
      message: "Arun: Meeting at 6 PM",
      time: "Yesterday",
      avatar: "WG",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Rahul Kumar",
      message: "Thanks for sharing the files.",
      time: "Monday",
      avatar: "R",
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
              Archived Chats
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Your archived conversations
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-indigo-600 p-5 text-white">
          <div className="rounded-xl bg-white/20 p-3">
            <Archive size={25} />
          </div>

          <div>
            <h2 className="font-semibold">Keep your chats organized</h2>
            <p className="mt-1 text-sm text-indigo-100">
              Archived chats stay here until you move them back.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={19} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search archived chats..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Chat List */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">
              Archived Conversations
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
              {chats.length} chats
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {chats.map((chat) => (
              <div
                key={chat.name}
                className="flex items-center gap-3 py-4"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold ${chat.color}`}
                >
                  {chat.avatar}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {chat.time}
                    </span>
                  </div>

                  <p className="mt-1 truncate text-sm text-slate-500">
                    {chat.message}
                  </p>
                </div>

                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
                  <MessageCircle size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </>
  );
}

export default ArchivedChats;
