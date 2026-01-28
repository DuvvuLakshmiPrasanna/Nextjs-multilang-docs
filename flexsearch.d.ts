declare module 'flexsearch/dist/module' {
  interface SearchOptions {
    limit?: number;
    enrich?: boolean;
  }

  interface DocumentOptions {
    tokenize?: string;
    resolution?: number;
    language?: string;
    distance?: string;
  }

  class Document {
    constructor(options?: DocumentOptions);
    add(id: number | string, data: Record<string, any>): void;
    search(query: string, options?: SearchOptions): any[];
    remove(id: number | string): void;
  }

  export default Document;
}
