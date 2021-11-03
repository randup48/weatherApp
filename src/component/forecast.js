import { Card, Container, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import Detail from './detail';

function Forecast({ title, data }) {
  const options = { weekday: 'long' };
  const svgIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <Container>
      <Typography variant='overline'>{title}</Typography>
      <Card variant='outlined' elevation={0}>
        {/* header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant='subtitle1' lineHeight={0.8}>
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
            justifyContent: 'space-between',
            mt: 15 / 8,
            gap: 20 / 8,
          }}
        >
          <Detail
            icon={<FontAwesomeIcon icon={faWind} size='lg' />}
            title='Wind Spd'
            detail={data.wind.speed + ' m/s'}
          />
          <Detail
            icon={<FontAwesomeIcon icon={faTint} size='lg' />}
            title='Humidity'
            detail={data.main.humidity + ' %'}
          />
        </Box>
      </Card>
    </Container>
  );
}

export default Forecast;
