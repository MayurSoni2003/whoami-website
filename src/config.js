// API Configuration
// In development: uses Vite proxy to localhost:5000
// In production: uses VITE_API_URL environment variable

export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Helper to build API URLs
export const getApiUrl = (endpoint) => {
    return `${API_BASE_URL}${endpoint}`;
};
