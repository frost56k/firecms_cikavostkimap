import { buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";

export type Achievement = {
    description: string;
    id: string;
    name: string;
    photoCountRequired: number;
    url_pic: string;
}

export const AchievementsCollection = buildCollection<Achievement>({
    name: "Achievements",
    singularName: "Achievement",
    description: "Награды для пользователей",
    textSearchEnabled: true,
    path: "achievements",
    icon: "Stars",
    properties: {
        url_pic: {
            name: "URL Picture",
            validation: { required: true },
            dataType: "string",
            storage: {
                storagePath: "achievements_pic",
                acceptedFiles: ["achievements_pic/*"]
            }
        },
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            name: "Description",
            validation: { required: true },
            dataType: "string"
        },
        id: {
            name: "ID",
            validation: { required: true },
            dataType: "string"
        },

        photoCountRequired: {
            name: "Photo Count Required",
            validation: { required: true },
            dataType: "number"
        },
    
        
    }
});
