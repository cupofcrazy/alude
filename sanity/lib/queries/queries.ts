import { defineQuery } from "next-sanity"

const a11yImage = defineQuery(`
  _type == "a11yImage" => {
    "image": image.asset->,
    alt,
    caption
  }
`)

export const homeQuery = defineQuery(`*[_type == "home"][0] {
  title,
  content[]{
    ...,
    ${a11yImage}
  }
}`)