import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  useDisclosure,
  Slide,
} from '@chakra-ui/react';
import {
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useState } from 'react';
import FollowModal from './FollowModal';
import Testimonial from './Testimonial';
import{Link as Routerlink} from "react-router-dom";
interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function HomePage() {
  const [message,setMessage]=useState(false);
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to the HomePage 
      </Heading>
      <Text color={'gray.500'}>
        This website shows a small demonstration of the Full Stack Project that I have made.
      </Text>
    </Box>
    <Center py={6} >
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.400')}
        boxShadow={'2xl'}
        border={"1px solid"}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'data:image/png;base64,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'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Anurag Raj
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Anurag8305
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Full Stack Web Developer, Coder, Bike lover and Graphic Designer wannabe. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Coding
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Designing
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Motorbiking
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
        
          <Button
            flex={1}
            onClick={()=>{setMessage(true)}}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
              
            }}>
            Message
          </Button>

          {message && <FollowModal  closeModal={setMessage}/>}
          <Routerlink to={"/signup"}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
          </Routerlink>
        </Stack>
      </Box>
    </Center>
    <Button onClick={onToggle} bg={'blue.400'} color={'white'}>See one more cool! feature</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        What I have achieved ?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'I have Solved'} stat={'500+ DSA problems'} />
        <StatsCard title={'Projects'} stat={'5+ individual and group projects'} />
        <StatsCard title={'Skills'} stat={'HTML CSS JavaScript, React, Redux, NodeJS, MongoDB, MongoAtlas, Postman, Git, GitHub, VS-Code, INtelliJ'} />
      </SimpleGrid>
    </Box>
        </Box>
      </Slide>
    <Testimonial />
    </>
  );
}