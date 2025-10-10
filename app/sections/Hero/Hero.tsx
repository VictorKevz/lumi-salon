"use client";
import { motion } from "framer-motion";
import React from "react";

type Messages = Record<string, string>;

export const Hero = ({
  isClient,
  messages,
}: {
  isClient: boolean;
  messages: Messages;
}) => {
  return (
    <section id="home" className="flex gap-4 items-center flex-col py-10">
      {isClient ? (
        <>
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
        </>
      ) : (
        <>
          <h1 className="text-4xl">{messages["hero.title"]}</h1>
          <p>{messages["hero.subtitle"]}</p>
        </>
      )}
    </section>
  );
};
