import { AlertComp, AlertTitleComp } from "../AlertMaterial";

export const SuccessAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="success">
        <AlertTitleComp>Success</AlertTitleComp>
        {props.text ? props.text : "Alert Success Text"}
      </AlertComp>
    </>
  );
};

export const WarningAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="warning">
        <AlertTitleComp>Warning</AlertTitleComp>
        {props.text ? props.text : "Alert Warning Text"}
      </AlertComp>
    </>
  );
};

export const ErrorAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="error">
        <AlertTitleComp>Error</AlertTitleComp>
        {props.text ? props.text : "Alert Error Text"}
      </AlertComp>
    </>
  );
};
