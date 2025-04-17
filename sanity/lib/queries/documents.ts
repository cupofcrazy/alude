import { defineQuery } from "next-sanity"
import { a11yImage, videoQuery } from "./fragments"

export const homeQuery = defineQuery(`*[_type == "home"][0] {
  title,
  content[]{
    ...,
    ${a11yImage},
    ${videoQuery}
  }
}`)