// 去除banner
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = 'ヽ(●-`Д´-)ノ你要走嘛我好伤心！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(Ő∀Ő3)ノ哇喔！欢迎！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
