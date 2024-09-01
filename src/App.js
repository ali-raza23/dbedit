import './App.css';
import ErrorRadios from './components/test'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#535da8',
    },
    secondary: {
      main: '#283593',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
      style={{
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        height:'100vh'
      }}
      >
        <ErrorRadios />
      </div>
    </ThemeProvider>
  );
}