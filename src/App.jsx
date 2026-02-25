import { useState } from 'react';
import { db } from './db';
import { useLiveQuery } from "dexie-react-hooks";
import SearchBar from './Components/SearchBar';
import BorcListesi from './Components/BorcListesi';
import BorcEkle from './Components/BorcEkle';

function App() {
  const [aramaMetin, setAramaMetin] = useState("");

  const borclar = useLiveQuery(async () => {
    try {
      const tumu = await db.borclar.orderBy('isim').toArray();
      return tumu.filter(borc =>
        borc.isim.toLowerCase().includes(aramaMetin.toLowerCase())
      );
    } catch (e) {
      return [];
    }
  }, [aramaMetin]) || [];

  const toplamAlacak = borclar.reduce((toplam, borc) => toplam + Number(borc.miktar), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Başlık ve Arama Çubuğu */}
      <div className="bg-white shadow-sm">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Borç & Nisye</h1>
          <SearchBar aramaMetin={aramaMetin} setAramaMetin={setAramaMetin} />
        </div>
      </div>

      {/* Toplam Kartı */}
      <div className="px-4 pt-6">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
          <p className="text-indigo-100 text-sm font-medium mb-1">Toplam Alacak</p>
          <h2 className="text-4xl font-black tracking-tight">
            {toplamAlacak.toLocaleString()} TL
          </h2>
        </div>
      </div>

      {/* Borç Listesi */}
      <div className="px-4 pt-6 pb-36"> {/* pb-32 alt form için yer bırakır */}
        <BorcListesi borclar={borclar} />
      </div>

      {/* Sabit Borç Ekleme Formu */}
      <BorcEkle />
    </div>
  );
}

export default App;