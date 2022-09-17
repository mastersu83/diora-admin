import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={295}
    height={444}
    viewBox="0 0 295 444"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="295" height="444" />
  </ContentLoader>
);

export default MyLoader;
