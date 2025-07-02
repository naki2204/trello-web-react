import { createTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({

  trello: {
    appBarHeght: '48px',
    boardBarHeght: '58px'
  },
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
  }
})

export default theme