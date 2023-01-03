import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Events from '../feed/Events';
import ViewsDatePicker from '../feed/ViewsDatePicker';
import ClubCard from './../clubs/ClubCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function SerratedTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '90%', margin: 'auto' }}>
          <Paper
          sx={{
            borderRadius: 8
          }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab 
          sx={{
              bgcolor: 'white',
              borderRadius: 10,
              border: '0',
              '&.Mui-selected': {
                border: '0'
              }
          }}
          label="Club List" {...a11yProps(0)} />

          <Tab 
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 10,
                      border: '0',
                      '&.Mui-selected': {
                        color: '',
                        border: '0',
                      }
                  }}
                  label="Upcoming Events" {...a11yProps(1)}/>
        </Tabs>
        </Paper>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ClubCard />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ViewsDatePicker />
          <Events />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}