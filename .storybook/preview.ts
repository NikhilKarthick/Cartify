// .storybook/preview.ts
import "../src/index.css"; // or wherever your Tailwind CSS is declared

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};
