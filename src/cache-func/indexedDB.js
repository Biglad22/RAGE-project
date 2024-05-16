import { openDB } from 'idb';

const dbPromise = openDB('image-cache', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('images')) {
      db.createObjectStore('images');
    }
  },
});

export async function cacheImage(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  const db = await dbPromise;
  const tx = db.transaction('images', 'readwrite');
  const store = tx.objectStore('images');
  await store.put(blob, url);
  await tx.done;
}

export async function getCachedImage(url) {
  const db = await dbPromise;
  const tx = db.transaction('images', 'readonly');
  const store = tx.objectStore('images');
  const blob = await store.get(url);
  await tx.done;
  if (blob) {
    return URL.createObjectURL(blob);
  }
  throw new Error('Image not found in cache');
}
