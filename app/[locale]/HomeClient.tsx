"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Messages = Record<string, string>;

export default function HomeClient({ messages }: { messages: Messages }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex gap-4 items-center flex-col">
        <h1 className="text-4xl">{messages["hero.title"]}</h1>
        <p>{messages["hero.subtitle"]}</p>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center flex-col">
      <motion.h1
        className="text-4xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {messages["hero.title"]}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {messages["hero.subtitle"]}
      </motion.p>
    </div>
  );
}
