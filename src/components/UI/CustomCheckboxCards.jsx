// import React from 'react';
// import { useCheckboxGroup, useCheckbox } from '@chakra-ui/react'
// import { chakra, Flex, Text, Stack, Box } from '@chakra-ui/react';
// export default function CustomCheckboxCards(props) {
//   const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
//     useCheckbox(props)

//   return (
//     <chakra.label
//       display='flex'
//       flexDirection='row'
//       alignItems='center'
//       justifyContent={(state.isChecked||props.isChecked) ?'space-around':'space-around' }
//     mb={'30px'}
//       w={'284px'}
//       h={'115px'}
//       p={'5px 20px'}
//       bg='white'
//       border={(state.isChecked||props.isChecked) ? '2px solid #2E3083' : '2px solid #EFF0F6'}

//       cursor='pointer'
//       {...htmlProps}
//     >
//       <input checked={state.isChecked} {...getInputProps()} hidden />
     
    

//       {props.icon}
//         {/* <input type="radio" checked={isChecked} readOnly  hidden /> */}
//         <Text fontSize={'18px'} fontWeight={'600'} lineHeight={'20px'} color={'#2E3083'}>{props.text}</Text>
//     </chakra.label>
//   )
// }

import React from 'react';
import { useCheckbox } from '@chakra-ui/react';
import { chakra, Text } from '@chakra-ui/react';

export default function CustomCheckboxCards(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

    return (
        <chakra.label
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent={props.isChecked ? 'space-around' : 'space-around'}
            mb={'30px'}
            w={'284px'}
            h={'115px'}
            p={'5px 20px'}
            bg='white'
			marginBottom={'0'}
            border={props.isChecked ? '2px solid #2E3083' : '2px solid #EFF0F6'}
            cursor='pointer'
            {...htmlProps}
        >
            <input checked={props.isChecked} {...getInputProps()} hidden />
            {props.icon}
            <Text fontSize={'18px'} fontWeight={'600'} lineHeight={'20px'} color={'#2E3083'}>
                {props.text}
            </Text>
		</chakra.label>
    );
}

