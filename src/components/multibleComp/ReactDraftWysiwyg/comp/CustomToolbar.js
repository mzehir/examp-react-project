// import { ReactComponent as AlignCenterIcon } from "../../../../assets/reactDraftWysiwyg/align-center.svg";
// import { ReactComponent as AlignJustifyIcon } from "../../../../assets/reactDraftWysiwyg/align-justify.svg";
// import { ReactComponent as AlignLeftIcon } from "../../../../assets/reactDraftWysiwyg/align-left.svg";
// import { ReactComponent as AlignRightIcon } from "../../../../assets/reactDraftWysiwyg/align-right.svg";
// import { ReactComponent as BoldIcon } from "../../../../assets/reactDraftWysiwyg/bold.svg";
// import { ReactComponent as ColorIcon } from "../../../../assets/reactDraftWysiwyg/color.svg";
// import { ReactComponent as EmbeddedIcon } from "../../../../assets/reactDraftWysiwyg/embedded.svg";
// import { ReactComponent as EmojiIcon } from "../../../../assets/reactDraftWysiwyg/emoji.svg";
// import { ReactComponent as EraserIcon } from "../../../../assets/reactDraftWysiwyg/eraser.svg";
// import { ReactComponent as FontIcon } from "../../../../assets/reactDraftWysiwyg/font-size.svg";
// import { ReactComponent as ImageIcon } from "../../../../assets/reactDraftWysiwyg/image.svg";
// import { ReactComponent as IndentIcon } from "../../../../assets/reactDraftWysiwyg/indent.svg";
// import { ReactComponent as ItalicIcon } from "../../../../assets/reactDraftWysiwyg/italic.svg";
// import { ReactComponent as LinkIcon } from "../../../../assets/reactDraftWysiwyg/link.svg";
// import { ReactComponent as ListOrderedIcon } from "../../../../assets/reactDraftWysiwyg/list-ordered.svg";
// import { ReactComponent as ListUnorderedIcon } from "../../../../assets/reactDraftWysiwyg/list-unordered.svg";
// import { ReactComponent as MonospaceIcon } from "../../../../assets/reactDraftWysiwyg/monospace.svg";
// import { ReactComponent as OpenlinkIcon } from "../../../../assets/reactDraftWysiwyg/openlink.svg";
// import { ReactComponent as OrderedIcon } from "../../../../assets/reactDraftWysiwyg/ordered.svg";
// import { ReactComponent as OutdentIcon } from "../../../../assets/reactDraftWysiwyg/outdent.svg";
// import { ReactComponent as RedoIcon } from "../../../../assets/reactDraftWysiwyg/redo.svg";
// import { ReactComponent as StrikethroughIcon } from "../../../../assets/reactDraftWysiwyg/strikethrough.svg";
// import { ReactComponent as SubscriptIcon } from "../../../../assets/reactDraftWysiwyg/subscript.svg";
// import { ReactComponent as SuperscriptIcon } from "../../../../assets/reactDraftWysiwyg/superscript.svg";
// import { ReactComponent as UnderlineIcon } from "../../../../assets/reactDraftWysiwyg/underline.svg";
// import { ReactComponent as UndoIcon } from "../../../../assets/reactDraftWysiwyg/undo.svg";
// import { ReactComponent as UnlinkIcon } from "../../../../assets/reactDraftWysiwyg/unlink.svg";
// import { ReactComponent as UnorderedIcon } from "../../../../assets/reactDraftWysiwyg/unordered.svg";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 991a0e15ea25453");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const customToolbarDataReturn = () => {
  let returnData = {};

  let inline = {
    bold: {
      // icon: BoldIcon,
      className: "demo-option-custom",
    },
    italic: {
      // icon: ItalicIcon,
      className: "demo-option-custom",
    },
    underline: {
      // icon: UnderlineIcon,
      className: "demo-option-custom",
    },
    strikethrough: {
      // icon: StrikethroughIcon,
      className: "demo-option-custom",
    },
    monospace: { className: "demo-option-custom" },
    superscript: {
      // icon: SuperscriptIcon,
      className: "demo-option-custom",
    },
    subscript: {
      // icon: SubscriptIcon,
      className: "demo-option-custom",
    },
  };

  let blockType = {
    className: "demo-option-custom-wide",
    dropdownClassName: "demo-dropdown-custom",
  };

  let fontSize = {
    className: "demo-option-custom-medium",
  };

  let list = {
    unordered: {
      // icon: UnorderedIcon,
      className: "demo-option-custom",
    },
    ordered: {
      // icon: OrderedIcon,
      className: "demo-option-custom",
    },
    indent: {
      // icon: IndentIcon,
      className: "demo-option-custom",
    },
    outdent: {
      // icon: OutdentIcon,
      className: "demo-option-custom",
    },
  };

  let textAlign = {
    left: {
      // icon: AlignLeftIcon,
      className: "demo-option-custom",
    },
    center: {
      // icon: AlignCenterIcon,
      className: "demo-option-custom",
    },
    right: {
      // icon: AlignRightIcon,
      className: "demo-option-custom",
    },
    justify: {
      // icon: AlignJustifyIcon,
      className: "demo-option-custom",
    },
  };

  let fontFamily = {
    className: "demo-option-custom-wide",
    dropdownClassName: "demo-dropdown-custom",
  };

  let colorPicker = {
    className: "demo-option-custom",
    popupClassName: "demo-popup-custom",
  };

  let link = {
    popupClassName: "demo-popup-custom",
    link: {
      // icon: LinkIcon,
      className: "demo-option-custom",
    },
    unlink: {
      // icon: UnlinkIcon,
      className: "demo-option-custom",
    },
  };

  let emoji = {
    className: "demo-option-custom",
    popupClassName: "demo-popup-custom",
  };

  let embedded = {
    className: "demo-option-custom",
    popupClassName: "demo-popup-custom",
  };

  let image = {
    // icon: ImageIcon,
    className: "demo-option-custom",
    popupClassName: "demo-popup-custom",
    uploadCallback: uploadImageCallBack,
    alt: { present: true, mandatory: true },
  };

  let remove = {
    // icon: EraserIcon,
    className: "demo-option-custom",
  };

  let history = {
    undo: {
      // icon: UndoIcon,
      className: "demo-option-custom",
    },
    redo: {
      // icon: RedoIcon,
      className: "demo-option-custom",
    },
  };

  returnData = {
    inline: inline,
    blockType: blockType,
    fontSize: fontSize,
    list: list,
    textAlign: textAlign,
    fontFamily: fontFamily,
    colorPicker: colorPicker,
    link: link,
    emoji: emoji,
    embedded: embedded,
    image: image,
    remove: remove,
    history: history,
  };

  return returnData;
};

export const customToolbar = customToolbarDataReturn();
