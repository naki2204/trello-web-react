import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
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
      <ListColumns columns={orderedColumns} ></ListColumns>
    </Box>
  )
}

export default BoardContent
