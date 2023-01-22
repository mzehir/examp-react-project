import React from "react";
import styled, { css } from "styled-components/macro";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import { List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SidebarNavSection from "./SidebarNavSection";
import "../../../vendor/perfect-scrollbar.css";
import { routerArrReturn } from "../../../utils/constants/routerConstant";

const baseScrollbar = css`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-grow: 1;
`;

const Scrollbar = styled.div`
  ${baseScrollbar}
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)};
  padding-bottom: ${(props) => props.theme.spacing(2.5)};
`;

const SidebarNav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const ScrollbarComponent = matches ? PerfectScrollbar : Scrollbar;

  return (
    <ScrollbarComponent>
      <List disablePadding>
        <Items>
          {routerArrReturn().map(
            (routeItem) =>
              routeItem.sidebarVisible && (
                <SidebarNavSection
                  component="div"
                  key={routeItem.path}
                  itemInfo={routeItem}
                />
              )
          )}
        </Items>
      </List>
    </ScrollbarComponent>
  );
};

export default SidebarNav;
