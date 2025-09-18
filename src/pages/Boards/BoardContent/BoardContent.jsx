import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors } from '@dnd-kit/core/'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'


function BoardContent({ board }) {

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })

  const sensors = useSensors(pointerSensor, mouseSensor, touchSensor)

  const [orderedColumns, SetOrderedColumns] = useState([])

  useEffect (() => {
    SetOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      const newColumnOrderIds = arrayMove(orderedColumns, oldIndex, newIndex)
      SetOrderedColumns(newColumnOrderIds)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
    </DndContext>
  )
}

export default BoardContent
