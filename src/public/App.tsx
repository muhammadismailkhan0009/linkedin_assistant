
import React, { useState } from "react";
import { ProcessClipboard } from "./components/comment_section/ProcessClipboard";
import { DisplayComment } from "./components/comment_section/DisplayComment";
import { GeneratePost } from "./components/post_section/GeneratePost";
import { DisplayGeneratedPost } from "./components/post_section/DisplayGeneratedPost";
import { Action } from "./types/Action";

export function App() {

  const [state, setState] = useState<Action>(Action.default);

  const [generatedPost, setGeneratedPost] = useState<string>("");

  return (
    <div>

      <section>
        <h4>Comment Generator</h4>
        <ProcessClipboard />

        <DisplayComment />

      </section>

      <section>
        <h2>Post Generator</h2>
        <GeneratePost setState={setState} setGeneratedPost={setGeneratedPost}></GeneratePost>

        {state === Action.display_post && (
          <DisplayGeneratedPost generatedPost={generatedPost}></DisplayGeneratedPost>
        )
        }
      </section>
    </div >
  );
}