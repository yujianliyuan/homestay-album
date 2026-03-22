# 遇见荔园民宿相册 - 图片整理指南

## 项目结构
```
homestay-album/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── README.md           # 本说明文件
└── images/             # 图片文件夹
    ├── liyuan/         # 遇见荔园公共空间 (9张)
    ├── qiwu/           # 两屋一院，其乐融融 (8张)
    ├── tingyuan/       # 两房一厅，庭院套房 (5张)
    ├── lixiang/        # 荔香山房 (6张)
    ├── muwu/           # 双床，池岸木屋 (6张)
    ├── qigneng/        # 一房一厅，晴耕农舍 (8张)
    └── xipan/          # 大床房，溪畔小院 (6张)
```

## 图片命名规则

请将你的图片按以下命名放入对应文件夹：

### 1. 遇见荔园公共空间 (images/liyuan/)
- 遇见荔园公共空间1_1774171601419.jpg → liyuan1.jpg
- 遇见荔园公共空间2_1774171601419.jpg → liyuan2.jpg
- ... (共9张: liyuan1.jpg ~ liyuan9.jpg)

### 2. 两屋一院，其乐融融 (images/qiwu/)
- 两屋一院，其乐融融1_1774171601419.jpg → qiwu1.jpg
- 两屋一院，其乐融融2_1774171601419.jpg → qiwu2.jpg
- ... (共8张: qiwu1.jpg ~ qiwu8.jpg)

### 3. 两房一厅，庭院套房 (images/tingyuan/)
- 两房一厅，庭院套房1_1774171601419.jpg → tingyuan1.jpg
- 两房一厅，庭院套房2_1774171601419.jpg → tingyuan2.jpg
- ... (共5张: tingyuan1.jpg ~ tingyuan5.jpg)

### 4. 荔香山房 (images/lixiang/)
- 荔香山房1_1774171601419.jpg → lixiang1.jpg
- 荔香山房2_1774171601419.jpg → lixiang2.jpg
- ... (共6张: lixiang1.jpg ~ lixiang6.jpg)

### 5. 双床，池岸木屋 (images/muwu/)
- 双床，池岸木屋1_1774171601419.jpg → muwu1.jpg
- 双床，池岸木屋2_1774171601419.jpg → muwu2.jpg
- ... (共6张: muwu1.jpg ~ muwu6.jpg)

### 6. 一房一厅，晴耕农舍 (images/qigneng/)
- 一房一厅，晴耕农舍1_1774171601419.jpg → qigneng1.jpg
- 一房一厅，晴耕农舍2_1774171601419.jpg → qigneng2.jpg
- ... (共8张: qigneng1.jpg ~ qigneng8.jpg)

### 7. 大床房，溪畔小院 (images/xipan/)
- 大床房，溪畔小院1_1774171601419.jpg → xipan1.jpg
- 大床房，溪畔小院2_1774171601419.jpg → xipan2.jpg
- ... (共6张: xipan1.jpg ~ xipan6.jpg)

## 图片优化建议

为了确保手机端加载流畅，建议：

1. **图片尺寸**：建议宽度不超过 1200px
2. **文件大小**：每张图片控制在 200-500KB 之间
3. **格式**：使用 JPG 格式，质量设置为 80-85%
4. **方向**：确保图片方向正确（横图或竖图）

## 使用在线工具压缩图片

可以使用以下在线工具批量压缩图片：
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

## 快速整理图片命令

如果你把原始图片都放在同一个文件夹里，可以用以下 PowerShell 命令快速重命名和移动：

```powershell
# 进入图片所在目录
cd "你的图片文件夹路径"

# 公共空间
Move-Item "遇见荔园公共空间1*" "c:\Users\Administrator\WorkBuddy\20260322171636\homestay-album\images\liyuan\liyuan1.jpg"
Move-Item "遇见荔园公共空间2*" "c:\Users\Administrator\WorkBuddy\20260322171636\homestay-album\images\liyuan\liyuan2.jpg"
# ... 依次类推
```

## 预览网页

图片整理完成后，双击打开 `index.html` 文件即可在浏览器中预览。

推荐使用手机浏览器访问，或使用浏览器的开发者工具切换到手机模式查看效果。

## 功能说明

1. **首页**：展示所有房型入口，点击进入详情
2. **详情页**：
   - 左右滑动切换图片
   - 点击图片全屏预览
   - 底部指示点显示当前位置
3. **手机优化**：
   - 触控滑动浏览
   - 适配 iPhone X 安全区域
   - 流畅的动画效果

---
如有问题，随时联系我进行调整！
