import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

import { customToolbar } from "./comp/CustomToolbar";
import { customMention } from "./comp/CustomMention";
import { customHashtag } from "./comp/CustomHashtag";

const editorWrapperStyle = {
  width: "100%",
};

const CustomEditor = ({ className, editorState, onEditorStateChange }) => (
  <div className={className} style={editorWrapperStyle}>
    <Editor
      editorState={editorState}
      wrapperClassName="wrapperClassName"
      toolbarClassName="toolbarClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      toolbar={customToolbar}
      mention={customMention}
      hashtag={customHashtag}
    />
  </div>
);

export default CustomEditor;
