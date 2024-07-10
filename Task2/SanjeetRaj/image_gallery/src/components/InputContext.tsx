import React from "react";
//contexts
const InputContext=React.createContext<[string,React.Dispatch<React.SetStateAction<string>>]>(([null!, () => null!]))
const IsReadyContext=React.createContext<[string,React.Dispatch<React.SetStateAction<string>>]>(([null!, () => null!]))
export {InputContext,IsReadyContext}