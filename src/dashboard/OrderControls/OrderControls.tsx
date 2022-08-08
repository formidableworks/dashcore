import { Breadcrumbs, Chip, Box, Tooltip, IconButton, Badge } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export function OrderControls(): JSX.Element {
  return (
    <Box
      sx={{
        // height: (t) => t.spacing(6),
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        paddingLeft: (t) => ({ sm: t.spacing(1) }),
        paddingRight: (t) => ({ sm: t.spacing(1) }),
        backgroundColor: (t) => t.palette.background.default,
        flexWrap: 'wrap',
      }}
    >
      <Breadcrumbs sx={{ flexGrow: 1 }} aria-label="breadcrumb">
        <Chip sx={{ mt: 0.5, mb: 0.5 }} label="Order: 125478" />
        <Chip sx={{ mt: 0.5, mb: 0.5 }} label="Recipient: 1337" />
        <Chip sx={{ mt: 0.5, mb: 0.5 }} label="Publication: 6422" />
        <Chip sx={{ mt: 0.5, mb: 0.5 }} label="Language: ENG_GB" />
      </Breadcrumbs>
      <Box sx={{ display: 'flex', alignItems: 'center', pt: 1, pb: 1 }}>
        <Tooltip title="Execute">
          <IconButton aria-label="execute" color="primary">
            <PlayCircleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications" sx={{ ml: 1 }}>
          <IconButton aria-label="notifications" color="primary">
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Status reason: all operators are getting a cuppa." sx={{ ml: 1 }}>
          <Chip label="AWAITING VALIDATION" color="warning" icon={<AccessTimeIcon />} />
        </Tooltip>
      </Box>
    </Box>
  );
}
