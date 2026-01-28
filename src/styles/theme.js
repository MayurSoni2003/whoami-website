// WhoAmI Design System Theme
export const theme = {
    // Color Palette (Approved)
    colors: {
        // Base Colors
        charcoalBlack: '#0F0F0F',
        warmWhite: '#F5F5F3',
        graphiteGrey: '#2B2B2B',

        // Accent
        deepBlueGrey: '#1E2A33',

        // Semantic Colors
        background: '#F5F5F3',
        surface: '#ffffff',
        text: {
            primary: '#0F0F0F',
            secondary: '#2B2B2B',
            muted: '#666666',
        },
        border: '#e0e0e0',
    },

    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },

    fontSizes: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        base: '1rem',       // 16px
        lg: '1.125rem',     // 18px
        xl: '1.25rem',      // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
    },

    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    // Spacing (4px base unit)
    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '0.75rem',    // 12px
        lg: '1rem',       // 16px
        xl: '1.5rem',     // 24px
        '2xl': '2rem',    // 32px
        '3xl': '3rem',    // 48px
        '4xl': '4rem',    // 64px
        '5xl': '6rem',    // 96px
    },

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    // Transitions
    transitions: {
        fast: '0.15s ease',
        base: '0.2s ease',
        slow: '0.3s ease',
    },

    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgba(15, 15, 15, 0.05)',
        base: '0 1px 3px 0 rgba(15, 15, 15, 0.1), 0 1px 2px 0 rgba(15, 15, 15, 0.06)',
        md: '0 4px 6px -1px rgba(15, 15, 15, 0.1), 0 2px 4px -1px rgba(15, 15, 15, 0.06)',
        lg: '0 10px 15px -3px rgba(15, 15, 15, 0.1), 0 4px 6px -2px rgba(15, 15, 15, 0.05)',
        xl: '0 20px 25px -5px rgba(15, 15, 15, 0.1), 0 10px 10px -5px rgba(15, 15, 15, 0.04)',
    },

    // Border Radius
    borderRadius: {
        none: '0',
        sm: '0.125rem',   // 2px
        base: '0.25rem',  // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        full: '9999px',
    },
};

export default theme;
