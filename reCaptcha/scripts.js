console.log("sanity check")
siteKey = '6LfogqcUAAAAAHKUyWLoXEJX5RWyeW-7dUaMLKup'
grecaptcha.ready(()=>{
    grecaptcha.execute(siteKey, {action: 'homepage'}).then((token)=>{
       let reCaptchaResponse = document.getElementById("reCaptchaResponse");
       console.log(reCaptchaResponse)
       reCaptchaResponse.value = token;
    });
});