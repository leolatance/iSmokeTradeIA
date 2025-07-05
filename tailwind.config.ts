import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
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
				'neon-green': 'hsl(var(--neon-green))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'dark-graphite': 'hsl(var(--dark-graphite))',
				'ice-white': 'hsl(var(--ice-white))',
				'alert-red': 'hsl(var(--alert-red))',
				'deep-black': 'hsl(var(--deep-black))',
				green: 'hsl(var(--neon-green))',
				purple: 'hsl(var(--neon-purple))',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(105 100% 54%), hsl(105 100% 64%))',
				'gradient-neon': 'linear-gradient(135deg, hsl(105 100% 54%), hsl(276 88% 53%))',
				'gradient-purple': 'linear-gradient(135deg, hsl(276 88% 53%), hsl(276 88% 63%))',
				'gradient-dark': 'linear-gradient(135deg, hsl(0 0% 5%), hsl(0 0% 12%))',
				'gradient-glow': 'linear-gradient(135deg, hsl(105 100% 54% / 0.2), hsl(276 88% 53% / 0.15))',
				'gradient-tech': 'linear-gradient(135deg, hsl(276 88% 53% / 0.3), hsl(105 100% 54% / 0.2))',
			},
			boxShadow: {
				'neon-green': '0 0 25px hsl(105 100% 54% / 0.4)',
				'neon-purple': '0 0 25px hsl(276 88% 53% / 0.4)',
				'purple': '0 0 25px hsl(276 88% 53% / 0.4)',
				'glow': '0 0 25px hsl(105 100% 54% / 0.4)',
				'neon-glow': '0 0 25px hsl(105 100% 54% / 0.3)',
				'alert': '0 0 25px hsl(0 69% 65% / 0.4)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(105 100% 54% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 35px hsl(105 100% 54% / 0.6)'
					}
				},
				'smooth-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-8px)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						textShadow: '0 0 10px hsl(105 100% 54% / 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px hsl(105 100% 54% / 0.8)'
					}
				},
				'purple-pulse': {
					'0%, 100%': {
						textShadow: '0 0 10px hsl(276 88% 53% / 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px hsl(276 88% 53% / 0.8)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-glow': 'neon-glow 3s ease-in-out infinite',
				'smooth-float': 'smooth-float 5s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'glow-pulse': 'neon-glow 3s ease-in-out infinite',
				'float': 'smooth-float 5s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2.5s ease-in-out infinite',
				'purple-pulse': 'purple-pulse 2.5s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
