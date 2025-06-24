/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Warm, human-centered color palette
        warm: {
          cream: '#fcf8f3',
          beige: '#f5f5dc',
          orange: '#ff9a00',
          'orange-light': '#ffa726',
          'orange-dark': '#f57c00',
          green: '#34a853',
          'green-light': '#43a047',
          'green-dark': '#2e7d32',
          blue: '#2962ff',
          'blue-light': '#448aff',
          'blue-dark': '#1565c0',
          golden: '#ffc107',
          'golden-light': '#ffca28',
          'golden-dark': '#ff8f00',
          terracotta: '#cd5c5c',
          sage: '#9fa88b',
          charcoal: '#333333',
          'charcoal-light': '#555555',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'handwritten': ['Kalam', 'cursive'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'organic': '63% 37% 54% 46% / 55% 48% 52% 45%',
      },
      keyframes: {
        "gentle-float": {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        "heart-beat": {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        "warm-glow": {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 154, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 154, 0, 0.5)' },
        },
        "sketch-draw": {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        "fade-in-up": {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) rotate(-1deg)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) rotate(0deg)'
          },
        },
        "slide-in-left": {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px) rotate(2deg)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0) rotate(0deg)'
          },
        },
        "bounce-gentle": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        "gentle-float": "gentle-float 3s ease-in-out infinite",
        "heart-beat": "heart-beat 2s ease-in-out infinite",
        "warm-glow": "warm-glow 3s ease-in-out infinite",
        "sketch-draw": "sketch-draw 2s ease-in-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #ff9a00, #34a853)',
        'golden-gradient': 'linear-gradient(135deg, #ffc107, #ff9a00)',
        'sage-gradient': 'linear-gradient(135deg, #9fa88b, #34a853)',
        'paper-texture': `
          radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
      },
      boxShadow: {
        'warm': '0 8px 32px rgba(255, 154, 0, 0.15)',
        'gentle': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'handmade': '0 8px 25px rgba(255, 154, 0, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}