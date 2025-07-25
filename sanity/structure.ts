import type {StructureResolver} from 'sanity/structure'

const IGNORE_TYPES = ["home", "mux.videoAsset"]

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('home')
        .icon('🏠')
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
