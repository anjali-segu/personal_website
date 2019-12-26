import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  // Any overrides will go here ..
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'Playfair Display, serif',
      },
      h2: {
        fontFamily: 'Playfair Display, serif',
      },
      h3: {
        fontFamily: 'Raleway, sans-serif',
      },
      h4: {
        fontFamily: 'Raleway, sans-serif',
      },
      h5: {
        fontFamily: 'Raleway, sans-serif',
      },
      h6: {
        fontFamily: 'Raleway, sans-serif',
      },
    }
  },
  typography: {
    fontFamily: 'Quicksand, open sans, sans-serif',
  },
})
