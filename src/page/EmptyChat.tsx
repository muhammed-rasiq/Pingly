import React from 'react';
import {
  MessageCircle,
  Users,
  ShieldCheck,
} from "lucide-react";

function EmptyChat() {
  return (
    <>
    
     <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-lg text-center">
        <div className="relative mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-blue-100">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
            <MessageCircle size={48} />
          </div>

          <div className="absolute right-1 top-3 rounded-full bg-white p-3 text-blue-600 shadow">
            <Users size={22} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
          Your Conversations Start Here
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
          Select a conversation from your chat list or
          start a new chat with your friends and family.
        </p>

        <button className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Start New Chat
        </button>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">
          <ShieldCheck size={18} />
          <span>Your conversations, your privacy.</span>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default EmptyChat;
