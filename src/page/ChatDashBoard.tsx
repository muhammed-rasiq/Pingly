import React from 'react';
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Send,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Mic,
  CheckCheck,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";


function ChatDashBoard() {
  return (
   <>
   
    <div className="h-screen bg-[#f7f8fc] flex overflow-hidden">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-[340px] bg-white border-r border-gray-200 flex flex-col">

        {/* Sidebar Header */}
        <div className="h-[76px] px-5 flex items-center justify-between border-b border-gray-100">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>

            <div>
              <h1 className="font-bold text-gray-900 text-lg">
                Chatly
              </h1>

              <p className="text-xs text-gray-400">
                Messages
              </p>
            </div>
          </div>

          <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500">
            <Plus size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-gray-100 border border-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50"
            />
          </div>
        </div>

        {/* Conversation Tabs */}
        <div className="px-4 pb-3 flex gap-2">
          <button className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium">
            All
          </button>

          <button className="px-4 py-1.5 rounded-lg text-gray-500 text-xs font-medium hover:bg-gray-100">
            Unread
          </button>

          <button className="px-4 py-1.5 rounded-lg text-gray-500 text-xs font-medium hover:bg-gray-100">
            Groups
          </button>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-2">

          {/* Active Chat */}
          <div className="mx-2 p-3 rounded-xl bg-indigo-50 flex items-center gap-3 cursor-pointer">

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
                JD
              </div>

              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-900">
                  John Doe
                </h3>

                <span className="text-[11px] text-indigo-500">
                  10:42 PM
                </span>
              </div>

              <p className="text-xs text-gray-500 truncate mt-1">
                Sure, I'll send it to you.
              </p>
            </div>
          </div>

          {/* Chat 2 */}
          <div className="mx-2 p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 cursor-pointer">

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">
                AS
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-800">
                  Alex Smith
                </h3>

                <span className="text-[11px] text-gray-400">
                  9:35 PM
                </span>
              </div>

              <p className="text-xs text-gray-500 truncate mt-1">
                See you tomorrow!
              </p>
            </div>

            <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center">
              2
            </span>
          </div>

          {/* Chat 3 */}
          <div className="mx-2 p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 cursor-pointer">

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                EM
              </div>

              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-800">
                  Emma Wilson
                </h3>

                <span className="text-[11px] text-gray-400">
                  Yesterday
                </span>
              </div>

              <p className="text-xs text-gray-500 truncate mt-1">
                That sounds great!
              </p>
            </div>
          </div>

          {/* Chat 4 */}
          <div className="mx-2 p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 cursor-pointer">

            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
              MK
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-800">
                  Mike Johnson
                </h3>

                <span className="text-[11px] text-gray-400">
                  Yesterday
                </span>
              </div>

              <p className="text-xs text-gray-500 truncate mt-1">
                Can you check this?
              </p>
            </div>
          </div>

          {/* Chat 5 */}
          <div className="mx-2 p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 cursor-pointer">

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
              OL
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-800">
                  Olivia Lee
                </h3>

                <span className="text-[11px] text-gray-400">
                  Monday
                </span>
              </div>

              <p className="text-xs text-gray-500 truncate mt-1">
                Thank you!
              </p>
            </div>
          </div>

        </div>

        {/* Sidebar Bottom */}
        <div className="p-3 border-t border-gray-100">

          <div className="p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
              YO
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                Your Profile
              </h3>

              <p className="text-xs text-gray-400">
                Online
              </p>
            </div>

            <Settings size={18} className="text-gray-400" />
          </div>

        </div>
      </aside>


      {/* ================= CHAT AREA ================= */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Chat Header */}
        <header className="h-[76px] bg-white border-b border-gray-200 px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
                JD
              </div>

              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                John Doe
              </h2>

              <p className="text-xs text-green-500 mt-0.5">
                Online
              </p>
            </div>

          </div>

          <div className="flex items-center gap-1">

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <Phone size={19} />
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <Video size={20} />
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <Search size={19} />
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <MoreVertical size={20} />
            </button>

          </div>
        </header>


        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-[#fafbfe]">

          {/* Date */}
          <div className="flex justify-center mb-6">
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-400">
              Today
            </span>
          </div>


          {/* Received Message */}
          <div className="flex items-end gap-2 mb-4">

            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">
              JD
            </div>

            <div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm text-gray-700 leading-6">
                  Hey! How are you doing?
                </p>
              </div>

              <p className="text-[10px] text-gray-400 mt-1 ml-1">
                10:38 PM
              </p>
            </div>

          </div>


          {/* Sent Message */}
          <div className="flex justify-end mb-4">

            <div>
              <div className="bg-indigo-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm leading-6">
                  I'm doing great! How about you?
                </p>
              </div>

              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-gray-400">
                  10:39 PM
                </span>

                <CheckCheck size={14} className="text-indigo-500" />
              </div>
            </div>

          </div>


          {/* Received Message */}
          <div className="flex items-end gap-2 mb-4">

            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">
              JD
            </div>

            <div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm text-gray-700 leading-6">
                  I'm good! Are you free tomorrow?
                </p>
              </div>

              <p className="text-[10px] text-gray-400 mt-1 ml-1">
                10:40 PM
              </p>
            </div>

          </div>


          {/* Sent Message */}
          <div className="flex justify-end mb-4">

            <div>
              <div className="bg-indigo-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm leading-6">
                  Yes, I'm free after 6 PM.
                </p>
              </div>

              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-gray-400">
                  10:41 PM
                </span>

                <CheckCheck size={14} className="text-indigo-500" />
              </div>
            </div>

          </div>


          {/* Received */}
          <div className="flex items-end gap-2">

            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">
              JD
            </div>

            <div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm text-gray-700 leading-6">
                  Perfect! I'll send you the details.
                </p>
              </div>

              <p className="text-[10px] text-gray-400 mt-1 ml-1">
                10:42 PM
              </p>
            </div>

          </div>

        </div>


        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">

          <div className="max-w-5xl mx-auto flex items-center gap-2">

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <Paperclip size={20} />
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <ImageIcon size={20} />
            </button>

            <div className="flex-1 relative">

              <input
                type="text"
                placeholder="Type a message..."
                className="w-full h-12 px-4 pr-12 rounded-xl bg-gray-100 border border-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50"
              />

              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Smile size={20} />
              </button>

            </div>

            <button className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 shadow-lg shadow-indigo-200">
              <Send size={19} />
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
              <Mic size={20} />
            </button>

          </div>

        </div>

      </main>

    </div>
   
   </>
  );
}

export default ChatDashBoard;
