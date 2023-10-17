import { Global, useTheme, css } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: ${theme.fonts.body};
          background-color: ${theme.palette.light};
          color: ${theme.palette.white};
          padding: ${theme.spacing.padding};
          min-height: 100vh;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${theme.fonts.heading};
          letter-spacing: ${theme.spacing.letterSpacing};
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
