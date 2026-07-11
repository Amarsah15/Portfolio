import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, using IntersectionObserver. Returns the active id (or null).
 */
export function useScrollSpy(ids, { rootMargin = "-45% 0px -50% 0px" } = {}) {
  const [activeId, setActiveId] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Reset retry count when ids change
  useEffect(() => {
    setRetryCount(0);
  }, [ids]);

  useEffect(() => {
    if (ids.length === 0) return undefined;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    // If not all elements are in the DOM yet, retry after a short delay (up to 10 times)
    if (elements.length < ids.length && retryCount < 10) {
      const timeoutId = setTimeout(() => {
        setRetryCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }

    if (elements.length === 0) return undefined;

    // Track intersection state of all observed elements
    const intersectionStates = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectionStates[entry.target.id] = {
            isIntersecting: entry.isIntersecting,
            intersectionHeight: entry.intersectionRect ? entry.intersectionRect.height : 0,
          };
        });

        // Find all elements that are currently intersecting
        const visible = ids
          .map((id) => {
            const state = intersectionStates[id];
            if (state && state.isIntersecting) {
              return { id, height: state.intersectionHeight };
            }
            return null;
          })
          .filter(Boolean)
          .sort((a, b) => b.height - a.height);

        if (visible.length > 0) {
          setActiveId(visible[0].id);
        } else {
          setActiveId(null);
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin, retryCount]);

  return activeId;
}
