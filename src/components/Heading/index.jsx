import * as Styled from "./styles";
import P from "prop-types";

export default function Heading({ children, light = false }) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired
};
