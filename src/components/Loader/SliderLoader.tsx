import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={750}
    viewBox="0 0 1200 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="7" ry="7" width="1200" height="750" />
  </ContentLoader>
);

export default SliderLoader;
