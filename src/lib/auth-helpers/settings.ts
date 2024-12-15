const allowServerRedirect = false;

export const getRedirectMethod = () => {
    return allowServerRedirect ? 'server' : 'client';
};

