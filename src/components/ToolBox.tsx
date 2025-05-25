import React from "react";

import { Editor, useEditor } from "@tiptap/react";

import { Color } from "@tiptap/extension-color";

interface toolBoxprops {
  editor: Editor | null;
}

function ToolBox({ editor }: toolBoxprops) {
  if (!editor) {
    return null;
  }

  return (
    <div className="fixed w-full -mt-20 bg-green-200  backdrop-blur-3xl">
      <nav>
        <div className="control-group">
          <div className="button-group p-5 flex gap-x-2">
            <button
              className="btn"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              Undo
            </button>
            <button
              className="btn"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              Redo
            </button>
          </div>
        </div>

        <div className="control-group">
          <div className="button-group">
          

            <button
              onClick={() => editor.chain().focus().setColor("#958DF1").run()}
              className={
                editor.isActive("textStyle", { color: "#958DF1" })
                  ? "is-active"
                  : ""
              }
              data-testid="setPurple"
            >
              Purple
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#F98181").run()}
              className={
                editor.isActive("textStyle", { color: "#F98181" })
                  ? "is-active"
                  : ""
              }
              data-testid="setRed"
            >
              Red
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#FBBC88").run()}
              className={
                editor.isActive("textStyle", { color: "#FBBC88" })
                  ? "is-active"
                  : ""
              }
              data-testid="setOrange"
            >
              Orange
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#FAF594").run()}
              className={
                editor.isActive("textStyle", { color: "#FAF594" })
                  ? "is-active"
                  : ""
              }
              data-testid="setYellow"
            >
              Yellow
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#70CFF8").run()}
              className={
                editor.isActive("textStyle", { color: "#70CFF8" })
                  ? "is-active"
                  : ""
              }
              data-testid="setBlue"
            >
              Blue
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#94FADB").run()}
              className={
                editor.isActive("textStyle", { color: "#94FADB" })
                  ? "is-active"
                  : ""
              }
              data-testid="setTeal"
            >
              Teal
            </button>
            <button
              onClick={() => editor.chain().focus().setColor("#B9F18D").run()}
              className={
                editor.isActive("textStyle", { color: "#B9F18D" })
                  ? "is-active"
                  : ""
              }
              data-testid="setGreen"
            >
              Green
            </button>
            <button
              onClick={() => editor.chain().focus().unsetColor().run()}
              data-testid="unsetColor"
            >
              Unset color
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ToolBox;
