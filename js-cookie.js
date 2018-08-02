/**
     *
     * @author XingZengZhi
     * @date 2018/6/21 11:34
     * @param
     * @return
     */
    function getValueForCookie(cookieName){
        var cookies = document.cookie,
            cookieValue = "",
            cookieArray = cookies.split(";");
        for(var i = 0, len = cookieArray.length;i < len;i++){
            var cookieItem = cookieArray[i].split("=");
            if(cookieName === cookieItem[0].trim()){
                cookieValue =  cookieItem[1];
            }
        }
        return cookieValue;
    }

/**
     *    url参数获取
     *
     * @author XingZengZhi
     * @date 2018/7/10 12:37
     * @param
     * @return
     */
    function getValueUrlSearch(propName){
        var searchs = location.search.substring(1, location.search.length),
            andArray = searchs.split('&'),
            equalArray = null;
        for(var i = 0, len = andArray.length;i < len;i++){
            var v = andArray[i].split('=');
            if(propName == v[0]){
                return v[1];
            }
        }
        return '';
    }
