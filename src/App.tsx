import React, { Children, useEffect, useRef, useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";

function App() {

  const useText = useRef<null>(null);

  const  [ text , settext ] = useState<string>('');


  const editor = useEditor({
     extensions: [
      StarterKit.configure({
        bold: false, // disable default bold to use custom one
      }),
      Bold,
    ],
    content: `

   
      `,
  });

  useEffect(()=>{

    if(editor && text){
      editor.commands.setContent(text);
    }

  },[text,editor])

  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
      
      
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Toggle bold
      </button>

      <input type="text"  onChange={(e)=> settext(e.target.value)} placeholder="Enter your text"/>

       <EditorContent editor={editor} />

     
    </div>
  );
}

export default App;
