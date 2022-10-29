module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [ // 코드 검사할 기본적인 규칙 설정
    // vue
    // 'plugin:vue/vue3-essential', // lv1
    'plugin:vue/vue3-strongly-recommended', // lv2
    // 'plugin:vue/vue3-recommended', // lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: { // 기본적인 코드를 분석할수있는 분석기를 지정
    parser: 'babel-eslint' // es6 이상 문법을 es5이하 도 동작할수있게 변환해줌.
  },
  rules: { // Optional 임.
      "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",  // 일반태그에선는 self-closing 을 하지않아도 된다.
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
      "vue/comment-directive": "off"
    }
  }