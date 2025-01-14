import highlightjs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef } from "react";
import { useCodeStore } from "../state/code-store";

export function TypedChars() {
  useCodeStore((state) => state.code);
  const index = useCodeStore((state) => state.index);
  const typedChars = useCodeStore((state) => state.correctChars);
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (typedRef.current) {
      highlightjs.highlightElement(typedRef.current);
    }
  }, [index]);
  return (
    <span ref={typedRef} style={{ background: "none" }}>
      {typedChars()}
    </span>
  );
}
