import type {StructureResolver} from 'sanity/structure'
import { HomeIcon } from './components/icons'

const IGNORE_TYPES = ["home", "mux.videoAsset"]

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('home')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("home")
            .title("Home")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !IGNORE_TYPES.includes(item.getId()!),
      ),
    ])
