import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  customHashtag,
  customMention,
  customToolbar,
} from "./ReactDraftWysiwygHelper";

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
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        //* Extra
        toolbar={customToolbar}
        mention={customMention}
        hashtag={customHashtag}
      />
      <textarea disabled value={draftToHtmlData} />
    </>
  );
};

export default ReactDraftWysiwyg;
