import styled from "styled-components";

export const StyledRatingsFilter = styled.div`
  .star-wrapper {
    display: flex;
    place-content: center;
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5));
  }

  .star-wrapper p {
    font-family: "Arial";
    opacity: 0.5;
  }

  .star-group {
    font-size: 0;
    direction: rtl;
    margin-top: 0.55rem;
  }

  .star-group * {
    font-size: 2rem;
  }

  .star-group > input {
    display: none;
  }

  .star-group > input + label {
    /* only enough room for the star */
    display: inline-block;
    overflow: hidden;
    text-indent: 9999px;
    width: 1.65rem;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .star-group > input + label:before {
    display: inline-block;
    text-indent: -9999px;
    content: "☆";
    color: rgba(159, 163, 167, 0.9);
    transition: all ease 0.2s;
  }

  .star-group > input:checked ~ label:before,
  .star-group > input + label:hover ~ label:before,
  .star-group > input + label:hover:before {
    content: "★";
    color: rgba(218, 50, 28, 0.9);
    text-shadow: 0 0 1px rgba(32, 32, 32, 0.5);
  }

  .star-group > .star-empty + label {
    text-indent: -9999px;
    width: 0.25em;
  }

  .star-group > .star-empty + label:before {
    width: 0.25em;
  }

  .star-group:hover > input + label:before {
    content: "☆";
    color: rgba(159, 163, 167, 0.9);
    text-shadow: none;
  }

  .star-group:hover > input + label:hover ~ label:before,
  .star-group:hover > input + label:hover:before {
    content: "★";
    color: rgba(218, 50, 28, 0.9);
    text-shadow: 0 0 1px rgba(32, 32, 32, 0.5);
  }
`;
