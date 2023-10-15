/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
     //在rules中添加自定义规则
     //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    // 要求或禁止函数圆括号之前有一个空格
    "space-before-function-paren": 'always'
  }
}
