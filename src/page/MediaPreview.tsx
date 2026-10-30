import React from 'react';
import { ArrowLeft, Download, Share2, FileText, Image } from "lucide-react";


function MediaPreview() {
  return (
    <>
    
     <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center gap-2 text-gray-300">
            <ArrowLeft size={20} /> Back
          </button>

          <div className="flex gap-4">
            <Share2 size={20} />
            <Download size={20} />
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl h-[450px] flex items-center justify-center">
          <div className="text-center">
            <Image size={60} className="mx-auto text-gray-500 mb-3" />
            <p className="text-gray-400">Media Preview</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900 rounded-xl p-4 flex items-center gap-4">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <FileText className="text-blue-400" size={25} />
          </div>

          <div className="flex-1">
            <h3 className="font-medium">Document.pdf</h3>
            <p className="text-sm text-gray-400">2.4 MB · PDF Document</p>
          </div>

          <Download className="text-gray-400" />
        </div>
      </div>
    </div>
    
    </>
  );
}

export default MediaPreview;
