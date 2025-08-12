import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {

          primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706',
            contrastText: '#ffffff',
          },
          background: {
            default: '#ffffff',
            paper: '#fafafa',
            elevated: '#f5f5f5',
          },
          text: {
            primary: '#171717',
            secondary: '#525252',
            disabled: '#a3a3a3',
          },
          divider: 'rgba(0, 0, 0, 0.06)',
          grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        }
      : {

          primary: {
            main: '#818cf8',
            light: '#a5b4fc',
            dark: '#6366f1',
            contrastText: '#000000',
          },
          secondary: {
            main: '#fbbf24',
            light: '#fcd34d',
            dark: '#f59e0b',
            contrastText: '#000000',
          },
          background: {
            default: '#0a0a0a',
            paper: '#171717',
            elevated: '#262626',
          },
          text: {
            primary: '#fafafa',
            secondary: '#a3a3a3',
            disabled: '#525252',
          },
          divider: 'rgba(255, 255, 255, 0.08)',
          grey: {
            50: '#171717',
            100: '#262626',
            200: '#404040',
            300: '#525252',
            400: '#737373',
            500: '#a3a3a3',
            600: '#d4d4d4',
            700: '#e5e5e5',
            800: '#f5f5f5',
            900: '#fafafa',
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: {
      fontSize: '3.75rem',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '2.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    ...Array(21).fill('0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'),
  ],
});

const createClueLyTheme = (mode = 'light') => {
  const tokens = getDesignTokens(mode);
  
  let theme = createTheme({
    ...tokens,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: mode === 'light'
              ? '1px solid rgba(0, 0, 0, 0.06)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: 'none',
            height: '64px',
            '& .MuiToolbar-root': {
              height: '64px',
              minHeight: '64px',
              paddingLeft: '32px',
              paddingRight: '32px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            transition: 'all 0.16s ease-out',
          },
          sizeLarge: {
            height: '48px',
            padding: '0 24px',
          },
          sizeMedium: {
            height: '44px',
            padding: '0 20px',
          },
          sizeSmall: {
            height: '40px',
            padding: '0 16px',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: tokens.shadows[2],
              transform: 'translateY(-1px)',
            },
          },
          outlined: {
            borderColor: tokens.palette.grey[300],
            '&:hover': {
              backgroundColor: tokens.palette.grey[50],
              borderColor: tokens.palette.grey[400],
            },
          },
          text: {
            '&:hover': {
              backgroundColor: tokens.palette.grey[100],
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '24px',
            border: `1px solid ${tokens.palette.grey[200]}`,
            boxShadow: 'none',
            transition: 'all 0.16s ease-out',
            '&:hover': {
              boxShadow: tokens.shadows[2],
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: tokens.palette.grey[100],
            color: tokens.palette.grey[700],
            fontWeight: 500,
            fontSize: '0.875rem',
            borderRadius: '8px',
            height: '32px',
            '&:hover': {
              backgroundColor: tokens.palette.grey[200],
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: tokens.palette.grey[600],
            textDecoration: 'none',
            transition: 'all 0.16s ease-out',
            '&:hover': {
              color: tokens.palette.primary.main,
              textDecoration: 'underline',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (min-width: 1200px)': {
              maxWidth: '1200px',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            width: '40px',
            height: '40px',
            '& .MuiSvgIcon-root': {
              fontSize: '20px',
            },
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme, {
    breakpoints: ['sm', 'md', 'lg'],
    factor: 2,
  });

  return theme;
};

const theme = createClueLyTheme('light');

export default theme;
export { createClueLyTheme, getDesignTokens };
