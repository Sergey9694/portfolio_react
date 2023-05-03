import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-03",
    token: import.meta.env.VITE_REACT_APP_SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};

export async function getPosts() {
    const query = await client.fetch('*[_type == "abouts"]');
    return query;
}
