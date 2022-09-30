// import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu } from '@chakra-ui/react'
import { MenuList } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MenuItem } from '@chakra-ui/react'
import { MenuButton } from '@chakra-ui/react'
import { Flex, Image, Box, Text } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Box p={6}>
                <Flex justifyContent='space-between'>
                    <Box>
                    <Link to='/'>  <Image w={20} src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" /></Link>
                    </Box>
                    <Box>
                        <Flex gap={10}>
                            <Box>
                                <Menu>
                                    <MenuButton _hover={{ color: 'green.500' }} variant='link' as={Button} bg='white'   >
                                        Features
                                    </MenuButton>
                                    <MenuList p={8}>
                                        <Text color='orange'> Learn how Nifty inspires productivity!</Text>
                                        <Flex justifyContent={'space-between'}>
                                            <Box>
                                                <MenuItem>Discussions</MenuItem>
                                                <MenuItem>Tasks</MenuItem>
                                                <MenuItem>Time Tracking</MenuItem>
                                                <MenuItem>Project Home</MenuItem>
                                            </Box>
                                            <Box>
                                                <MenuItem>Milestones (Gantt Chart)</MenuItem>
                                                <MenuItem>
                                                    Docs & Files</MenuItem>
                                                <MenuItem>Reporting</MenuItem>
                                                <MenuItem>
                                                    Project Portfolios</MenuItem>
                                            </Box>
                                        </Flex>
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box>
                                <Menu>
                                    <MenuButton _hover={{ color: 'green.500' }} variant='link' as={Button} bg='white'   >
                                        Use case
                                    </MenuButton>
                                    <MenuList p={8}>
                                        <Text color='orange'> Nifty is very flexible. Here are a few examples of how you can use it.</Text>
                                        <Flex justifyContent={'space-between'}>
                                            <Box>
                                                <MenuItem>Agile Development</MenuItem>
                                                <MenuItem>Digital Agencies</MenuItem>
                                                <MenuItem>Marketing Teams</MenuItem>

                                            </Box>
                                            <Box>
                                                <MenuItem>Client Management</MenuItem>
                                                <MenuItem>

                                                    Legal Case Management</MenuItem>
                                                <MenuItem>
                                                    Product Teams</MenuItem>

                                            </Box>
                                        </Flex>
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box>
                                <Menu>
                                    <MenuButton variant='link' _hover={{ color: 'green.500' }} as={Button} bg='white'   >
                                        Resources
                                    </MenuButton>
                                    <MenuList p={8}>

                                        <Flex justifyContent={'space-between'}>
                                            <Box>
                                                <MenuItem>Apps</MenuItem>
                                                <MenuItem>Integrations</MenuItem>
                                                <MenuItem>Security</MenuItem>

                                            </Box>
                                            <Box>
                                                <MenuItem>
                                                    Blog</MenuItem>
                                                <MenuItem>

                                                    Help Center</MenuItem>
                                                <MenuItem>Reporting</MenuItem>
                                                <MenuItem>

                                                    Get a Demo</MenuItem>
                                            </Box>
                                        </Flex>
                                    </MenuList>
                                </Menu>
                            </Box>

                            <Text >Got client</Text>
                            <Text >Got client</Text>
                            <Text >Got client</Text>
                        </Flex>
                    </Box>
                    <Box display={"flex"} gap={5}>
                     <Link to='/login'>   <Button h='32px' boxShadow='xs' bg='whiteAlpha.100' _hover={{ color: "#59bbac", boxShadow: 'xs', borderRadius: "md" }}>Login</Button></Link>
                     <Link to='/signup'>  <Button h='32px' _hover={{ bg: "#59bbac", color: "white" }} bg="#59bbac" color="white">Sign Up</Button></Link>
                    </Box>
                </Flex>
            </Box >
        </>
    )
}

export default Navbar