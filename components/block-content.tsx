import { Image } from "@/components/image"
import { getImageDimensions } from "@sanity/asset-utils"
import { PortableText, PortableTextProps, PortableTextComponents, PortableTextMarkComponentProps, PortableTextComponentProps } from "@portabletext/react"
import { A11yImage } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"

const components: PortableTextComponents = {
  types: {
    a11yImage: ({ value }: { value: A11yImage }) => {
      if (!value.image) return null;

      const image = urlFor(value.image).url()
      return (
        <Image
          className="rounded-md"
          src={image}
          alt={value.alt || ""}
          width={getImageDimensions(image).width}
          height={getImageDimensions(image).height}
          placeholder="blur"
          blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
        />
      )
    }
  },
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      return (
        <a className="px-1 pb-0.5 rounded-sm text-neutral-600 bg-neutral-100 hover:bg-neutral-200" href={value.url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },
    underline: ({ children }: PortableTextMarkComponentProps<any>) => {
      return <span className="underline">{children}</span>
    },
    highlight: ({ children }: PortableTextMarkComponentProps<any>) => {
      return <span className="px-0.5 rounded-sm bg-yellow-200">{children}</span>
    },
    
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => {
      return <ul className="list-disc pl-5">{children}</ul>
    },
    number: ({ children }: PortableTextComponentProps<any>) => {
      return <ol className="list-decimal pl-5">{children}</ol>
    }
  }
}

export function BlockContent(props: PortableTextProps) {
  return (
    <div className="flex flex-col gap-1">
      <PortableText
        {...props}
        value={props.value}
        components={components}
      />
    </div>
  )
}

