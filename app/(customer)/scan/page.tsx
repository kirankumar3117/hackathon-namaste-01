'use client';

import { useState } from 'react';
import { Upload, Camera, FileText, ArrowLeft, Loader2, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AIScanPage() {
  const [textList, setTextList] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleScan = async () => {
    if (!textList.trim()) return;
    
    setIsScanning(true);
    
    try {
      const response = await fetch('/api/ai/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textList, city: 'Vijayawada' }),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 fade-in pb-20">
      <header className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
        <Link href="/" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="font-bold text-gray-900 text-lg">AI Grocery List Scanner ✨</h1>
      </header>

      {!results ? (
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-2">Upload handwritten list</h2>
            <p className="text-sm text-gray-500 mb-6">Take a photo of your list and let AI read it for you.</p>
            
            <div className="flex gap-4">
              <button className="flex-1 flex flex-col items-center justify-center gap-2 bg-green-50 text-green-700 py-8 rounded-2xl border-2 border-dashed border-green-200 hover:bg-green-100 transition-colors">
                <Camera size={32} />
                <span className="font-medium text-sm">Take Photo</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center gap-2 bg-blue-50 text-blue-700 py-8 rounded-2xl border-2 border-dashed border-blue-200 hover:bg-blue-100 transition-colors">
                <Upload size={32} />
                <span className="font-medium text-sm">Upload Image</span>
              </button>
            </div>
          </div>

          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-gray-50/50 px-4 text-sm text-gray-500">OR TYPE IT</span>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-orange-500" size={20} />
              <h2 className="font-semibold text-gray-900">Type your list</h2>
            </div>
            <textarea
              className="w-full bg-gray-50 border-0 rounded-2xl p-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 min-h-[150px] resize-none"
              placeholder="e.g.&#10;Rice 1kg&#10;Oil 1 liter&#10;Eggs 6 pcs"
              value={textList}
              onChange={(e) => setTextList(e.target.value)}
            />
            
            <button
              onClick={handleScan}
              disabled={isScanning || !textList.trim()}
              className="w-full mt-4 bg-green-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
            >
              {isScanning ? (
                <><Loader2 className="animate-spin" size={20} /> Analyzing List...</>
              ) : (
                <><Sparkles size={20} /> Find Products Nearby</>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 fade-in">
          {/* Results Header */}
          <div className="bg-green-600 text-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles size={24} className="text-yellow-300" /> Matches Found!
            </h2>
            <p className="opacity-90 mt-2 text-sm">
              We found your items in {results.alternativeStores?.length + (results.bestMatch ? 1 : 0)} nearby stores.
            </p>
          </div>

          {/* Best Match */}
          {results.bestMatch && (
            <div className="bg-white p-1 rounded-3xl shadow-md border-2 border-green-500 relative">
              <div className="absolute -top-3 left-6 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                🏆 Best Match
              </div>
              <div className="p-5 pt-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{results.bestMatch.store.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {results.bestMatch.store.address}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{results.bestMatch.matchedCount}/{results.bestMatch.totalItems}</div>
                    <div className="text-xs font-medium text-gray-500 uppercase">Items Available</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {results.bestMatch.matchedProducts.map((match: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                      <span className="font-medium text-sm text-gray-800">{match.originalItem}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">✓ IN STOCK</span>
                    </div>
                  ))}
                  {results.bestMatch.missingItems.map((item: string, idx: number) => (
                    <div key={idx} className="flex justify-between items-center bg-red-50 p-3 rounded-xl">
                      <span className="font-medium text-sm text-gray-800">{item}</span>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold">✕ MISSING</span>
                    </div>
                  ))}
                </div>

                <Link href={`/store/${results.bestMatch.store.id}`} className="block w-full bg-green-600 text-white font-bold py-3 text-center rounded-xl hover:bg-green-700 transition-colors">
                  Reserve from this Store
                </Link>
              </div>
            </div>
          )}

          {/* Alternative Stores */}
          {results.alternativeStores && results.alternativeStores.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-4 px-2">Alternative Stores</h3>
              <div className="flex flex-col gap-4">
                {results.alternativeStores.map((alt: any, idx: number) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{alt.store.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{alt.matchedCount}/{alt.totalItems} items available</p>
                    </div>
                    <Link href={`/store/${alt.store.id}`} className="text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                      View
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button onClick={() => setResults(null)} className="text-sm font-medium text-gray-500 text-center mt-4">
            Start New Scan
          </button>
        </div>
      )}
    </div>
  );
}
