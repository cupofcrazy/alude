import { homeQuery } from "@/sanity/lib/queries/documents";
import { sanityFetch } from "@/sanity/lib/live";
import { BlockContent } from "@/components/block-content";

export default async function Home() {
  const home = await sanityFetch({ query: homeQuery })

  return (
    <div className="p-3">
      <h1 className="text-2xl">{home?.data?.title}</h1>
      
      <BlockContent value={home?.data?.content} />
    </div>
  );
}
