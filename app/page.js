'use client'
import { AppBar, Box, Container, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import BackpackIcon from '@mui/icons-material/Backpack';

export default function Home() {
  const router = useRouter();

  const handleQuill = () => {
    router.push('/MagicQuill')
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
            WELCOME TO THE SITE OF MANY THINGS
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" my={5}>
            <Box>
              <Button variant="contained" onClick={handleQuill}>
                <Typography variant="h3" sx={{mx:5}}>
                  Magic Quill
                </Typography>
              </Button>
            </Box>
            <Box>
              <Typography variant="h3" sx={{mx:5}}>
                Feature 2
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{mx:5}}>
                Feature 3
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
