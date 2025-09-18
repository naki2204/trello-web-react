import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns( { columns } ) {

  return (
    <SortableContext
      strategy={horizontalListSortingStrategy}

      items={columns.map(c => c._id)}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: 2
          }
        }}
      >
        {columns?.map(column => (<Column key={column._id} column={column}/>))}

        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            backgroundColor: '#0302023d',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content'
          }}
        >
          <Button
            startIcon={<PostAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'center',
              pl: 2.5,
              py: 1
            }}
          >Add new column</Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns