let ip=""

function getClientIpAddr(HttpServletRequest) { 
    // console.log("res.locals:",res.locals) 
    // console.log("response: ",response)
    // console.log("request.getHeader(): ", request.getHeader()) 
    ip = request.getHeader("X-Forwarded-For");  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("Proxy-Client-IP");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("WL-Proxy-Client-IP");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_X_FORWARDED_FOR");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_X_FORWARDED");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_X_CLUSTER_CLIENT_IP");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_CLIENT_IP");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_FORWARDED_FOR");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_FORWARDED");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("HTTP_VIA");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getHeader("REMOTE_ADDR");  
    }  
    if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {  
        ip = request.getRemoteAddr();  
    }  
    console.log(ip)
    return ip;  
}
getClientIpAddr()
console.log(ip)