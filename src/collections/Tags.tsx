import { buildCollection, buildProperty, EntityReference } from "firecms";
import { localeCollection } from "./locales.tsx";


export type Tags = {
    photoIds: string[];
}


export const TagsCollection = buildCollection<Tags>({
    name: "Tags",
    singularName: "Tag",
    customId: true,
    path: "tags",
    icon: "Style",
    properties: {
        photoIds: {
            name: "Photo IDs",
            description: "IDs of photos associated with this tag",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string",
                
            }
        },
    }
});