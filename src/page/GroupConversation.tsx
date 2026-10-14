import React from 'react';
import {
  ArrowLeft,
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Image,
  Phone,
  Video,
  Users,
  CheckCheck,
  Plus,
} from "lucide-react";

function GroupConversation() {

    const messages = [
  {
    id: 1,
    sender: "Arun",
    avatar: "A",
    message: "Hey everyone! Welcome to our group 👋",
    time: "10:30 AM",
    own: false,
  },
  {
    id: 2,
    sender: "You",
    avatar: "Y",
    message: "Hey! Happy to be here.",
    time: "10:31 AM",
    own: true,
  },
  {
    id: 3,
    sender: "Meera",
    avatar: "M",
    message: "Shall we plan our weekend meetup?",
    time: "10:32 AM",
    own: false,
  },
  {
    id: 4,
    sender: "Arun",
    avatar: "A",
    message: "Sounds good! Saturday evening works for me.",
    time: "10:33 AM",
    own: false,
  },
  {
    id: 5,
    sender: "You",
    avatar: "Y",
    message: "Saturday evening works for me too 😊",
    time: "10:34 AM",
    own: true,
  },
];

const members = [
  { name: "Arun", color: "bg-violet-100 text-violet-700" },
  { name: "Meera", color: "bg-pink-100 text-pink-700" },
  { name: "Rahul", color: "bg-blue-100 text-blue-700" },
  { name: "You", color: "bg-emerald-100 text-emerald-700" },
];


  return (
    <>
    
    <div className="min-h-screen bg-slate-100 p-3 sm:p-6">
      <div className="mx-auto flex h-[calc(100vh-24px)] max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:h-[calc(100vh-48px)]">

        {/* LEFT SIDEBAR */}
        <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">

          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Messages
              </h1>
              <p className="mt-1 text-xs text-slate-500">
                Stay connected with everyone
              </p>
            </div>

            <button className="rounded-xl bg-indigo-600 p-2.5 text-white hover:bg-indigo-700">
              <Plus size={19} />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5">
              <Search size={17} className="text-slate-400" />
              <input
                placeholder="Search conversations..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto px-3">
            <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Recent chats
            </p>

            <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-indigo-50 p-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                WG
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    Weekend Gang
                  </p>
                  <span className="text-[10px] text-slate-400">10:34</span>
                </div>
                <p className="truncate text-xs text-slate-500">
                  You: Saturday evening works...
                </p>
              </div>
            </div>

            <div className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-700">
                DC
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Design Crew
                </p>
                <p className="mt-1 truncate text-xs text-slate-500">
                  Meera: Check the latest design
                </p>
              </div>
            </div>

            <div className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-700">
                FF
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">
                  Family Friends
                </p>
                <p className="mt-1 truncate text-xs text-slate-500">
                  Rahul: Thank you everyone!
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                Y
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Your Profile</p>
                <p className="text-xs text-slate-500">Available</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONVERSATION */}
        <main className="flex min-w-0 flex-1 flex-col">

          {/* CHAT HEADER */}
          <header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:px-6">

            <div className="flex min-w-0 items-center gap-3">
              <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden">
                <ArrowLeft size={20} />
              </button>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white shadow-sm">
                WG
              </div>

              <div className="min-w-0">
                <h2 className="truncate font-bold text-slate-900">
                  Weekend Gang
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                  <Users size={13} />
                  4 members · Group chat
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              <button
                aria-label="Voice call"
                className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
              >
                <Phone size={19} />
              </button>

              <button
                aria-label="Video call"
                className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
              >
                <Video size={20} />
              </button>

              <button
                aria-label="Search messages"
                className="hidden rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 sm:block"
              >
                <Search size={19} />
              </button>

              <button
                aria-label="More options"
                className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100"
              >
                <MoreVertical size={20} />
              </button>
            </div>
          </header>

          {/* GROUP MEMBERS */}
          <div className="flex items-center gap-3 border-b border-slate-100 bg-white px-5 py-3">
            <div className="flex -space-x-2">
              {members.map((member) => (
                <div
                  key={member.name}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold ${member.color}`}
                >
                  {member.name.charAt(0)}
                </div>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-700">
                Arun, Meera, Rahul and you
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Created for your conversations
              </p>
            </div>

            <button className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 sm:flex">
              <Users size={14} />
              View members
            </button>
          </div>

          {/* MESSAGES AREA */}
          <section className="flex-1 space-y-5 overflow-y-auto bg-slate-50/80 px-4 py-6 sm:px-6">

            <div className="flex justify-center">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-medium text-slate-500 shadow-sm">
                Today
              </span>
            </div>

            <div className="mx-auto max-w-md rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-center">
              <p className="text-xs leading-5 text-indigo-700">
                Welcome to Weekend Gang! Start sharing your thoughts and
                make plans together.
              </p>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2.5 ${
                  message.own ? "justify-end" : "justify-start"
                }`}
              >
                {!message.own && (
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      message.sender === "Arun"
                        ? "bg-violet-100 text-violet-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {message.avatar}
                  </div>
                )}

                <div
                  className={`max-w-[82%] sm:max-w-[70%] ${
                    message.own ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  {!message.own && (
                    <span className="mb-1 ml-1 text-xs font-semibold text-slate-600">
                      {message.sender}
                    </span>
                  )}

                  <div
                    className={`rounded-2xl px-4 py-3 shadow-sm ${
                      message.own
                        ? "rounded-br-md bg-indigo-600 text-white"
                        : "rounded-bl-md border border-slate-100 bg-white text-slate-800"
                    }`}
                  >
                    <p className="break-words text-sm leading-6">
                      {message.message}
                    </p>
                  </div>

                  <div
                    className={`mt-1 flex items-center gap-1 text-[10px] text-slate-400 ${
                      message.own ? "mr-1" : "ml-1"
                    }`}
                  >
                    <span>{message.time}</span>
                    {message.own && (
                      <CheckCheck size={13} className="text-indigo-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 pl-11">
              <div className="flex gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
              </div>
              <span className="text-xs text-slate-400">Meera is typing...</span>
            </div>
          </section>

          {/* MESSAGE INPUT — DESIGN ONLY */}
          <footer className="border-t border-slate-200 bg-white p-3 sm:p-5">
            <div className="mx-auto flex max-w-5xl items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50 sm:gap-3">

              <button
                aria-label="Attach file"
                className="shrink-0 rounded-xl p-2.5 text-slate-500 transition hover:bg-white hover:text-indigo-600"
              >
                <Paperclip size={20} />
              </button>

              <button
                aria-label="Add image"
                className="hidden shrink-0 rounded-xl p-2.5 text-slate-500 transition hover:bg-white hover:text-indigo-600 sm:block"
              >
                <Image size={20} />
              </button>

              <textarea
                rows={1}
                placeholder="Type your message..."
                className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-2 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                aria-label="Add emoji"
                className="hidden shrink-0 rounded-xl p-2.5 text-slate-500 transition hover:bg-white hover:text-indigo-600 sm:block"
              >
                <Smile size={20} />
              </button>

              <button
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
              >
                <Send size={18} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              Your conversations, all in one place.
            </p>
          </footer>
        </main>
      </div>
    </div>
    
    </>
  );
}

export default GroupConversation;
