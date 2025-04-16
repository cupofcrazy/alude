import { A11yImage } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"
import { PortableText, PortableTextProps, PortableTextComponents, PortableTextMarkComponentProps } from "@portabletext/react"
import Image from "next/image"

const components: PortableTextComponents = {
  types: {
    a11yImage: ({ value }: { value: A11yImage }) => {
      if (!value.image) return null;
      return <Image src={urlFor(value.image).url()} alt={value.alt || ""} width={1000} height={1000} />
    }
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      return <a className="px-1 pb-0.5 rounded-sm text-neutral-600 bg-neutral-100" href={value.url} target="_blank" rel="noopener noreferrer">{children}</a>
    },
    underline: ({ children }: PortableTextMarkComponentProps<any>) => {
      return <span className="underline">{children}</span>
    },
    highlight: ({ children }: PortableTextMarkComponentProps<any>) => {
      return <span className="px-0.5 rounded-sm bg-yellow-200">{children}</span>
    },
    
  }
}

export function BlockContent(props: PortableTextProps) {
  return <PortableText {...props} value={props.value} components={components} />
}

