import { useContext } from 'react';

import { LoaderContext } from './LoaderContext';

export const useLoaderContext = () => useContext(LoaderContext);
