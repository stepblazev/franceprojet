import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '200px',
    mob: '375px',
    xmob: '410px',
    sm: '480px',
    mini: '530px',
    xmini: '577px',
    xsm: '665px',
    xxsm: '730px',
    xxxsm: '777px',    
    md: '834px',
    xmd: '898px',
    lg: '1024px',
    maxlg: '1170px',
    xlg: '1270px',
    xxlg: '1320px',
    smdesk: '1380px',
    desk: '1440px',
    xdesk: '1490px',
    xl: '1640px',
    xlm: '1760px',
    xxl: '1920px',
};
const colors = {
    d_white: '#FFFFFF', //---
    d_black: '#2E3083',
    d_brand:  {
        100: '#2E3083',
     
        200: '#2E3083',
  
        800: '#2E3083',
      },

    d_text: '#454545',
    d_text1: '#444444',
    
    d_note: '#CBCBCB',
    d_red: '#E82222',
    d_name: '#AEAEAE',
    d_yellow: '#FFDE16',
};

const fonts = {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
};

const theme = extendTheme({
    breakpoints,
    colors,
    fonts,
});
export default theme;
