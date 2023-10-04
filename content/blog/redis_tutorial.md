---
title: 【Redis】Redis入門 いろいろ触ってみる
description: Redisをいろいろ触ってみる
date: "2023-10-04T23:00:00.000Z"
category:  Redis
tags: ["Redis"]
---
# 【Redis】Redis入門 いろいろ触ってみる
## Redis 概要
- https://redis.io/docs/about/

## 触ってみる
- docker-compose.yml
```yaml
version: "2"
services:
  redis:
    image: "redis:latest"
    ports:
      - "6379:6379"
    volumes:
      - "./data/redis:/data"
```
- redis-cliからredisを操作する
```
$ docker exec -it tutorial-redis-1 bash
> redis-cli
```
- 【setnx】key valueの追加(ある場合は上書きしない)
```
127.0.0.1:6379> setnx testKey3 test3
(integer) 1
127.0.0.1:6379> get testKey3
"test3"
127.0.0.1:6379> setnx testKey3 okok
(integer) 0
127.0.0.1:6379> get testKey3
"test3"
```

- 【set】key valueの追加(あれば上書きする)
```
127.0.0.1:6379> set testKey2 test2
OK
127.0.0.1:6379> get testKey2
"test2"
127.0.0.1:6379> set testKey2 okok
OK
127.0.0.1:6379> get testKey2
"okok"
```

- 【append】key valueの追加(あればvalueの後ろに追加する)
```
127.0.0.1:6379> append testKey test
(integer) 4
127.0.0.1:6379> append testKey hello
(integer) 9
127.0.0.1:6379> get testKey
"testhello"
```

- 【get】指定したkeyのvalueを取得する
```
i127.0.0.1:6379> get testKey
"test"
```

- 【exists】指定したkeyが存在するか確認する
```
127.0.0.1:6379> exists testKey
(integer) 1 // ある
127.0.0.1:6379> exists hoge
(integer) 0 // ない
```

- 【del】指定したkeyを削除する
```
127.0.0.1:6379> del testKey3
(integer) 1
127.0.0.1:6379> get testKey3
(nil)
```

- 【keys】指定したパターンに合致するkeyをすべて取得する
```
127.0.0.1:6379> keys *
1) "testKey2"
2) "testKey"
```

- 【select】redisの指定のdbに接続する
```
127.0.0.1:6379> config get databases
1) "databases"
2) "16"
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> 
```

- 【flushdb】指定のdbのkey valueのみ削除する
```
127.0.0.1:6379[1]> keys *
1) "key3"
2) "key2"
3) "key1"
127.0.0.1:6379[1]> select 0
OK
127.0.0.1:6379> keys *
1) "testKey2"
2) "testKey"
127.0.0.1:6379> flushdb
OK
127.0.0.1:6379> keys *
(empty array)
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> keys *
1) "key3"
2) "key2"
3) "key1"
```

- 【flushall】redis内のすべてのkey valueを削除する
```
127.0.0.1:6379[1]> keys *
1) "key3"
2) "key2"
3) "key1"
127.0.0.1:6379[1]> select 0
OK
127.0.0.1:6379> set key3 test3
OK
127.0.0.1:6379> set key2 test2
OK
127.0.0.1:6379> keys *
1) "key2"
2) "key3"
127.0.0.1:6379> flushall
OK
127.0.0.1:6379> keys *
(empty array)
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> keys *
(empty array)
```

## 参考
- https://redis.io/commands/

## Repository
- https://github.com/takuminish/redisPractice/tree/main/tutorial