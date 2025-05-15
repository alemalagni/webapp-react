import { createContext, useContext, useState } from 'react';
const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);