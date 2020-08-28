
        var oLists = document.getElementById("user-info-box");
        var oNickName = document.getElementById("nickName");
        var oWerWrap = document.getElementById("ower-wrap");
        var oShopList = document.getElementById("shop-list-Wrap");
        var oLogin = document.getElementById("login-win");
        var loginWrap = document.querySelector(".login-win-Wrap");
        var oShopWrap = document.querySelector("#shopWrap")
        var oWer = document.querySelector(".owerWrap")
        oNickName.onmouseenter=function(){
          loginWrap.style.display="block";
        }
        oLogin.onmouseleave=function(){
          loginWrap.style.display="none";
        }
        oShopList.onmouseenter=function(){
          oShopWrap.style.display="block";
        }
        oShopList.onmouseleave=function(){
          oShopWrap.style.display="none";
        }
        oWerWrap.onmouseenter=function(){
          oWer.style.display="block";
        }
        oWerWrap.onmouseleave=function(){
          oWer.style.display="none";
        }
    