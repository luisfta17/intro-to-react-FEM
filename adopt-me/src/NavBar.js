import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 20)}
      css={css`
        background-color: #333;
        padding: ${padding}px;
        margin-bottom: 15px;
        border-radius: 0 0 5px 5px;
      `}
    >
      <Link
        css={css`
          &:hover {
            text-decoration: underline;
          }
        `}
        to="/"
      >
        Adopt Me!
      </Link>
      <span
        css={css`
          display: inline-block;
          animation: 1s ${Spin} linear infinite;
          font-size: 60px;
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
