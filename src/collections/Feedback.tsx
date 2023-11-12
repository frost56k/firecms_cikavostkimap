import { buildCollection, buildProperty, EntityReference } from "firecms";
import { localeCollection } from "./locales.tsx";

type Coord = string

export type Feedback = {
    name: string;
    message: string;
    email: string;
    timestamp: Date;
}


export const FeedbackCollection = buildCollection<Feedback>({
    name: "Feedback",
    singularName: "feedback",
    path: "feedback",
    icon: "Try",
    group: "Feedback",
    permissions: ({ authController, user }) => ({
        read: true,
        edit: true,
        create: true,
        delete: true
    }),
    subcollections: [
        localeCollection
    ],
    properties: {
 
        name: {
            name: "User",
            validation: { required: true },
            dataType: "string",
            columnWidth: 150
        },

        message: {
            name: "Text",
            description: "This is the description of the product",
            multiline: true,
            dataType: "string",
            columnWidth: 200
        },
        email: {
            name: "Email",
            description: "This is the description of the product",
            multiline: true,
            dataType: "string",
            columnWidth: 150
        },
        timestamp: {
            name: "Date create",
            dataType: "date"
        }

      
    }
});
