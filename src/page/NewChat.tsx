import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Search,
  Plus,
  Users,
  UserRound,
  ChevronRight,
  Check,
} from "lucide-react";

function NewChat() {
  return (
    <>

     <div className="min-h-screen bg-[#f7f8fc] text-gray-900">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-lg font-bold">New Chat</h1>
              <p className="text-xs text-gray-500">
                Start a conversation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
              <MessageCircle size={20} className="text-white" />
            </div>
            <span className="hidden text-lg font-bold sm:block">
              Chatly
            </span>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">

        {/* Intro */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Connect with people
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Find a friend or create a group to start chatting.
          </p>
        </div>

        {/* Search */}
        <div className="mb-7 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">

          <label
            htmlFor="search-people"
            className="mb-3 block text-sm font-semibold text-gray-700"
          >
            Search people
          </label>

          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              id="search-people"
              type="text"
              placeholder="Search by name or email..."
              className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Search for people you want to connect with.
          </p>

        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Group Chat */}
          <button
            type="button"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-100">
              <Users size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold">Create a group</h3>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Bring your friends together in one chat.
              </p>
            </div>

            <ChevronRight
              size={19}
              className="shrink-0 text-gray-400"
            />
          </button>

          {/* Add Contact */}
          <button
            type="button"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-100">
              <Plus size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold">Add a contact</h3>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Discover and connect with new people.
              </p>
            </div>

            <ChevronRight
              size={19}
              className="shrink-0 text-gray-400"
            />
          </button>

        </div>

        {/* Contacts Section */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">

            <div>
              <h3 className="text-base font-bold">
                Suggested contacts
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                People you may want to chat with
              </p>
            </div>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              5 people
            </span>

          </div>

          {/* Contact 1 */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 sm:px-6">

            <div className="relative shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                AS
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                Alex Smith
              </h4>
              <p className="mt-1 truncate text-xs text-gray-500">
                alex.smith@example.com
              </p>
              <p className="mt-1 text-xs text-green-600">
                Online
              </p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-700 sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Message</span>
            </button>

          </div>

          {/* Contact 2 */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 sm:px-6">

            <div className="relative shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-700">
                EM
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                Emma Wilson
              </h4>
              <p className="mt-1 truncate text-xs text-gray-500">
                emma.wilson@example.com
              </p>
              <p className="mt-1 text-xs text-green-600">
                Online
              </p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Message</span>
            </button>

          </div>

          {/* Contact 3 */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 sm:px-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-700">
              MJ
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                Mike Johnson
              </h4>
              <p className="mt-1 truncate text-xs text-gray-500">
                mike.johnson@example.com
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Last seen recently
              </p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Message</span>
            </button>

          </div>

          {/* Contact 4 */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 sm:px-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              OL
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                Olivia Lee
              </h4>
              <p className="mt-1 truncate text-xs text-gray-500">
                olivia.lee@example.com
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Available
              </p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Message</span>
            </button>

          </div>

          {/* Contact 5 */}
          <div className="flex items-center gap-3 px-5 py-4 transition hover:bg-gray-50 sm:px-6">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-700">
              DW
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                Daniel White
              </h4>
              <p className="mt-1 truncate text-xs text-gray-500">
                daniel.white@example.com
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Available
              </p>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Message</span>
            </button>

          </div>

        </section>

        {/* Footer Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
          <UserRound size={19} className="mt-0.5 shrink-0 text-indigo-600" />
          <p className="text-xs leading-5 text-gray-600">
            Connect with people and start conversations. Contact details
            displayed here are sample data for the UI design.
          </p>
        </div>

        <p className="mt-8 pb-4 text-center text-xs text-gray-400">
          Chatly · Your conversations, your space.
        </p>

      </main>
    </div>
    
    </>
  );
}

export default NewChat;
