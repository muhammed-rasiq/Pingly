import React from 'react';
import { Flag, ArrowLeft } from "lucide-react";

function ReportContact() {
  return (
   <>
   
   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-sm">
        <button className="flex items-center gap-2 text-gray-500 mb-6">
          <ArrowLeft size={18} /> Back
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <Flag className="text-red-500" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Report Contact
            </h1>
            <p className="text-sm text-gray-500">
              Tell us why you're reporting this user.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Contact
          </label>
          <input
            type="text"
            placeholder="Contact name"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Reason for reporting
          </label>
          <select className="w-full border rounded-lg p-3 bg-white outline-none">
            <option>Select a reason</option>
            <option>Spam</option>
            <option>Harassment or bullying</option>
            <option>Fake account</option>
            <option>Inappropriate content</option>
            <option>Scam or fraud</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Additional details
          </label>
          <textarea
            rows={4}
            placeholder="Describe the issue..."
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-300 resize-none"
          />
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg">
          Submit Report
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Your report will be reviewed by our team.
        </p>
      </div>
    </div>
   
   </>
  );
}

export default ReportContact;
