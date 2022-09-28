import { ChevronDownIcon } from '@chakra-ui/icons'
import { MenuList } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { MenuItem } from '@chakra-ui/react'
import { MenuButton } from '@chakra-ui/react'
import { Menu } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
    return (
        <>

            <Heading>Prabhsh Kumar</Heading>
            {/* <Menu>
                <MenuButton as={Button} >
                    Action
                </MenuButton>
                <MenuList>
                    <MenuItem>Click</MenuItem>
                    <MenuItem>Click</MenuItem>
                    <MenuItem>Click</MenuItem>
                    <MenuItem>Click</MenuItem>

                </MenuList>
            </Menu> */}
            {/* <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu> */}
        </>
    )
}

export default Home