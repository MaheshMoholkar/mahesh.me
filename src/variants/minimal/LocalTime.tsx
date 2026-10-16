"use client";

import { useEffect, useState } from "react";

const clock = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit" });

/** Pune's current time. Filled in after mount: the page is prerendered, so a server-side time would be the build time. */
export function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(clock.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="foot__time">{now}</span>;
}
