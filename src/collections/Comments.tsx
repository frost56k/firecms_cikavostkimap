import { buildCollection, buildProperty, EntityReference } from "firecms";
import { localeCollection } from "./locales.tsx";
import { Timestamp } from "firebase/firestore";


export type Comments = {
    photoId: string;
    text: string;
    timestamp: Date;
    userId: string;
    username: string;
}


export const CommentsCollection = buildCollection<Comments>({
    name: "Comments",
    singularName: "Comments",
    path: "comments",
    icon: "Message",
    properties: {
        username: {
            name: "Username",
            validation: { required: true },
            dataType: "string"
        },
        photoId: {
            name: "Photo ID's",
            validation: { required: true },
            dataType: "string"
        },
        text: {
            name: "Text",
            validation: { required: true },
            dataType: "string"
        },
        timestamp: {
            name: "Date",
            validation: { required: true },
            dataType: "date"
        },
        userId: {
            name: "User ID's",
            validation: { required: true },
            dataType: "string"
        },
    }
});