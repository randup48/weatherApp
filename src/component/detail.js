import { Box, Typography } from '@mui/material';

function Detail({ icon, title, detail }) {
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ mr: 15 / 8 }}>{icon}</Box>
      <Box>
        <Typography variant='overline'>{title}</Typography>
        <Typography variant='subtitle2'>{detail}</Typography>
      </Box>
    </Box>
  );
}
export default Detail;
