import { Card, Container, Box, Typography } from '@mui/material';

function City({ data }) {
  const d = new Date();
  const day = d.toLocaleDateString([], {
    weekday: 'long',
  });
  const month = d.toLocaleDateString([], { month: 'short' });
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <Container>
      <Typography variant='overline' lineHeight='1'>
        {day}
      </Typography>
      <Typography
        variant='h6'
        lineHeight='2'
        sx={{ mb: 10 / 8, fontWeight: 400 }}
      >
        {month}' {date}, {year}.
      </Typography>
      <Card
        variant='outlined'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Box>
            <Typography variant='h6'>{data.name}</Typography>
            <Typography variant='caption'>{data.sys.country}</Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography
              variant='h3'
              lineHeight='1'
              sx={{ fontWeight: 'light' }}
            >
              {(data.main.temp - 273.15).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ display: 'inline', lineHeight: '1' }}
            >
              °C
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default City;
