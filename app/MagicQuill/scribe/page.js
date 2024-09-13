'use client'
import { useState } from "react";
import { AppBar, Box, Container, Toolbar, Typography, TextField, Card, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Fade, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import BackpackIcon from '@mui/icons-material/Backpack';
import ReplayIcon from '@mui/icons-material/Replay';

export default function MagicQuill() {
    const router = useRouter()
    const [partTwo, setPartTwo] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [selectedOption, setSelectedOption] = useState('none')
    const fadeTime = 900
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value)
    }

    const handleIdent = () =>{
        router.push('/MagicQuill/about')
    }

    const handleContinue = () => {
        setFadeOut(true)
        setTimeout(() => {
          setPartTwo(true)
          setFadeOut(false)
        }, fadeTime)
    }

    const handleUndo = () => {
      
      setFadeOut(true)
        setTimeout(() => {
          setSelectedOption('none')
          setPartTwo(false)
          setFadeOut(false)
        }, fadeTime)
    }
    


    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="fixed">
                <Toolbar>
                <BackpackIcon sx={{ mr: 5 }} />
                <Typography>
                    THE SITE OF MANY THINGS
                </Typography>
                </Toolbar>
            </AppBar>

            <Box
            sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            mt: { xs: 8, sm: 10 }, 
            }}
            >
              <Container>
                <Typography variant="h1" gutterBottom>
                  USE MAGIC QUILL
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Card sx={{ height: '400px', width: '80%', justifyContent: 'center', alignItems: 'center'}}>
                    <CardContent>
                      {!partTwo ? (
                        <Fade in={!fadeOut} timeout={fadeTime}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <Typography variant="h3">Subject</Typography>
                              <FormControl>
                                <RadioGroup onChange={handleRadioChange}>
                                  <FormControlLabel value="Character" control={<Radio />} label="Character" />
                                  <FormControlLabel value="Location" control={<Radio />} label="Location" />
                                  <FormControlLabel value="Item" control={<Radio />} label="Item" />
                                  <FormControlLabel value="Scene" control={<Radio />} label="Scene" />
                                  <FormControlLabel value="Legend" control={<Radio />} label="Legend" />
                                </RadioGroup>
                              </FormControl>
                            </Box>
                            <Box sx={{display: 'flex', direction: 'row', justifyContent: 'flex-end'}}>
                              <Box sx={{ alignItems: 'flex-end' }}>
                                <Button variant="contained" onClick={handleContinue} disabled={selectedOption == 'none'}>Continue</Button>
                              </Box>
                            </Box>
                          </Box>
                        </Fade>
                      ) : (
                        <Fade in={partTwo} timeout={fadeTime}>
                          <Box sx={{ display: partTwo ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%'}}>
                              <Box sx={{display: 'flex', justifyContent: 'flex-end', alignContent: 'center', mb:2}}>
                                <Typography variant="h7">Describing {selectedOption}</Typography>
                                <Button onClick={handleUndo}>
                                  <ReplayIcon></ReplayIcon>
                                </Button> 
                              </Box>
                             
                            
                              <TextField label="Enter something..." variant="outlined" fullWidth />
                              <Box sx={{display: 'flex', direction: 'row', justifyContent: 'flex-end'}}>
                              <Box sx={{ alignItems: 'flex-end' }}>
                                <Button variant="contained" onClick={handleContinue}>Continue</Button>
                              </Box>
                            </Box>
                            </Box>
                          </Box>
                        </Fade>
                      )}
                        </CardContent>
                  </Card>
                </Box>
                  

              <Button sx={{mt:22}} onClick={handleIdent}>Confused? Click here to learn how to use the magic quill</Button>
            </Container>
          </Box>
        </Box>
    )
}