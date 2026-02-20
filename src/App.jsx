import { useState } from 'react';
import { db } from './db';
import { useLiveQuery } from "dexie-react-hooks";
import SearchBar from './Components/SearchBar';
import BorcListesi from './Components/BorcListesi';
import BorcEkle from './Components/BorcEkle';

function App() {
  const [aramaMetin, setAramaMetin] = useState("");
  
  // 1. ÖNCE veriyi çekiyoruz (borclar burada tanımlanıyor)
  const borclar = useLiveQuery(async () => {
    try {
      const tumu = await db.borclar.orderBy('isim').toArray();
      return tumu.filter(borc => 
        borc.isim.toLowerCase().includes(aramaMetin.toLowerCase())
      );
    } catch (e) {
      return [];
    }
  }, [aramaMetin]) || []; // Doğru parantez dizilimi

  // 2. SONRA hesaplama yapıyoruz (çünkü artık 'borclar' değişkeni tanımlı)
  const toplamAlacak = borclar.reduce((toplam, borc) => toplam + Number(borc.miktar), 0);

  return (
    <div className="min-h-screen bg-slate-50 pb-40">
      <SearchBar
       aramaMetin={aramaMetin}
       setAramaMetin={setAramaMetin} 
      />

      <div className="p-4 pt-0">
        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-100">
          <p className="text-indigo-100 text-sm font-medium">Toplam Alacak</p>
          <h2 className="text-4xl font-black">{toplamAlacak} TL</h2>
        </div>
      </div>
       
      <BorcListesi borclar={borclar} />
      <BorcEkle />
    </div>
  );
}

export default App;
