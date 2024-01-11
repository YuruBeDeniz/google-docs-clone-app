import "quill/dist/quill.snow.css";
import Quill from "quill";
import { useCallback } from "react";

function TextEditor() {
  const wrapperRef  =  useCallback((wrapper) => {
    if(wrapper === null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow" });
  }, [])

  return (
    <div className="container" ref={wrapperRef}>Text Editor</div>
  )
}

export default TextEditor
