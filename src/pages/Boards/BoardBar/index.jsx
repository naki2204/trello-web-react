import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar( { board }) {
  return (
    <Box
      sx={[
        {
          width: '100%',
          height: (theme) => theme.trello.boardBarHeght,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          gap: 2,
          overflowX: 'auto',
          backgroundColor: '#1976d2',
          borderBottom: '1px solid #00bfa5'

        },
        (theme) =>
          theme.applyStyles('dark', {
            backgroundColor: '#34495e'
          })
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={ capitalizeFirstLetter(board?.type) }
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white'
          }}
        >
           Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4d0be' }
            }
          }}
        >
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
          <Tooltip title='HoangLongDev'>
            <Avatar
              alt="Hoang Long Dev"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/476559926_2096779097453736_663407938394379319_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=QoLeIIMRFnoQ7kNvwFibzcC&_nc_oc=AdmN043GHYqI677HKhhGQyBVXQ_oCu9VN8IZB9BgjgQ7WqJxMJz5g4Te2xXbpMh6p20&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=5DhXJ1Sci3UAPrBEG-QrNw&oh=00_AfQba-6MYW_XT8GAzIDHIyxe7rWcGHGbAX9NIkPSdTRlUw&oe=68742107" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
