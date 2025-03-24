// // // 'use client';

// // // import Select, { MultiValue } from 'react-select';
// // // import { useState } from 'react';

// // // type OptionType = {
// // //   value: string;
// // //   label: string;
// // // };

// // // interface AutocompleteProps {
// // //   options: OptionType[];
// // // }

// // // export const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
// // //   const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

// // //   const handleChange = (selected: MultiValue<OptionType>) => {
// // //     // Сонгосон утгуудыг хадгална
// // //     setSelectedOptions(selected.map((option) => option as OptionType));
// // //   };

// // //   return (
// // //     <div>
// // //       <Select
// // //         options={options} // Сонголтын бүх боломжит утга
// // //         onChange={handleChange} // Сонголтыг шинэчлэх
// // //         placeholder="Сонгоно уу..."
// // //         isMulti // Олон сонголт хийхийг зөвшөөрөх
// // //         value={selectedOptions} // Сонгосон утгуудыг хадгалах
// // //         isClearable={false} // Сонголтыг арилгахыг хориглох
// // //       />
// // //     </div>
// // //   );
// // // };

// // 'use client';

// // import Select, { MultiValue, StylesConfig } from 'react-select';
// // import { useState } from 'react';

// // type OptionType = {
// //   value: string;
// //   label: string;
// // };

// // interface AutocompleteProps {
// //   options: OptionType[];
// // }

// // const customStyles: StylesConfig<OptionType, true> = {
// //   control: (styles) => ({
// //     ...styles,
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     padding: '5px',
// //     border: '1px solid #ccc',
// //   }),
// //   multiValue: (styles) => ({
// //     ...styles,
// //     backgroundColor: '#000',
// //     color: 'white',
// //     borderRadius: '16px',
// //     padding: '4px 10px',
// //   }),
// //   multiValueLabel: (styles) => ({
// //     ...styles,
// //     color: 'white',
// //   }),
// //   multiValueRemove: (styles) => ({
// //     ...styles,
// //     color: 'white',
// //     ':hover': {
// //       backgroundColor: '#333',
// //       color: 'red',
// //     },
// //   }),
// // };

// // export const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
// //   const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

// //   const handleChange = (selected: MultiValue<OptionType>) => {
// //     setSelectedOptions(selected.map((option) => option as OptionType));
// //   };

// //   return (
// //     <div>
// //       <Select
// //         options={options}
// //         onChange={handleChange}
// //         placeholder="Select genres..."
// //         isMulti
// //         value={selectedOptions}
// //         styles={customStyles}
// //       />
// //     </div>
// //   );
// // };

// 'use client';

// import Select, { MultiValue, StylesConfig } from 'react-select';
// import { useState } from 'react';

// type OptionType = {
//   value: string;
//   label: string;
// };

// interface AutocompleteProps {
//   options: OptionType[];
// }

// export const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
//   const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

//   const handleChange = (selected: MultiValue<OptionType>) => {
//     setSelectedOptions(selected.map((option) => option as OptionType));
//   };

//   // 🎨 Custom styles
//   const customStyles: StylesConfig<OptionType, true> = {
//     control: (base) => ({
//       ...base,
//       borderRadius: '8px',
//       padding: '5px',
//       borderColor: '#ddd',
//       boxShadow: 'none',
//       ':hover': {
//         borderColor: '#aaa',
//       },
//     }),
//     multiValue: (base) => ({
//       ...base,
//       backgroundColor: 'black',
//       color: 'white',
//       borderRadius: '20px',
//       padding: '5px 10px',
//       display: 'flex',
//       alignItems: 'center',
//     }),
//     multiValueLabel: (base) => ({
//       ...base,
//       color: 'white',
//       fontWeight: 'bold',
//     }),
//     multiValueRemove: (base) => ({
//       ...base,
//       color: 'white',
//       ':hover': {
//         backgroundColor: 'gray',
//         color: 'black',
//         borderRadius: '50%',
//       },
//     }),
//     option: (base, { isSelected }) => ({
//       ...base,
//       backgroundColor: isSelected ? 'black' : 'white',
//       color: isSelected ? 'white' : 'black',
//       borderRadius: '20px',
//       padding: '8px 12px',
//       margin: '5px',
//       textAlign: 'center',
//       ':hover': {
//         backgroundColor: '#e0e0e0',
//         color: 'black',
//       },
//     }),
//     menu: (base) => ({
//       ...base,
//       borderRadius: '8px',
//       padding: '10px',
//     }),
//     placeholder: (base) => ({
//       ...base,
//       color: '#999',
//     }),
//   };

//   return (
//     <div>
//       <Select
//         options={options}
//         onChange={handleChange}
//         placeholder="Жанраа сонгоно уу..."
//         isMulti
//         value={selectedOptions}
//         isClearable={false}
//         isSearchable={false}
//         styles={customStyles} // 🎨 Custom styles ашиглаж байна
//       />
//     </div>
//   );
// };

'use client';

import { useState } from 'react';

type OptionType = {
  value: string;
  label: string;
};

interface AutocompleteProps {
  options: OptionType[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const handleSelect = (option: OptionType) => {
    setSelectedOptions((prev) => {
      const isSelected = prev.some((item) => item.value === option.value);
      if (isSelected) {
        return prev.filter((item) => item.value !== option.value);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Genres</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        See lists of movies by genre
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        {options.map((option) => {
          const isSelected = selectedOptions.some(
            (item) => item.value === option.value
          );
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '20px',
                backgroundColor: isSelected ? 'black' : 'white',
                color: isSelected ? 'white' : 'black',
                fontSize: '14px',
                cursor: 'pointer',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              {option.label}
              {isSelected && (
                <span style={{ fontWeight: 'bold' }}>&times;</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
