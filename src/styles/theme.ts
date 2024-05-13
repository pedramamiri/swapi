import type { Theme } from "theme-ui"
import colors from "@/styles/colors"

export const theme : Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes : ['25%', '50%', '75%', '100%'],
  fonts: {
    body:
      'Starjedi, system-ui, -apple-system, Roboto, sans-serif',
    heading: 'inherit',
  },
  fontWeights: {
    body: 'normal',
    bold: 'normal',
  },
  lineHeights: {
    body: 1.5,
  },
  borders: {
    thin: '1px solid'
  },
  letterSpacings: {
    body: '0.15em',
  },
  colors: {
    text: colors.hoth,
    background: colors.space,
    primary: colors.saturn,
    secondary: colors.earth,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing:'body'
    }
  },
}