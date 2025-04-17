import { defineType } from "sanity";

console.log("hello")

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'mux.video',
  description: 'Upload a video with Mux'
})