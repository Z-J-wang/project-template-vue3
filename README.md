# project-template-vue@3

这是一个Vue 3的模板工程项目。在Vite版本的Vue 3 Cli基础上做了扩展。变动如下：

+ 调整ESlint。引入[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)插件；增加规则定义；
+ 引入stylelint。`package.json`增加stylelint执行命令；
+ 增加`.vscode`配置文件。实现保存时自动执行ESlint规则来格式化代码；
+ 在`env.d.ts`文件中增加`*.vue`文件的声明，解决ts无法识别`*.vue`文件产生警告提示问题；
+ 改用yarn包管理工具；
+ 删除`"format": "prettier --write src/"`代码格式化脚本命名，改用ESlint脚本格式化代码：`yarn lint:fix`。
+ 调整`.prettierrc.json`内的配置；

## Customize configuration

See [Vite Configuration Reference](https://cn.vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
