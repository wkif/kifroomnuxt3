function isChrome() {
  return navigator.userAgent.includes('Chrome')
}

// 获取浏览器类型
function getBrowserType() {

  // 获取浏览器 userAgent
  const ua = navigator.userAgent

  // 是否为 Opera
  const isOpera = ua.includes('Opera')
  // 返回结果
  if (isOpera) {
    return 'Opera'
  }

  // 是否为 IE
  const isIE = (ua.includes('compatible')) && (ua.includes('MSIE')) && !isOpera
  const isIE11 = (ua.includes('Trident')) && (ua.includes("rv:11.0"))
  // 返回结果
  if (isIE11) {
    return 'IE11'
  } else if (isIE) {
    // 检测是否匹配
    const re = /MSIE (\d+\.\d+);/
    re.test(ua)
    // 获取版本
    const ver = parseFloat(RegExp.$1)
    // 返回结果
    if (ver === 7) {
      return 'IE7'
    } else if (ver === 8) {
      return 'IE8'
    } else if (ver === 9) {
      return 'IE9'
    } else if (ver === 10) {
      return 'IE10'
    } else { return "IE" }
  }

  // 是否为 Edge
  const isEdge = ua.includes("Edge")
  // 返回结果
  if (isEdge) {
    return 'Edge'
  }

  // 是否为 Firefox
  const isFirefox = ua.includes("Firefox")
  // 返回结果
  if (isFirefox) {
    return 'Firefox'
  }

  // 是否为 Safari
  const isSafari = (ua.includes("Safari")) && (!ua.includes("Chrome"))
  // 返回结果
  if (isSafari) {
    return "Safari"
  }

  // 是否为 Chrome
  const isChrome = (ua.includes("Chrome")) && (ua.includes("Safari")) && (!ua.includes("Edge"))
  // 返回结果
  if (isChrome) {
    return 'Chrome'
  }

  // 是否为 UC
  const isUC = ua.includes("UBrowser")
  // 返回结果
  if (isUC) {
    return 'UC'
  }

  // 是否为 QQ
  const isQQ = ua.includes("QQBrowser")
  // 返回结果
  if (isQQ) {
    return 'QQ'
  }

  // 都不是
  return ''
}




export { isChrome, getBrowserType }
