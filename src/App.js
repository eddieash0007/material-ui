import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';
import  './styles.css'

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
 
  return (
    <div>
       <CssBaseline/>
       <AppBar position='relative'>
         <Toolbar>
          <PhotoCamera className='icon'/>
          <Typography variant='h6'>Photo Album</Typography>
         </Toolbar>
       </AppBar>
       <main>
         <div className='container'>
           <Container maxWidth="sm" >
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                  Photo Album
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph >
                    Welcome everyone to my photo album where you can see all my memories i have had in the past few years.
                </Typography>
                <div className='buttons'>
                  <Grid container spacing={2} justifyContent='center'>
                    <Grid item>
                      <Button variant="contained" color='primary'>
                          View Photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color='primary'>
                          Seconday Action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
           </Container>
         </div>
         <Container className='cardGrid' maxWidth='md'>
           <Grid container spacing={4}>
           {cards.map((card) => (
                     <Grid item key={card} xs={12} sm={6} md={4}>
                     <Card className='card'>
                         <CardMedia 
                           className='cardMedia'
                           image='https://source.unsplash.com/random'
                           title='Image Title'
                         />
                         <CardContent className='cardContent'>
                             <Typography gutterBottom variant='h5'>
                               Heading
                             </Typography>
                             <Typography>
                               This is a media card this is where the description will reside
                             </Typography>
                         </CardContent>
                         <CardActions>
                           <Button size='small' color='primary'>View</Button>
                           <Button size='small' color='primary'>Edit</Button>
                         </CardActions>
                     </Card>
                   </Grid> 
                      ))}
              
           </Grid>

         </Container>
       </main>
       <footer className='footer'>
            <Typography variant='h6' align='center' gutterBottom>
              Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
              Eddie Ash &copy;2022
            </Typography>

       </footer>
    </div>
  );
}

export default App;
