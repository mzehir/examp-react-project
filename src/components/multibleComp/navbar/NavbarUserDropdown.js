import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

import AuthUseContext from "../../../hooks/AuthUseContext";
import { ROUTER } from "../../../utils/constants/routerConstant";
import { Power } from "react-feather";
import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const navigate = useNavigate();
  const { signOut } = AuthUseContext();
  const [anchorMenu, setAnchorMenu] = React.useState(null);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate(ROUTER.LOGIN.path);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
