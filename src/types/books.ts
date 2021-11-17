export type Data = {
  kind: string;
  totalItems: number;
  items: Item[];
};

export type Item = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
};

type VolumeInfo = {
  title: string;
  publisherdDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
};

type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

type PanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
};

type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
  };
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

type SearchInfo = {
  textSnippet: string;
};
