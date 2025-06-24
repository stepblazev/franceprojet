import React, { useState, useRef, useContext } from "react";
import { Input, Text, Button, Flex } from "@chakra-ui/react";
import FileContext from "../FileProvider";

const MultipleFileUploader = ({ field, textBotton, activeStep }) => {
    const { files, setFiles } = useContext(FileContext);
    console.log("🚀 ~ MultipleFileUploader ~ files:", files)
    const fileInputRef = useRef(null);

    // const handleFileChange = (e) => {
    //     if (e.target.files) {
    //         setFiles(e.target.files);
    //     }
    // };

    const handleCustomButtonClick = () => {
        if (fileInputRef.current && activeStep === 2) { 
            fileInputRef.current.click(); // Trigger the file input click
        }
    };
    const handleFileChange = (e) => {
        if (e.target.files) {
            console.log("Selected files:", e.target.files);
            setFiles(e.target.files);
        }
    };
    
    return (
    
            <Flex flexDir={{ base: 'column', sm: 'row' }} w={"100%"} flexWrap="nowrap" justifyContent="space-between" gap={'30px'}>
               <Flex flexDir="row" gap="3px" flexWrap={'wrap'} border={files?.length > 0 ? '1px solid #d3d3d3' : '1px solid inherit'} borderRadius={'0px'}  p="4px">
                
                  {files &&
                       [...files].map((file, index) => (
                            <Text  key={crypto.randomUUID()}  display={"inline=block"}  mr={'5px'} fontSize={"14px"} fontWeight={"400"} lineHeight={"20px"} color={"#170F49"}>
                                {file.name}
                            </Text>
                        ))}
                </Flex>

                <Input
                    {...field}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }} // Hide the default file input
                />
                <Button onClick={handleCustomButtonClick} color={"#170F49"} py={"10px"} minW={"211px"} h={"50px"} border={"1px solid #EFF0F6"} borderRadius={"0px"} bgColor={"#FFF"} _hover={{
                     color:"#fff",
                     bgColor:"#2E3083",
                }}>
                    {textBotton}
                </Button>
            </Flex>
        
    );
};

export default MultipleFileUploader;
















// import React, { useContext, useState } from "react";
// import { Input, Text, Button, Flex } from "@chakra-ui/react";
// import FileContext from "../FileProvider";

// const MultipleFileUploader = ({ field, textBotton }) => {
//     const { files, setFiles } = useContext(FileContext);

//     console.log("🚀 ~ MultipleFileUploader ~ files:", files)

//     const handleFileChange = (e) => {
//         const selectedFiles = e.target.files;
//             console.log("Selected files:", e.target.files);

//         if (selectedFiles) {
//             const filesArray = Array.from(selectedFiles);
//             setFiles(filesArray);
//         }
//     };

//     const handleCustomButtonClick = () => {
//         const fileInput = document.createElement("input");
//         fileInput.type = "file";
//         fileInput.multiple = true;
//         fileInput.accept = "image/*"; // Укажите нужный тип файлов

//         fileInput.onchange = (e) => handleFileChange(e);
//         fileInput.click();
//     };

//     return (
//         <Flex
//             flexDir={{ base: "column", sm: "row" }}
//             w={"100%"}
//             flexWrap="nowrap"
//             justifyContent="space-between"
//             gap={"30px"}
//         >
//             <Flex
//                 flexDir="row"
//                 gap="3px"
//                 flexWrap={"wrap"}
//                 border={
//                     files.length > 0
//                         ? "1px solid #d3d3d3"
//                         : "1px solid inherit"
//                 }
//                 borderRadius={"0px"}
//                 p="4px"
//             >
//                 {files.map((file, index) => (
//                     <Text
//                         key={index}
//                         display={"inline-block"}
//                         mr={"5px"}
//                         fontSize={"14px"}
//                         fontWeight={"400"}
//                         lineHeight={"20px"}
//                         color={"#170F49"}
//                     >
//                         {file.name}
//                     </Text>
//                 ))}
//             </Flex>

//             <Input
//                 {...field}
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 style={{ display: "none" }}
//             />
//             <Button
//                 onClick={handleCustomButtonClick}
//                 color={"#170F49"}
//                 py={"10px"}
//                 minW={"211px"}
//                 h={"50px"}
//                 border={"1px solid #EFF0F6"}
//                 borderRadius={"0px"}
//                 bgColor={"#FFF"}
//                 _hover={{
//                     color: "#fff",
//                     bgColor: "#2E3083",
//                 }}
//             >
//                 {textBotton}
//             </Button>
//         </Flex>
//     );
// };

// export default MultipleFileUploader;
