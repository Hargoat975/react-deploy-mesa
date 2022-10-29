import './App.css';
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


function Whole(props) {
    const property = {
        imageUrl: props.imageUrls,
        imageAlt: props.imageAlts,
        Dietary_Restrictions: props.Dietary_Restrictionss,
        title: props.titles,
        distance: props.distances,
        percentage: props.percentages
      }
    
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {property.percentage}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.Dietary_Restrictions} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box>
            {property.distance}
          </Box>
          <Button colorScheme='teal' size='xs' >Directions</Button>

        </Box>
      </Box>
  
    );

} export default Whole;