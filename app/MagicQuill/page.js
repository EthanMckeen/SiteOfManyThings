'use client'
import { AppBar, Box, Container, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import BackpackIcon from '@mui/icons-material/Backpack';

export default function MagicQuill() {
    const router = useRouter()

    const handleIdent = () =>{
        router.push('/MagicQuill/about')
    }

    const handleAttune = () =>{
        router.push('/MagicQuill/scribe')
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
          flexDirection: 'column', // Ensure content is stacked vertically
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mt: { xs: 8, sm: 10 }, // Adjust the margin-top based on the height of the AppBar
        }}
        >
            <Container>
                <Typography variant="h1" gutterBottom>
                WELCOME TO THE MAGIC QUILL
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" my={5}>
                    <Box>
                        <Button onClick={handleIdent}> 
                            <Typography variant="h3">
                                "Cast Identify"
                            </Typography>
                        </Button>
                    </Box>
                    <Box>
                        <Button onClick={handleAttune}> 
                            <Typography variant="h3">
                                Attune to the Quill
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
                </Container>
            </Box>


        </Box>
    )
}