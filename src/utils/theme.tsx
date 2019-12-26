import {createMuiTheme} from '@material-ui/core/styles'

export const white = 'rgba(255,255,255,.97)'
export const beige = 'rgba(250, 234, 185)'

export const theme = createMuiTheme({
  // Any overrides will go here ..
  overrides: {
    MuiAppBar: {
      root: {
        alignItems: 'center',
      },
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
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
