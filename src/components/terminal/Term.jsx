"use client";

import { useRef, useState } from "react";
import Terminal from "react-console-emulator";
import { commands, overwrites } from "./Commands/commands";

export default function Term() {
  const cmds = commands;
  const owrs = overwrites;
  const terminal = useRef(null);
  const [prompt, setPrompt] = useState("you@/Taifur:~$ ");

  return (
    <>
      <Terminal
        ref={terminal}
        welcomeMessage={[
          "Welcome to Taifur dev Terminal!",
          "---",
          "Type 'help' to see a list of commands.",
          "---",
        ]}
        commands={{
          clear: {
            description: "Clears the terminal",
            usage: "clear",
            fn: () => {
              terminal.current.clearStdout();
            },
          },
          help: {
            description: "List all available commands",
            usage: "help",
            fn: () => {
              return `
                ${Object.keys(owrs)
                  .map(
                    (cmd) =>
                      `${cmd}${" ".repeat(12 - cmd.length)} | ${
                        owrs[cmd].description
                      }${" ".repeat(39 - owrs[cmd].description.length)} | ${
                        owrs[cmd].usage
                      }`
                  )
                  .join("\n")}
                ${Object.keys(cmds)
                  .map(
                    (cmd) =>
                      `${cmd}${" ".repeat(12 - cmd.length)} | ${
                        cmds[cmd].description
                      }${" ".repeat(39 - cmds[cmd].description.length)} | ${
                        cmds[cmd].usage
                      }`
                  )
                  .join("\n")}
              `;
            },
          },
          ...cmds,
        }}
        promptLabel={prompt}
        autoFocus
        style={{
          backgroundColor: null,
          minHeight: null,
          maxHeight: null,
          overflow: "auto",
          height: "100%",
          width: "100%",
        }}
        styleEchoBack="fullInherit"
        contentStyle={{
          color: "#ffb86c",
          fontWeight: "normal",
          paddingLeft: null,
        }} // Text colour
        promptLabelStyle={{ color: "#ff5555", fontWeight: "normal" }} // Prompt label colour
        inputTextStyle={{ color: "#f1fa8c", fontWeight: "normal" }}
        messageStyle={{
          color: "#8be9fd",
          fontWeight: "normal",
          paddingLeft: null,
        }}
        scrollBehavior="auto"
        noDefaults
      />
    </>
  );
}
