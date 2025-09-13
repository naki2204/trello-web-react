import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({

  trello: {
    appBarHeght: '58px',
    boardBarHeght: '60px'
  },
  colorSchemes: {
    dark: true,
    light: {}
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  components: {
    MuiCssBaseline:{
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputBase: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '0.5px'
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0.5px'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px'
          }

        })
      }
    }

  }
})

export default theme