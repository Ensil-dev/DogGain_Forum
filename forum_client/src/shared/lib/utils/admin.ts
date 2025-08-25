import { db } from '../../api/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import type { UserInfo } from '../../types';

const ADMIN_DOC_ID = 'list';

export async function getAdminEmails(): Promise<string[]> {
    try {
        const snap = await getDoc(doc(db, 'admins', ADMIN_DOC_ID));
        if (snap.exists()) {
            const emails: string[] = snap.data().emails || [];
            localStorage.setItem('adminEmails', JSON.stringify(emails));
            return emails;
        }
    } catch (err) {
        console.error(err);
    }
    const data = localStorage.getItem('adminEmails');
    if (data) {
        try {
            return JSON.parse(data);
        } catch {
            // ignore
        }
    }
    const defaultEmails = ['dlwjd164@gmail.com'];
    localStorage.setItem('adminEmails', JSON.stringify(defaultEmails));
    return defaultEmails;
}

export async function setAdminEmails(emails: string[]): Promise<void> {
    try {
        await setDoc(doc(db, 'admins', ADMIN_DOC_ID), { emails }, { merge: true });
        localStorage.setItem('adminEmails', JSON.stringify(emails));
    } catch (err) {
        console.error(err);
        localStorage.setItem('adminEmails', JSON.stringify(emails));
    }
}

export function getCachedAdminEmails(): string[] {
    const data = localStorage.getItem('adminEmails');
    if (data) {
        try {
            return JSON.parse(data);
        } catch {
            // ignore
        }
    }
    return ['dlwjd164@gmail.com'];
}

export function isAdminUser(user: UserInfo | null | undefined): boolean {
    if (!user) return false;
    const emails = getCachedAdminEmails();
    return emails.includes(user.email);
}
