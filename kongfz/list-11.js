$(function(){
  sc_num();
            sc_msg();
            
    $.ajax({
      url:"data/list.json",
      success:function(arr){
        console.log(arr);
        var str=``;
        for(var i=0;i<arr.length;i++){
          str+=`
          <li>
                    <div class="list-con-img" id="list-con-img">
                      <a href=""><img class="min-img" src="${arr[i].img}" alt=""></a>
                      <div class="big-img-box"><img src="${arr[i].imgbig}" alt=""></div>
                    </div>
                    <div class="list-con-title">
                      <a href="" target="_blank" class="link">${arr[i].title}</a>
                      <span class="list-con-dis">${arr[i].dls}</span>
                    </div>
                    <div class="list-con-edition gray">
                      <br>
                      </div>
                    <div class="list-con-product gray orange5">${arr[i].product}</div>
                    <div class="list-con-press">
                      <div>
                        <a href="">${arr[i].press}</a>
                        <span class="iconfont icon-duihua"></span>
                      </div>
                      <div class="con-press-city gray9">${arr[i].city}</div>
                      <a href=""><span class="iconfont icon-bangzhuzhongxin"></span></a>
                    </div>
                    <div class="list-con-money">
                      <div>￥
                        <span>${arr[i].moneys}</span>
                      </div>
                      <div class="list-con-m">
                        <p class="ship-fee">
                          <span class="gray9">快递：￥${arr[i].m}</span>
                        </p>
                      </div>
                      </div>
                    <div class="list-con-btn">
                        <div class="con-btn-cart">加入购物车</div>
                        <div class="con-btn-collect">收藏</div>
                      </div>
                  </li>`
        
        }
        $(".detail-list-con ul").html(str);
      },
      error:function(mag){
        console.log(msg)
      }
    })
  })