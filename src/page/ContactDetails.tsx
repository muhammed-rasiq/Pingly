import React from 'react';
import {
  ArrowLeft,
  MoreVertical,
  MessageCircle,
  Phone,
  Video,
  Bell,
  BellOff,
  Search,
  Image as ImageIcon,
  FileText,
  Link2,
  Users,
  ShieldCheck,
  ChevronRight,
  Mail,
  MapPin,
  Clock,
  Star,
  Ban,
  Trash2,
} from "lucide-react";

function ContactDetails() {
    const mediaItems = [
    { color: "bg-indigo-100", label: "Photo 1" },
    { color: "bg-pink-100", label: "Photo 2" },
    { color: "bg-amber-100", label: "Photo 3" },
    { color: "bg-emerald-100", label: "Photo 4" },
    { color: "bg-violet-100", label: "Photo 5" },
    { color: "bg-sky-100", label: "Photo 6" },
  ];
  return (
    <>
    
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">

        {/* TOP BAR */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50">
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Contact Details
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                View contact information
              </p>
            </div>
          </div>

          <button className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50">
            <MoreVertical size={20} />
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* LEFT COLUMN */}
          <div className="space-y-6 lg:col-span-1">

            {/* PROFILE CARD */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-28 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

              <div className="px-6 pb-6">
                <div className="-mt-12 flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-indigo-100 text-3xl font-bold text-indigo-700 shadow-sm">
                    AM
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Anjali Menon
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    @anjali_m
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-medium text-emerald-600">
                      Online
                    </span>
                  </div>

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-500">
                    Making memories, one conversation at a time ✨
                  </p>
                </div>

                {/* QUICK ACTIONS */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center gap-2 rounded-xl bg-indigo-50 p-3 text-indigo-600 transition hover:bg-indigo-100">
                    <MessageCircle size={21} />
                    <span className="text-xs font-semibold">Message</span>
                  </button>

                  <button className="flex flex-col items-center gap-2 rounded-xl bg-slate-50 p-3 text-slate-600 transition hover:bg-slate-100">
                    <Phone size={21} />
                    <span className="text-xs font-semibold">Audio</span>
                  </button>

                  <button className="flex flex-col items-center gap-2 rounded-xl bg-slate-50 p-3 text-slate-600 transition hover:bg-slate-100">
                    <Video size={21} />
                    <span className="text-xs font-semibold">Video</span>
                  </button>
                </div>
              </div>
            </section>

            {/* CONTACT INFORMATION */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-5 font-bold text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600">
                    <Phone size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Phone number</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email address</p>
                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                      anjali@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Kochi, Kerala
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-amber-50 p-2.5 text-amber-600">
                    <Clock size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Last seen</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Today, 10:34 AM
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PRIVACY */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Privacy & Security
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Your conversations are private and protected.
                  </p>
                  <p className="mt-3 text-xs font-medium text-emerald-600">
                    <ShieldCheck size={14} className="mr-1 inline" />
                    Secure conversation
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 lg:col-span-2">

            {/* MEDIA SECTION */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Media, Links & Documents
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Shared in your conversations
                  </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  View all
                  <ChevronRight size={17} />
                </button>
              </div>

              {/* TABS - DESIGN ONLY */}
              <div className="mt-5 flex gap-5 overflow-x-auto border-b border-slate-100">
                <button className="flex shrink-0 items-center gap-2 border-b-2 border-indigo-600 pb-3 text-sm font-semibold text-indigo-600">
                  <ImageIcon size={17} />
                  Media
                </button>

                <button className="flex shrink-0 items-center gap-2 pb-3 text-sm font-medium text-slate-500">
                  <FileText size={17} />
                  Documents
                </button>

                <button className="flex shrink-0 items-center gap-2 pb-3 text-sm font-medium text-slate-500">
                  <Link2 size={17} />
                  Links
                </button>
              </div>

              {/* MEDIA PLACEHOLDERS */}
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {mediaItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex aspect-square items-center justify-center rounded-xl ${item.color}`}
                  >
                    <ImageIcon
                      size={25}
                      className="text-slate-500/70"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                Shared media will appear here
              </p>
            </section>

            {/* SHARED GROUPS */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Shared Groups
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Groups you both belong to
                  </p>
                </div>

                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <Users size={21} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 font-bold text-white">
                    WG
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      Weekend Gang
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      4 members · You, Anjali and others
                    </p>
                  </div>

                  <ChevronRight size={19} className="text-slate-400" />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 font-bold text-white">
                    DC
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      Design Crew
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      8 members · You, Anjali and others
                    </p>
                  </div>

                  <ChevronRight size={19} className="text-slate-400" />
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl border border-dashed border-slate-300 py-3 text-sm font-medium text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600">
                + Create New Group
              </button>
            </section>

            {/* CHAT PREFERENCES */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-bold text-slate-900">
                Chat Preferences
              </h3>

              <div className="mt-4 divide-y divide-slate-100">
                <div className="flex items-center gap-3 py-4">
                  <div className="rounded-xl bg-amber-50 p-2.5 text-amber-600">
                    <Bell size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Notifications
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Receive message notifications
                    </p>
                  </div>

                  <div className="relative h-6 w-11 rounded-full bg-indigo-600">
                    <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>

                <div className="flex items-center gap-3 py-4">
                  <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                    <Star size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Favourite Contact
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Keep this contact easy to find
                    </p>
                  </div>

                  <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                    Not set
                  </span>
                </div>

                <div className="flex items-center gap-3 py-4">
                  <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600">
                    <BellOff size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      Mute Conversation
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Silence notifications from this contact
                    </p>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </div>
              </div>
            </section>

            {/* DANGER ZONE */}
            <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-bold text-slate-900">
                Advanced Actions
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Manage this contact in your chat list.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                  <Ban size={17} />
                  Block Contact
                </button>

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
                  <Trash2 size={17} />
                  Clear Chat
                </button>
              </div>
            </section>
          </div>
        </div>

        <p className="py-6 text-center text-xs text-slate-400">
          Contact details · All information shown is sample UI content
        </p>
      </div>
    </div>
    
    </>
  );
}

export default ContactDetails;
