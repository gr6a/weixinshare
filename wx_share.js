wx.config({
        debug: false,
        appId: signPackage.appId,
        timestamp: parseInt(signPackage.timestamp),
        nonceStr: signPackage.nonceStr,
        signature: signPackage.signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: wxData.title,
            link: wxData.link,
            imgUrl: wxData.imgUrl,
            success: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: wxData.title,
            desc: wxData.desc,
            link: wxData.link,
            imgUrl: wxData.imgUrl,
            type: 'link',
            dataUrl: '',
            success: function () {
            }
        });
    });