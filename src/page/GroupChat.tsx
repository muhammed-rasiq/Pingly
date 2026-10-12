import React from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Users,
  Camera,
  Search,
  Check,
  Plus,
  X,
  Image as ImageIcon,
  LockKeyhole,
} from "lucide-react";

function GroupChat() {
  return (
   <>
   
   <div className="min-h-screen bg-[#f7f8fc] text-gray-900">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-lg font-bold">Create Group</h1>
              <p className="text-xs text-gray-500">
                Bring everyone together
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
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">

        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Create your group
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Set up your group and choose the people you want to chat with.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">

          {/* Left Column */}
          <div className="space-y-6 lg:col-span-3">

            {/* Group Details */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-6">
                <h3 className="text-lg font-bold">Group details</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Give your group a name and a profile picture.
                </p>
              </div>

              {/* Group Avatar */}
              <div className="mb-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">

                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-600">
                  <Users size={38} />

                  <button
                    type="button"
                    aria-label="Upload group photo"
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700"
                  >
                    <Camera size={16} />
                  </button>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-semibold">
                    Group profile photo
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Add a photo so everyone can easily recognize the group.
                  </p>

                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    <ImageIcon size={15} />
                    Upload photo
                  </button>
                </div>

              </div>

              {/* Group Name */}
              <div className="mb-5">
                <label
                  htmlFor="group-name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Group name <span className="text-red-500">*</span>
                </label>

                <input
                  id="group-name"
                  type="text"
                  placeholder="e.g. College Friends"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Choose a name that describes your group.
                </p>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="group-description"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Description <span className="text-gray-400">(Optional)</span>
                </label>

                <textarea
                  id="group-description"
                  rows={3}
                  placeholder="What is this group about?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />

              </div>

            </section>

            {/* Add Members */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">Add members</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose people to add to your group.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Users size={20} />
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-5">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search by name or email..."
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              {/* Selected Members */}
              <div className="mb-5 rounded-xl bg-indigo-50/70 p-4">

                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">
                    Selected members
                  </p>
                  <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                    3 selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">

                  <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white py-1.5 pl-1.5 pr-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-[10px] font-bold text-pink-700">
                      AS
                    </div>
                    <span className="text-xs font-medium">Alex</span>
                    <X size={14} className="text-gray-400" />
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white py-1.5 pl-1.5 pr-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-[10px] font-bold text-purple-700">
                      EM
                    </div>
                    <span className="text-xs font-medium">Emma</span>
                    <X size={14} className="text-gray-400" />
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white py-1.5 pl-1.5 pr-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
                      MJ
                    </div>
                    <span className="text-xs font-medium">Mike</span>
                    <X size={14} className="text-gray-400" />
                  </div>

                </div>
              </div>

              {/* Contact List */}
              <div className="divide-y divide-gray-100">

                {/* Contact 1 */}
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-semibold text-pink-700">
                    AS
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">Alex Smith</p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      alex.smith@example.com
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check size={14} />
                  </div>
                </div>

                {/* Contact 2 */}
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">
                    EM
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">Emma Wilson</p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      emma.wilson@example.com
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check size={14} />
                  </div>
                </div>

                {/* Contact 3 */}
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                    MJ
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">Mike Johnson</p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      mike.johnson@example.com
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300" />
                </div>

                {/* Contact 4 */}
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                    OL
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">Olivia Lee</p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      olivia.lee@example.com
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300" />
                </div>

                {/* Contact 5 */}
                <div className="flex items-center gap-3 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                    DW
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">Daniel White</p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      daniel.white@example.com
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300" />
                </div>

              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                <Plus size={17} />
                Load more contacts
              </button>

            </section>

          </div>

          {/* Right Column: Preview */}
          <aside className="space-y-6 lg:col-span-2">

            {/* Group Preview */}
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="h-24 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500" />

              <div className="px-5 pb-6">

                <div className="-mt-10 flex items-end justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-indigo-50 text-indigo-600 shadow-sm">
                    <Users size={30} />
                  </div>

                  <span className="mb-1 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                    New group
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold">College Friends</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Our place to share memories, plans and updates.
                  </p>
                </div>

                <div className="my-5 border-t border-gray-100" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Group members</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Including you
                    </p>
                  </div>

                  <span className="text-lg font-bold text-indigo-600">4</span>
                </div>

                {/* Member Avatars */}
                <div className="mt-4 flex items-center">

                  <div className="z-40 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-[10px] font-bold text-indigo-700">
                    JD
                  </div>

                  <div className="-ml-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-pink-100 text-[10px] font-bold text-pink-700">
                    AS
                  </div>

                  <div className="-ml-2 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-[10px] font-bold text-purple-700">
                    EM
                  </div>

                  <div className="-ml-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-bold text-blue-700">
                    MJ
                  </div>

                </div>

                <p className="mt-4 text-xs leading-5 text-gray-500">
                  You're the group admin. You can manage group settings after
                  creating the group.
                </p>

              </div>
            </section>

            {/* Group Settings */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <h3 className="mb-4 text-base font-bold">Group settings</h3>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <LockKeyhole size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Private group</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Only invited members can participate in this conversation.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <Users size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Member permissions</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Group members can share messages, images and files.
                  </p>
                </div>
              </div>

            </section>

            {/* Create Button */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">

              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600">
                  <Users size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">Ready to connect?</h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your group is ready to bring everyone together.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                <Plus size={18} />
                Create group
              </button>

              <button
                type="button"
                className="mt-3 w-full rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Cancel
              </button>

            </div>

          </aside>

        </div>

        <p className="mt-8 pb-4 text-center text-xs text-gray-400">
          Chatly · Your conversations, your space.
        </p>

      </main>
    </div>
   
   </>
  );
}

export default GroupChat;
