
import { Box, Button, Center, Container, Divider, Heading, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
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
                    <Button variant='outline' w='700px' bg='white.100' leftIcon={<FcGoogle />}>Sign up with google</Button>
                    <Text>Free forever. No credit card required.</Text>
                </Box>
            </Center>
            <Center mt="70px">
                <Heading fontSize={'24px'} color={'gray.500'} as='h6'>JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</Heading>

            </Center>
            <Center m={'30px'}>
                <Box display={'flex'} gap='40px'>
                    <Image w='100px' src='https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg' />
                    <Image w='100px' src='https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg' />
                    <Image w='100px' src='https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg' />
                    <Image w='100px' src='https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg' />
                    <Image w='100px' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K' />
                    <Image w='100px' src='https://niftypm.com/_nuxt/img/logo-loreal.8cc4fed.svg' />
                    <Image w='100px' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==' />
                </Box>
            </Center>
            <Heading as='h6' color={'gray.500'} mt='80px' mb='40px' fontSize={'24px'}>SAY GOODBYE TO STATUS MEETINGS</Heading>

            <Box w='80%' m='auto' p={20} borderRadius={10} backgroundImage={'linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'}>
                {/* <Center> */}
                <Tabs >
                    <TabList>
                        <Tab fontSize={'20px'}>Roadmaps</Tab> <Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Tasks</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Discussion</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Docs</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Reporting</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Heading>Set Goals & Timelines</Heading>
                            <Text fontSize={20} m={'auto'} mt='20px' mb='20px' w={'70%'}>Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed.</Text>
                            <Image src='https://niftypm.com/_nuxt/img/large@2x.51eeb43.webp' ></Image>
                        </TabPanel>
                        <TabPanel>
                            <Heading>Collaborate on Tasks</Heading>
                            <Text fontSize={20} m={'auto'} mt='20px' mb='20px' w={'70%'}>Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views.</Text>
                            <Image src='https://niftypm.com/_nuxt/img/large@2x.82364f8.webp' ></Image>
                        </TabPanel>
                        <TabPanel>
                            <Heading>Establish Knowledge Hub</Heading>
                            <Text fontSize={20} m={'auto'} mt='20px' mb='20px' w={'70%'}>Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. </Text>
                            <Image src='https://niftypm.com/_nuxt/img/large@2x.c91cddb.webp' ></Image>
                        </TabPanel>
                        <TabPanel>
                            <Heading>Create Docs & Wikis</Heading>
                            <Text fontSize={20} m={'auto'} mt='20px' mb='20px' w={'70%'}>Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs.</Text>
                            <Image src='https://niftypm.com/_nuxt/img/large@2x.7a68883.webp' ></Image>
                        </TabPanel>
                        <TabPanel>
                            <Heading>Automate Reporting</Heading>
                            <Text fontSize={20} m={'auto'} mt='20px' mb='20px' w={'70%'}>Access automated progress reporting across all your projects and team activities to ensure operational clarity.</Text>
                            <Image src='https://niftypm.com/_nuxt/img/large@2x.c9f3a5a.webp' ></Image>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                {/* </Center> */}
            </Box>
        </>
    )
}

export default Home