import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const Client = createClient({
   projectId: "q15ljzys", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   // Set to `true` for production environments
   useCdn: false, 
})

const builder = imageUrlBuilder(Client)

function urlFor(source:string) {
   return builder.image(source)
}

export {urlFor}
