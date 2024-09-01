// IpAddressOverlay.js
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function IpAddressOverlay({ open, onClose, ipAddress }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <Typography variant="h3" component="div" align="center">
          Your IP Address: {ipAddress}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
