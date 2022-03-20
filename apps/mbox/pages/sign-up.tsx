import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Formik, Form} from 'formik';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpProps {
}

export const SignUp = (props: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} color='orange.400' textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id='firstName' isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type='text' />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id='lastName'>
                      <FormLabel>Last Name</FormLabel>
                      <Input type='text' />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id='email' isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type='email' />
                </FormControl>
                <FormControl id='password' isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText='Submitting'
                    size='lg'
                    bg={'orange.400'}
                    color={'white'}
                    _hover={{
                      bg: 'orange.500'
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Formik>
    </>
  );
};

export default SignUp;
