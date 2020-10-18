/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { sideBarIcons } from "../styles";
import HomeIcon from "@material-ui/icons/Home";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ReceiptIcon from "@material-ui/icons/Receipt";

const StyledGraphicEqIcon = styled(GraphicEqIcon)`
  ${sideBarIcons}
`;

const StyledDashboardIcon = styled(DashboardIcon)`
  ${sideBarIcons}
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  ${sideBarIcons}
`;

const StyledFeedbackIcon = styled(FeedbackIcon)`
  ${sideBarIcons}
`;

const StyledHomeIcon = styled(HomeIcon)`
  ${sideBarIcons}
`;

const StyledMenuBookIcon = styled(MenuBookIcon)`
  ${sideBarIcons}
`;

const StyledReceiptIcon = styled(ReceiptIcon)`
  ${sideBarIcons}
`;

export const SideBarView = (props) => {
  return (
    <div css={props.styleObject}>
      <StyledGraphicEqIcon />
      <StyledHomeIcon />
      <StyledMenuBookIcon />
      <StyledDashboardIcon />
      <StyledReceiptIcon />
      <StyledSettingsIcon />
      <StyledFeedbackIcon />
    </div>
  );
};
