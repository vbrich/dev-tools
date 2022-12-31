const dark = {
    palette: {
      mode: "dark",
      primary: {
        main: '#61dafb'
      },
      something: {
        primary: '#ffffff',
        secondary: '#173A5E',
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: 'red',
        },
      },      
      MuiTypography: {
        root: {
          color: '#eeeeee',
        },
      },
      MuiButton: {
        root: {
          margin: '25px',
          color: 'green'
        },
      }
    }
  };
  export default dark;