import { Card, Container, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind } from '@fortawesome/free-solid-svg-icons';

function Forecast({ title, data }) {
  const options = { weekday: 'long' };
  const svgIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <Container>
      <Typography variant='overline'>{title}</Typography>
      <Card variant='outlined'>
        {/* header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box>
            <Typography variant='subtitle1'>
              {new Intl.DateTimeFormat('en-US', options).format(new Date())}
            </Typography>
            <Typography variant='caption'>{data.weather[0].main}</Typography>
          </Box>
          <img src={svgIcon} height='60' alt='weather icon' />
        </Box>

        {/* desc */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 20 / 8,
          }}
        >
          <Box
            sx={{
              width: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 10 / 8,
            }}
          >
            <FontAwesomeIcon icon={faWind} />
          </Box>

          <Typography variant='subtitle2'>
            {data.wind.speed} <Typography variant='caption'> m/s</Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 10 / 8,
          }}
        >
          <Box
            sx={{
              width: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 10 / 8,
            }}
          >
            <FontAwesomeIcon icon={faTint} />
          </Box>

          <Typography variant='subtitle2'>
            {data.main.humidity} <Typography variant='caption'>%</Typography>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}

export default Forecast;
