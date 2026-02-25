import React from 'react';
import { db } from '../db';

function BorcListesi({ borclar }) {
  const borcSil = async (id) => {
    if (window.confirm("Bu borç kaydını silmek istediğinize emin misiniz?")) {
      await db.borclar.delete(id);
    }
  };

  
if (!borclar || borclar.length === 0) {
  return (
    <div className="text-center py-12">
      <p className="text-slate-500 text-lg">Kayıt bulunamadı.</p>
      <p className="text-slate-400 text-sm mt-1">Yeni bir borç ekleyerek başlayın.</p> {/* Düzeltildi */}
    </div>
  );
}


  return (
    <div className="space-y-3">
      {borclar.map((borc) => (
        <div
          key={borc.id}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800">{borc.isim}</h3>
            {borc.aciklama && (
              <p className="text-sm text-slate-500 mt-0.5">{borc.aciklama}</p>
            )}
            <p className="text-xs text-slate-400 mt-1">{borc.tarih}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-bold text-lg text-indigo-700">
                {Number(borc.miktar).toLocaleString()} TL
              </p>
            </div>
            <button
              onClick={() => borcSil(borc.id)}
              className="w-10 h-10 flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all"
              aria-label="Sil"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BorcListesi;