import {
  ArrowLeft,
  MessageCircle,
  Bell,
  Shield,
  LockKeyhole,
  Palette,
  Moon,
  Volume2,
  Eye,
  Clock,
  Check,
  ChevronRight,
  Monitor,
  Globe,
  HelpCircle,
  Trash2,
} from "lucide-react";

function Settings() {
  return (
   <>
   
    <div className="min-h-screen bg-[#f7f8fc] text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
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
              <h1 className="text-lg font-bold">Settings</h1>
              <p className="text-xs text-gray-500">
                Customize your Chatly experience
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

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">

        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Preferences
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Manage your notifications, privacy, appearance and more.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* Settings Navigation */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

            <p className="px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              General
            </p>

            <button className="flex w-full items-center gap-3 rounded-xl bg-indigo-50 px-3 py-3 text-left text-sm font-semibold text-indigo-700">
              <Monitor size={19} />
              General settings
            </button>

            <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
              <Bell size={19} />
              Notifications
            </button>

            <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
              <Palette size={19} />
              Appearance
            </button>

            <div className="my-3 border-t border-gray-100" />

            <p className="px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Privacy & Security
            </p>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
              <Shield size={19} />
              Privacy
            </button>

            <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
              <LockKeyhole size={19} />
              Security
            </button>

            <div className="my-3 border-t border-gray-100" />

            <p className="px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Support
            </p>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
              <HelpCircle size={19} />
              Help & support
            </button>

          </aside>

          {/* Settings Content */}
          <div className="space-y-6 lg:col-span-2">

            {/* General Settings */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-6">
                <h3 className="text-lg font-bold">
                  General settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your basic chat preferences.
                </p>
              </div>

              <div className="divide-y divide-gray-100">

                {/* Language */}
                <div className="flex items-center gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Globe size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">Language</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Choose your preferred language.
                    </p>
                  </div>

                  <select
                    defaultValue="English"
                    aria-label="Language"
                    className="max-w-32 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
                  >
                    <option>English</option>
                    <option>Malayalam</option>
                    <option>Hindi</option>
                  </select>
                </div>

                {/* Enter to send */}
                <div className="flex items-center gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MessageCircle size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Enter to send
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Send a message by pressing Enter.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Enter to send"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

                {/* Message Preview */}
                <div className="flex items-center gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Eye size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Message previews
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Show message content in notifications.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Message previews"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

              </div>
            </section>

            {/* Notification Settings */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-6 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Bell size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">Notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose which notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-gray-100">

                <div className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Message notifications
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Get notified when someone messages you.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Message notifications"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Group notifications
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Receive alerts from group conversations.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Group notifications"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Notification sounds
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Play a sound when a new message arrives.
                    </p>
                  </div>

                  <Volume2 size={19} className="mr-2 text-gray-400" />

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Notification sounds"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

              </div>
            </section>

            {/* Appearance */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-6">
                <h3 className="text-lg font-bold">Appearance</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Personalize the look of your chat interface.
                </p>
              </div>

              <p className="mb-3 text-sm font-medium text-gray-700">
                Theme
              </p>

              <div className="grid grid-cols-3 gap-3">

                {/* Light */}
                <button className="rounded-xl border-2 border-indigo-600 bg-indigo-50/40 p-3 text-left">
                  <div className="mb-3 flex h-16 items-center justify-center rounded-lg border border-gray-200 bg-white">
                    <div className="w-16 space-y-2">
                      <div className="h-2 w-10 rounded bg-indigo-500" />
                      <div className="h-2 w-14 rounded bg-gray-200" />
                      <div className="ml-auto h-2 w-8 rounded bg-indigo-200" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-semibold">Light</span>
                    <Check size={16} className="text-indigo-600" />
                  </div>
                </button>

                {/* Dark */}
                <button className="rounded-xl border border-gray-200 p-3 text-left transition hover:border-indigo-300">
                  <div className="mb-3 flex h-16 items-center justify-center rounded-lg border border-gray-700 bg-gray-900">
                    <div className="w-16 space-y-2">
                      <div className="h-2 w-10 rounded bg-indigo-400" />
                      <div className="h-2 w-14 rounded bg-gray-600" />
                      <div className="ml-auto h-2 w-8 rounded bg-indigo-700" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">Dark</span>
                </button>

                {/* System */}
                <button className="rounded-xl border border-gray-200 p-3 text-left transition hover:border-indigo-300">
                  <div className="mb-3 flex h-16 items-center justify-center rounded-lg border border-gray-200 bg-gray-100">
                    <Monitor size={26} className="text-gray-500" />
                  </div>
                  <span className="text-sm font-medium">System</span>
                </button>

              </div>

              <div className="mt-5 flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-600">
                  <Moon size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    Reduce animations
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Minimize interface animations.
                  </p>
                </div>

                <input
                  type="checkbox"
                  aria-label="Reduce animations"
                  className="h-5 w-5 accent-indigo-600"
                />
              </div>
            </section>

            {/* Privacy */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Shield size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Privacy & security
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Control what other people can see.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-gray-100">

                <div className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">Last seen</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Control who can see when you were last active.
                    </p>
                  </div>

                  <select
                    defaultValue="Everyone"
                    aria-label="Last seen visibility"
                    className="max-w-32 rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm outline-none focus:border-indigo-500"
                  >
                    <option>Everyone</option>
                    <option>Contacts</option>
                    <option>Nobody</option>
                  </select>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Read receipts
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Let others know when you have read their messages.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Read receipts"
                    className="h-5 w-5 accent-indigo-600"
                  />
                </div>

              </div>

              <button className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-200 p-4 text-left transition hover:bg-gray-50">
                <div>
                  <p className="text-sm font-semibold">
                    Change password
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Update your account password.
                  </p>
                </div>
                <ChevronRight size={19} className="text-gray-400" />
              </button>
            </section>

            {/* Danger Zone */}
            <section className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm sm:p-7">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Trash2 size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold">
                    Delete account
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Permanently delete your account and associated data.
                    This action cannot be undone.
                  </p>

                  <button
                    type="button"
                    className="mt-4 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Delete my account
                  </button>
                </div>
              </div>
            </section>

            {/* Footer Actions */}
            <div className="flex flex-col-reverse gap-3 pb-5 sm:flex-row sm:justify-end">
              <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                Cancel
              </button>

              <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
                Save changes
              </button>
            </div>

            <p className="pb-4 text-center text-xs text-gray-400">
              Chatly · Settings & preferences
            </p>

          </div>
        </div>
      </main>
    </div>
   
   </>
  );
}

export default Settings;
