/** @jsx jsx */
import { css } from "@emotion/core";

export const paperStylesSourceList = css`
  && {
    color: rgba(0, 0, 0, 0.54);
    text-align: left;
    flex-direction: column;
    overflow-y: auto;
    max-height: 90%;
    border-radius: 0px;
  }
`;

export const listStyle = css`
  width: 100%;
  background-color: #bbebee;
  color: #f6f6f7;
  flex-direction: row;
`;

export const listItemStyle = css`
  width: 100%;
  color: #f6f6f7;
  background-color: #232946;
  border-bottom: 1px solid lavenderblush;
  &.selected,
  &.selected:hover {
    background-color: #bbebee;
    color: #232946;
  }

  ,
  &&:hover {
    background-color: #bbebee;
    color: #232946;
  }
`;

export const cardStyle = css`
  && {
    width: 100%;
    padding: 3px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto !important;
  }
`;

export const paperStyles = css`
  color: rgba(0, 0, 0, 0.54);
  text-align: left;
  overflow-y: auto;
  max-height: 90%;
  height: 100%;
`;

export const search = css`
  margin-left: 38px;
  width: 40%;
  position: relative;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const searchIcon = css`
  padding: 12px 16px;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

export const sectionDesktop = css`
  display: flex;
`;

export const cardActionColumnFlexBox = css`
  ${sectionDesktop};
  flex-direction: column;
`;

export const title = css`
  display: block;
`;

export const grow = css`
  && {
    flex-grow: 1;
    background-color: #232946;
  }
`;

export const inputRoot = css`
  color: inherit;
`;

export const inputInput = css`
  ${inputRoot};
  padding: 8px 8px 8px 0px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
`;

export const NoPadding = css`
  padding: 0px;
`;

export const rootContainer = css`
  flex-grow: 1;
  flex-direction: row;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const fullContainerHeight = css`
  && {
    height: 100%;
  }
`;

export const sideBarFixWidth = css`
  width: 5%;
`;

export const containerWidth = css`
  width: 95%;
`;

export const sideBarStyles = css`
  background-color: #141419;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  color: #9d9ea3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const sideBarIcons = css`
  && {
    font-size: 2rem;
    margin: 15px 0;
  }
`;
