import {
  ArrowCircleDownTwoTone,
  ArrowCircleUpTwoTone,
} from '@mui/icons-material';
import { Card, Container, Box, Typography } from '@mui/material';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import Detail from './detail';

function Highlight({ title, data }) {
  function convertUnix(data) {
    var d = new Date(data * 1000),
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      ampm = 'AM',
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh === 0) {
      h = 12;
    }

    time = h + ':' + min + ' ' + ampm;

    return time;
  }

  return (
    <Container>
      <Typography variant='overline'>{title}</Typography>
      <Card sx={{ bgcolor: 'grey.100' }} elevation={0}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='subtitle1'>Sunrise & Sunset</Typography>
          <WbSunnyRoundedIcon />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 15 / 8,
            gap: 20 / 8,
          }}
        >
          <Detail
            icon={<ArrowCircleUpTwoTone color='primary' fontSize='large' />}
            title='Sunrise'
            detail={convertUnix(data.sys.sunrise)}
          />
          <Detail
            icon={<ArrowCircleDownTwoTone color='primary' fontSize='large' />}
            title='Sunset'
            detail={convertUnix(data.sys.sunset)}
          />
        </Box>
      </Card>
    </Container>
  );
}

export default Highlight;
