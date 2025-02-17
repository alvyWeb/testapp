"use client";
import DrawCard from "@/components/draws/DrawCard";
import useContainerHeight from "@/hooks/useContentHeight";
import "./draws.scss";

const Draws = ({ draw, activeSection }) => {
  const { containerHeight, contentRef } = useContainerHeight(activeSection);

  return (
    <main className="atprank_app">
      <div className="main_score">
        <div className="live_head">
          <div ref={contentRef} className="match_content ">
            {draw?.round?.map((draw, index) => (
              <div>
                <h3 className="round-name">
                  {draw["@name"] === "Final¬" ? "Final" : draw["@name"]}
                </h3>
                <DrawCard
                  key={draw["@name"]}
                  round={draw?.match}
                  height={containerHeight}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Draws;
