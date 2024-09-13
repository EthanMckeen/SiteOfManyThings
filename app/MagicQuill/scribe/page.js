'use client'
import { useState } from "react";
import { AppBar, Box, Container, Toolbar, Typography, TextField, Card, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Fade, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import BackpackIcon from '@mui/icons-material/Backpack';
import ReplayIcon from '@mui/icons-material/Replay';


const isVowel = (letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())


export default function MagicQuill() {
    const router = useRouter()
    const [partTwo, setPartTwo] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [selectedOption, setSelectedOption] = useState('none')
    const [describeContext, setDescribeContext] = useState('')
    const fadeTime = 900

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value)
    }

    const handleTextFieldChange = (event) => {
      setDescribeContext(event.target.value)
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

    const handleGo = () => {

    }

    const handleUndo = () => {
      
      setFadeOut(true)
        setTimeout(() => {
          setSelectedOption('none')
          setDescribeContext('')
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
                    <CardContent sx={{height: '100%'}}>
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
                            <Box sx={{display: 'flex', direction: 'row', justifyContent: 'flex-end', position: 'relative', bottom: 1, right: 1 }}>
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
                              <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2}}>
                                <Button onClick={handleUndo}>
                                  <ReplayIcon></ReplayIcon>
                                </Button> 
                              </Box>
                              <Box sx={{height: '100%'}}>
                                <TextField 
                                  label={"Describing a" + (isVowel(selectedOption[0]) ? "n " : " ") + selectedOption}
                                  placeholder={"Provide the Quill some context of the " + selectedOption + " you'd like..." } 
                                  fullWidth 
                                  multiline 
                                  rows={10}
                                  onChange={handleTextFieldChange}
                                />
                              </Box>
                              <Box sx={{display: 'flex', direction: 'row', justifyContent: 'flex-end'}}>
                              <Box sx={{ alignItems: 'flex-end', position: 'relative', bottom: 1, right: 1}}>
                                <Button variant="contained" onClick={handleGo} disabled={describeContext.trim() === ''}>Go</Button>
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