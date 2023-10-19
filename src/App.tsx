import { useCallback } from "react";
import { useDataEnhancementPlugin } from "@firecms/data_enhancement";
import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";
import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import { Button } from "@mui/material";
import { firebaseConfig } from "./firebase-config.ts";
import { PhotosCollection } from "./collections/Photos";
import { UsersCollection } from "./collections/Users";
import { TagsCollection } from "./collections/Tags"
import { AchievementsCollection } from "./collections/Achievements"
import { CommentsCollection } from "./collections/Comments";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Инициализируйте ваше приложение Firebase здесь
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // если уже инициализировано, используйте это
}

export default function App() {
    const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
        user,
        authController
    }) => {
        if (user) {
            console.log("Allowing access to", user.email);
            const userDoc = await firebase.firestore().doc(`users/${user.uid}`).get();
            const userData = userDoc.data();
            const userRoles = userData ? userData.role : [];
            authController.setExtra(userRoles);

            if (userRoles.includes("admin")) {
                return true;
            } else {
                throw Error("Доступ забаронены. Вы не адмін.");
            }
        } else {
            throw Error("Карыстальнік не ўвайшоў у сістэму.");
        }

    }, []);

    const dataEnhancementPlugin = useDataEnhancementPlugin({
        getConfigForPath: ({ path }) => {
            return true;
        }
    });

     const toolbarExtraWidget = (
        <Button 
        variant="contained" 
        color="primary"
        onClick={() => window.open('https://cikavostki-map.web.app/', '_blank')}
    >
       Цікавосткі
    </Button>
    );

    return <FirebaseCMSApp
        name={"Цікавосткі Беларусі"}
        plugins={[dataEnhancementPlugin]}
        authentication={myAuthenticator}
        toolbarExtraWidget={toolbarExtraWidget}
        collections={[
            PhotosCollection,
            UsersCollection,
            TagsCollection,
            AchievementsCollection,
            CommentsCollection
        ]}
        firebaseConfig={firebaseConfig}
    />;
}
