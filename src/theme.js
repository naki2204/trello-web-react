import { createTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT='58px'
const BOARD_BAR_HEIGHT='58px'
const BOARD_CONTENT_HEIGHT=`calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

// Create a theme instance.
const theme = createTheme({

  trello: {
    appBarHeght: APP_BAR_HEIGHT,
    boardBarHeght: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
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
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    }

  }
})

export default theme