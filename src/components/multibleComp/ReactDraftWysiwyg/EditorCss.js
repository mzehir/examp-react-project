import styled from "styled-components/macro";
import CustomEditor from "./CustomEditor";

const EditorCss = styled(CustomEditor)`
  .wrapperClassName {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .toolbarClassName {
    background-color: ${(props) => props.theme.palette.background.paper};
    border: 0px;
    border-radius: 2px;
    color: black;
  }
  .editorClassName {
    background-color: ${(props) => props.theme.palette.background.paper};
    border-radius: 2px;
    flex: 1;
    height: 0px;
    padding-right: 13px;
    padding-left: 13px;
  }
`;

export default EditorCss;
