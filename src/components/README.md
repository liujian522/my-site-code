# Avatar
<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:40%;" />

## 属性
| 属性名 | 含义               | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ------ |
| url    | 头像图片路径       | String | 是   | 无     |
| size   | 头像尺寸，宽高相等 | Number | 否   | 150    |

# Icon

来自iconfont

<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

| 属性 | 含义     | 类型   | 必填 | 默认值 |
| ---- | -------- | ------ | ---- | ------ |
| type | 图标类型 | String | 是   | 无     |

有效类型：

<img src="http://a1.qpic.cn/psc?/V50cEaJV1Wu9Y74K6j5c1PYma83ftcoX/6tCTPh7N*X6CBkvkDvKlZWbtHVNeYdxGZne77fVYAE5k**WRnLDepUAbOT.oUFPXR3r0RjiZiS.CRls6PiV*tFtarByA9kMMl9cbPFY54*w!/c&ek=1&kp=1&pt=0&bo=qwSdAasEnQEDGTw!&tl=1&vuin=80610347&tm=1639555200&sce=60-2-2&rf=0-0" style="zoom:50%;" />

# Pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |



# Empty

<img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;" />

该组件需要在外层容器中横向垂直居中

## 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |


# ImageLoader

该组件可以实现一个渐进式图片

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                 | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

## 示例

```html
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
```

# SiteAside

<img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;" />

网站侧边栏

宽度和高度撑满外层容器

# Layout

布局样式

<img src="http://m.qpic.cn/psc?/V50cEaJV1Wu9Y74K6j5c1PYma83ftcoX/Sc7wZG8Q0BUeMz.O80ebfMj8Rd.nPU3bVBAHnYDOb6ECipaPNGrTBxHtH.g*8gdSbF0Y44NTvbCcyGlVoFcgON63onH6qePc3EzDp9SoOfA!/b&bo=XQNDA10DQwMDGTw!&rf=viewer_4" style="zoom:50%;" /

插槽三个

| 插槽位置 | 名称：name |                      |
| -------- | ---------- | -------------------- |
| left     | left       | 跟内容等宽自适应     |
| main     | default    | 除去左右自适应内容区 |
| right    | right      | 跟内容等宽自适应     |

