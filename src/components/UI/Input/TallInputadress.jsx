// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// export default function TallInputadress({ field, errors }) {
//   const router = useRouter();

//   const [selectedLocale, setSelectedLocale] = useState('fr'); // Default locale is 'fr'

//   useEffect(() => {
//       // Get current locale from router and set corresponding localization
//       const currentLocale = router.locale;

//       switch (currentLocale) {
//           case 'ru':
//               setSelectedLocale('ru');
//               break;
//           case 'en':
//               setSelectedLocale('en');
//               break;
//           default:
//               setSelectedLocale('fr');
//               break;
//       }
//   }, [router]);

//   const handleChange = (value) => {
//     value.label && field.onChange(value.label); // Update the form field value
//   };

//   return (
//     <div>
//       <GooglePlacesAutocomplete
//         apiKey="AIzaSyBXcCYSTgCUewZoi4ycnv__VLpk80aC6eI"
//         apiOptions={{ language: selectedLocale, region: selectedLocale }}
//         selectProps={{
//           // value: value.label,
//           onChange: handleChange,
//           placeholder: 'Enter your address',
//           styles: {
//             input: (provided) => ({
//               ...provided,          
//             }),
//             option: (provided) => ({
//               ...provided,
//               color: '#212121',
//             }),
//             singleValue: (provided) => ({
//               ...provided,
//               color: '#212121'
//             }),
//             control: (provided) => ({
//               ...provided,
//               borderWidth: `0px !important`,
//               boxShadow: '0px 2px 6px 0px #13124212 !important',
//               minHeight:'41px !important',
//               padding:'8px 0 !important',
//               borderRadius: '0px !important',
//               backgroundColor: '#FFFFFF !important',
//             }),
//           },
//         }}
//       />
//       {errors && <span className="error">{errors}</span>}
//     </div>
//   );
// }


import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useTranslation } from 'react-i18next';

export default function TallInputadress({ field, placeholder }) {
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState('fr'); // Default locale is 'fr'
  const [selectedAddress, setSelectedAddress] = useState(''); // Default locale is 'fr'

  useEffect(() => {
    // Get current locale from router and set corresponding localization
    const currentLocale = router.locale;
    switch (currentLocale) {
      case 'ru':
        setSelectedLocale('ru');
        break;
      case 'en':
        setSelectedLocale('en');
        break;
      default:
        setSelectedLocale('fr');
        break;
    }
  }, [router]);
  const { t } = useTranslation('common'); // Внутри функционального компонента

  const handleChange = (value) => {
    // Check if value and value.label are defined
    if (value && value.label) {
      field.onChange(value.label);
      setSelectedAddress(value.label)
    } else {
      field.onChange('');
      setSelectedAddress('')
       // Pass an empty string if value is not valid
    }
  };
  useEffect(() => {
    field.onChange('');
  }, [])

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyBXcCYSTgCUewZoi4ycnv__VLpk80aC6eI"
        apiOptions={{ language: selectedLocale, region: selectedLocale }}
        selectProps={{
          onChange: handleChange,
          placeholder: placeholder || t('enterAdress'),
          styles: {
            input: (provided) => ({
              ...provided,
              // w={'100%'} border={`1px solid ${errors ? '#EFF0F6' : '#ECF0F5'}`
              textAlign:router.pathname === '/professional' ? 'center' : 'unset'
            }),
            placeholder: base => ({
              ...base,
              // marginTop: '20px',
              // position: 'absolute',
              color: '#999999', fontSize: '18px', fontWeight: '500', lineHeight: '20px', 
              textAlign: router.pathname === '/professional' ? 'center!important': 'unset' 
            }),
            option: (provided) => ({
              ...provided,
              color: '#212121',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: '#212121',
            }),
            control: (provided) => ({
              ...provided,
              borderWidth:`0px !important`,
              boxShadow: router.pathname !== '/professional' ? '0px 2px 6px 0px #13124212 !important': '0px 2px 6px 0px #13124212',
              minHeight: '41px !important',
              padding: '8px 0 !important',
              borderRadius: '0px !important',
              backgroundColor: '#FFFFFF !important',
            }),
          },
        }}
      />
      {/* {errors && <span className="error">{errors}</span>} */}
    </div>
  );
}
