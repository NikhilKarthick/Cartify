import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export interface ZoomImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  isZoomEnabled?: boolean;
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt,
  className,
  isZoomEnabled = true,
  ...rest //  includes data-testid, loading, etc.
}) => {
  const imageElement = (
    <img
      src={src}
      alt={alt}
      className={`rounded shadow-md object-contain ${className ?? ""}`}
      loading="lazy"
      style={{ cursor: isZoomEnabled ? "zoom-in" : "default" }}
      {...rest} // forward props like data-testid
    />
  );

  return isZoomEnabled ? <Zoom>{imageElement}</Zoom> : imageElement;
};
