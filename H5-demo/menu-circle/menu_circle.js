/**
 * created by binge on 2016-08-25
 */

$(function() {
    // 菜单是否已布局定位
    var isLocated = false;

    var startDeg = 0;
    var endDeg = 360;

    var navWrap = $('.nav-wrap');
    var navs = $('nav').find('a');

    /**
     * [getAngle 获取当前索引位置角度（弧度）]
     * @param  {[type]} index    [定位元素位置索引]
     * @param  {[type]} length   [定位元素总数]
     * @param  {[type]} startDeg [起始角度位置]
     * @param  {[type]} endDeg   [结束角度位置]
     * @return {[type]}          [返回当前元素角度（弧度）]
     */
    function getAngle(index, length, startDeg, endDeg) {
        var gap = (endDeg + startDeg) / length;
        /* 角度 -> 弧度 Math.PI/180 */
        return startDeg + index * gap * (Math.PI / 180);
    }

    /**
     * [getPosByAngle 根据角度获取元素坐标位置]
     * @param  {[type]} wrapDom [定位圈对象]
     * @param  {[type]} angle   [角度（弧度）]
     * @return {[type]}         [坐标位置对象]
     */
    function getPosByAngle(wrapDom, angle) {
        var radius = wrapDom.width() / 2;
        var x = radius + radius * Math.cos(angle);
        var y = radius + radius * Math.sin(angle);

        return {
            x: x,
            y: y
        }
    }


    navWrap.on('click', '.nav-main', function(e) {
        e.preventDefault();
        // console.log('nav-wrap click');

        if (!navWrap.hasClass('active') && !isLocated) {
            var navLen = navs.length;
            // 遍历布局角度元素
            $.each(navs, function(index, item) {

                var itemAngle = getAngle(index, navLen, startDeg, endDeg);

                var posObj = getPosByAngle(navWrap, itemAngle);

                navs.eq(index).css({
                    "left": posObj.x,
                    "top": posObj.y
                });
            });
            // 已定位，无需再计算位置
            isLocated = true;
        };

        // 样式
        navWrap.toggleClass('active');

    });
});
