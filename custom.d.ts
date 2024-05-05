import { route as routeFn } from 'ziggy-js';

declare global {
    var route: typeof routeFn;
}

interface Window {
    env: {
        GOOGLE_MAPS_API_KEY: string;
    };
}