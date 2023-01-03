import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Paper from '@mui/material/Paper';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

export default function Events() {
  return (
    <Grid 
    container
    rowSpacing={1}
    columnSpacing={{xs: 1, sm: 2, md: 3}}
    sx={{ width: '100%', margin: 'auto' }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={6}>
        <Card
          row
          sx={{
              width: '100%',
              gap: 2,
              '&:hover': { boxShadow: 'md' },
          }}
      >
          <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img
                  src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                  srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                  loading="lazy"
                  alt="" />
          </AspectRatio>
          <div>
              <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                  Yosemite Park
              </Typography>
              <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                  <Link
                      overlay
                      underline="none"
                      href="#interactive-card"
                      sx={{ color: 'text.tertiary' }}
                  >
                      California, USA
                  </Link>
              </Typography>
              <Chip
                  variant="outlined"
                  color="primary"
                  size="sm"
                  sx={{ pointerEvents: 'none' }}
              >
                  Cool weather all day long
              </Chip>
          </div>
      </Card>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper elevation={6}>
      <Card
          row
          sx={{
              width: '100%',
              gap: 2,
              '&:hover': { boxShadow: 'md' },
          }}
      >
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                  <img
                      src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                      srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                      loading="lazy"
                      alt="" />
              </AspectRatio>
              <div>
                  <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                      Yosemite Park
                  </Typography>
                  <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                      <Link
                          overlay
                          underline="none"
                          href="#interactive-card"
                          sx={{ color: 'text.tertiary' }}
                      >
                          California, USA
                      </Link>
                  </Typography>
                  <Chip
                      variant="outlined"
                      color="primary"
                      size="sm"
                      sx={{ pointerEvents: 'none' }}
                  >
                      Cool weather all day long
                  </Chip>
              </div>
          </Card>
          </Paper>
          </Grid>
          </Grid>
  );
}