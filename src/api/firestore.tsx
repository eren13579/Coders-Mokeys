import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, updateDoc } from "firebase/firestore";


export const firestoreUpdateDocument = async (collectionName: string, documentId: string, data: any) => {
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