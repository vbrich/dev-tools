const test = {
    palette: {
      mode: "light",
      primary: {
        main: '#272727',
        light: '#757ce8',
        dark: '#002884',
        contrastText: "#33333" //button text white instead of black
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      text: {
        primary: '#000000',
        secondary: '#000000',
      },
      something: {
        primary: '#000000',
        secondary: '#46505A',
      },
      typography: {
        main: '#cccccc'
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            transition: 'all 3.3s linear',
          },
        },
      },
      MuiTypography: {
        root: {
          color: '#eeeeee',
        },
      },
    }
  };
  export default test;