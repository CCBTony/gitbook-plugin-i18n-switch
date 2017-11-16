const navHtmlRaw = `
<div class="nav-bar top-theme">
  <div class="container clearfix">
    <div class="logo"><a target="_blank" href="https://www.yunpian.com/"></a></div>
    <div class="reg-btn log-out" hidden>
      <a target="_blank" rel="nofollow" class="btn" href="/entry?method=register">
        注册
      </a>
    </div>
    <div class="login-btn log-out" hidden>
      <a target="_blank" rel="nofollow" class="btn" href="/entry">
        登录
      </a>
    </div>
    <div class="reg-btn log-in" hidden>
      <a target="_blank" rel="nofollow" class="btn" href="/admin/exit">
        退出
      </a>
    </div>
    <div class="login-btn log-in" hidden>
      <a target="_blank" rel="nofollow" class="btn" href="/admin/main">
        进入后台
      </a>
    </div>
    <div class="lang-picker">
      <div class="lang-zh_CN"><span onclick="switchI18n()"></span></div>
      <div class="lang-en"><span onclick="switchI18n()"></span></div>
    </div>
    <div class="page-btns">
      <div class="page-btn">
        <div class="btn-wrapper">
          <a target="_blank" href="https://www.yunpian.com/">首页</a>
        </div>
      </div>
      <div class="page-btn">
        <div class="btn-wrapper">
          <a target="_blank">产品</a>
        </div>
        <div class="sub-btn-list">
          <div class="pointer-area">
            <div class="pointer"></div>
          </div>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/product.html">
            国内短信
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/product-international-sms.html">
            国际短信
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/product-voice.html">
            语音验证码
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/product-voice-notification.html">
            语音通知
          </a>
          <a target="_blank" class="sub-btn" rel="nofollow" href="https://www.yunpian.comhttps://simboss.com/www/?come_from=yunpian&utm_source=yp&utm_campaign=1&utm_medium=1" target="_blank">
            物联网卡
          </a>
        </div>
      </div>
      <div class="page-btn">
        <div class="btn-wrapper">
          <a target="_blank">解决方案</a>
        </div>
        <div class="sub-btn-list">
          <div class="pointer-area">
            <div class="pointer"></div>
          </div>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/o2o.html">
            O2O行业
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/eb.html">
            电商行业
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/fi.html">
            金融行业
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/co.html">
            企业服务
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/cr.html">
            创业者
          </a>
          <a target="_blank" class="sub-btn" href="https://www.yunpian.com/resolve/os.html">
            海外客户
          </a>
        </div>
      </div>
      <div class="page-btn">
        <div class="btn-wrapper">
          <a target="_blank" href="https://www.yunpian.com/price.html">价格</a>
        </div>
      </div>
      <div class="page-btn">
        <div class="btn-wrapper">
          <a target="_blank" href="https://www.yunpian.com/api2.0/guide.html">API文档</a>
        </div>
      </div>
    </div>
    <div class="float-clean"></div>
  </div>
</div>
`

