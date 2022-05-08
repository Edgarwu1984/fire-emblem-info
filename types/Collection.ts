export interface Collection {
  slug: string;
  frontmatter: {
    title: string;
    releasedAt: string;
    platform: string;
    developer: string;
    publisher: string;
    director: string;
    producer: string;
    composer: string;
    cover_image: string;
    banner_image: string;
    gallery: string[];
  };
}

export type Collections = Collection[];
