import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from 'axios';
import IpAddressOverlay from './IpAddressOverlay';

export default function ErrorRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [ipAddress, setIpAddress] = React.useState('');
  const [overlayOpen, setOverlayOpen] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === 'adnaan') {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIpAddress(response.data.ip);
        setHelperText('You got it!');
        setError(false);
        setOverlayOpen(true);
      } catch (error) {
        setHelperText('Failed to fetch IP address.');
        setError(true);
      }
    } else if (value === 'aun') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  const handleOverlayClose = () => {
    setOverlayOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Identity Test</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="Quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="adnaan" control={<Radio />} label="adnaan" />
          <FormControlLabel value="aun" control={<Radio />} label="aun" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
      <IpAddressOverlay open={overlayOpen} onClose={handleOverlayClose} ipAddress={ipAddress} />
    </form>
  );
}
