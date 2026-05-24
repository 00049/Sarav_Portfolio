import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 0.3) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: offset,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
}
