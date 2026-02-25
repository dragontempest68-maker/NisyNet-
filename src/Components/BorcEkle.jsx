import React, { useState } from 'react';
import { db } from '../db';

function BorcEkle() {
  const [isim, setIsim] = useState("");
  const [miktar, setMiktar] = useState("");
  const [aciklama, setAciklama] = useState("");

  const handleKaydet = async (e) => {
    e.preventDefault();

    if (!isim || !miktar) {
      alert("Lütfen isim ve miktar kısımlarını doldurun!");
      return;
    }

    try {
      await db.borclar.add({
        isim: isim,
        miktar: Number(miktar),
        aciklama: aciklama,
        tarih: new Date().toLocaleDateString('tr-TR')
      });

      setIsim("");
      setMiktar("");
      setAciklama("");
    } catch (error) {
      console.log("Kayıt hatası:", error);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 shadow-2xl">
      <form onSubmit={handleKaydet} className="max-w-md mx-auto">
        {/* İsim, miktar ve buton aynı satırda, taşma durumunda buton alta iner */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <input
            type="text"
            value={isim}
            placeholder="İsim"
            onChange={(e) => setIsim(e.target.value)}
            className="flex-1 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 min-w-[120px]"
          />
          <input
            type="number"
            value={miktar}
            placeholder="Miktar"
            onChange={(e) => setMiktar(e.target.value)}
            className="w-28 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md shadow-indigo-200 whitespace-nowrap"
          >
            EKLE
          </button>
        </div>
        <input
          type="text"
          placeholder="Açıklama (opsiyonel)"
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
          className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
        />
      </form>
    </div>
  );
}

export default BorcEkle;