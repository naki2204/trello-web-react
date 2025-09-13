import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={[
        {
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeght} - ${theme.trello.boardBarHeght})`,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1976d2'

        },
        (theme) =>
          theme.applyStyles('dark', {
            backgroundColor: '#34495e'
          })
      ]}
    >
        Board Content
    </Box>
  )
}

export default BoardContent
