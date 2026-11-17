"use client";

import { useEffect, useState } from "react";

export default function Copyright() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p>
      © {year} Johnpaul Ozioko. All rights reserved.
    </p>
  );
}