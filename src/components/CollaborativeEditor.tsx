"use client";

import * as Y from "yjs";
import LiveblocksProvider from "@liveblocks/yjs";
import { TypedLiveblocksProvider, useRoom } from "@/liveblocks.config";
import { useCallback, useEffect, useState } from "react";
import styles from "./CollaborativeEditor.module.css";
import { Avatars } from "@/components/avatars";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { MonacoBinding } from "y-monaco";
import { Awareness } from "y-protocols/awareness";
import { Cursors } from "@/components/Cursors";
import { useTheme } from "next-themes";

// Collaborative code editor with undo/redo, live cursors, and live avatars
export function CollaborativeEditor() {
  const room = useRoom();
  const [provider, setProvider] = useState<TypedLiveblocksProvider>();
  const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor>();

  const { theme } = useTheme();

  // Set up Liveblocks Yjs provider and attach Monaco editor
  useEffect(() => {
    let yProvider: TypedLiveblocksProvider;
    let yDoc: Y.Doc;
    let binding: MonacoBinding;

    if (editorRef) {
      yDoc = new Y.Doc();
      const yText = yDoc.getText("monaco");
      yProvider = new LiveblocksProvider(room, yDoc);
      setProvider(yProvider);

      // Attach Yjs to Monaco
      binding = new MonacoBinding(
        yText,
        editorRef.getModel() as editor.ITextModel,
        new Set([editorRef]),
        yProvider.awareness as Awareness
      );
    }

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
      binding?.destroy();
    };
  }, [editorRef, room]);

  const handleOnMount = useCallback((e: editor.IStandaloneCodeEditor) => {
    setEditorRef(e);
  }, []);

  return (
    <div className='flex flex-col overflow-hidden w-full h-full relative '>
      {provider ? <Cursors yProvider={provider} /> : null}
      <div className='flex justify-end items-center p-2 h-[50px] border-b-2'>
        <Avatars />
      </div>
      <div className='flex-grow reltive'>
        <Editor
          onMount={handleOnMount}
          height="100%"
          width="100hw"
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          defaultLanguage="typescript"
          defaultValue={`
          // Welcome to the collaborative code editor!
          console.log("Hello world!");
          `}
          options={{
            tabSize: 2,
            padding: { top: 20 },
          }}
        />
      </div>
    </div>
  );
}
