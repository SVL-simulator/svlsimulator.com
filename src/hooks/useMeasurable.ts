/* global ResizeObserver, MutationObserver */
/**
 * A higher-order component that adds the ability to measure nodes conveniently.
 *
 * @module ui/Measurable
 * @exports Measurable
 */

import { useLayoutEffect, useRef, useState } from 'react';

interface DOMRectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}
interface MeasurableNode extends Node {
  readonly getBoundingClientRect?: () => DOMRect;
}

declare class ResizeObserver {
  constructor(callback: ResizeObserverCallback);
  observe: (node: Element) => void;
  unobserve: (node: Element) => void;
  disconnect: () => void;
}

const useMeasurable = () => {
  const [measurement, setMeasurement] = useState<DOMRect>();
  const ref = useRef(null);

  useLayoutEffect(
    () => {
      const refToMeasure: HTMLElement | null = ref.current;
      if (!refToMeasure) {
        return;
      }

      // Support for ResizeObserver
      let observer: ResizeObserver | null;
      if ('ResizeObserver' in window) {
        observer = new ResizeObserver(entries => {
          entries.forEach(entry => {
            if (entry.target === refToMeasure) {
              const node: Element = entry.target;
              // we want to measure including the padding, hence refers to `target` instead of `contentRect`
              setMeasurement(node.getBoundingClientRect());
            }
          });
        });

        observer.observe(refToMeasure);

        return () => {
          observer?.disconnect();
          observer = null;
        };
        // Fallback support for MutationObserver
      } else if ('MutationObserver' in window) {
        let mutationObserver: MutationObserver | null = new MutationObserver(mutationsList => {
          for (const mutation of mutationsList) {
            const node: MeasurableNode = mutation.target;
            if (mutation.type === 'childList') {
              if (typeof node.getBoundingClientRect === 'function') {
                setMeasurement(node.getBoundingClientRect());
              }
            } else if (
              mutation.type === 'attributes' &&
              (mutation.attributeName === 'style' || mutation.attributeName === 'class')
            ) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              setMeasurement(refToMeasure?.getBoundingClientRect());
            }
          }
        });

        mutationObserver.observe(refToMeasure, { attributes: true, childList: true, subtree: true });

        return () => {
          mutationObserver?.disconnect();
          mutationObserver = null;
        };
      }
    },
    [] // disconnect on unmount
  );

  return {
    ref,
    measurement
  };
};

export default useMeasurable;
export { useMeasurable };
