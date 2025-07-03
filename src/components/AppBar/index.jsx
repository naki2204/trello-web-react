import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

Box
function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeght,
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
