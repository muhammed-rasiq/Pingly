import React from 'react';
import {
  Bell,
  MessageCircle,
  Users,
  Phone,
  CheckCheck,
  Settings,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react";

function Notifications() {

    const notifications = [
    {
      title: "New Message",
      message: "Anjali sent you a message.",
      time: "2 min ago",
      icon: <MessageCircle size={20} />,
      color: "bg-blue-100 text-blue-600",
      unread: true,
    },
    {
      title: "Group Invitation",
      message: "Arun invited you to Weekend Gang.",
      time: "15 min ago",
      icon: <Users size={20} />,
      color: "bg-purple-100 text-purple-600",
      unread: true,
    },
    {
      title: "Missed Call",
      message: "You missed a voice call from Meera.",
      time: "1 hour ago",
      icon: <Phone size={20} />,
      color: "bg-red-100 text-red-600",
      unread: false,
    },
    {
      title: "New Message",
      message: "Rahul mentioned you in a group chat.",
      time: "3 hours ago",
      icon: <MessageCircle size={20} />,
      color: "bg-blue-100 text-blue-600",
      unread: false,
    },
    {
      title: "Welcome!",
      message: "Your account is ready. Start chatting!",
      time: "Yesterday",
      icon: <Bell size={20} />,
      color: "bg-emerald-100 text-emerald-600",
      unread: false,
    },
  ];
  return (
    <>
    
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="rounded-xl border bg-white p-2.5 text-slate-600">
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Notifications
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Stay updated with your conversations
              </p>
            </div>
          </div>

          <button className="rounded-xl border bg-white p-2.5 text-slate-600">
            <Settings size={20} />
          </button>
        </div>

        {/* Summary */}
        <div className="mb-6 rounded-2xl bg-indigo-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-3">
              <Bell size={28} />
            </div>

            <div>
              <p className="text-sm text-indigo-100">
                Your notifications
              </p>
              <h2 className="mt-1 text-2xl font-bold">
                You're all caught up!
              </h2>
            </div>
          </div>
        </div>

        {/* Notification List */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <button className="text-sm font-medium text-indigo-600">
              Mark all as read
            </button>
          </div>

          <div className="space-y-3">
            {notifications.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 rounded-xl p-4 transition hover:bg-slate-50 ${
                  item.unread ? "bg-indigo-50/60" : "bg-white"
                }`}
              >
                <div
                  className={`shrink-0 rounded-xl p-3 ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <span className="text-xs text-slate-400">
                      {item.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {item.message}
                  </p>

                  {item.unread && (
                    <span className="mt-2 inline-block rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-600">
                      New
                    </span>
                  )}
                </div>

                <button className="shrink-0 text-slate-400 hover:text-slate-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-slate-100 pt-5 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
              <CheckCheck size={17} />
              You're up to date
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Notifications;
