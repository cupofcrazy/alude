
import { defineQuery } from "next-sanity"

export const a11yImage = defineQuery(`
  _type == "a11yImage" => {
    "image": image.asset->,
    alt,
    caption
  }
`)