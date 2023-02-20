import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Box,
    ButtonGroup,
    Button,
    PopoverFooter,
  } from '@chakra-ui/react'
import React from 'react'

const FollowModal = ({closeModal}) => {
  const initialFocusRef = React.useRef()
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button>Send</Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Wanna Send Me your messages
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          ThankYou for sending your lovely messages. I really appreciate them.
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>=======></Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Setup Email</Button>
            <Button colorScheme='blue' ref={initialFocusRef}>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default FollowModal