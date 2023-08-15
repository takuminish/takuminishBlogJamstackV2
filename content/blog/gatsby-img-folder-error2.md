---
title: "【備忘録 Gatsby】 ModuleParseError: Module parse failed: Unexpected character '�' "
description: "Gatsbyで画像ファイルをimportしようとして、Error: GraphQL Document Validation failed with 13 errorsError 0: Unknown type 'ImageSharpFixed'.が発生したので備忘録に残します。"
date: "2023-08-14T00:00:00.000Z"
category: 開発
tags: ["Gatsby","開発","備忘録"]
---

Gatsbyでブログサイトを構築中に遭遇したため、状況と対応方法を残します。

# エラー状況


```
$ gatsby develop
  ModuleParseError: Module parse failed: Unexpected character '�
  ' (1:0)
  You may need an appropriate loader to handle this file type, c
  urrently no loaders are configured to process this file. See h
  ttps://webpack.js.org/concepts#loaders
  (Source code omitted for this binary file)

```

# いつ発生したのか
- gatsby-plugin-react-svgをインストールしており、gatsby-config.tsにて以下のように記述している時、該当のフォルダ(imageフォルダ)にsvgファイル以外(pngなど)があると発生する

```
.
├── image
│   ├── Logo.svg
│   ├── takuminish-portfolio-blog-ogp.png
│   ├── takuminish-portfolio-blogs-ogp.png
│   └── takuminish-portfolio-ogp.png
└── svg
```

```typescript
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /image/ 
        }
      }
    },
```

# 対応方法
- gatsby-plugin-react-svgで指定するフォルダ(svgを保存するディレクトリ)とpngなどの画像ファイルを保存するディレクトリを分けることでエラーが消える。

```typescript
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ 
        }
      }
    },
```

```
NG❌
.
├── image
│   ├── Logo.svg
│   ├── takuminish-portfolio-blog-ogp.png
│   ├── takuminish-portfolio-blogs-ogp.png
│   └── takuminish-portfolio-ogp.png
```

```
OK🙆
.
├── image
│   ├── takuminish-portfolio-blog-ogp.png
│   ├── takuminish-portfolio-blogs-ogp.png
│   └── takuminish-portfolio-ogp.png
└── svg
│   ├── Logo.svg
```
  
# 参考
- [gatsbyjs Issue](https://github.com/gatsbyjs/gatsby/issues/11040)