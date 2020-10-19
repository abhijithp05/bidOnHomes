/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { sectionDesktop, grow } from "../styles";
import { connect } from "react-redux";
import { setProductListView, setLoginStatus } from "../actions";

const StyledAppBar = styled(AppBar)`
  ${grow}
`;

class NavBarUnwrapped extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  setAnchorEl(value) {
    this.setState({
      anchorEl: value,
    });
  }

  handleProfileMenuOpen = (event) => {
    this.setAnchorEl(event.currentTarget);
  };

  handleMenuClose = () => {
    this.setAnchorEl(null);
  };

  onLogoutClick = () => {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    localStorage.setItem("login_status", "false");
  };
  render() {
    const isMenuOpen = Boolean(this.state.anchorEl);

    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            this.handleMenuClose();
            this.props.setLoginStatus(false);
            this.onLogoutClick();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    );
    return (
      <div css={grow}>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              BidOnHomes Products
            </Typography>
            {/* <div css={search}>
              <div css={searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                css={inputInput}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
            <div css={grow} />
            <div css={sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge color="secondary">
                  <ListAltIcon
                    onClick={() => {
                      this.props.setProductListView(true);
                    }}
                  />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge
                  color="secondary"
                  badgeContent={this.props.productInCartList.length}
                >
                  <ShoppingCartIcon
                    onClick={() => {
                      this.props.setProductListView(false);
                    }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </StyledAppBar>
        {renderMenu}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productInCartList: state.get.productInCartList,
  };
};

export const NavBar = connect(mapStateToProps, {
  setProductListView,
  setLoginStatus,
})(NavBarUnwrapped);
