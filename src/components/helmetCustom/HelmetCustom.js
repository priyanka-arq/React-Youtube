import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetCustom({
  title = "YouTube-App",
  description = "A react project using youtube api",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
