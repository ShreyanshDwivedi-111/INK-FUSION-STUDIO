import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Images({ slides }) {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      <div className="p-5 md:p-10">
        <div className="columns-3 gap-4 lg:gap-7 sm:columns-4 lg:columns-4 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {slides.map((s, index) => (
            <img
              // className="grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
              className="cursor-pointer"
              src={s.src}
              key={index}
              onClick={() => setIndex(index)}
              alt={`Img ${index}`}
              height={"450px"}
              width={"330px"}
            />
          ))}
        <Lightbox
         styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)} 
        noScroll={true}
        />
        </div>
      </div>
    </div>
  );
}
