const purgeEnabled = process.env.NODE_ENV === "production"

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

const sizes = {
  0: '0rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  20: '5rem',
  21: '5.25rem',
  24: '6rem',
  28: '7rem',
  29: '7.25rem',
  32: '8rem',
  33: '8.25rem',
  36: '9rem',
  37: '9.25rem',
  38: '9.5rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  50: '12.5rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  68: '17rem',
  72: '18rem',
  75: '18.75rem',
  76: '19rem',
  80: '20rem',
  90: '22.5rem',
  100: '25rem',
  120: '30rem',
  130: '32.5rem',
  140: '35rem',
  160: '40rem',
  180: '45rem',
  192: '48rem',
  200: '50rem',
  210: '52.5rem',
  400: '100rem',
  420: '105rem',
  440: '110rem'
};

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: [
      "./src/**/*.html",
      "./src/**/*.tsx",
      "./src/**/*.jsx",
      "./public/**/*.html"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4D86DD',
        },
        blue: {
          main: '#17375E',
          secondary: '#6363FC',
          50: '#F4F7FF',
          300: '#3DA5C6',
          400: '#3F64f2',
          500: '#4D86DD',
          700: '#2F4A8E',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        gray: {
          main: '#BBBCF7',
          secondary: '#404040',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        green: {
          main: '#1BC200',
          secondary: '#92D050',
          50: '#ecfdf5',
          300: '#6ee7b7',
          500: '#10b981',
          600: '#2F8E60',
          700: '#047857',
          900: '#064e3b',
        },
      },
      spacing: sizes,
      width: sizes,
      height: sizes,
      maxWidth: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxHeight: sizes,
    }
  },
  variants: {
    extend: {
      borderWidth: ['last', 'first'],
      backgroundColor: ['disabled'],
    }
  },
  plugins: []
}
