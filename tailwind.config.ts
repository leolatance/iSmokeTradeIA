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
				'cannabis-green': 'hsl(var(--cannabis-green))',
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'rebel-purple': 'hsl(var(--rebel-purple))',
				'lime-accent': 'hsl(var(--lime-accent))',
				'smoke-gray': 'hsl(var(--smoke-gray))',
				'earth-brown': 'hsl(var(--earth-brown))',
				green: 'hsl(var(--cannabis-green))',
				purple: 'hsl(var(--rebel-purple))',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(142 69% 45%), hsl(80 70% 50%))',
				'gradient-cyber': 'linear-gradient(135deg, hsl(192 100% 60%), hsl(192 90% 55%))',
				'gradient-purple': 'linear-gradient(135deg, hsl(280 60% 35%), hsl(260 55% 40%))',
				'gradient-tech': 'linear-gradient(135deg, hsl(192 100% 60% / 0.3), hsl(142 69% 45% / 0.2))',
			},
			boxShadow: {
				'cannabis': '0 0 25px hsl(142 69% 45% / 0.4)',
				'cyber': '0 0 25px hsl(192 100% 60% / 0.3)',
				'purple': '0 0 25px hsl(280 60% 35% / 0.4)',
				'glow': '0 0 25px hsl(142 69% 45% / 0.4)',
				'cyber-glow': '0 0 25px hsl(192 100% 60% / 0.3)',
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
				'cannabis-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(142 69% 45% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 35px hsl(142 69% 45% / 0.6)'
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
				'cyber-pulse': {
					'0%, 100%': {
						textShadow: '0 0 10px hsl(192 100% 60% / 0.5)'
					},
					'50%': {
						textShadow: '0 0 20px hsl(192 100% 60% / 0.8)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cannabis-glow': 'cannabis-glow 3s ease-in-out infinite',
				'smooth-float': 'smooth-float 5s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'glow-pulse': 'cannabis-glow 3s ease-in-out infinite',
				'float': 'smooth-float 5s ease-in-out infinite',
				'cyber-pulse': 'cyber-pulse 2.5s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
