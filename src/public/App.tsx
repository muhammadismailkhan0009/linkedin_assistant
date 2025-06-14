
import React from "react";
import { ProcessClipboard } from "./components/ProcessClipboard";
import { DisplayComment } from "./components/DisplayComment";
export function App() {
  return (
    <div>
      <h4>Post Scrapper</h4>
      <ProcessClipboard />

      <DisplayComment />
    </div>
  );
}