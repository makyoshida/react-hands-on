# 1. 環境の構築
react, flux, webpack, babel, expressの設定を行う。

babelはjsx (JavaScript eXtension)を正規のjavascriptに解釈し直すために利用され、webpackはbabelを実行しながらjavascriptを1つのファイル(dist/bandle.js)に集約するために利用している。
expressはデバッグ用のweb-serverを起動するために使用する。

## 1-1. 必要なソフトのインストール
```
npm install --save react react-dom flux immutable
npm install --save-dev babel babel-loader@7 babel-preset-react webpack webpack-cli express
```
babelはバージョンによって使用するloaderやpresetのパッケージ名が変わっているので注意すること
(ここではbabel 6.26.0, babel-loader 7.1.5, babel-preset-react 6.24.1を利用している)。
babel-preset-reactはreact用の構文(主にjsx)を正規のjavascriptに変換するための設定が記載されている。

## 1-2. webpack設定
`webpack.config.js`を作成して、以下の内容を書き込む。
内容は次の通り。
* エントリポイントは`./src/root.js`である
* bundleしたファイルは`./dist/bundle.js`に保存する
* `node_module/`以外の`.js`ファイルを読み込んだ場合にはbabel-preset-reactを有効にしたbabel-loaderを適用する

```
// webpack.config.js
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/root.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react"]
                    }
                }
            }
        ]
    }
}
```

## 1-3. express設定
expressはhtml表示用のサーバとして使用する。

`index.js`を開き以下の内容を記載する。
`dist`ディレクトリ以下を公開するだけの内容である。
```
'use strict';

const express = require("express");
const app = express();

app.use(express.static("dist"));
app.listen(3000, () => {
  console.log("Express runs on port 3000!!");
});
```

## 1-4. package.json設定
`package.json`に以下の内容を追加する。
```
  "scripts": {
      "start": "webpack && node index.js",
      "build": "webpack",
      ...
  }
```

## 1-5. 最小限の構成を作成し、動作試験
`dist/index.html`をエディタで開き、次の内容を書き込む。
```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>react & flux sample</title>
  </head>
  <body>
    <section id="app" />
    <script src="bundle.js"></script>
  </body>
</html>
```

次に`src/root.js`をエディッタで開き、次の内容を書き込む。
```
'use strict';

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<p>Hello World</p>, document.getElementById("app"));
```

最後に次のコマンドを入力する。
```
$ npm start
```
正しく動作すれば"Express runs on port 3000!!"とターミナル上で表示される。
その後、ブラウザで`http://localhost:3000`にアクセスすると"Hello World"と表示される。

