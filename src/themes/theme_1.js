const theme_1 = {
    palette: {
      mode: "light",
      primary: {
        main: '#607D8B',
        light: '#CFD8DC',
        dark: '#455A64',
      },
      secondary: {
        main: '#9E9E9E',
        light: '#9E9E9E',
        dark: '#9E9E9E',
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

  export default theme_1;