hostname = api.weibo.cn, mapi.weibo.com, commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com, *.uve.weibo.com, mp.weixin.qq.com, api.bilibili.com, app.bilibili.com, www.zhihu.com, api.zhihu.com, link.zhihu.com, aweme*.snssdk.com, *.kuwo.cn, *.xiaoxiao*.com, *.amemv.com, p.du.163.com, getuserinfo.321mh.com, getuserinfo-globalapi.zymk.cn, ios.fuliapps.com, vsco.co, api.vnision.com, *.my10api.com, apple.fuliapps.com, newdrugs.dxy.cn, app101.avictown.cc, api.hlo.xyz, api.ijo.xyz, www.luqijianggushi.com, account.wps.cn, u.kanghuayun.com, api1.dobenge.cn, api.mvmtv.com, mitaoapp.yeduapp.com, origin-prod-phoenix.jibjab.com, www.3ivf.com, pay.guoing.com, api.bjxkhc.com, viva.v21xy.com, biz.caiyunapp.com, ap*.intsig.net, mp.bybutter.com, api.vuevideo.net, api.picsart.c*, api.meiease.c*, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.xiangxiangapps.com, trade-acs.m.taobao.com, api.m.jd.com, ios.prod.ftl.netflix.com, api.gamer.com.tw


# 去微博应用内广告 (By yichahucha)
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api.weibo.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 去微信公众号广告 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 知乎去广告 (By onewayticket255)
https://api.zhihu.com/(ad|drama|fringe|commercial|market/popover|search/(top|preset|tab)|.*featured-comment-ad) url reject-200
https://api.zhihu.com/people/ url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20people.js
https://api.zhihu.com/moments/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
https://api.zhihu.com/topstory/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
https://api.zhihu.com/v4/questions url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
https?://link.zhihu.com/\?target= url script-request-header https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20link.js

# 哔哩哔哩动画去广告 (By onewayticket255)
https://app.bilibili.com/x/v2/(splash|search/(defaultword|square)) url reject-200
https://api.bilibili.com/x/v2/dm/ad url reject-200
#https://app.bilibili.com/x/v2/space\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20space.js
https://app.bilibili.com/x/resource/show/tab\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
https://app.bilibili.com/x/v2/feed/index\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
https://app.bilibili.com/x/v2/account/mine\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
https://app.bilibili.com/x/v2/view\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
https://api.bilibili.com/x/v2/reply/main\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20live.js


# 爱美剧Vip (by huihui）(官网：app.meiju2018.com)
^https?:\/\/api.bjxkhc.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js
# 广告
^https?://api.bjxkhc.com/index.php/app/ios/ads/index url reject-dict
^https?://api.bjxkhc.com/index.php/app/ios/ver/index_ios$ url reject
^https?://api.bjxkhc.com/index.php/app/ios/pay/ok$ url reject-dict

# 网易蜗牛读书VIP (By yxiaocai and JO2EY)
^https?://p\.du\.163\.com/readtime/info.json url reject
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

# 看漫画极速版vip (By HoGer)
^https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/kmh.js

# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

# VSCO滤镜VIP
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

# 91短视频
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/91.js

# 香蕉视频VIP
^https?:\/\/.*\.(fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

# WPS (By eHpo)
^https://account.wps.cn/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# 水印精灵 vip (By Alex0510)
^https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/syjl.js


# 彩云天气 Vip
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js

# VUE pro
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

# 动画疯 去广告
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js

# 京东比价
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

# 淘宝比价
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js

# Netflix评分
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
