import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButtons extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'bold';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Primary: Schema.Attribute.Boolean;
    Text: Schema.Attribute.String;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'link';
  };
  attributes: {
    LinkText: Schema.Attribute.String & Schema.Attribute.Required;
    LinkUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSpacer extends Struct.ComponentSchema {
  collectionName: 'components_footer_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'filter';
  };
  attributes: {
    Spacing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface HeaderDropDownItems extends Struct.ComponentSchema {
  collectionName: 'components_header_drop_down_items';
  info: {
    displayName: 'DropDownItems';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
  };
}

export interface HeaderLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_header_link_items';
  info: {
    description: '';
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    DropDownItems: Schema.Attribute.Component<'header.drop-down-items', true>;
    IsDropDown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    description: '';
    displayName: 'Heading';
    icon: 'filter';
  };
  attributes: {
    HeadingText: Schema.Attribute.String;
    HeadingType: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Schema.Attribute.DefaultTo<'h1'>;
  };
}

export interface PageSectionItemsJobDescription extends Struct.ComponentSchema {
  collectionName: 'components_page_section_items_job_descriptions';
  info: {
    displayName: 'JobDescription';
    icon: 'file';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PageSectionItemsJobItem extends Struct.ComponentSchema {
  collectionName: 'components_page_section_items_job_items';
  info: {
    description: '';
    displayName: 'JobItem';
    icon: 'briefcase';
  };
  attributes: {
    company: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    desc: Schema.Attribute.Component<
      'page-section-items.job-description',
      true
    >;
    position: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionItemsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_page_section_items_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface PageSectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'heading.heading', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionsDev extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_devs';
  info: {
    description: '';
    displayName: 'Developments';
    icon: 'briefcase';
  };
  attributes: {
    developments: Schema.Attribute.Relation<
      'oneToMany',
      'api::development.development'
    >;
    Heading: Schema.Attribute.Component<'heading.heading', false>;
    show_all: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PageSectionsHeroHome extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hero_homes';
  info: {
    description: '';
    displayName: 'HeroHome';
    icon: 'gate';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Header1: Schema.Attribute.String;
    Header3: Schema.Attribute.String;
    Header4: Schema.Attribute.String;
    LinkText: Schema.Attribute.String;
    LinkUrl: Schema.Attribute.String;
    ProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PageSectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_items_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
    icon: 'cube';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<'images'>;
    Heading: Schema.Attribute.Component<'heading.heading', false> &
      Schema.Attribute.Required;
    HeroActions: Schema.Attribute.Component<'button.buttons', true>;
    SubTitle: Schema.Attribute.Component<'heading.heading', false>;
  };
}

export interface PageSectionsJobs extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_jobs';
  info: {
    description: '';
    displayName: 'Jobs';
    icon: 'stack';
  };
  attributes: {
    Job: Schema.Attribute.Component<'page-section-items.job-item', true>;
    LinkText: Schema.Attribute.String;
    ShowLink: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface PageSectionsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'dashboard';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface PageSectionsResour extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_resours';
  info: {
    description: '';
    displayName: 'Resources';
    icon: 'cog';
  };
  attributes: {
    HeadingType: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    >;
    resources: Schema.Attribute.Relation<'oneToMany', 'api::resource.resource'>;
    Title: Schema.Attribute.String;
  };
}

export interface PageSectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services';
  info: {
    displayName: 'Services';
    icon: 'cloud';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Service: Schema.Attribute.Component<
      'page-section-items.service-item',
      true
    >;
  };
}

export interface PageSectionsSimpleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_simpl_p_simple_paragraphs';
  info: {
    description: '';
    displayName: 'Simple Paragraph';
    icon: 'feather';
  };
  attributes: {
    Content: Schema.Attribute.RichText & Schema.Attribute.Required;
    DivideInParagraphs: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    IsParagraphSecondary: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface PageSectionsTesti extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_testis';
  info: {
    displayName: 'Testi';
    icon: 'write';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 210;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.buttons': ButtonButtons;
      'footer.footer-link': FooterFooterLink;
      'footer.spacer': FooterSpacer;
      'header.drop-down-items': HeaderDropDownItems;
      'header.link-item': HeaderLinkItem;
      'heading.heading': HeadingHeading;
      'page-section-items.job-description': PageSectionItemsJobDescription;
      'page-section-items.job-item': PageSectionItemsJobItem;
      'page-section-items.service-item': PageSectionItemsServiceItem;
      'page-sections.contact': PageSectionsContact;
      'page-sections.dev': PageSectionsDev;
      'page-sections.hero-home': PageSectionsHeroHome;
      'page-sections.hero-section': PageSectionsHeroSection;
      'page-sections.jobs': PageSectionsJobs;
      'page-sections.paragraph': PageSectionsParagraph;
      'page-sections.resour': PageSectionsResour;
      'page-sections.services': PageSectionsServices;
      'page-sections.simple-paragraph': PageSectionsSimpleParagraph;
      'page-sections.testi': PageSectionsTesti;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