const navCss = `
<style>
body {margin-top: 60px}
.nav-bar {
  position: fixed;
  box-shadow: 0 0 20px lightgrey;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
}
.nav-bar .container {
  width: auto;
}
.nav-bar .container > * {
  float: right;
}
.nav-bar .container .logo {
  margin-left: 30px;
  float: left;
  height: 60px;
  line-height: 60px;
  width: 100px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.nav-bar .container .logo a {
  display: block;
  width: 100%;
  height: 100%;
}
.nav-bar .container .page-btns .page-btn {
  position: relative;
  float: left;
  margin-right: 5px;
  color: #00a0ff;
}
.nav-bar .container .page-btns .page-btn .btn-wrapper {
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  width: 70px;
}
.nav-bar .container .page-btns .page-btn .btn-wrapper > a {
  height: 30px;
  line-height: 30px;
  width: 70px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  color: rgb(0, 160, 255);
}
.nav-bar a {
  text-decoration: none;
}
.nav-bar a:hover {
  text-decoration: none;
}
.nav-bar .container .page-btns .page-btn .btn-wrapper > a:hover {
  background-color: rgba(128, 128, 128, 0.1);
  border-radius: 4px;
}
.nav-bar .container .page-btns .page-btn .sub-btn-list {
  position: absolute;
  display: none;
  background-color: #34495e;
  width: 120px;
  padding: 5px 0;
  border-radius: 4px;
  left: -36%;
  top: 70px;
}
.nav-bar .container .page-btns .page-btn .sub-btn-list.en {
  width: 205px;
  left: -96%;
}
.nav-bar .container .page-btns .page-btn .sub-btn-list .pointer-area {
  position: absolute;
  top: -16px;
  padding-top: 10px;
  right: 0;
  width: 100%;
  height: 10px;
  text-align: center;
  line-height: 10px;
}
.nav-bar .container .page-btns .page-btn .sub-btn-list .pointer-area .pointer {
  display: inline-block;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 7px;
  height: 7px;
  background-color: #34495e;
}
.nav-bar .container .page-btns .page-btn .sub-btn-list .sub-btn {
  color: white;
  text-align: center;
  height: 30px;
  line-height: 30px;
  display: block;
}
.nav-bar .container .page-btns .page-btn:hover .sub-btn-list {
  display: block;
}
.nav-bar .container .page-btns .page-btn:hover .sub-btn-list .sub-btn:hover {
  background-color: #2f4254;
}
.nav-bar .container .page-btns .page-btn:hover .btn-wrapper {
  border-bottom: 3px solid #00a0ff;
}
.nav-bar.top-theme {
  background-color: white;
  font-size: 14px;
}
.nav-bar.top-theme .container .logo {
  background-image: url(https://yunpian.com/static/images4/newIndex/logo.blue.png);
}
.nav-bar.top-theme .container .page-btns .page-btn {
  color: white;
}
.nav-bar.top-theme .container .page-btns .page-btn:hover .btn-wrapper {
  border-bottom-color: #00a0ff;
}
.nav-bar.top-theme .container .lang-picker {
  color: lightgrey;
}
.nav-bar.top-theme .container .lang-picker > div > span:hover:before {
  color: #00a0ff;
}
.nav-bar.top-theme .container .lang-picker > div.cur span {
  display: inline-block;
  color: #00a0ff;
  border: 1px solid #00a0ff;
  border-radius: 30px;
  line-height: 20px;
  height: 20px;
  width: 20px;
  text-align: center;
  padding: 5px;
  font-size: 14px;
  box-sizing: content-box;
}
.nav-bar.top-theme .container .lang-picker > div.cur span:hover:before {
  color: inherit;
  cursor: auto;
}
.nav-bar .container .reg-btn,
.nav-bar .container .login-btn {
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
}
.nav-bar .container .reg-btn .btn,
.nav-bar .container .login-btn .btn {
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #00a0ff;
  vertical-align: middle;
  height: 32px;
  line-height: 32px;
  width: 85px;
  text-align: center;
  border-radius: 4px;
}
.nav-bar .container .login-btn {
  margin-right: 10px;
}
.nav-bar .container .login-btn .btn {
  border-color: #0090e6;
}
.nav-bar .container .login-btn .btn:hover {
  border-color: #0090e6;
  background-color: #f8f8f8;
}
.nav-bar .container .reg-btn {
  margin-right: 60px;
}
.nav-bar .container .reg-btn .btn {
  color: white;
  background-color: #00a0ff;
}
.nav-bar .container .reg-btn .btn:hover {
  border-color: #0090e6;
  background-color: #0090e6;
}
.nav-bar .container .lang-picker {
  color: lightgrey;
  line-height: 60px;
  height: 60px;
  margin: 0 10px;
}
.nav-bar .container .lang-picker .lang-zh_TW span:before {
  content: "繁";
}
.nav-bar .container .lang-picker .lang-zh_TW.cur span:after {
  content: "";
  padding: 0;
}
.nav-bar .container .lang-picker .lang-zh_CN span:before {
  content: "简";
}
.nav-bar .container .lang-picker .lang-zh_CN.cur span:after {
  content: "";
  padding: 0;
}
.nav-bar .container .lang-picker .lang-en span:before {
  content: "English";
}
.nav-bar .container .lang-picker .lang-en.cur span:before {
  content: "En";
}
.nav-bar .container .lang-picker > div {
  float: left;
  line-height: 60px;
  height: 60px;
}
.nav-bar .container .lang-picker > div > span {
  font-size: 12px;
  display: inline;
  vertical-align: middle;
}
.nav-bar .container .lang-picker > div > span:hover:before {
  color: #00a0ff;
  cursor: pointer;
}
.nav-bar .container .lang-picker > div > span:after {
  content: "/";
  padding: 0 5px;
}
.nav-bar .container .lang-picker > div.cur {
  float: right;
}
.nav-bar .container .lang-picker > div.cur span {
  display: inline-block;
  color: #00a0ff;
  border: 1px solid #00a0ff;
  border-radius: 30px;
  line-height: 20px;
  height: 20px;
  width: 20px;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}
.nav-bar .container .lang-picker > div.cur span:hover:before {
  color: #00a0ff;
  cursor: auto;
}
.nav-bar .container .lang-picker > div.cur span:after {
  content: "";
  padding: 0;
}
</style>
`
const navJs = `
  <script>
    function switchI18n () {
      var path = location.pathname
      
      if (path.indexOf('/zh_CN/') >= 0) path = path.replace('/zh_CN/', '/en/')
      else path = path.replace('/en/', '/zh_CN/')
      
      location.href = path
    }
    
    var lang = location.href.indexOf('/en/' >= 0) ? 'en' : 'zh_CN'
    document.cookie = name + '=' + lang
    
    window.addEventListener('load', function () {
      $.get('/ecTool/getUser')
        .done(function (ret) {
          try {
            ret = JSON.parse(ret)
          } catch (err) {}
          if (ret.code) $('.log-out').show()
          else $('.log-in').show()
        })
    })
  </script>
`

const translate = {
  '首页': 'Home',
  '产品': 'Products',
  '国内短信': 'Chinese SMS',
  '国际短信': 'International SMS',
  '语音验证码': 'Voice Verification Code',
  '语音通知': 'Voice Notification',
  '物联网卡': 'M2M Sim',
  '解决方案': 'Solution',
  'O2O行业': 'O2O Industry',
  '电商行业': 'E-Commerce',
  '金融行业': 'Financial sector clients',
  '企业服务': 'Enterprise serving companies',
  '创业者': 'Entrepreneurs and startups',
  '海外客户': 'Global companies',
  '价格': 'Price',
  'API文档': 'APIs',
  '退出': 'Exit',
  '进入后台': 'Dashboard',
  '登录': 'Login',
  '注册': 'Sign up'
}

module.exports = function (book, page) {
  const isEN = page.rawPath.includes('/en/')
  let navHtml = navHtmlRaw
  if (isEN) {
    for(let tran of Object.entries(translate)) {
      navHtml = navHtml.replace(tran[0], tran[1])
    }
    navHtml = navHtml.replace(new RegExp('sub-btn-list', 'g'), 'sub-btn-list en')
    navHtml = navHtml.replace('lang-en', 'lang-en cur')
  } else {
    navHtml = navHtml.replace('lang-zh_CN', 'lang-zh_CN cur')
  }
  page.content = page.content + navCss + navHtml + navJs;
  return page;
}
