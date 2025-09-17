import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Card() {
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/56679501_638434106621583_6552349098291232768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qLYKX89i-NAQ7kNvwHtjMOZ&_nc_oc=AdlxmwINyS7_uMzdKD9JIjPsjlGKGp3BfuxcrgSw1-GVzeVhb-SNqw76NEo6p2HHrRaLR5AskE7muLYWN0hS0fvp&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=bXiQyN-Ldqgv9zIvCSYSDA&oh=00_AfYSd8i9sMH-t_4FfBrBAgcXy_hzbeH0jsvzlDfDkCX2tQ&oe=68EF448A"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Hoang Long</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card