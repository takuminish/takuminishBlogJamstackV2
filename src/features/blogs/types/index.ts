export type FrontMatter = {
    date: string;
    description: string;
    title: string;
    category: string;
    tags: string[];
  };

export type BlogMetaData = {
    id: string;
    frontmatter: FrontMatter;
}


export type Blog = BlogMetaData & {
    html: string;
}