---
title: "【備忘録 Gatsby】Error: GraphQL Document Validation failed with 13 errorsError 0: Unknown type 'ImageSharpFixed'."
description: "Gatsbyで画像ファイルをimportしようとして、Error: GraphQL Document Validation failed with 13 errorsError 0: Unknown type 'ImageSharpFixed'.が発生したので備忘録に残します。"
date: "2023-08-14T00:00:00.000Z"
category: 開発
tags: ["Gatsby","開発","備忘録"]
---

Gatsbyでブログサイトを構築中に遭遇したため、状況と対応方法を残します。

# エラー状況


```
$ gatsby develop
ERROR #12100  API.TYPESCRIPT.TYPEGEN

There was an error while trying to generate TS types from your
GraphQL queries:

    Error: GraphQL Document Validation failed with 13 errors;
  Error 0: Unknown type "ImageSharpFixed".
    at GraphQL request:2:37

Error 1: Unknown type "ImageSharpFixed".
    at GraphQL request:2:46

```

# 対応方法
1. gatsby-plugin-sharp,gatsby-transformer-sharpをインストール
2. gatsby-config.tsのpluginにgatsby-plugin-sharp,gatsby-transformer-sharpを記述する
  
# 参考
- [gatsby-transformer-sharp | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/)
- [Gatsbyでブログ作る⑤〜エラー集](https://totolog34.com/924/)
- [gatsbyjs Issue](https://github.com/gatsbyjs/gatsby/issues/15625)