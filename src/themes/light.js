const light = {
    palette: {
      mode: "light",
      primary: {
        main: '#272727',
      },
      something: {
        primary: '#000000',
        secondary: '#46505A'        
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
          color: 'red',
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
  export default light;