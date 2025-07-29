import userFirebaseAuth from "@/hooks/user-firebase-auth";
import { UserDocument } from "@/types/users";
import React, { useContext, createContext } from "react"

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
})

interface Props {
    children: React.ReactNode;
}

export function AuthUserProvider({ children }: Props) {

    const auth = userFirebaseAuth();

    return (
        <authUserContext.Provider value={
            {
                authUser: auth.authUser as {
                    uid: string;
                    email: string;
                    displayName: string;
                    emailVerified: boolean;
                    phoneNumber: string;
                    photoURL: string;
                    userDocument: UserDocument;
                }, 
                authUserIsLoading: auth.authUserIsLoading
            }
        }>
            {children}
        </authUserContext.Provider>
    )
}

export const userAuth = () => useContext(authUserContext)