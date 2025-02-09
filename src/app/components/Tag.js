"use client";

export default function Tag({ label, bgColor, onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block text-white/75 text-xs cursor-pointer whitespace-nowrap italic hover:text-white transition-colors"
    >
      #{label}
    </span>
  );
} 