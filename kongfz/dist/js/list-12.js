$(function(){
    $.ajax({
      url:"data/data.json",
      success:function(arr){
        console.log(arr);
        var str=``;
        for(var i=0;i<arr.length;i++){
          str+=`
          <li>
          <a href=""><img src="images/${arr[i].img}" alt=""><div>${arr[i].describe}</div></a>
          <span><a href="">${arr[i].title}</a></span>
          <p>${arr[i].articles}</p>
          <h6><i>￥${arr[i].money}</i>起</h6>
        </li>`
        
        }
        $(".book-list-right").html(str);
      },
      error:function(mag){
        console.log(msg)
      }
    })
  })