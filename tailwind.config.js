const colors = require("tailwindcss/colors");

module.exports = {
  important: "body",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        /^grid-cols-/,
        /^sm:grid-cols-/,
        /^md:grid-cols-/,
        /^lg:grid-cols-/,
        /^xl:grid-cols-/,
        //
        /^gap-/,
        /^sm:gap-/,
        /^md:gap-/,
        /^lg:gap-/,
        /^xl:gap-/,
      ],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        "2xl": "128px",
      },
    },
    fontFamily: {
      display: ["Josefin Sans", "system-ui", "sans-serif"],
      LineAwesome: ["Line Awesome Free", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      primary: "#EC6041",
      secondary: "#B3421A",
      black: "#121212",
      white: "#fff",
      neutral: {
        100: "#1C1C1C",
        200: "#414141",
        300: "#848484",
        400: "#9B9B9B",
        500: "#AEAEAE",
        600: "#C0C0C0",
        700: "#D1D1D1",
        800: "#E0E0E0",
        900: "#EEEEEE",
      },
      accent: {
        1: "#ECB2F2",
        2: "#2D6A6A",
        3: "#E9AD8C",
        4: "#221874",
        5: "#7CC6D6",
        6: "#E1604D",
      },
      status: {
        success: "#287D3C",
        warning: "#B95000",
        error: "#DA1414",
        info: "#2E5AAC",
        successBg: "#EDF9F0",
        warningBg: "#FFF4EC",
        errorBg: "#FEEFEF",
        infoBg: "#EEF2FA",
      },
      action: {
        primary: "#EC6041",
        inverted: "#B24219",
        secondary: "#5E38BA",
        neutral: "#443B39",
      },
      facebook: "#325D94",
      googlePlus: "#DF2E1C",
      twitter: "#00AADB",
    },
    extend: {
      maxWidth: {
        body: "680px",
      },
      outline: {},
      borderColor: {
        primary: "#EC6041",
        secondary: "#B3421A",
        black: "#121212",
        white: "#fff",
      },
      boxShadow: (theme) => ({
        tight: {
          1: "4px 4px 0px #F1876F, 8px 8px 0px #F5AE9E",
          2: "0px 1.25px 4px rgba(0, 0, 0, 0.25)",
          3: "0px 2px 6px rgba(0, 0, 0, 0.22)",
          4: "0px 2px 7px rgba(0, 0, 0, 0.24)",
          5: "0px 3px 12px rgba(0, 0, 0, 0.2)",
          6: "0px 3.5px 14px rgba(0, 0, 0, 0.2)",
          7: "0px 7px 18px rgba(0, 0, 0, 0.17)",
          8: "0px 12px 28px rgba(0, 0, 0, 0.2)",
          9: "0px 13px 36px rgba(0, 0, 0, 0.22)",
        },
        fluffy: {
          1: "0px 5px 15px rgba(0, 0, 0, 0.15)",
          2: "0px 6.25px 20px rgba(0, 0, 0, 0.125)",
          3: "0px 10px 30px rgba(0, 0, 0, 0.11)",
          4: "0px 10px 35px rgba(0, 0, 0, 0.12)",
          5: "0px 15px 60px rgba(0, 0, 0, 0.12)",
          6: "0px 17.5px 70px rgba(0, 0, 0, 0.12)",
          7: "0px 35px 90px rgba(0, 0, 0, 0.135)",
        },
        button: "4px 4px 0px #F1876F, 8px 8px 0px #F5AE9E",
        drop: "2px 2px 0px #F1876F, 4px 4px 0px #F5AE9E",
        "link-thin": `inset 0 -3px 0 0 ${theme("colors.primary")}`,
        "link-tick": `inset 0 -6px 0 0 ${theme("colors.primary")}`,
      }),
      zIndex: {
        "-1": "-1",
        max: 2147483647,
      },
      spacing: {},
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },

      borderRadius: {},
      margin: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "-1px": "-1px",
        "-2px": "-2px",
        "-3px": "-3px",
      },
      padding: {
        //
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
      fontSize: {
        "d-lare": ["107px", "97.2%"],
        "d-small": ["86px", "102.33%"],
        //
        f1: ["55px", "101.82%"],
        f2: ["44px", "109.09%"],
        f3: ["35px", "114.29%"],
        f4: ["28px", "114.29%"],
        f5: ["22.5px", "124.44%"],
        f6: ["18px", "155.56%"],
        //
        "paragraph-large": ["28px", { lineHeight: "128.57%" }],
        "paragraph-base": [
          "18px",
          {
            letterSpacing: "1",
            lineHeight: "155.56%",
          },
        ],
        "paragraph-small": ["16px", { lineHeight: "150%" }],
        "paragraph-xs-small": ["14px", { lineHeight: "142.86%" }],
        "paragraph-tiny": ["12px", { lineHeight: "133.33%" }],
        "small-caps": [
          "18px",
          {
            lineHeight: "111%",
            letterSpacing: "0.05em",
          },
        ],
        "small-caps-medium": [
          "14px",
          {
            lineHeight: "143%",
            letterSpacing: "0.08em",
          },
        ],
        "button-large": ["20px", "140%"],
        "button-medium": ["16px", "150%"],
        "button-small": ["14px", "143%"],
        "link-large": [
          "18px",
          {
            lineHeight: "178%",
            letterSpacing: "0.08em",
          },
        ],
        "link-medium": ["16px", "156%"],
        "link-small": ["14px", "143%"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      flexDirection: ["hover", "focus", "dark"],
      display: ["hover", "focus", "group-hover", "group-focus", "dark"],
      backgroundOpacity: ["hover", "group-hover", "dark", "disabled"],
      opacity: ["hover", "group-hover", "dark", "disabled"],
      fontWeight: ["hover", "group-hover", "focus"],
      backgroundColor: ["checked", "disabled"],
      textColor: ["disabled"],
      borderColor: ["checked", "disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
