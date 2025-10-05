# 日本包车服务网站

一个支持中文、日文、英文三语言的日本包车和行程定制服务网站，采用现代化设计，完全响应式布局。

## 功能特性

- 🌐 **多语言支持**: 中文、日文、英文三种语言无缝切换
- 📱 **响应式设计**: 完美适配桌面、平板、手机等各种设备
- 🎨 **现代化UI**: 清晰大方的设计风格，融入现代UI元素
- ⚡ **高性能**: 优化的图片加载和CSS/JS压缩
- 🔒 **安全性**: 完整的CSP头部和安全配置
- ♿ **无障碍访问**: 支持键盘导航和屏幕阅读器

## 技术栈

- **HTML5**: 语义化标签，SEO友好
- **CSS3**: 现代CSS特性，CSS变量，Flexbox/Grid布局
- **JavaScript**: 原生ES6+，无依赖框架
- **字体**: Google Fonts (Noto Sans SC/JP, Inter)
- **图标**: Font Awesome 6
- **图片**: Unsplash高质量图片

## 项目结构

```
dongsen_web/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── netlify.toml        # Netlify配置
└── README.md           # 项目说明
```

## 部署到Netlify

### 方法一：通过Git仓库部署（推荐）

1. **推送代码到Git仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Japan chauffeur service website"
   git branch -M main
   git remote add origin https://github.com/yourusername/dongsen_web.git
   git push -u origin main
   ```

2. **连接Netlify**
   - 访问 [Netlify](https://netlify.com)
   - 点击 "New site from Git"
   - 选择你的Git仓库
   - 部署设置会自动检测（无需构建命令）
   - 点击 "Deploy site"

### 方法二：直接拖拽部署

1. 将整个项目文件夹压缩为ZIP文件
2. 访问 [Netlify](https://netlify.com)
3. 将ZIP文件拖拽到部署区域
4. 等待部署完成

## 自定义配置

### 修改联系信息

编辑 `index.html` 中的联系信息：
```html
<p>+81-3-1234-5678</p>
<p>info@japanchauffeur.com</p>
<p data-translate="contact-address">东京都港区六本木1-1-1</p>
```

### 添加新的语言

1. 在 `script.js` 的 `translations` 对象中添加新语言
2. 在HTML中添加对应的语言按钮
3. 更新CSS中的字体配置

### 修改样式

主要样式变量在 `styles.css` 的 `:root` 选择器中定义：
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #f59e0b;
    /* 其他变量... */
}
```

## 性能优化

- ✅ 图片懒加载
- ✅ CSS/JS压缩
- ✅ 静态资源缓存
- ✅ 字体预加载
- ✅ 关键CSS内联

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：
- 邮箱: info@japanchauffeur.com
- 电话: +81-3-1234-5678

---

**注意**: 这是一个演示网站，实际使用时请替换为真实的联系信息和图片。