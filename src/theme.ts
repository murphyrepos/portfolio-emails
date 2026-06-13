import { pixelBasedPreset } from '@react-email/components';
import type { TailwindConfig } from '@react-email/components';

/** Shared Tailwind config — mirrors the portfolio's brand tokens. */
export const tailwindConfig: TailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        brand: '#2563eb',
        ink: '#0f172a',
      },
    },
  },
};
