import { ReactElement } from 'react';
import NextImage, { type ImageProps } from 'next/image';

export const Image = ({ src, alt, ...props }: ImageProps): ReactElement => {
  return (
    <div>
      {src && (
        <NextImage
          src={src}
          alt={alt}
          {...props}
        />
      )}
    </div>
  );
};