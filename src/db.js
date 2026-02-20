import Dexie from 'dexie';

export const db =new Dexie('NisyNetDB');
db.version(1).stores({
  borclar: '++id, isim, miktar, aciklama, tarih'
})