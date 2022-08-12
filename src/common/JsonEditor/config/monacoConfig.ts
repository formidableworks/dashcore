import * as monaco from 'monaco-editor';
import { deliveryConfigJsonSchema } from './deliveryConfigSchema';
import { cobaltTheme } from './monacoThemes';
import { trackingConfigJsonSchema } from './trackingConfigSchema';

export const schemaMatchers = {
  DELIVERY_CONFIG: 'delivery_config.json',
  TRACKING_CONFIG: 'tracking_config.json',
};
export type SchemaMatcher = keyof typeof schemaMatchers;

let alreadyConfigured = false;

export const configureMonaco = (): void => {
  if (alreadyConfigured) return;

  monaco.editor.defineTheme('cobalt', cobaltTheme);
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: [
      {
        uri: 'http://dashcore/delivery_config.json', // serves as an internal id, url does nothing.
        fileMatch: [schemaMatchers.DELIVERY_CONFIG],
        schema: deliveryConfigJsonSchema,
      },
      {
        uri: 'http://dashcore/tracking_config.json',
        fileMatch: [schemaMatchers.TRACKING_CONFIG],
        schema: trackingConfigJsonSchema,
      },
    ],
  });

  alreadyConfigured = true;
};
