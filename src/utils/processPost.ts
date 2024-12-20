export function generateFrontmatter(filename: string) {
  // 从文件名生成标题（移除日期和扩展名）
  const title = filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, "") // 移除日期前缀（如果有）
    .replace(/\.md$/, "") // 移除 .md 后缀
    .replace(/-/g, " ") // 将横线替换为空格
    .replace(/\b\w/g, (l) => l.toUpperCase()); // 首字母大写

  return {
    title,
    pubDate: new Date(),
    description: `关于 ${title} 的文章`,
    author: "默认作者",
    image: {
      url: "https://default-image.jpg",
      alt: "默认图片",
    },
    tags: ["blog"],
  };
}
