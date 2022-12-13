const dark = {
    palette: {
      mode: "dark",
      primary: {
        main: '#61dafb',
        light: '#61dafb',
        dark: '#21a1c4',
      },
      secondary: {
        main: '#b5ecfb',
        light: '#61dafb',
        dark: '#21a1c4',
      },
      error: {
        main: '#F44336',
      },
      background: {
        default: '#1E1E1E',
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          padding: '20px 10px',
          margin: '10px',
          backgroundColor: '#000', // 5d737e
        },
      },
      MuiButton: {
        root: {
          margin: '5px',
        },
      },
    }
  };
  export default dark;