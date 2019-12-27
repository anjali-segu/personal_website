import {createMuiTheme} from '@material-ui/core/styles'

export const white = 'rgba(255,255,255,.97)'
export const beige = 'rgba(250, 234, 185)'
export const gray = 'rgb(245, 245, 245)'
export const lightbeige = 'rgb(245, 236, 228)'
export const lightblack = 'rgba(0,0,0,0.7)'


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
        fontFamily: 'Playfair Display, serif',
      },
      h4: {
        fontFamily: 'News Cycle, open sans, sans-serif',
        color: lightblack,
      },
      h5: {
        fontFamily: 'News Cycle, open sans, sans-serif',
        color: lightblack,
      },
      h6: {
        fontFamily: 'News Cycle, open sans, sans-serif',
        color: lightblack,
      },
    }
  },
  typography: {
    fontFamily: 'Quicksand, open sans, sans-serif',
  },
})
