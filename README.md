# project-template-vue@3

这是一个 Vue 3 的模板工程项目。在 Vite 版本的 Vue 3 Cli 基础上做了扩展。变动如下：

- 调整 ESlint。引入[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)插件；增加规则定义；
- 引入 stylelint。`package.json`增加 stylelint 执行命令；
- 增加`.vscode`配置文件。实现保存时自动执行 ESlint 规则来格式化代码；
- 在`env.d.ts`文件中增加`*.vue`文件的声明，解决 ts 无法识别`*.vue`文件产生警告提示问题；
- 改用 yarn 包管理工具；
- 删除`"format": "prettier --write src/"`代码格式化脚本命名，改用 ESlint 脚本格式化代码：`yarn lint:fix`。
- 调整`.prettierrc.json`内的配置；
- 调整单元测试文件目录路径，迁移至`src/tests/`；
- 引入 tailwind 插件；

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
