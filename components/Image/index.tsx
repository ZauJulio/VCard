import React from "react";
import * as Img from "next/image";

import styles from "./styles.module.scss";

function Image({ children, alt, className, ...rest }: Img.ImageProps) {
  return (
    <div className={`${styles.image_wrapper} ${className}`}>
      <Img.default {...rest} alt={alt}>
        {children}
      </Img.default>
    </div>
  );
}

export default Image;
