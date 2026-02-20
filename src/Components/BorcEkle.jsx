import React, { useState } from 'react';
import { db } from '../db';

function BorcEkle() {
  const [isim, setIsim] = useState("");
  const [miktar, setMiktar] = useState("");
  const [aciklama, setAciklama] = useState("");

  const handlekaydet = async (e) => {
    e.preventDefault();
    
    if (!isim || !miktar) {
      alert("Lütfen isim ve miktar kısımlarını doldurun!");
      return;
    }

    try {
      await db.borclar.add({
        isim: isim,             // VİRGÜL EKLENDİ
        miktar: Number(miktar), // VİRGÜL EKLENDİ
        aciklama: aciklama,     // VİRGÜL EKLENDİ
        tarih: new Date().toLocaleDateString()
      });

      setIsim("");
      setMiktar("");
      setAciklama("");
      console.log("Başarıyla kaydedildi!");
      
    } catch (error) {
      console.log("Kayıt hatası:", error);
    } // BURADAKİ NOKTALI VİRGÜL GEREKSİZ AMA HATA VERMEZ
  }; // FONKSİYON BURADA BİTMELİ

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
      <form onSubmit={handlekaydet}>
        <input
          type="text"
          value={isim}
          placeholder="Kimin borcu? (İsim)"
          onChange={(e) => setIsim(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            value={miktar}
            placeholder="Miktar" 
            onChange={(e) => setMiktar(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            EKLE
          </button>
        </div>
        <input
          type="text"
          placeholder="Açıklama (Opsiyonel)"
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
          className="w-full p-2 border rounded"
        /> 
      </form>
    </div>
  );
}

export default BorcEkle;
