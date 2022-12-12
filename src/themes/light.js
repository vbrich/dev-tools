const light = {
    palette: {
      mode: "light",
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
        main: '#444444',
      },
      background: {
        default: '#fff',
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          padding: '20px 10px',
          margin: '10px',
          backgroundColor: '#fff', // 5d737e
        },
      },
      MuiButton: {
        root: {
          margin: '5px',
        },
      },
    }
  };
  export default light;