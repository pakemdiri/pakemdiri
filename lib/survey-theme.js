import { FlatLightPanelless } from "survey-core/themes";

/**
 * Custom SurveyJS theme based on "Flat Light Panelless" (closest to v1 "modern").
 * Overrides the default green primary color with the PAKEM DIRI red brand color.
 */
export const pakemdiriTheme = {
  ...FlatLightPanelless,
  cssVariables: {
    ...FlatLightPanelless.cssVariables,
    "--sjs-primary-backcolor": "rgba(169, 31, 36, 1)",
    "--sjs-primary-backcolor-light": "rgba(169, 31, 36, 0.1)",
    "--sjs-primary-backcolor-dark": "rgba(138, 25, 29, 1)",
    "--sjs-font-family": "'Inter', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    "--sjs-font-size": "18px",
  },
};
