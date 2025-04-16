import { type SchemaTypeDefinition } from 'sanity'

import {home} from './documents/home'

import {blockContent} from './objects/block-content'
import { a11yImage } from './objects/a11y-image'
import { seo } from './objects/seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, home, a11yImage, seo],
}
