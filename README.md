# AITest 微信小程序

一个使用微信原生框架搭建的简单小程序骨架，包含首页（计数器示例）和关于页，可直接用微信开发者工具打开。

## 目录结构

```
AITest/
├── app.js                 # 小程序入口逻辑、全局数据
├── app.json               # 全局配置：页面路由、窗口样式
├── app.wxss               # 全局样式
├── project.config.json    # 微信开发者工具项目配置
├── sitemap.json           # 搜索索引配置
├── pages/
│   ├── index/             # 首页：计数器示例
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── about/             # 关于页
│       ├── about.js
│       ├── about.json
│       ├── about.wxml
│       └── about.wxss
└── README.md
```

## 运行方式

1. 安装并打开 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 选择「导入项目」，目录选择本项目根目录 `AITest`
3. AppID 可先使用「测试号」；正式开发时在 `project.config.json` 中把 `touristappid` 替换成自己的 AppID
4. 点击「编译」即可在模拟器中预览

## 开发约定

- 新增页面时，在 `pages/` 下创建同名目录，并在 `app.json` 的 `pages` 数组中注册路径
- 全局数据放在 `app.js` 的 `globalData` 中，页面通过 `getApp()` 获取
- 页面样式优先复用 `app.wxss` 中的 `.container`、`.card`、`.btn` 等基础类

## Git 工作流

```powershell
git status                # 查看改动
git add .                 # 暂存改动
git commit -m "说明"      # 提交
git push                  # 推送到 GitHub
```

远程仓库：<https://github.com/liyinong666/AITest>
