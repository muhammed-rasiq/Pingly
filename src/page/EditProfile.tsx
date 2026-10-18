import React from 'react';
import { ArrowLeft, Camera, User, Mail, Phone, MapPin } from "lucide-react";


function EditProfile() {
  return (
    <>
    
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <button className="rounded-xl border bg-white p-2.5 text-slate-600">
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Edit Profile
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Update your personal information
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Profile Image */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">
                AM
              </div>

              <button className="absolute bottom-0 right-0 rounded-full bg-indigo-600 p-2.5 text-white shadow-md">
                <Camera size={17} />
              </button>
            </div>

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              Anjali Menon
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Change your profile photo
            </p>
          </div>

          {/* Form UI */}
          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                <User size={18} className="text-slate-400" />
                <input
                  type="text"
                  defaultValue="Anjali Menon"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Username
              </label>
              <input
                type="text"
                defaultValue="anjali_m"
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                <Mail size={18} className="text-slate-400" />
                <input
                  type="email"
                  defaultValue="anjali@example.com"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                <Phone size={18} className="text-slate-400" />
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Location
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
                <MapPin size={18} className="text-slate-400" />
                <input
                  type="text"
                  defaultValue="Kochi, Kerala"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                About Me
              </label>
              <textarea
                rows={3}
                defaultValue="Making memories, one conversation at a time."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <button className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              Cancel
            </button>

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
              Save Changes
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Keep your profile information up to date.
        </p>
      </div>
    </div>
    
    </>
  );
}

export default EditProfile;
