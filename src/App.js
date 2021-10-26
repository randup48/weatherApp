import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { Box } from '@mui/material';
import Navbar from './component/navbar';
import { useEffect, useState } from 'react';
import City from './component/city';
import Forecast from './component/forecast';
import Highlight from './component/highlight';
import { apiKey } from './ApiKeys';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#1f1f1f',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 20,
          borderRadius: 5,
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#1f1f1f',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: '40px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: 20,
          paddingInline: 20,
        },
      },
      defaultProps: {},
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginInline: 'auto',
        },
      },
    },
  },
  palette: {
    primary: {
      main: yellow[800],
    },
    text: {
      primary: '#1f1f1f',
    },
  },
  typography: {
    fontWeightBold: 600,
    fontFamily: 'Poppins',
    fontSize: 13,
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    caption: {
      opacity: 0.65,
    },
    body1: {
      opacity: 0.65,
    },
    body2: {
      opacity: 0.65,
    },
    overline: {
      letterSpacing: 0.5,
      textTransform: 'capitalize',
    },
  },
});

function App() {
  const [error, setError] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);

  const city = 'depok';

  useEffect(() => {
    const request = async () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then(res => res.json())
        .then(
          data => {
            setData(data);
            setIsLoad(true);
          },
          error => {
            setIsLoad(true);
            setError(error);
          }
        );
    };
    setInterval(request, 1000);
    return () => clearInterval(request);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoad) {
    return <div>Loading...</div>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ pb: 20 / 8 }}>
          {/* appbar */}
          <Navbar />

          {/* city */}
          <City data={data} />

          {/* forecast */}
          <Forecast title="Today's Forecast" data={data} />

          {/* highlight */}
          <Highlight title="Today's Highlight" data={data} />
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
