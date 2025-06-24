import { Flex, Text } from '@chakra-ui/react';
// import { headerNavMain } from '@/utils';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu = () => {
    const router = useRouter();
    const { t } = useTranslation('common');

    return (
    
    
        <Flex justifyContent='space-between' alignItems='center' gap={{ base: '10px', md: '20px', lg: '30px', xdesk: '40px' } } >
        <Link href='/#discover'   >
                <Flex
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                    <Text
                        color={'#2E3083'}
                        textTransform={'uppercase'}
                        fontSize={{ base: '12px', md: '14px', xlg: '16px', xdesk: '16px' }}
                        fontWeight={'700'}
                        lineHeight={'normal'}
                        _hover={{
                            color: '#7B7EB7',
                        }}
                    >
                        {t('discover')}
                    </Text>
                </Flex>
            </Link>

            <Link href='/#realisation'   >
                <Flex
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                    <Text
                        color={'#2E3083'}
                        textTransform={'uppercase'}
                        fontSize={{ base: '12px', md: '14px', xlg: '16px', xdesk: '16px' }}
                        fontWeight={'700'}
                        lineHeight={'normal'}
                        _hover={{
                            color: '#7B7EB7',
                        }}
                    >
                        {t('realisation')}
                    </Text>
                </Flex>
            </Link>

            <Link href='/#application'   >
                <Flex
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                    <Text
                        color={'#2E3083'}
                        textTransform={'uppercase'}
                        fontSize={{ base: '12px', md: '14px', xlg: '16px', xdesk: '16px' }}
                        fontWeight={'700'}
                        lineHeight={'normal'}
                        _hover={{
                            color: '#7B7EB7',
                        }}
                    >
                        {t('application')}
                    </Text>
                </Flex>
            </Link>

            <Link href='/#contact'   >
                <Flex
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                    <Text
                        color={'#2E3083'}
                        textTransform={'uppercase'}
                        fontSize={{ base: '12px', md: '14px', xlg: '16px', xdesk: '16px' }}
                        fontWeight={'700'}
                        lineHeight={'normal'}
                        _hover={{
                            color: '#7B7EB7',
                        }}
                    >
                        {t('contact')}
                    </Text>
                </Flex>
            </Link>
           
        </Flex>
   
        
       
    );
};
export default Menu;

