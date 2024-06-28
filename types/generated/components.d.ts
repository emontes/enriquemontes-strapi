import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButtons extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'bold';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
    Primary: Attribute.Boolean;
  };
}

export interface FooterFooterLink extends Schema.Component {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'link';
  };
  attributes: {
    LinkText: Attribute.String & Attribute.Required;
    LinkUrl: Attribute.String & Attribute.Required;
  };
}

export interface FooterSpacer extends Schema.Component {
  collectionName: 'components_footer_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'filter';
  };
  attributes: {
    Spacing: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface HeaderDropDownItems extends Schema.Component {
  collectionName: 'components_header_drop_down_items';
  info: {
    displayName: 'DropDownItems';
  };
  attributes: {
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HeaderLinkItem extends Schema.Component {
  collectionName: 'components_header_link_items';
  info: {
    displayName: 'Link Item';
    icon: 'link';
    description: '';
  };
  attributes: {
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    IsDropDown: Attribute.Boolean & Attribute.DefaultTo<false>;
    DropDownItems: Attribute.Component<'header.drop-down-items', true>;
  };
}

export interface HeadingHeading extends Schema.Component {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
    icon: 'filter';
    description: '';
  };
  attributes: {
    HeadingText: Attribute.String;
    HeadingType: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h1'>;
  };
}

export interface PageSectionItemsJobDescription extends Schema.Component {
  collectionName: 'components_page_section_items_job_descriptions';
  info: {
    displayName: 'JobDescription';
    icon: 'file';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface PageSectionItemsJobItem extends Schema.Component {
  collectionName: 'components_page_section_items_job_items';
  info: {
    displayName: 'JobItem';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    company: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    position: Attribute.String & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    desc: Attribute.Component<'page-section-items.job-description', true>;
  };
}

export interface PageSectionItemsServiceItem extends Schema.Component {
  collectionName: 'components_page_section_items_service_items';
  info: {
    displayName: 'Service Item';
    icon: 'cube';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface PageSectionsContact extends Schema.Component {
  collectionName: 'components_page_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    Heading: Attribute.Component<'heading.heading'>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionsDev extends Schema.Component {
  collectionName: 'components_page_sections_devs';
  info: {
    displayName: 'Developments';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'heading.heading'>;
    developments: Attribute.Relation<
      'page-sections.dev',
      'oneToMany',
      'api::development.development'
    >;
    show_all: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PageSectionsHeroHome extends Schema.Component {
  collectionName: 'components_page_sections_hero_homes';
  info: {
    displayName: 'HeroHome';
    icon: 'gate';
    description: '';
  };
  attributes: {
    Header1: Attribute.String;
    Header3: Attribute.String;
    Header4: Attribute.String;
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    BackgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ProfileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionsHeroSection extends Schema.Component {
  collectionName: 'components_hero_items_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'cube';
    description: '';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images'>;
    Heading: Attribute.Component<'heading.heading'> & Attribute.Required;
    SubTitle: Attribute.Component<'heading.heading'>;
    HeroActions: Attribute.Component<'button.buttons', true>;
  };
}

export interface PageSectionsJobs extends Schema.Component {
  collectionName: 'components_page_sections_jobs';
  info: {
    displayName: 'Jobs';
    icon: 'stack';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    ShowLink: Attribute.Boolean;
    LinkText: Attribute.String;
    Job: Attribute.Component<'page-section-items.job-item', true>;
  };
}

export interface PageSectionsParagraph extends Schema.Component {
  collectionName: 'components_page_sections_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Content: Attribute.RichText;
  };
}

export interface PageSectionsResour extends Schema.Component {
  collectionName: 'components_page_sections_resours';
  info: {
    displayName: 'Resources';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    HeadingType: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    resources: Attribute.Relation<
      'page-sections.resour',
      'oneToMany',
      'api::resource.resource'
    >;
  };
}

export interface PageSectionsServices extends Schema.Component {
  collectionName: 'components_page_sections_services';
  info: {
    displayName: 'Services';
    icon: 'cloud';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Service: Attribute.Component<'page-section-items.service-item', true>;
  };
}

export interface PageSectionsSimpleParagraph extends Schema.Component {
  collectionName: 'components_simpl_p_simple_paragraphs';
  info: {
    displayName: 'Simple Paragraph';
    icon: 'feather';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText & Attribute.Required;
    IsParagraphSecondary: Attribute.Boolean & Attribute.DefaultTo<false>;
    DivideInParagraphs: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PageSectionsTesti extends Schema.Component {
  collectionName: 'components_page_sections_testis';
  info: {
    displayName: 'Testi';
    icon: 'write';
  };
  attributes: {
    Background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    testimonials: Attribute.Relation<
      'page-sections.testi',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 210;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
