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
  Text,
  useToast
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik } from 'formik';
import { SIGN_UP_FORM_INIT } from '../form-constants';
import app from '../constants/firebase-config';
import { generateRecaptcha, usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import { MboxRoutes, SignUpFormModel } from '../models';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { appendBhtCode, getToastConfig, NotificationTypeEnum } from '@react-quick-hacks/shared';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpProps {
}

export const SignUp = (props: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState(false);
  const verifyPhone = usePhoneVerify(app);
  const router = useRouter();
  const toast = useToast();
  const db = getFirestore(app);

  const setUpUserProfile = async (signUpForm: SignUpFormModel) => {
    const { phoneNumber, firstName, lastName } = signUpForm;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await setDoc(doc(db, 'users', appendBhtCode(phoneNumber as string)), {
      phoneNumber,
      firstName, lastName
    });
  };

  useEffect(()=> {
    generateRecaptcha(app);
  },[])

  const generateOtp = async (signUpForm: SignUpFormModel) => {
    setShowLoader(true);
    try {
      const { phoneNumber } = signUpForm;
      await verifyPhone.sendVerification(`+975${phoneNumber}`);
      toast(getToastConfig('OTP has been sent', NotificationTypeEnum.Success));
      setOtpGenerated(true);
    } catch (error) {
      toast(getToastConfig(error.message || 'Error Occurred', NotificationTypeEnum.Error));
    } finally {
      setShowLoader(false);
    }
  };

  const verifyOtp = async (signUpForm: SignUpFormModel) => {
    try {
      const { otp } = signUpForm;
      if (otp) {
        setShowLoader(true);
        const signedIn = await verifyPhone.verifyOtp(otp);
        if (signedIn) {
          await setUpUserProfile(signUpForm);
          toast(getToastConfig('Sign Up Successful', NotificationTypeEnum.Success));
          void router.replace(`/${MboxRoutes.Dashboard}`);
        }
      }
    } catch (e) {
      toast(getToastConfig(e.message || 'Error Occurred', NotificationTypeEnum.Error));
    }
  };


  return (
    <>
      <Formik initialValues={SIGN_UP_FORM_INIT}
              onSubmit={otpGenerated ? verifyOtp : generateOtp }>
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
                            await generateOtp(formik.values);
                          } else {
                            await formik.handleSubmit();
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
                        type='submit'
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
            <div id='recaptcha-container' />
          </Form>
        )
        }
      </Formik>
    </>
  );
};

export default SignUp;
