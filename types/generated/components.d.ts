import type { Attribute, Schema } from '@strapi/strapi';

export interface ButtonButtons extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'bold';
  };
  attributes: {
    Link: Attribute.String;
    Primary: Attribute.Boolean;
    Text: Attribute.String;
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
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
  };
}

export interface HeaderLinkItem extends Schema.Component {
  collectionName: 'components_header_link_items';
  info: {
    description: '';
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    DropDownItems: Attribute.Component<'header.drop-down-items', true>;
    IsDropDown: Attribute.Boolean & Attribute.DefaultTo<false>;
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
  };
}

export interface HeadingHeading extends Schema.Component {
  collectionName: 'components_heading_headings';
  info: {
    description: '';
    displayName: 'Heading';
    icon: 'filter';
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
    description: '';
    displayName: 'JobItem';
    icon: 'briefcase';
  };
  attributes: {
    company: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    date: Attribute.String & Attribute.Required;
    desc: Attribute.Component<'page-section-items.job-description', true>;
    position: Attribute.String & Attribute.Required;
  };
}

export interface PageSectionItemsServiceItem extends Schema.Component {
  collectionName: 'components_page_section_items_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
    icon: 'cube';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.RichText;
    title: Attribute.String;
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
    description: '';
    displayName: 'Developments';
    icon: 'briefcase';
  };
  attributes: {
    developments: Attribute.Relation<
      'page-sections.dev',
      'oneToMany',
      'api::development.development'
    >;
    Heading: Attribute.Component<'heading.heading'>;
    show_all: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PageSectionsHeroHome extends Schema.Component {
  collectionName: 'components_page_sections_hero_homes';
  info: {
    description: '';
    displayName: 'HeroHome';
    icon: 'gate';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Header1: Attribute.String;
    Header3: Attribute.String;
    Header4: Attribute.String;
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    ProfileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionsHeroSection extends Schema.Component {
  collectionName: 'components_hero_items_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
    icon: 'cube';
  };
  attributes: {
    BackgroundImage: Attribute.Media<'images'>;
    Heading: Attribute.Component<'heading.heading'> & Attribute.Required;
    HeroActions: Attribute.Component<'button.buttons', true>;
    SubTitle: Attribute.Component<'heading.heading'>;
  };
}

export interface PageSectionsJobs extends Schema.Component {
  collectionName: 'components_page_sections_jobs';
  info: {
    description: '';
    displayName: 'Jobs';
    icon: 'stack';
  };
  attributes: {
    Job: Attribute.Component<'page-section-items.job-item', true>;
    LinkText: Attribute.String;
    ShowLink: Attribute.Boolean;
    Title: Attribute.String;
  };
}

export interface PageSectionsParagraph extends Schema.Component {
  collectionName: 'components_page_sections_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'dashboard';
  };
  attributes: {
    Content: Attribute.RichText;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Title: Attribute.String;
  };
}

export interface PageSectionsResour extends Schema.Component {
  collectionName: 'components_page_sections_resours';
  info: {
    description: '';
    displayName: 'Resources';
    icon: 'cog';
  };
  attributes: {
    HeadingType: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    resources: Attribute.Relation<
      'page-sections.resour',
      'oneToMany',
      'api::resource.resource'
    >;
    Title: Attribute.String;
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
    description: '';
    displayName: 'Simple Paragraph';
    icon: 'feather';
  };
  attributes: {
    Content: Attribute.RichText & Attribute.Required;
    DivideInParagraphs: Attribute.Boolean & Attribute.DefaultTo<true>;
    IsParagraphSecondary: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 210;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
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
