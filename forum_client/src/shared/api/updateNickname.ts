import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export async function updateNicknameEverywhere(
    uid: string,
    newNickname: string,
): Promise<void> {
    if (!uid || !newNickname) return;
    const collections = ['posts', 'comments'];
    await Promise.all(
        collections.map(async (col) => {
            const q = query(collection(db, col), where('profile.uid', '==', uid));
            const snapshot = await getDocs(q);
            const updates = snapshot.docs.map((d) => updateDoc(doc(db, col, d.id), { 'profile.nickname': newNickname }));
            await Promise.all(updates);
        })
    );
}
