"use client";

import { useWindowHeight } from "@/hooks/useWindowHeight";

function TennisIframe({ hash }) {
  const iframeHeight = useWindowHeight();

  return (
    <div style={{ padding: "0 2px" }}>
      <iframe
        src={`https://tennis.atpenn.com/${hash}`}
        width="100%"
        height={iframeHeight}
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default TennisIframe;
