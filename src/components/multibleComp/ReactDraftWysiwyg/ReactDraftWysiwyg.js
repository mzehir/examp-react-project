import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import EditorCss from "./EditorCss";
import { REACT_DRAFT_WYSIWYG_SETTINGS } from "../../../settings";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const reactDraftWysiwygRootStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  height: "100%",
};

const textareaStyle = {
  width: "100%",
  height: "100%",
};

const ReactDraftWysiwyg = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [draftToHtmlData, setDraftToHtmlData] = useState("");

  const onEditorStateChange = async (state) => {
    await setEditorState(state);

    const _draftToHtmlData = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setDraftToHtmlData(_draftToHtmlData);
  };

  return (
    <div style={reactDraftWysiwygRootStyle}>
      <EditorCss
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />

      {REACT_DRAFT_WYSIWYG_SETTINGS.reactDraftWysiwygTextareaElVisible && (
        <textarea disabled style={textareaStyle} value={draftToHtmlData} />
      )}
    </div>
  );
};

export default ReactDraftWysiwyg;
