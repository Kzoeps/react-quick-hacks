import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Field, Form, Formik } from 'formik';
import { SIGN_UP_FORM_INIT } from '../form-constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpProps {
}

export const SignUp = (props: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState<boolean>(false);

  return (
    <>
      <Formik initialValues={SIGN_UP_FORM_INIT} onSubmit={otpGenerated ? (values) => console.log(values) : (values) => console.log('this', values)}>
        {formik => (
          <Form>
            <Flex
              minH={'100vh'}
              align={'center'}
              justify={'center'}
              bg={'gray.50'}
            >
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
                  bg={'white'}
                  boxShadow={'lg'}
                  p={8}
                >
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormControl id='firstName' isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input type='text' {...formik.getFieldProps('firstName')} />
                          {formik.errors.firstName && <FormErrorMessage>formik.errors.firstName</FormErrorMessage>}
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id='lastName'>
                          <FormLabel>Last Name</FormLabel>
                          <Input type='text' {...formik.getFieldProps('lastName')} />
                          {formik.errors.lastName && <FormErrorMessage>formik.errors.lastName</FormErrorMessage>}
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id='phoneNumber' isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input type='text' {...formik.getFieldProps('phoneNumber')} />
                      {formik.errors.phoneNumber && <FormErrorMessage>formik.errors.phoneNumber</FormErrorMessage>}
                    </FormControl>
                    {
                      otpGenerated && <FormControl id='otp' isRequired>
                        <FormLabel>OTP</FormLabel>
                        <InputGroup>
                          <Input type={showPassword ? 'text' : 'password'} {...formik.getFieldProps('otp')} />
                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                          {formik.errors.otp && <FormErrorMessage>formik.errors.otp</FormErrorMessage>}
                        </InputGroup>
                      </FormControl>
                    }
                    <Stack spacing={5} pt={2}>
                      <Button
                        loadingText='Submitting'
                        size='lg'
                        bg={'orange.400'}
                        color={'white'}
                        _hover={{
                          bg: 'orange.500'
                        }}
                        onClick={async () => {
                          if (otpGenerated) {
                            console.log('adsf')
                          } else {
                            formik.handleSubmit();
                            setOtpGenerated(true);
                          }
                        }}
                      >
                        {otpGenerated ? 'Resend OTP' : 'Generate OTP'}
                      </Button>
                      {otpGenerated && <Button
                        loadingText='Submitting'
                        size='lg'
                        bg={'orange.400'}
                        color={'white'}
                        _hover={{
                          bg: 'orange.500'
                        }}
                        type="submit"
                      >
                        Sign Up
                      </Button>
                      }
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
          </Form>
        )
        }
      </Formik>
    </>
  );
};

export default SignUp;
