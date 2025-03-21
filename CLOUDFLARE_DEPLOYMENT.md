# 如何在 Cloudflare Pages 上部署 My Bookshelf 应用

本指南将帮助您将 My Bookshelf 应用部署到 Cloudflare Pages。

## 准备工作

1. 您需要一个 [Cloudflare 账户](https://dash.cloudflare.com/sign-up)
2. 您需要一个 GitHub 账户，用于存储代码
3. 确保您的 Next.js 应用已正确配置为静态导出（已在 `next.config.mjs` 中设置）

## 步骤 1：将项目上传到 GitHub

1. 在 GitHub 上创建一个新的代码仓库
2. 将您的代码推送到该仓库

```bash
# 初始化 git 仓库（如果尚未初始化）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交：My Bookshelf 应用"

# 添加远程仓库
git remote add origin https://github.com/您的用户名/my-bookshelf.git

# 推送代码到 GitHub
git push -u origin main
```

## 步骤 2：在 Cloudflare Pages 上部署

1. 登录到 [Cloudflare 控制面板](https://dash.cloudflare.com/)
2. 在左侧菜单中，点击 **Workers & Pages**
3. 点击 **创建应用程序** > **Pages**
4. 点击 **连接到 Git**
5. 选择您刚刚创建的 GitHub 仓库
6. 点击 **开始设置**
7. 在构建设置部分，选择 **Next.js (Static HTML Export)** 作为框架预设
8. 构建设置将自动填充，如下所示：

   | 配置选项 | 值 |
   |---------|-----|
   | 生产分支 | `main` |
   | 构建命令 | `npm run build` |
   | 构建输出目录 | `out` |

9. 您可以添加环境变量（如果需要）
10. 点击 **保存并部署**

## 步骤 3：等待构建并访问您的站点

构建完成后，Cloudflare Pages 将提供一个 `*.pages.dev` 域名，您可以通过该域名访问您的应用。

## 步骤 4（可选）：添加自定义域名

如果您想使用自己的域名，可以按照以下步骤操作：

1. 在 Cloudflare Pages 项目中，导航到 **Custom domains**（自定义域名）选项卡
2. 点击 **设置自定义域**
3. 输入您的域名，然后点击 **继续**
4. 按照屏幕上的说明更新您的 DNS 设置

## 故障排除

如果您在部署过程中遇到问题，请检查以下几点：

1. 确保 `next.config.mjs` 文件中已设置 `output: 'export'`
2. 确保正确配置了 `images` 部分以使用 `unoptimized: true`
3. 检查构建命令和输出目录是否正确设置

如果构建成功但图像未显示，请检查图像域名是否已在 `next.config.mjs` 文件中正确配置。

## 其他资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
