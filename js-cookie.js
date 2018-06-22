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