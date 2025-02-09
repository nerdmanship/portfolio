"use client";

import { useState } from "react";
import Tag from "./Tag";
import { CodeBracketIcon, PlayIcon,ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/16/solid"

export default function Showcase({
  title,
  description,
  showcaseColor,
  accentColor,
  tags = [],
  sourceLink,
  embed,
  media = []
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTags, setExpandedTags] = useState(false);

  const currentMedia = media[currentIndex];
  const footerBG = showcaseColor
    ? showcaseColor + "80"
    : "rgba(255,255,255,0.2)";
  const accentShadow = accentColor ? accentColor : "rgba(255,255,255,0.2)";

  function goToNext() {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  }

  function goToPrev() {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  }

  return (
    <div
      className="relative w-full rounded-md overflow-hidden flex flex-col justify-end group"
      style={{
        height: "24rem",
        boxShadow: `0 10px 30px ${accentShadow}, 0 0 0 1px rgba(255,255,255,0.145)`
      }}
    >
      {/* Main media area */}
      <div className="absolute inset-0">
        {currentMedia ? (
          currentMedia.type === "image" ? (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : currentMedia.type === "iframe" ? (
            <iframe
              src={currentMedia.src}
              title={currentMedia.alt}
              loading="lazy"
              className="w-full h-full border-none"
            />
          ) : (
            <div className="w-full h-full bg-neutral-500 flex items-center justify-center">
              <p>React component placeholder</p>
            </div>
          )
        ) : (
          <div className="w-full h-full bg-neutral-500 flex items-center justify-center">
            <p>No media available</p>
          </div>
        )}
      </div>

      {/* Navigation arrows - now with opacity transition */}
      {media.length > 1 && (
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-linear">
          <button onClick={goToPrev} className="btn btn-neutral btn-small rounded-full">
            <ChevronLeftIcon className="h-4" />
          </button>
          <button onClick={goToNext} className="btn btn-neutral btn-small rounded-full">
            <ChevronRightIcon className="h-4" />
          </button>
        </div>
      )}

      {/* Footer */}
      <div
        className="relative backdrop-blur-sm flex flex-row justify-between p-4 z-10 border-default"
        style={{
          height: "5rem",
          backgroundColor: footerBG,
        }}
      >
        {/* Left side */}
        <div className="flex flex-col justify-left mb-0">
          <span className="text-white text-md font-bold">{title}</span>

          {/* Tags (simple approach) */}
        <div className="overflow-hidden flex flex-row gap-2">
          {!expandedTags
            ? tags.slice(0, 4).map((t) => (
                <Tag
                  key={t}
                  label={t}
                  bgColor={showcaseColor}
                />
              ))
            : tags.map((t) => (
                <Tag
                  key={t}
                  label={t}
                  bgColor={showcaseColor}
                />
              ))}
          {tags.length > 4 && !expandedTags && (
            <Tag
              label={`+ ${tags.length - 4} more`}
              bgColor={accentColor}
              onClick={() => setExpandedTags(true)}
            />
          )}
          {expandedTags && (
            <Tag label="Show Less" bgColor={accentColor} onClick={() => setExpandedTags(false)} />
          )}
        </div>
        </div>
        {/* Right side */}
        <div className="flex gap-1">
            {sourceLink && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral btn-small"
              >
                <CodeBracketIcon className="h-4 w-4" />
              </a>
            )}
            {embed && (
              <a
                href={embed}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral btn-small"
              >
                <PlayIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        
      </div>
    </div>
  );
} 