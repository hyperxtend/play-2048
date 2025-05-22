/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const TILE_COLOURS: { [key: number]: string } = {
  2: '#FFFDE7',
  4: '#FFF9C4',
  8: '#FFF59D',
  16: '#FFF176',
  32: '#FFEE58',
  64: '#FFEB3B',
  128: '#FDD835',
  256: '#FBC02D',
  512: '#F9A825',
  1024: '#F57F17',
  2048: '#FFD600',
};
