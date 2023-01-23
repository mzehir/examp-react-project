import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import EditorCss from "./CustomEditor";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
    <React.Fragment>
      <EditorCss
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />

      <textarea disabled value={draftToHtmlData} />
    </React.Fragment>
  );
};

export default ReactDraftWysiwyg;
