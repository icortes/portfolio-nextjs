import Head from 'next/head';
import AppBar from '../components/AppBar';
import AboutMe from '../components/AboutMe';
import { Box, Container, Grid, Paper } from '@mui/material';
import Portfolio from '../components/Portfolio';
import projects from '../db/projects.json';
import proficiencies from '../db/proficiencies.json';

export default function Home(props) {
  return (
    <Paper
      elevation={24}
      sx={{ pt: 10 }}
      style={{ width: '100%', height: 'auto' }}
      square>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppBar />
      <Grid
        container
        spacing={0}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Container maxWidth='md'>
          <AboutMe />
          <Portfolio projects={projects} />
        </Container>
      </Grid>
    </Paper>
  );
}
