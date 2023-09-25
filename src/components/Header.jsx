import { HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} bgColor={'blackAlpha.900'} shadow={'base'} justifyContent={'space-between'}>
        <HStack>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/'>Home</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/exchanges'>Exchanges</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
              <Link to='/coins'>Coins</Link>
          </Button>
        </HStack>
        <Text fontWeight={900} fontSize={'2xl'}>HackCrypto.</Text>
    </HStack>
  )
}

export default Header