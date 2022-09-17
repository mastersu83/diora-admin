import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={265}
    viewBox="0 0 400 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="400" height="265" />
  </ContentLoader>
);

export default MyLoader;
