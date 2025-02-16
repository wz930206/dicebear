import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const hair: ComponentGroup = {
  'short11': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M4 4v2h1V5h1V4h8v1h1v1h1V4h-1V3H5v1H4Z" fill="${colors.hair.value}"/>
`,
  'short10': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M6 2h8v1h1v1h1v3h-1V6h-1V5h-1V4H9v1H7v1H6v1H4V4h1V3h1V2Z" fill="${colors.hair.value}"/>
`,
  'short09': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M4 7h1V5h1V4h2v1h1v1h2V5h1V4h2v1h1v2h1V5h-1V4h-1V3H6v1H5v1H4v2Z" fill="${colors.hair.value}"/>
`,
  'short08': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M3 8h1V5h12v3h1V4h-1V3h-1V2H5v1H4v1H3v4Z" fill="${colors.hair.value}"/>
`,
  'short07': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 5v1h1v1h2V5h1V3H4v1H3v1H2Zm6-1h2v1h2V4h1V3H8v1Zm6 1h1v2h2V6h1V5h-1V4h-1V3h-2v2Z" fill="${colors.hair.value}"/>
`,
  'short06': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M3 8h1V5h2V3h8v1h1v1h1v3h1V3h-2V2h-2V1h-1v1h-2V1H9v1H8V1H7v1H5v1H4v1H3v4Z" fill="${colors.hair.value}"/>
`,
  'short05': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M11 5V4h1V3H8v1h1v1h2Z" fill="${colors.hair.value}"/>
`,
  'short04': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M3 8h1V6h2V5h2V4h1v1h2v1h2v1h2v1h2V5h-1V4h-1V3H5v1H4v1H3v3Z" fill="${colors.hair.value}"/>
`,
  'short03': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M5 5h10V4h-1V3H6v1H5v1Z" fill="${colors.hair.value}"/>
`,
  'short02': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M3 5H2v3h2V5h1V4h1v1h2V4h4V3h1v1h1v1h1v1h1v2h1V7h1V5h-1V4h-1V3h-1V2h-1V1h-1v1h-2V1h-1v1H7V1H5v1H4v1H3v2Z" fill="${colors.hair.value}"/>
`,
  'long15': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M1 7h1v5h1v1h1V7h1V6h1V4h1V3h6v1h1v1h1v1h1v7h1v-2h1V7h-1V6h1V4h-1v1h-1V3h1V2h-1v1h-1V2h-1V1h-1V0h-1v1H6V0H5v1H4V0H3v1h1v2H3V2H2v1h1v1H2v2H1v1Z" fill="${colors.hair.value}"/>
`,
  'short01': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M6 3v1H5v1H4v3h2V7h1V6h4V5h1V4h1v1h-1v1h1v1h1v1h2V5h-1V4h-1V3H6Z" fill="${colors.hair.value}"/>
`,
  'long14': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11v6h1v-1h4v-1H6v-1H5v-1H4v-2H3Zm0-3h2V5h10v3h2V4h-1V3H4v1H3v4Zm13 3h1v6h-1v-1h-4v-1h2v-1h1v-1h1v-2Z" fill="${colors.hair.value}"/>
`,
  'long13': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11v5h2v-3H4v-2H3Zm0-3h2V5h10v3h2V4h-1V3H4v1H3v4Zm13 3h1v5h-2v-3h1v-2Z" fill="${colors.hair.value}"/>
`,
  'long12': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M4 13h1v1H3V4h1V3h1V2h10v1h1v1h1v10h-2v-1h1V5H4v8Z" fill="${colors.hair.value}"/>
`,
  'long11': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M2 18h2v-1h4v-2H6v-1H5v-1H4V5h1V4h1v1h1V4h1v1h1V4h6v1h1v8h-1v1h-1v1h-2v2h4v1h2V4h-1V3h-1V2H4v1H3v1H2v14Z" fill="${colors.hair.value}"/>
`,
  'long10': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.104V11h1v2h1v1l-2 .104ZM17 11v3h-2v-1h1v-2h1ZM3 8h1V5h1V4h1V3h8v1h1v1h1v3h1V4h-1V3h-1V2H5v1H4v1H3v4Z" fill="${colors.hair.value}"/>
`,
  'long09': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M2 15h2V5h12v10h2V4h-1V3h-1V2H4v1H3v1H2v11Z" fill="${colors.hair.value}"/>
`,
  'long08': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M2 14h2V7h1V6h1V5h1V4h1V3h6v1h1v1h1v9h2V3h-1V2h-1V1H4v1H3v1H2v11Z" fill="${colors.hair.value}"/>
`,
  'long07': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M4 5v3h1V5h2v1h1V5h1v1h1V5h5v3h1V5h1V3.016h-1V2h-2v1l-8 .016V2H4v1.016H3V5h1Z" fill="${colors.hair.value}"/>
`,
  'long06': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M3 11h1V9h1V8h1V7h1V6h1V5h5v1h3V5h-1V4h-1V3H5v1H4v1H3v6Z" fill="${colors.hair.value}"/>
`,
  'long05': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M2 17h2v-1h4v-1H6v-1H5v-1H3.998L4 11H3V8h1V5h1V4h6V3h1v1h1V3h1v1h1v1h1v3h1v3h-1v2h-1v1h-1v1h-2v1h4v1h2V4h-1V3h-1V2h-1V1H5v1H4v1H3v1H2v13Z" fill="${colors.hair.value}"/>
`,
  'long04': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14h2v-1H4v-2H3v3Zm12 0h2v-3h-1v2h-1v1Zm2-6V3h-1V2H4v1H3v5h1V5h1V4h1V3h8v1h1v1h1v3h1Z" fill="${colors.hair.value}"/>
`,
  'long03': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 13v1H2v2H1v1h1v-1h1v-1h1v-1h1v-1H4v-2H3v2Zm0-5h1V7h1V6h1V5h8v1h1v1h1v1h1V4h-1V3h-1V2H5v1H4v1H3v4Z" fill="${colors.hair.value}"/>
`,
  'long02': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M2 15h4v-1H5v-1H4V6h2V5h2V4h1V3h4v1h1v1h1v1h1v7h-1v1h-1v1h4V4h-1V3h-1V2h-1V1H5v1H4v1H3v1H2v11Z" fill="${colors.hair.value}"/>
`,
  'long01': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11v3H2v2H1v1h1v-1h1v-1h1v-1h1v-1H4v-2H3Zm14 0v3h1v2h1v1h-1v-1h-1v-1h-1v-1h-1v-1h1v-2h1Zm-1-3h1V4h-1V3h-1V2H5v1H4v1H3v4h1V7h1V6h1V5h8v1h1v1h1v1Z" fill="${colors.hair.value}"/>
`,
}
