// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
    content: [
        './node_modules/pliny/**/*.js',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,tsx}',
        './components/**/*.{js,ts,tsx}',
        './layouts/**/*.{js,ts,tsx}',
        './data/**/*.mdx',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans],
            },
            colors: {
                gray: colors.gray,
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    // Pliny algolia dependency
                    400: 'hsl(var(--primary))',
                    500: 'hsl(var(--primary))',
                    600: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                filter: 'brightness(1.10)',
                            },
                            code: { color: theme('colors.primary.DEFAULT') },
                        },
                        // p: {
                        //     fontSize: '14px',
                        // },
                        'h1,h2': {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                        },
                        h3: {
                            fontWeight: '600',
                        },
                        pre: {
                            fontSize: '1rem !important',
                        },
                        code: {
                            color: theme('colors.primary.DEFAULT'),
                        },
                    },
                },
                invert: {
                    css: {
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                filter: 'brightness(1.10)',
                            },
                            code: { color: theme('colors.primary.DEFAULT') },
                        },
                        // p: {
                        //     fontSize: '14px',
                        // },
                        'h1,h2,h3,h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                    },
                },
            }),
        },
    },
    safelist: [
        'bg-rose-300',
        'dark:bg-rose-700',
        'bg-orange-300',
        'dark:bg-orange-700',
        'bg-yellow-300',
        'dark:bg-yellow-700',
        'bg-emerald-300',
        'dark:bg-emerald-700',
        'bg-cyan-300',
        'dark:bg-cyan-700',
        'bg-sky-300',
        'dark:bg-sky-700',
        'bg-fuchsia-300',
        'dark:bg-fuchsia-700',
        'bg-gray-300',
        'dark:bg-gray-700',
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
}
