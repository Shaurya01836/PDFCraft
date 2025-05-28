import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-emerald-cyan': 'linear-gradient(to right, #34d399, #22d3ee)',
        'gradient-orange-pink': 'linear-gradient(to right, #fb923c, #ec4899)',
        'gradient-purple-indigo': 'linear-gradient(to right, #a78bfa, #6366f1)',
        'gradient-amber-orange': 'linear-gradient(to right, #f59e0b, #f97316)',
        'gradient-rose-pink': 'linear-gradient(to right, #f43f5e, #ec4899)',
        'gradient-teal-emerald': 'linear-gradient(to right, #14b8a6, #10b981)',
        'gradient-violet-purple': 'linear-gradient(to right, #8b5cf6, #a855f7)',
        'gradient-cyan-blue': 'linear-gradient(to right, #22d3ee, #3b82f6)',
        'gradient-red-rose': 'linear-gradient(to right, #ef4444, #f43f5e)',
        'gradient-indigo-cyan': 'linear-gradient(to right, #6366f1, #22d3ee)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to right, #34d399, #22d3ee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
