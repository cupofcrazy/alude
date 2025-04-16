import { defineField, defineType } from "sanity";

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  description: 'Upload a video with Mux',
  fields: [
    defineField({
      name: 'clip',
      title: 'Clip',
      type: 'mux.video',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    
  ],
  options: {
    collapsible: true,
    collapsed: true,
    modal: { type: 'dialog' },
  },
})