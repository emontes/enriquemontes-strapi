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
    HeroImage: Attribute.Media<'images', true>;
    Centered: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface PageSectionsSimpleParagraph extends Schema.Component {
  collectionName: 'components_simpl_p_simple_paragraphs';
  info: {
    displayName: 'Simple Paragraph';
    icon: 'feather';
    description: '';
  };
  attributes: {
    Content: Attribute.RichText & Attribute.Required;
    ActionButtons: Attribute.Component<'button.buttons', true>;
    IsParagraphSecondary: Attribute.Boolean & Attribute.DefaultTo<false>;
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
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
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
      'page-sections.hero-home': PageSectionsHeroHome;
      'page-sections.hero-section': PageSectionsHeroSection;
      'page-sections.jobs': PageSectionsJobs;
      'page-sections.simple-paragraph': PageSectionsSimpleParagraph;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
