interface Props {
  width: number;
  height: number;
  quality: string;
  format: string;
}

export const getParametersForUnsplash = ({
  width,
  height,
  quality,
  format,
}: Props) => {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
};
