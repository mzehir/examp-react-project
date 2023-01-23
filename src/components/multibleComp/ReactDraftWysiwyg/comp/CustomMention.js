const customMentionDataReturn = () => {
  let returnData = {};

  let separator = { separator: " " };
  let trigger = { trigger: "@" };
  let suggestions = [
    { text: "APPLE", value: "apple", url: "apple" },
    { text: "BANANA", value: "banana", url: "banana" },
    { text: "CHERRY", value: "cherry", url: "cherry" },
    { text: "DURIAN", value: "durian", url: "durian" },
    { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
    { text: "FIG", value: "fig", url: "fig" },
    { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
    { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
  ];

  returnData = {
    ...separator,
    ...trigger,
    ...suggestions,
  };

  return returnData;
};
export const customMention = customMentionDataReturn();
