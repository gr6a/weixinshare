# 微信分享
signPackage.php 中设置appid appsecret
页面引入js
  <script src=http://res.wx.qq.com/open/js/jweixin-1.2.0.js></script>
  <script>document.write("<script src='weixin/accessToken/signPackage.php?originUrl=" + window.location.href + "' type='text/javascript'><\/script>");</script>
  <script src=weixin/wx_share.js></script>
  <script>
  var wxData = {
    "imgUrl" : "",
    "link"   : "",
    "title"  : '',
    "desc"   : ''
};
</script>
