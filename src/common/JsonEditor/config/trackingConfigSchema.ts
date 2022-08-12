import { JSONSchema7 } from 'json-schema';

export const trackingConfigJsonSchema: JSONSchema7 = {
  title: 'tracking config',
  description: 'All informational data required to track a delivery.',
  type: 'object',
  properties: {
    customer_id: { type: 'string', description: 'An identifier unique to each customer.' },
    service_tier: {
      type: 'string',
      enum: ['next day', 'same day', 'priority one'],
      description: 'Level of Dashcore delivery service.',
    },
  },
  required: ['customer_id', 'service_tier'],
};
