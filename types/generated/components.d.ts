import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionJobDescription extends Schema.Component {
  collectionName: 'components_description_job_descriptions';
  info: {
    displayName: 'job_description';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.job-description': DescriptionJobDescription;
    }
  }
}
