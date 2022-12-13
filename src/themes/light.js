const light = {
    palette: {
      mode: "light",
      primary: {
        main: '#000000',
        light: '#ffffff',
        dark: '#21a1c4',
      },
      secondary: {
        main: '#CCCCCC',
        light: '#F5F5F5',
        dark: '#21a1c4',
      },
      error: {
        main: '#F44336',
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
          backgroundColor: '#ccc', // 5d737e
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