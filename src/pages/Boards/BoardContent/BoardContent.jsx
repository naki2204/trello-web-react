import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {

  return (
    <Box
      sx={[
        {
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          backgroundColor: '#1976d2',
          p: '10px 0'
        },
        (theme) =>
          theme.applyStyles('dark', {
            backgroundColor: '#34495e'
          })
      ]}
    >
      <ListColumns></ListColumns>
    </Box>
  )
}

export default BoardContent
