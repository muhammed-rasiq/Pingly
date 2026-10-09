import React from 'react';
import {
  ArrowLeft,
  Camera,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Pencil,
  Bell,
  ShieldCheck,
  Palette,
  LogOut,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

function Profile() {
  return (
  <>
  
   <div className="min-h-screen bg-[#f7f8fc] text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100">
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-lg font-bold">My Profile</h1>
              <p className="text-xs text-gray-500">
                Manage your personal information
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
            Profile settings
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Update your profile and manage your account preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* Left Profile Card */}
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <div className="h-28 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500" />

            <div className="px-6 pb-6">

              {/* Avatar */}
              <div className="-mt-12 flex items-end justify-between">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-2xl font-bold text-indigo-700 shadow-sm">
                    JD
                  </div>

                  <button
                    type="button"
                    aria-label="Change profile photo"
                    className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700"
                  >
                    <Camera size={16} />
                  </button>
                </div>

                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Online
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="mt-1 text-sm text-gray-500">
                  john.doe@example.com
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  Hey there! I am using Chatly to stay connected with friends.
                </p>
              </div>

              <div className="my-5 border-t border-gray-100" />

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Member since</p>
                    <p className="mt-0.5 text-sm font-medium">
                      October 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Account status</p>
                    <p className="mt-0.5 text-sm font-medium">
                      Active account
                    </p>
                  </div>
                </div>

              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <Pencil size={16} />
                Edit profile
              </button>
            </div>
          </section>

          {/* Right Side */}
          <div className="space-y-6 lg:col-span-2">

            {/* Personal Information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    Personal information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Your personal details and contact information.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Edit personal information"
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-indigo-600 transition hover:bg-indigo-50"
                >
                  <Pencil size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-600">
                    <UserRound size={16} />
                    Full name
                  </label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
                    John Doe
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Mail size={16} />
                    Email address
                  </label>
                  <div className="break-all rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
                    john.doe@example.com
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Phone size={16} />
                    Phone number
                  </label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
                    +91 98765 43210
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-600">
                    <MapPin size={16} />
                    Location
                  </label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
                    Kerala, India
                  </div>
                </div>

                {/* Birthday */}
                <div className="sm:col-span-2">
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-600">
                    <CalendarDays size={16} />
                    Date of birth
                  </label>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium">
                    15 August 2000
                  </div>
                </div>

              </div>
            </section>

            {/* Preferences */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-5">
                <h3 className="text-lg font-bold">
                  Preferences
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Manage how Chatly works for you.
                </p>
              </div>

              <div className="divide-y divide-gray-100">

                <div className="flex items-center gap-4 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Bell size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Notifications
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Receive message and activity alerts.
                    </p>
                  </div>

                  <ChevronRight size={19} className="shrink-0 text-gray-400" />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <ShieldCheck size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Privacy & security
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Manage your privacy and account security.
                    </p>
                  </div>

                  <ChevronRight size={19} className="shrink-0 text-gray-400" />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Palette size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Appearance
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Customize your chat experience.
                    </p>
                  </div>

                  <ChevronRight size={19} className="shrink-0 text-gray-400" />
                </div>

              </div>
            </section>

            {/* Danger Zone */}
            <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-6">

              <h3 className="text-base font-bold text-gray-900">
                Account actions
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Manage your Chatly account.
              </p>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 sm:w-auto"
              >
                <LogOut size={17} />
                Log out
              </button>

            </section>

            <p className="pb-4 text-center text-xs text-gray-400">
              Chatly · Your conversations, your space.
            </p>

          </div>
        </div>
      </main>
    </div>
  
  </>
  );
}

export default Profile;
