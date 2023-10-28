# vue-rabbit

项目主要来源于 黑马程序员：Vue3 小兔鲜电商项目实战

## 项目目录介绍

```
│  App.vue
│  list.txt
│  main.js
│
├─apis   	// API接口
│      cart.js      // 购物车
│      category.js  // 分类
│      checkout.js  // 下单结算
│      detail.js    // 商品详情
│      home.js		  // 主页
│      layout.js	  // 布局
│      order.js     // 个人订单
│      pay.js       // 支付
│      user.js		// 用户信息
│
├─assets	// 静态资源
│  └─images
│          200.png
│          center-bg.png
│          load.gif
│          loading.gif
│          login-bg.png
│          logo.png
│          none.png
│          qrcode.jpg
│
├─components	// 公共组件
│  │  index.js	// 将公共组件进行全局注册
│  │
│  ├─ImageView	// 图片查看
│  │      index.vue
│  │
│  └─XtxSku		// sku
│          index.vue
│          power-set.js
│
├─composables	// 组合函数
├─directives	// 全局自定义指令
│      index.js
│
├─router		// 路由
│      index.js
│
├─stores		// 状态管理pinia
│      cart.js		// 购物车
│      category.js	// 分类
│      user.js		// 用户信息
│
├─styles		// 全局样式文件
│  │  common.scss	// 公共样式
│  │  var.scss		// scss变量
│  │
│  └─element	// elementPlus主题色定制
│          index.scss
│
├─utils			// 工具函数
│      http.js 	// 封装axios
│
└─views			// 项目页面
    ├─CartList	// 购物车列表
    │      index.vue
    │
    ├─Category	// 分类
    │  │  index.vue
    │  │
    │  └─composables
    │          useBanner.js
    │          useCategory.js
    ├─Checkout  // 下单结算
    │      index.vue
    │
    ├─Detail	// 商品详情
    │  │  index.vue
    │  │
    │  └─components
    │          DetailHot.vue
    │
    ├─Home		// 主页
    │  │  index.vue
    │  │
    │  └─components
    │          HomeBanner.vue
    │          HomeCategory.vue
    │          HomeGoodsItem.vue
    │          HomeHot.vue
    │          HomeNew.vue
    │          HomePanel.vue
    │          HomeProduct.vue
    │
    ├─Layout	// 项目布局
    │  │  index.vue
    │  │
    │  └─components
    │          HeaderCart.vue
    │          LayoutFixed.vue
    │          LayoutFooter.vue
    │          LayoutHeader.vue
    │          LayoutNav.vue
    │
    ├─Login		// 登录页
    │      index.vue
    ├─Member  // 会员中心
    │  │  index.vue
    │  │
    │  └─components
    │          UserInfo.vue
    │          UserOrder.vue
    │
    ├─Pay     // 支付结算
    │      index.vue
    │      PayCallback.vue
    │
    └─SubCategory	// 二级分类
            index.vue

```

## 项目展示

### 首页

![首页](image.png)

---

### 登录

![登录](image-6.png)

---

### 商品详情页

![商品详情页](image-2.png)

---

### 下单结算页

![下单结算页](image-4.png)

---

### 支付页面

![支付页面](image-5.png)

---

### 会员中心

![会员中心](image-3.png)

---

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
