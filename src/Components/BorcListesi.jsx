import React from 'react';
import { db } from '../db'; 


function BorcListesi ({borclar}) {
     const borcSila = async (id) => {
    if (window.confirm("Bu borç kaydını silmek istediğinize emin misiniz?")) {
      await db.borclar.delete(id);
    }
  };

   
  
  if (!borclar || borclar.length === 0) {
    return <p>
      Kayıt bulunamadı.
    </p>
  }
  return(
    <div>
      {borclar.map((borc) => (
      <div key={borc.id}>
        <div>
          <h3>
            {borc.isim}
          </h3>
          <p>
            {borc.aciklama || "Açıklama yok"}
          </p>
        </div>
        <div>
          <p>
            {borc.miktar} $
          </p>
          <p>
            {borc.tarih}
          </p>
        </div>
         <button 
      onClick={() => borcSila(borc.id)}
      className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-400 rounded-full active:bg-red-500 active:text-white transition-all">X</button>
      </div>
      ))}
    </div>
    );
}

export default BorcListesi;