"use client";

import {
  createElement,
  useCallback,
  useEffect,
  useState,
  type HTMLAttributes,
  type ElementType,
  type ReactNode,
} from "react";

type RevealBlockProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealBlock({
  as,
  children,
  className,
  delay = 0,
  ...props
}: RevealBlockProps) {
  const Component = as ?? "div";
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const setElementRef = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return createElement(
    Component,
    {
      ...props,
      className: [
        "reveal-block",
        isVisible ? "is-visible" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" "),
      ref: setElementRef,
      style: { ...props.style, transitionDelay: `${delay}ms` },
    },
    children,
  );
}
