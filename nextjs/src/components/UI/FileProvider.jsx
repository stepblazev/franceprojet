import React, { createContext, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
    // const [files, setFiles] = useState([]);
    const [generalSkillsCheckbox, setGeneralSkillsCheckbox] = useState([]);
    const [innerCheckbox, setInnerCheckbox] = useState([]);

    return (
        <FileContext.Provider value={{ setInnerCheckbox, setGeneralSkillsCheckbox, innerCheckbox, generalSkillsCheckbox }}>
            {children}
        </FileContext.Provider>
    );
};

export default FileContext;
