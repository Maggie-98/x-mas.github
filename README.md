# 圣诞节礼物互换 - X-Mas Gift Exchange 🎄🎁

这是一个简单的圣诞节礼物互换网页应用，旨在帮助用户与朋友们一起交换圣诞礼物。通过该应用，用户可以选择一个名字，并通过系统随机选择一个礼物交换对象。

## 功能概述

该应用包含以下几个主要功能：

1. **选择名字**  
   用户从预设的名字列表中选择一个名字进行礼物交换，确保选择的名字不是自己。

2. **抽选礼物对象**  
   用户点击“开始抽签”按钮，系统会随机从名单中抽取一个名字，决定该用户需要为谁准备礼物。

3. **显示结果**  
   抽选结果会显示在页面上，告知用户他们要为谁准备礼物。

## 项目结构

该项目由以下文件组成：

- `index.html` - 页面内容结构，包含选择名字、抽选礼物、显示结果部分。
- `style.css` - 页面样式文件，定义了页面的视觉效果和布局。
- `script.js` - JavaScript 文件，控制页面的交互和逻辑。

### `index.html`

该文件定义了页面的结构，包括：
- 一个标题（`🎄 圣诞节礼物互换 / X-Mas Gift Exchange 🎁`）
- 一个下拉列表，供用户选择名字。
- 一个按钮，用户点击后系统会随机抽选一个礼物交换对象。
- 一个区域显示抽选的结果。

### `style.css`

该文件定义了页面的样式：
- 页面背景设置为圣诞节的红色，并使用白色字体。
- 按钮和文本的样式美化，提供了悬停效果。

### `script.js`

该文件包含了应用的逻辑：
- 用户选择名字后，点击按钮，系统会随机抽取一个名字。
- 随机抽取的结果会显示在页面上。

## 安装与使用

### 1. 本地使用

1. 下载或克隆该项目的所有文件。
2. 打开 `index.html` 文件，可以直接在浏览器中查看应用。
3. 确保 `style.css` 和 `script.js` 文件与 `index.html` 在同一目录下。

### 2. 部署到 Web 服务器

1. 将整个项目文件夹上传到支持 HTML/CSS/JS 的 Web 服务器上。
2. 通过访问 `index.html` 文件链接即可在浏览器中使用该应用。

## 示例

### 第一步：选择名字

在页面加载时，用户会看到如下的名字选择下拉框：

```html
<select id="nameSelection">
    <option value="Yvonne">Yvonne</option>
    <option value="Maggie">Maggie</option>
    <option value="Jane">Jane</option>
    <option value="Amy">Amy</option>
    <option value="Yi Mei">Yi Mei</option>
    <option value="Pei Pei">Pei Pei</option>
    <option value="Swee Peng">Swee Peng</option>
</select>
