import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;        
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

// Custom baseQuery wrapper to handle 401 errors
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // Check for JWT Expiry or Unauthorized errors
    if (result.error) {
        const { status, data } = result.error;

        if (status === 401 || data?.error === "jwt expired" || data?.error === "invalid signature") {
            console.warn("JWT expired! Logging out...");

            // Clear local storage
            localStorage.clear();

            // Redirect user to login page
            window.location.href = "/login"; // Adjust route as needed
        }
    }

    return result;
};

export default baseQueryWithReauth;

