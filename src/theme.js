import { createTheme } from '@mui/material/styles'
import { red, teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({

  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme