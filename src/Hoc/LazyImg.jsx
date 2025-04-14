import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImg = ({ src, alt, className }) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    className={className}
    wrapperProps={{
      style: {
        transitionDelay: "0.5s",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    }}
  />
);

export default LazyImg;
