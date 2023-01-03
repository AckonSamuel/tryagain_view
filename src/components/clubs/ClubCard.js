import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Grid from '@mui/joy/Grid';
import Paper from '@mui/material/Paper'

export default function ClubCard() {
    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: '100%', margin: 'auto' }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Paper elevation={6}>
                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            <img
                                src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                loading="lazy"
                                alt="" />
                        </CardCover>
                        <CardCover
                            sx={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }} />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                Yosemite National Park
                            </Typography>
                            <Typography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                            >
                                California, USA
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <Paper elevation={6}>
                    <Card sx={{ minHeight: '280px', width: 320 }}>
                        <CardCover>
                            <img
                                src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                loading="lazy"
                                alt="" />
                        </CardCover>
                        <CardCover
                            sx={{
                                background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }} />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                Yosemite National Park
                            </Typography>
                            <Typography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                            >
                                California, USA
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
}