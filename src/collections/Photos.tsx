import { buildCollection, buildProperty, EntityReference } from "firecms";
import { localeCollection } from "./locales.tsx";

type Coord = string

export type Photos = {
    title: string;
    views: number;
    thumbnail: string;
    tags: string[];
    description: string;
    lat: Coord;
    lng: Coord;
    userId: string,
    timestamp: Date
}


export const PhotosCollection = buildCollection<Photos>({
    name: "photos",
    singularName: "photos",
    path: "photos",
    icon: "PhotoLibrary",
    group: "Photos",
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
        title: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            name: "Description",
            description: "This is the description of the product",
            multiline: true,
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        },
        views: {
            name: "Прагляды",
            validation: {
                required: true,
                requiredMessage: "You must set a price between 0 and 1000",
                min: 0,
                max: 1000
            },
            description: "Price with range validation",
            dataType: "number"
        },

        thumbnail: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Фота",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        tags: buildProperty({
            name: "Tags",
            description: "Example of generic array",
            validation: { required: true },
            dataType: "array",
            of: {
                dataType: "string",
                previewAsTag: true
            },
            expanded: true
        }),
        lat: {
            name: "Latitude",
            dataType: "string",
            description: "This is an example of a map property",
            validation: { required: true },
            columnWidth: 80
        },
        lng: {
            name: "Longitude",
            dataType: "string",
            description: "This is an example of a map property",
            validation: { required: true },
            columnWidth: 80
        },
        userId: {
            name: "Autor",
            description: "This is an example of a map property",
            dataType: "string"
        },
        timestamp: {
            name: "Date create",
            dataType: "date"
        }
    }
});
