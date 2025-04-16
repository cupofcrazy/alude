import { PortableTextMarkComponentProps } from "@portabletext/react";

export const HighlightDecorator = ({ children }: PortableTextMarkComponentProps<any>) => {
  return (
    <span style={{
      paddingLeft: '0.15rem',
      paddingRight: '0.15rem',
      backgroundColor: '#ffe600',
      paddingBottom: '0.15rem',
      color: '#111',
    }}>{children}</span>
  )
}


