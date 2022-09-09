/// <reference types="vite/client" />


declare namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
        readonly VITE_APP_ENV: 'release' | 'test',
    }
}
