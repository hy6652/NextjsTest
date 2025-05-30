'use client'

import { usePersonStore } from "@/stores/usePersonStore";
import { useCountStore } from "@/stores/useStore";
import React from "react";

export default function Home() {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);

  return (
    <main>
      <label>
        First Name
        <input 
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>
      <p>
        Hello, <strong>{firstName}!</strong>
      </p>

      <label>
        Number Count: {count}!
        <button onClick={increase}>Increase</button>
      </label>

    </main>
  );
}
