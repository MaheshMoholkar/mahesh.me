"use client";

import { useState } from "react";
import type { Highlight } from "@/content/site";

// Highlights a phone shows before "Show more"; wider screens always show all of them
const PHONE_COUNT = 2;

export function Highlights({ items }: { items: Highlight[] }) {
  const [open, setOpen] = useState(false);
  const extra = items.length - PHONE_COUNT;
  // Hiding a single highlight saves less space than the button takes
  const collapsible = extra > 1;

  return (
    <>
      <ul className="highlights" data-collapsed={collapsible && !open ? "" : undefined}>
        {items.map((item, i) => (
          <li key={i}>
            {typeof item === "object" ? (
              <>
                <strong>{item.lead}</strong> {item.text}
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
      {collapsible ? (
        <button type="button" className="more-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Show less" : `Show ${extra} more`}
        </button>
      ) : null}
    </>
  );
}
