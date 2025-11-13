# 考试加油站 | Cheer-Up Letter

静态网页项目，提供粉色泡泡背景、循环播放的背景音乐以及一个可展开的应援信件。项目经过整理，适合直接部署到 **Vercel**。

## 项目结构

```
├── public/
│   ├── assets/
│   │   └── audio/
│   │       └── bg-music.mp3   # 本地背景音乐
│   ├── index.html              # 页面入口
│   ├── styles.css              # 样式表
│   └── script.js               # 交互逻辑（自动播放 + 开关信件）
└── vercel.json                 # Vercel 部署配置
```

## 本地预览

1. 安装任意静态服务器（任选其一）：
   - `npm install -g serve`
   - 或使用 VS Code 的 *Live Server* 插件
2. 在项目根目录运行：

   ```bash
   serve public
   ```

3. 打开命令行中提示的本地地址即可预览。

## 部署到 Vercel

1. 在 Vercel 创建新项目，选择当前仓库。
2. 在 **Build & Output Settings** 中：
   - Build Command: *(留空)*
   - Output Directory: `public`
3. 保存并部署即可。

> 若想替换背景音乐，只需将新的 mp3 文件覆盖 `public/assets/audio/bg-music.mp3` 并重新部署。


