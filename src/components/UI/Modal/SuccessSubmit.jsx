import {
    Flex,
    Modal, ModalBody,
    ModalContent,
    ModalOverlay,
    Text
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import Finish from '@/assets/finish_form.svg';



import { useRouter } from 'next/router';

const SuccessSubmit = ({ onClose, isOpen }) => {
    const { t } = useTranslation('common');
 // Внутри функционального компонента
    const router = useRouter();


    return (
        <Modal onClose={onClose} isOpen={isOpen} size={'md'} isCentered blockScrollOnMount={false}  >
            <ModalOverlay />
            <ModalContent w={'100%'} maxW={'700px'} pos={'relative'}>


                {/* <ModalHeader p={'32px 32px 8px'} fontSize={'34px'} fontWeight={'700'} lineHeight={'46px'} color={'#2E3083'}>Vous aussi vous avez droit au changement !</ModalHeader> */}

                <ModalBody px={'32px'} pb={'32px '} pt={'43px'}>

  
                            <Flex flexDir={'column'} gap={'40px'} w={'100%'} alignItems={'center'} >
                                <Finish />
                                <Flex flexDir={'column'} gap={'20px'} w={'100%'} alignItems={'center'}>
                                    <Text fontSize={'24px'} fontWeight={'700'} textAlign={'center'} mb={'16px'} lineHeight={'35px'} color={'#170F49'}>{t('subscribeSuccessTitle')}</Text>
                                    <Text fontSize={'18px'} fontWeight={'400'} textAlign={'center'} lineHeight={'30px'} color={'#6F6C90'}>{t('subscribeMessage')}</Text>

                                </Flex>


                            </Flex>
                     
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}


export default SuccessSubmit