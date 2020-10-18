/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { listItemStyle } from "../styles";

const StyledListItem = styled(ListItem)`
  ${listItemStyle}
`;

export const ListItemView = (props) => {
  return (
    <StyledListItem>
      <ListItemText primary={props.title} />
      {props.children}
    </StyledListItem>
  );
};

StyledListItem.propType = {
  onListItemClick: PropTypes.func,
  listItem: PropTypes.object,
};
