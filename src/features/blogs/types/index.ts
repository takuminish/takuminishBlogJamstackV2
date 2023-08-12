export type FrontMatter = {
    date: string;
    description: string;
    title: string;
    icon: string;
  };

export type BlogMetaData = {
    id: string;
    frontmatter: FrontMatter;
}