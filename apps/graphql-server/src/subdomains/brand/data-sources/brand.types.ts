export interface BrandDocument {
  id: string;
  name: string;
}

export interface BrandDocumentIndex {
  [key: string]: BrandDocument;
}
