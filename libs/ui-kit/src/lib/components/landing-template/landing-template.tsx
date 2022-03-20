import { Container, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { Illustration } from '../accounting-illustration';

/* eslint-disable-next-line */
export interface LandingTemplateProps {
  title: string;
  titleSlogan: string;
  description: string;
  ctaButtonDescription: string;
  secondaryButtonDescription: string;
  onPrimaryButtonClick?: () => void;
}

export function LandingTemplate(props: LandingTemplateProps) {
  const  { title, titleSlogan, description, ctaButtonDescription, secondaryButtonDescription, onPrimaryButtonClick = () => undefined } = props;
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color={'orange.400'}>
            {title}
          </Text>
          {titleSlogan}
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          {description}
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            onClick={onPrimaryButtonClick}
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            {ctaButtonDescription}
          </Button>
          <Button rounded={'full'} px={6}>
            {secondaryButtonDescription}
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export default LandingTemplate;
