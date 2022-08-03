import FoodBankIcon from '@mui/icons-material/FoodBank';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { Box, Tooltip } from '@mui/material';

export function Logo(): JSX.Element {
  return (
    <Box
      sx={{
        height: (t) => t.spacing(6),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tooltip title="fictional logo" placement="right">
        <OfflineBoltIcon color="primary" fontSize="large" />
      </Tooltip>
    </Box>
  );
}
