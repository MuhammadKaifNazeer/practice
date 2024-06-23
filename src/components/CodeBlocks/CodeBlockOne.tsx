"use client";
import { CodeBlock } from "react-code-block";

const code = `
  import React from "react";

const Component = () => {
  return (
    <>
      <h1>Component</h1>
    </>
  );
};

export default Component
  `;

export function CodeBlockOne() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50rem]">
        <CodeBlock code={code} language={"bash"}>
          <CodeBlock.Code className="bg-black border p-6 rounded-xl w-full shadow-lg m-4">
            <div className="table-row">
              <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-right select-none" />
              <CodeBlock.LineContent className="table-cell">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>
        </CodeBlock>
      </div>
    </div>
  );
}
