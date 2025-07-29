import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, setDoc, updateDoc } from "firebase/firestore";


export const firestoreCreateDocument = async (collectionName: string, documentId: string, data: object) => {
    try {
        const ducomentRef = doc(db, collectionName, documentId);

        await setDoc(ducomentRef, data);
        return {
            data: true
        };
    } catch (error) {

        const firebaseError = error as FirebaseError
        //... @todo format error
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};

export const firestoreUpdateDocument = async (collectionName: string, documentId: string, data: object) => {
    try {
        const ducomentRef = doc(db, collectionName, documentId);

        await updateDoc(ducomentRef, data);
        return {
            data: true
        };
    } catch (error) {

        const firebaseError = error as FirebaseError
        //... @todo format error
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        };
    }
};