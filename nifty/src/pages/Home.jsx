
import { Box, Button, Center, Divider, Heading, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { FcGoogle}  from "react-icons/fc";
import React from 'react'


function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Image w='45%' src='https://niftypm.com/_nuxt/img/large@2x.00707a1.webp' onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor={'transparent'} width="560" height="315" >

                    <ModalCloseButton />
                    <ModalBody>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5GaV5EZX22o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                       
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

const Home = () => {
    return (
        <>
            <Center>

                {<BasicUsage />}

            </Center>
            <Center m={5}>
                <Heading>The ultimate project management </Heading>{'  '}
                <Image w='12' src='https://niftypm.com/_nuxt/img/large@2x.f9497bf.webp' />

            </Center>
            <Center >
                <Text w={'35%'}>Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.
                    Nifty is one app to unite teams, goals, and actions in one place.</Text>
            </Center>
            <Center mt={5}>

                <InputGroup w={'50%'} bg='gray.300' borderRadius={'20px'} size='md'>
                    <Input
                        pr='4.5rem'

                        placeholder='name@company.com'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button spacing={4} size='sm' bg="#59bbac" color="white"  >
                            Get Started
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <br />


            </Center>
            
                <Divider w={'50%'} m='auto' mb={2}></Divider>
            
            <Center >
                <Box>
                <Button variant='outline' w='700px' bg='white.100' leftIcon={<FcGoogle/>}>Sign up with google</Button>
                <Text>Free forever. No credit card required.</Text>
                </Box>
            </Center>
        </>
    )
}

export default Home