import './App.css';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import Whole from './Whole';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'






function App() {  

  return (
    <div>


      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Calender</Tab>
          <Tab>Special Events!</Tab>
          <Tab>Search</Tab>
          <Tab>Donations!</Tab>
          <Tab>Settings</Tab>
        </TabList>
      </Tabs>
      <p></p>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <Whole imageUrls = "https://www.thereporter.com/wp-content/uploads/2021/02/FOODBANK1.jpg?w=477"
        imageAlts = 'Cleo Gordon Elementary: Food Drive'
        Dietary_Restrictionss = 'Vegan Low-Sugar'
        titles = 'Cleo Gordon Elementary: Food Drive'
        distances = '0.3 miles'
        percentages = '50% left'
        ></Whole>

        <Whole imageUrls = "https://cf.ltkcdn.net/charity/images/orig/254503-1600x1030-how-organize-food-drive.jpg"
        imageAlts = 'Saint George High School: Food Drive'
        Dietary_Restrictionss = 'Vegetarian Soft-Foods'
        titles = 'Saint George High School: Food Drive'
        distances = '0.7 miles'
        percentages = '30% left'
        ></Whole>

        <Whole imageUrls = "https://bicontent.businessinsurance.com/86cc2b3a-6329-43ad-b802-e5e5e35b07e6.jpg"
        imageAlts = 'BubWay: Food Drive'
        Dietary_Restrictionss = 'Sandwiches Salads'
        titles = 'BubWay: Food Drive'
        distances = '1.3 miles'
        percentages = '100% left'
        ></Whole>

        <Whole imageUrls = "https://www.raleighob.com/wp-content/uploads/2019/09/AdobeStock_121922416-e1568427026836.jpeg"
        imageAlts = 'Hygiene Drive'
        Dietary_Restrictionss = 'Menstrual-Products Toileteries'
        titles = 'Hygiene Drive'
        distances = '2.0 miles'
        percentages = '80% left'
        ></Whole>

        <Whole imageUrls = "https://www.pennmedicine.org/news/-/media/images/pr%20news/news/2022/april/covid19%20dna.ashx"
        imageAlts = 'COVID Drive'
        Dietary_Restrictionss = 'Hand-Sanitizer COVID-test-kits'
        titles = 'COVID Drive'
        distances = '0.9 miles'
        percentages = '10% left'
        ></Whole>
      </Grid>
      
    </div>
  );
}
export default App;