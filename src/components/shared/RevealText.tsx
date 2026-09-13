"use client";

import type { ElementType } from "react";
import { RevealBlock } from "./RevealBlock";

type RevealTextProps = {
  as?: ElementType;
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export function RevealText({
  as = "h2",
  lines,
  className,
  lineClassName,
  delay = 0,
}: RevealTextProps) {
  const Heading = as;

  return (
    <RevealBlock as={Heading} className={className} delay={delay}>
      {lines.map((line, index) => (
        <span className="reveal-line" key={`${line}-${index}`}>
          <span
            className={lineClassName}
            style={{ transitionDelay: `${delay + index * 130}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </RevealBlock>
  );
}
