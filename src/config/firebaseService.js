import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp();
const db = getFirestore();


export const create = async (data) => {
  await db.collection('users').add(data);
}
