export const defaultTheme = {
  spacing: {
    xs: "4px",
    s: "8px",
    sm: "10px",
    xm: "12px",
    m: "16px",
    ml: "20px",
    l: "24px",
    lplus: "30px",
    xl: "40px",
    xxl: "50px",
    xxxl: "75px",
    xxxxl: "100px",
  },
  borderRadii: {
    s: "4px",
    xm: "8px",
    m: "10px",
    mplus: "12px",
    lmin: "16px",
    l: "25px",
    lplus: "31px",
    xl: "75px",
    xxl: "100px",
    full: "9999px",
  },
  fontSize: {
    s: "12px",
    base: "14px",
    m: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "48px",
  },
  colors: {
    black: "#1F1F1F",
    white: "#ffffff",
    background: `linear-gradient(
    to bottom,
    #266bff,
    #00a2e3,
    #00d09f,
    #9cf468
    )`,
    textOnBackground: "#000000",
    text: "#1F1F1F",
    warning: "#EF5B5E",
    error: "#F15A5A",
    positive: "#168F31",
    negative: "#DB4040",
    success: "#67CE67",
  },
} as const;
