
import { Box, Button, Center, Container, Divider, Flex, Heading, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import { FcGoogle, FcOk } from "react-icons/fc";
import { FaRecordVinyl } from "react-icons/fa";
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



            {/* First Tabs///////////////////////00 */}



            <Box w='80%' m='auto' p={20} pb="15px" borderRadius={10} backgroundImage={'linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'}>
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
                <Box bg={'white'} w='90%' m='auto' borderRadius="md"  >
                    <Heading as='h4' fontSize={18} p={"20px"} color={'teal'}>Try Nifty Now.Thanks us latter</Heading>

                </Box>
            </Box>



            {/* second tabs */}



            <Heading as='h6' color={'gray.500'} mt='80px' mb='40px' fontSize={'24px'}>BUILT FOR EVERY TEAM</Heading>



            <Box w='80%' m='auto' pt={20} pb="15px" borderRadius={10} backgroundImage={'linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'}>
                {/* <Center> */}
                <Tabs >
                    <TabList>
                        <Tab fontSize={'20px'}>Engineering</Tab> <Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Sales</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Marketing</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Product</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>Clint Management</Tab><Box m={'auto'} fontSize={'20px'} display={'flex'} gap='20px' color={'teal.600'}> <Text>.</Text> <Text>.</Text> <Text>.</Text><Text>.</Text></Box>
                        <Tab fontSize={'20px'}>IT</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {/* <Flex gap={10}> */}
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>Engineering</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />} Real-time progress reporting with Milestones</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Custom development workflows with if/then rules</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Custom development workflows with if/then rules</Text>
                                    </Box>
                                </Box>
                                <Box w='50%'>
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp' />
                                </Box>
                            </Box>
                            {/* </Flex> */}
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>Sales</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />} Track lead status and values for pipeline visibility</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Create & track marketing campaigns as Milestones</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Automate the creation of projects upon closing of leads</Text>
                                    </Box>
                                </Box>
                                <Box w='50%'>
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp' />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>Marketing</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />} Expedite approval for creatives with Proofing</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Create & track marketing campaigns as Milestones</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Align content schedules using Calendar View for Tasks</Text>
                                    </Box>
                                </Box>
                                <Box w='50%'>
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp' />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>Product</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />} Prioritize & track feature sprints as Milestones</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Build spec documents using Nifty or Google Docs</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Improve decision-making with custom Project Embeds</Text>
                                    </Box>
                                </Box>
                                <Box w='50%' >
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp' />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>Client Management</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />}Instant messaging & one-click video meetings</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Automate ticket assignments with status assignees</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Plan project timelines & deployments using Roadmaps</Text>
                                    </Box>
                                </Box>
                                <Box w='50%' >
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp' />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display={'flex'} gap={20} m={'auto'}>
                                <Box w='50%'  >
                                    <Box textAlign={'left'} fontSize={20} lineHeight='30px'>
                                        <Heading>IT</Heading>
                                        <Text mt={10} mb={10} w='80%' fontSize={20}>Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.</Text>
                                        <Text display={'flex'} mb={5} gap='10px' > {<FcOk p='10px' />} Gather tickets using forms & prioritize resolutions</Text>
                                        <Text display={'flex'} mb={5} gap='10px'> {<FcOk p='10px' />}Automate ticket assignments with status assignees</Text>
                                        <Text display={'flex'} gap='10px' > {<FcOk p='10px' />}Plan project timelines & deployments using Roadmaps</Text>
                                    </Box>
                                </Box>
                                <Box w='50%'>
                                    <Image w='100%' src='https://niftypm.com/_nuxt/img/large@1x.37d8320.webp' />
                                </Box>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                {/* </Center> */}

            </Box>

            {/* send tabs end////////////////////////////////////////////////// */}
            <Box backgroundColor={'gray.200'} mt={10} p={30}>


                <Box m='auto' mt={'50px'} borderRadius="10px" p={10} w={"60%"} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                    <Text fontFamily={"cursive"} fontSize={25}> Nifty is by far the best productivity tool I've ever used.
                        They have consolidated so many tools down to one for my team, without compromising the experience.
                    </Text>
                    <Text mt={20}>RIM N. KAY</Text>
                    <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                </Box>
                <Text mt={20} fontSize={20} color={'teal'}>Read more Nifty reviews on G2</Text>
            </Box>

            <Heading as='h6' color={'gray.500'} mt='80px' mb='40px' fontSize={'24px'}>BUILT FOR EVERY TEAM</Heading>


            <Box w={'80%'} display={'flex'} m='auto' mb={20}>
                <Box w={"50%"} bg={"teal.50"} p='10' textAlign={'left'}>
                    <Heading>It’s so easy to be efficient</Heading>
                    <Text ml={"10px"} mt={10} fontSize="lg">Team alignment, productivity, & smarter decisions come naturally when your data is not fragmented across multiple tools.</Text>
                    <Heading fontSize={20} mt={10} color={"teal.600"} display={'flex'} gap="10px">{<FaRecordVinyl />}Import into Nifty</Heading>
                    <Text m={7}>Import from Asana, Basecamp, ClickUp, Jira, Trello, and Wrike — or import your .CSV & Excel sheets to pick up right where you left off.</Text>
                    <Heading fontSize={20} mt={10} color={"teal.600"} display={'flex'} gap="10px">{<FaRecordVinyl />}Native Integrations</Heading>
                    <Text m={7}>We integrate with all of your favorite tools to make it easy to push and sync data without disrupting your workflow. Whether you’re in engineering, design, management or sales — we have you covered.</Text>
                </Box>
                {/* ////////////////////////////////////////////////////////////////////////////////// */}
                <Box>

                    <Image src='https://i.postimg.cc/QMy2gtp5/Screenshot-2022-09-30-193611.png' />
                </Box>

            </Box>

            {/* /////////////////////////// rotation end */}
            <Box m={'auto'} w={"80%"} display={'flex'} justifyContent="space-between">
                <Box w={'50%'} textAlign={"left"}>
                    <Text color={"teal"}>DON'T TAKE OUR WORD FOR IT</Text>
                    <Heading>Nifty is acclaimed for its
                        design and performance ✨</Heading>
                </Box>
                <Box>
                    <Image mt={10} src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=330952&theme=light' />
                </Box>
            </Box>
            {/* marquee///////////////////////////////////////////////// */}
            <marquee scrollamount="20" loop="-1">
                <Box gap={"10px"} display={"flex"}>




                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>


                </Box>
            </marquee>

            {/* /////lrft to right */}
            <Box>

            <marquee scrollamount="20" loop="-1" direction="right"  >
                <Box gap={"10px"} display={"flex"}>




                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>
                    <Box w={"30%"} m='auto' mt={'50px'} borderRadius="10px" p={10} backgroundImage={"linear-gradient(to right top, #fe57b6, #f47ed0, #e99de2, #e2b7ed, #e0cff0, #dbd6f4, #d8ddf7, #d8e3f7, #bae1fe, #91e1fc, #61e1ef, #38dfd4)"}>
                        <Text w={"20%"} fontFamily={"cursive"} fontSize={20}>In the world full of PM tools,
                            Nifty  <br></br> is awesome and stand apart. Tried<br></br> the "big" players and just keep<br /> coming back to Nifty.
                        </Text>
                        <Text mt={5}>RIM N. KAY</Text>
                        <Text mt={5}>ENGINEERING LEAD, EMOVIS</Text>
                    </Box>


                </Box>
            </marquee>
            </Box>


            {/* input box */}

            <Box  width={"50%"} m='auto' mt={20} p="70px" border={"1px solid teal"} borderRadius="10px">
                <Center>  <Image w={"40px"} src='https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg' /></Center>
                <Heading m={10}>Get Started Now</Heading>
                <Text m={10}>It takes less than 2 mins to sign up and create your first project or import your data from anywhere.</Text>
                <Box m={'auto'}>
                <InputGroup m={10} bg='gray.300'   borderRadius={'20px'} size='md'>
                    <Input outline={"teal"}
                        pr='5.5rem'
                        p={1}
                        placeholder='name@company.com'
                    />
                    <InputRightElement width='6.5rem'>
                        <Button p={'auto'}  bg="#59bbac" color="white"  >
                            Get Started
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Divider/>
                    <Button mt={10} variant='outline' w={"90%"} bg='white.100' leftIcon={<FcGoogle />}>Sign up with google</Button>
                    <Text mt={10}>Free forever. No credit card required.</Text>
                </Box>
            </Box>
            <Center bg={"gray.50"} display={'flex'} m='auto'>
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
                <Image w={100} src='https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg' />
            </Center>

            <Box bg={"gray.50"}>
                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxOTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjM1IiBkPSJNMCAxYzg5LjY5NiA3MS43NjMgMTY5LjY2NiAxMzEuNjggMjYyLjA2NCAxMzYuNDg3IDkyLjM5OCA0LjgwNyAxMzAuMjIxLTQwLjAwMiAxOTMuOTgxLTQwLjAwMiA2My43NiAwIDk0LjU1OSAyMC42MDIgMTE1LjA5MiA0MC4wMDJDNTkxLjY3IDE1Ni44ODcgNjMyLjczNiAxOTUgNzEwLjAwNCAxOTVzMTE1LjA5Mi00MC41MTcgMTM0LjU0NC01Ny41MTNDODY0IDEyMC40OSA5MTUuODcyIDg1LjEyNCA5ODguMjc4IDg1LjEyNGM3Mi40MDIgMCA5NC4wMjIgMTkuODQ0IDE2Mi42NDIgMTcuMzQgNjguNjItMi41MDUgOTIuOTQtMzIuOTYzIDE2NC4yNi0zMi45NjMgNzEuMzMgMCA1OC4zNiAyMy4zNDkgMTI0LjgyIDIzLjM0OSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIxIiB4Mj0iMTQ0MCIgeTI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY1OUY4Ii8+PHN0b3Agb2Zmc2V0PSIuMTk4IiBzdG9wLWNvbG9yPSIjQUU3MkZGIi8+PHN0b3Agb2Zmc2V0PSIuNDA2IiBzdG9wLWNvbG9yPSIjNzBDOUU4Ii8+PHN0b3Agb2Zmc2V0PSIuNjIiIHN0b3AtY29sb3I9IiMwMUFCOUQiLz48c3RvcCBvZmZzZXQ9Ii44MjUiIHN0b3AtY29sb3I9IiNGRTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=' />
           
           <Center mt={10} >
            <table margin="auto" cellPadding={"5px"} width={"80%"}>
                <tr  >
                    <td>PRODUCT</td>
                    <td>RESOURCES</td>
                    <td>TRUST</td>
                    <td>MADE FOR</td>
                    <td>COMPARISION</td>
                    <td>BLOG</td>
                </tr>
                <tr>
                    <td>Milestone</td>
                    <td>Change Log</td>
                    <td>Ptivacy</td>
                    <td>Client Management</td>
                    <td>Asana Alternative</td>
                    <td>How to Fix</td>
                </tr>
                <tr>
                    <td>Discussions</td>
                    <td>Blog</td>
                    <td>Help Center</td>
                    <td>Agilen</td>
                    <td>Airtable</td>
                    <td>BLOG</td>
                </tr>
                <tr>
                    <td>Taske</td>
                    <td>Intigration</td>
                    <td>Terms of use</td>
                    <td>Digital Agencies</td>
                    <td>Basecamp Alternative</td>
                    <td>Remote Collabrstion</td>
                </tr>
                <tr>
                    <td>Docs & Files</td>
                    <td>Apps</td>
                    <td>TRUST</td>
                    <td>Security</td>
                    <td>Legal Case managment</td>
                    <td>Clarizen</td>
                </tr>
                <tr>
                    <td>Time Tracking</td>
                    <td>RESOURCES</td>
                    <td>Status</td>
                    <td> Marketin Team</td>
                    <td>ClickUp Alternative</td>
                    <td>Workload with time</td>
                </tr>
                <tr>
                    <td>Reaporting</td>
                    <td>Affiliation</td>
                    <td></td>
                    <td>Product Teams</td>
                    <td>Confluence Alternative</td>
                    <td>Software for law firm</td>
                </tr>
                <tr>
                    <td>Reaporting</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Flow Alternative</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Project Portfolios</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Hive Alternative</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>JIRA Alternative</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Monday.com Alternative</td>
                    <td></td>
                </tr>
                

            </table>
           </Center>
            </Box>
            <Divider />
            <Container>
            <Box textAlign={"left"} display={'flex'} gap="20px">
                <Image w={20} gap={"20px"} src='https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg'></Image>
                 <Text>2022  ©   Nifty Technology, Inc. All right reserved</Text>
            </Box>
            </Container>
        </>
    )
}

export default Home