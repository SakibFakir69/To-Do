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
    <div className="fixed w-full -mt-20 py-2 bg-green-200  backdrop-blur-3xl">
      <nav className="flex gap-x-3">
        <div className="control-group">
          <div className="button-group ">
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
            <div className="control-group">
              <div className="button-group">
                <select
                  name="color"
                  onChange={(e) => {
                    const color =( e.target as HTMLSelectElement).value ;
                    console.log(color)
                    if (color === "unset") {
                      editor.chain().focus().unsetColor().run();
                    } else {
                      editor.chain().focus().setColor(color).run();
                    }
                  }}
                  className="p-1 rounded"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Color
                  </option>
                  <option value="#958DF1">Purple</option>
                  <option value="#F98181">Red</option>
                  <option value="#FBBC88">Orange</option>
                  <option value="#FAF594">Yellow</option>
                  <option value="#70CFF8">Blue</option>
                  <option value="#94FADB">Teal</option>
                  <option value="#B9F18D">Green</option>
                  <option value="unset">Unset Color</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* bold */}
        <div className="control-group">
          <div className="button-group">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
            >
               bold
            </button>

           
          </div>
        </div>


        <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}
          >
            Toggle highlight
          </button>
          
          
        </div>
      </div>
        <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            Toggle italic
          </button>
          
        </div>
      </div>

      </nav>
    </div>
  );
}

export default ToolBox;
