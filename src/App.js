import logo from './logo.svg';
import './App.css';
import React from 'react'
// import CustomSpeedDail from './CustomSpeedDail';
import { Suspense, useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const CustomSpeedDail = React.lazy(() => import('./CustomSpeedDail'))

function App() {
  const [showSpeedDail, setShowSpeedDail] = useState(false)
  if (showSpeedDail) {
    return (
      <Suspense fallback={<CircularProgress />}><CustomSpeedDail /></Suspense>
    )
  }
  return <Button variant='contained'
    onClick={() => setShowSpeedDail(true)}
  >Show Speed Dail</Button>
}

export default App;
