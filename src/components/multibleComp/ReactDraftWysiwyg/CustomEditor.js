import React from "react";
import styled from "styled-components/macro";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

import { customToolbar } from "./comp/CustomToolbar";
import { customMention } from "./comp/CustomMention";
import { customHashtag } from "./comp/CustomHashtag";

const CustomEditor = ({ className, editorState, onEditorStateChange }) => (
  <div className={className}>
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
  </div>
);

const EditorCss = styled(CustomEditor)`
  .button {
    background-color: ${(props) => props.theme.palette.background.paper};
  }

  .toolbarClassName {
    background-color: ${(props) => props.theme.palette.background.paper};
  }
`;

export default EditorCss;
