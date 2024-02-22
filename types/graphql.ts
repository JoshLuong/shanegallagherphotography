/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
  projectGalleryCollection?: Maybe<ProjectGalleryCollection>;
  projectsCollection?: Maybe<ProjectsCollection>;
  subsectionPreviewCollection?: Maybe<SubsectionPreviewCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSubsectionPreviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type Colour = Entry & {
  __typename?: 'Colour';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ColourLinkingCollections>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  sys: Sys;
  tertiary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type ColourLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type ColourPrimaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type ColourSecondaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type ColourTertiaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Set colour scheme. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/colour) */
export type ColourTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ColourCollection = {
  __typename?: 'ColourCollection';
  items: Array<Maybe<Colour>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ColourFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColourFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColourFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  primary?: InputMaybe<Scalars['String']>;
  primary_contains?: InputMaybe<Scalars['String']>;
  primary_exists?: InputMaybe<Scalars['Boolean']>;
  primary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primary_not?: InputMaybe<Scalars['String']>;
  primary_not_contains?: InputMaybe<Scalars['String']>;
  primary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondary?: InputMaybe<Scalars['String']>;
  secondary_contains?: InputMaybe<Scalars['String']>;
  secondary_exists?: InputMaybe<Scalars['Boolean']>;
  secondary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondary_not?: InputMaybe<Scalars['String']>;
  secondary_not_contains?: InputMaybe<Scalars['String']>;
  secondary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tertiary?: InputMaybe<Scalars['String']>;
  tertiary_contains?: InputMaybe<Scalars['String']>;
  tertiary_exists?: InputMaybe<Scalars['Boolean']>;
  tertiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tertiary_not?: InputMaybe<Scalars['String']>;
  tertiary_not_contains?: InputMaybe<Scalars['String']>;
  tertiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ColourLinkingCollections = {
  __typename?: 'ColourLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  subsectionCollection?: Maybe<SubsectionCollection>;
};


export type ColourLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ColourLinkingCollectionsSubsectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ColourLinkingCollectionsSubsectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ColourLinkingCollectionsSubsectionCollectionOrder {
  PrimaryColorAsc = 'primaryColor_ASC',
  PrimaryColorDesc = 'primaryColor_DESC',
  SecondaryColorAsc = 'secondaryColor_ASC',
  SecondaryColorDesc = 'secondaryColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryColorAsc = 'tertiaryColor_ASC',
  TertiaryColorDesc = 'tertiaryColor_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum ColourOrder {
  PrimaryAsc = 'primary_ASC',
  PrimaryDesc = 'primary_DESC',
  SecondaryAsc = 'secondary_ASC',
  SecondaryDesc = 'secondary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryAsc = 'tertiary_ASC',
  TertiaryDesc = 'tertiary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This defines the image behaviour (E.g. transition from 100% to 50% on the right side) in the Project page's gallery. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/galleryImageBehaviour) */
export type GalleryImageBehaviour = Entry & {
  __typename?: 'GalleryImageBehaviour';
  behaviour?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  index?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<GalleryImageBehaviourLinkingCollections>;
  sys: Sys;
};


/** This defines the image behaviour (E.g. transition from 100% to 50% on the right side) in the Project page's gallery. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/galleryImageBehaviour) */
export type GalleryImageBehaviourBehaviourArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This defines the image behaviour (E.g. transition from 100% to 50% on the right side) in the Project page's gallery. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/galleryImageBehaviour) */
export type GalleryImageBehaviourIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This defines the image behaviour (E.g. transition from 100% to 50% on the right side) in the Project page's gallery. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/galleryImageBehaviour) */
export type GalleryImageBehaviourLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GalleryImageBehaviourCollection = {
  __typename?: 'GalleryImageBehaviourCollection';
  items: Array<Maybe<GalleryImageBehaviour>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GalleryImageBehaviourFilter = {
  AND?: InputMaybe<Array<InputMaybe<GalleryImageBehaviourFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GalleryImageBehaviourFilter>>>;
  behaviour?: InputMaybe<Scalars['String']>;
  behaviour_contains?: InputMaybe<Scalars['String']>;
  behaviour_exists?: InputMaybe<Scalars['Boolean']>;
  behaviour_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  behaviour_not?: InputMaybe<Scalars['String']>;
  behaviour_not_contains?: InputMaybe<Scalars['String']>;
  behaviour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  index?: InputMaybe<Scalars['Int']>;
  index_exists?: InputMaybe<Scalars['Boolean']>;
  index_gt?: InputMaybe<Scalars['Int']>;
  index_gte?: InputMaybe<Scalars['Int']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  index_lt?: InputMaybe<Scalars['Int']>;
  index_lte?: InputMaybe<Scalars['Int']>;
  index_not?: InputMaybe<Scalars['Int']>;
  index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GalleryImageBehaviourLinkingCollections = {
  __typename?: 'GalleryImageBehaviourLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GalleryImageBehaviourLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GalleryImageBehaviourOrder {
  BehaviourAsc = 'behaviour_ASC',
  BehaviourDesc = 'behaviour_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** The type of preview you want to display (I.e. alignLeft, Image full-size, etc) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/previewContentType) */
export type PreviewContentType = Entry & {
  __typename?: 'PreviewContentType';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PreviewContentTypeLinkingCollections>;
  sys: Sys;
  type?: Maybe<Scalars['String']>;
};


/** The type of preview you want to display (I.e. alignLeft, Image full-size, etc) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/previewContentType) */
export type PreviewContentTypeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** The type of preview you want to display (I.e. alignLeft, Image full-size, etc) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/previewContentType) */
export type PreviewContentTypeTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PreviewContentTypeCollection = {
  __typename?: 'PreviewContentTypeCollection';
  items: Array<Maybe<PreviewContentType>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PreviewContentTypeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PreviewContentTypeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PreviewContentTypeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PreviewContentTypeLinkingCollections = {
  __typename?: 'PreviewContentTypeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  subsectionPreviewCollection?: Maybe<SubsectionPreviewCollection>;
};


export type PreviewContentTypeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PreviewContentTypeLinkingCollectionsSubsectionPreviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PreviewContentTypeLinkingCollectionsSubsectionPreviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PreviewContentTypeLinkingCollectionsSubsectionPreviewCollectionOrder {
  SecondaryTextAsc = 'secondaryText_ASC',
  SecondaryTextDesc = 'secondaryText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryTextAsc = 'tertiaryText_ASC',
  TertiaryTextDesc = 'tertiaryText_DESC',
  TitleFontSizeAsc = 'titleFontSize_ASC',
  TitleFontSizeDesc = 'titleFontSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PreviewContentTypeOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** This is the project/ work that holds all the information [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  previewImage?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<SlugUrl>;
};


/** This is the project/ work that holds all the information [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the project/ work that holds all the information [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/project) */
export type ProjectPreviewImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the project/ work that holds all the information [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the project/ work that holds all the information [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/project) */
export type ProjectUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SlugUrlFilter>;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  previewImage_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<CfSlugUrlNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGallery = Entry & {
  __typename?: 'ProjectGallery';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProjectGalleryDescription>;
  galleryCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ProjectGalleryLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<SlugUrl>;
};


/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGalleryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGalleryGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGalleryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGalleryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the gallery for a project (including titles, description, etc.) [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projectGallery) */
export type ProjectGalleryUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SlugUrlFilter>;
};

export type ProjectGalleryCollection = {
  __typename?: 'ProjectGalleryCollection';
  items: Array<Maybe<ProjectGallery>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectGalleryDescription = {
  __typename?: 'ProjectGalleryDescription';
  json: Scalars['JSON'];
  links: ProjectGalleryDescriptionLinks;
};

export type ProjectGalleryDescriptionAssets = {
  __typename?: 'ProjectGalleryDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProjectGalleryDescriptionEntries = {
  __typename?: 'ProjectGalleryDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProjectGalleryDescriptionLinks = {
  __typename?: 'ProjectGalleryDescriptionLinks';
  assets: ProjectGalleryDescriptionAssets;
  entries: ProjectGalleryDescriptionEntries;
  resources: ProjectGalleryDescriptionResources;
};

export type ProjectGalleryDescriptionResources = {
  __typename?: 'ProjectGalleryDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ProjectGalleryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectGalleryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectGalleryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<CfSlugUrlNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectGalleryLinkingCollections = {
  __typename?: 'ProjectGalleryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectGalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectGalleryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type Projects = Entry & {
  __typename?: 'Projects';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProjectsDescription>;
  galleryCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ProjectsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<SlugUrl>;
};


/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type ProjectsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type ProjectsGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type ProjectsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type ProjectsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This houses the unique projects and the galleries associate to each. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/projects) */
export type ProjectsUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SlugUrlFilter>;
};

export type ProjectsCollection = {
  __typename?: 'ProjectsCollection';
  items: Array<Maybe<Projects>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectsDescription = {
  __typename?: 'ProjectsDescription';
  json: Scalars['JSON'];
  links: ProjectsDescriptionLinks;
};

export type ProjectsDescriptionAssets = {
  __typename?: 'ProjectsDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProjectsDescriptionEntries = {
  __typename?: 'ProjectsDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProjectsDescriptionLinks = {
  __typename?: 'ProjectsDescriptionLinks';
  assets: ProjectsDescriptionAssets;
  entries: ProjectsDescriptionEntries;
  resources: ProjectsDescriptionResources;
};

export type ProjectsDescriptionResources = {
  __typename?: 'ProjectsDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ProjectsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<CfSlugUrlNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectsLinkingCollections = {
  __typename?: 'ProjectsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  colour?: Maybe<Colour>;
  colourCollection?: Maybe<ColourCollection>;
  entryCollection?: Maybe<EntryCollection>;
  galleryImageBehaviour?: Maybe<GalleryImageBehaviour>;
  galleryImageBehaviourCollection?: Maybe<GalleryImageBehaviourCollection>;
  previewContentType?: Maybe<PreviewContentType>;
  previewContentTypeCollection?: Maybe<PreviewContentTypeCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  projectGallery?: Maybe<ProjectGallery>;
  projectGalleryCollection?: Maybe<ProjectGalleryCollection>;
  projects?: Maybe<Projects>;
  projectsCollection?: Maybe<ProjectsCollection>;
  slugUrl?: Maybe<SlugUrl>;
  slugUrlCollection?: Maybe<SlugUrlCollection>;
  subsection?: Maybe<Subsection>;
  subsectionCollection?: Maybe<SubsectionCollection>;
  subsectionPreview?: Maybe<SubsectionPreview>;
  subsectionPreviewCollection?: Maybe<SubsectionPreviewCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryColourArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryColourCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ColourOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ColourFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGalleryImageBehaviourArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGalleryImageBehaviourCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GalleryImageBehaviourOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GalleryImageBehaviourFilter>;
};


export type QueryPreviewContentTypeArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPreviewContentTypeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PreviewContentTypeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PreviewContentTypeFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QueryProjectGalleryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectGalleryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectGalleryFilter>;
};


export type QueryProjectsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectsFilter>;
};


export type QuerySlugUrlArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySlugUrlCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SlugUrlOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SlugUrlFilter>;
};


export type QuerySubsectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySubsectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SubsectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubsectionFilter>;
};


export type QuerySubsectionPreviewArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySubsectionPreviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SubsectionPreviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubsectionPreviewFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

/** The slug url for a project. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/slugUrl) */
export type SlugUrl = Entry & {
  __typename?: 'SlugUrl';
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SlugUrlLinkingCollections>;
  sys: Sys;
};


/** The slug url for a project. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/slugUrl) */
export type SlugUrlIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** The slug url for a project. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/slugUrl) */
export type SlugUrlLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SlugUrlCollection = {
  __typename?: 'SlugUrlCollection';
  items: Array<Maybe<SlugUrl>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SlugUrlFilter = {
  AND?: InputMaybe<Array<InputMaybe<SlugUrlFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SlugUrlFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SlugUrlLinkingCollections = {
  __typename?: 'SlugUrlLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
  projectGalleryCollection?: Maybe<ProjectGalleryCollection>;
  projectsCollection?: Maybe<ProjectsCollection>;
  subsectionPreviewCollection?: Maybe<SubsectionPreviewCollection>;
};


export type SlugUrlLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SlugUrlLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SlugUrlLinkingCollectionsProjectCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SlugUrlLinkingCollectionsProjectGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SlugUrlLinkingCollectionsProjectGalleryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SlugUrlLinkingCollectionsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SlugUrlLinkingCollectionsProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SlugUrlLinkingCollectionsSubsectionPreviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SlugUrlLinkingCollectionsSubsectionPreviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SlugUrlLinkingCollectionsProjectCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SlugUrlLinkingCollectionsProjectGalleryCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SlugUrlLinkingCollectionsProjectsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SlugUrlLinkingCollectionsSubsectionPreviewCollectionOrder {
  SecondaryTextAsc = 'secondaryText_ASC',
  SecondaryTextDesc = 'secondaryText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryTextAsc = 'tertiaryText_ASC',
  TertiaryTextDesc = 'tertiaryText_DESC',
  TitleFontSizeAsc = 'titleFontSize_ASC',
  TitleFontSizeDesc = 'titleFontSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SlugUrlOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type Subsection = Entry & {
  __typename?: 'Subsection';
  colourScheme?: Maybe<Colour>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SubsectionLinkingCollections>;
  previewContent?: Maybe<SubsectionPreview>;
  primaryColor?: Maybe<Scalars['String']>;
  secondaryColor?: Maybe<Scalars['String']>;
  sys: Sys;
  tertiaryColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionColourSchemeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ColourFilter>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionPreviewContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SubsectionPreviewFilter>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionPrimaryColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionSecondaryColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionTertiaryColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the subsection showed (column) on the landing page. [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsection) */
export type SubsectionWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SubsectionCollection = {
  __typename?: 'SubsectionCollection';
  items: Array<Maybe<Subsection>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SubsectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SubsectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SubsectionFilter>>>;
  colourScheme?: InputMaybe<CfColourNestedFilter>;
  colourScheme_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  previewContent?: InputMaybe<CfSubsectionPreviewNestedFilter>;
  previewContent_exists?: InputMaybe<Scalars['Boolean']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  primaryColor_contains?: InputMaybe<Scalars['String']>;
  primaryColor_exists?: InputMaybe<Scalars['Boolean']>;
  primaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primaryColor_not?: InputMaybe<Scalars['String']>;
  primaryColor_not_contains?: InputMaybe<Scalars['String']>;
  primaryColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryColor?: InputMaybe<Scalars['String']>;
  secondaryColor_contains?: InputMaybe<Scalars['String']>;
  secondaryColor_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryColor_not?: InputMaybe<Scalars['String']>;
  secondaryColor_not_contains?: InputMaybe<Scalars['String']>;
  secondaryColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tertiaryColor?: InputMaybe<Scalars['String']>;
  tertiaryColor_contains?: InputMaybe<Scalars['String']>;
  tertiaryColor_exists?: InputMaybe<Scalars['Boolean']>;
  tertiaryColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tertiaryColor_not?: InputMaybe<Scalars['String']>;
  tertiaryColor_not_contains?: InputMaybe<Scalars['String']>;
  tertiaryColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SubsectionLinkingCollections = {
  __typename?: 'SubsectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SubsectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SubsectionOrder {
  PrimaryColorAsc = 'primaryColor_ASC',
  PrimaryColorDesc = 'primaryColor_DESC',
  SecondaryColorAsc = 'secondaryColor_ASC',
  SecondaryColorDesc = 'secondaryColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryColorAsc = 'tertiaryColor_ASC',
  TertiaryColorDesc = 'tertiaryColor_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreview = Entry & {
  __typename?: 'SubsectionPreview';
  contentType?: Maybe<PreviewContentType>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SubsectionPreviewLinkingCollections>;
  photo?: Maybe<Asset>;
  previewImagesCollection?: Maybe<AssetCollection>;
  secondaryText?: Maybe<Scalars['String']>;
  sys: Sys;
  tertiaryText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleFontSize?: Maybe<Scalars['String']>;
  url?: Maybe<SlugUrl>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PreviewContentTypeFilter>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewPhotoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewPreviewImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewSecondaryTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewTertiaryTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewTitleFontSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Content for the previews shown in the subsections (upon expand). [See type definition](https://app.contentful.com/spaces/7quy4nqi53yl/content_types/subsectionPreview) */
export type SubsectionPreviewUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SlugUrlFilter>;
};

export type SubsectionPreviewCollection = {
  __typename?: 'SubsectionPreviewCollection';
  items: Array<Maybe<SubsectionPreview>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SubsectionPreviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<SubsectionPreviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SubsectionPreviewFilter>>>;
  contentType?: InputMaybe<CfPreviewContentTypeNestedFilter>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  previewImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryText?: InputMaybe<Scalars['String']>;
  secondaryText_contains?: InputMaybe<Scalars['String']>;
  secondaryText_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryText_not?: InputMaybe<Scalars['String']>;
  secondaryText_not_contains?: InputMaybe<Scalars['String']>;
  secondaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tertiaryText?: InputMaybe<Scalars['String']>;
  tertiaryText_contains?: InputMaybe<Scalars['String']>;
  tertiaryText_exists?: InputMaybe<Scalars['Boolean']>;
  tertiaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tertiaryText_not?: InputMaybe<Scalars['String']>;
  tertiaryText_not_contains?: InputMaybe<Scalars['String']>;
  tertiaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  titleFontSize?: InputMaybe<Scalars['String']>;
  titleFontSize_contains?: InputMaybe<Scalars['String']>;
  titleFontSize_exists?: InputMaybe<Scalars['Boolean']>;
  titleFontSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  titleFontSize_not?: InputMaybe<Scalars['String']>;
  titleFontSize_not_contains?: InputMaybe<Scalars['String']>;
  titleFontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<CfSlugUrlNestedFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SubsectionPreviewLinkingCollections = {
  __typename?: 'SubsectionPreviewLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  subsectionCollection?: Maybe<SubsectionCollection>;
};


export type SubsectionPreviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SubsectionPreviewLinkingCollectionsSubsectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SubsectionPreviewLinkingCollectionsSubsectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SubsectionPreviewLinkingCollectionsSubsectionCollectionOrder {
  PrimaryColorAsc = 'primaryColor_ASC',
  PrimaryColorDesc = 'primaryColor_DESC',
  SecondaryColorAsc = 'secondaryColor_ASC',
  SecondaryColorDesc = 'secondaryColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryColorAsc = 'tertiaryColor_ASC',
  TertiaryColorDesc = 'tertiaryColor_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum SubsectionPreviewOrder {
  SecondaryTextAsc = 'secondaryText_ASC',
  SecondaryTextDesc = 'secondaryText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TertiaryTextAsc = 'tertiaryText_ASC',
  TertiaryTextDesc = 'tertiaryText_DESC',
  TitleFontSizeAsc = 'titleFontSize_ASC',
  TitleFontSizeDesc = 'titleFontSize_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfColourNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfColourNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfColourNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  primary?: InputMaybe<Scalars['String']>;
  primary_contains?: InputMaybe<Scalars['String']>;
  primary_exists?: InputMaybe<Scalars['Boolean']>;
  primary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primary_not?: InputMaybe<Scalars['String']>;
  primary_not_contains?: InputMaybe<Scalars['String']>;
  primary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondary?: InputMaybe<Scalars['String']>;
  secondary_contains?: InputMaybe<Scalars['String']>;
  secondary_exists?: InputMaybe<Scalars['Boolean']>;
  secondary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondary_not?: InputMaybe<Scalars['String']>;
  secondary_not_contains?: InputMaybe<Scalars['String']>;
  secondary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tertiary?: InputMaybe<Scalars['String']>;
  tertiary_contains?: InputMaybe<Scalars['String']>;
  tertiary_exists?: InputMaybe<Scalars['Boolean']>;
  tertiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tertiary_not?: InputMaybe<Scalars['String']>;
  tertiary_not_contains?: InputMaybe<Scalars['String']>;
  tertiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfPreviewContentTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPreviewContentTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPreviewContentTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfSlugUrlNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSlugUrlNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSlugUrlNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSubsectionPreviewNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSubsectionPreviewNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSubsectionPreviewNestedFilter>>>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  previewImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryText?: InputMaybe<Scalars['String']>;
  secondaryText_contains?: InputMaybe<Scalars['String']>;
  secondaryText_exists?: InputMaybe<Scalars['Boolean']>;
  secondaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  secondaryText_not?: InputMaybe<Scalars['String']>;
  secondaryText_not_contains?: InputMaybe<Scalars['String']>;
  secondaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tertiaryText?: InputMaybe<Scalars['String']>;
  tertiaryText_contains?: InputMaybe<Scalars['String']>;
  tertiaryText_exists?: InputMaybe<Scalars['Boolean']>;
  tertiaryText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tertiaryText_not?: InputMaybe<Scalars['String']>;
  tertiaryText_not_contains?: InputMaybe<Scalars['String']>;
  tertiaryText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  titleFontSize?: InputMaybe<Scalars['String']>;
  titleFontSize_contains?: InputMaybe<Scalars['String']>;
  titleFontSize_exists?: InputMaybe<Scalars['Boolean']>;
  titleFontSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  titleFontSize_not?: InputMaybe<Scalars['String']>;
  titleFontSize_not_contains?: InputMaybe<Scalars['String']>;
  titleFontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};
