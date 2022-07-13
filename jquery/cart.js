$(function () {
    getData();
  
    $("button.addtoCart_btn").on("click", function () {
      let id = $(this).data("id");
      let name = $(this).data("name");
      let price = $(this).data("price");
  
      let item = {
        id: id,
        name: name,
        price: price,
        qty: 1,
      };
      // console.log(item);
  
      let cartStr = localStorage.getItem("cart");
      if (!cartStr) {
        var itemArr = new Array();
        itemArr.push(item);
      } else {
        itemArr = JSON.parse(cartStr);
        for (let i = 0; i < itemArr.length; i++) {
          if (itemArr[i].name === name) {
            itemArr[i].qty += 1;
            var done = true;
            break;
          }
        }
        if (!done) itemArr.push(item);
      }
  
      localStorage.setItem("cart", JSON.stringify(itemArr));
      getData();
    });
  
    function getData() {
      let cartStr = localStorage.getItem("cart");
      var cartArr = JSON.parse(cartStr);
  
      var data = "";
      if (!cartStr) {
        data = `<p class="empty">Your Cart is Empty!</p>`;
        $("#cart").html(data);
      } else {
        var items = cartArr.map(function (item) {
          return `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${item.price * item.qty}</td>
          </tr>`;
        });
        data += items;
        $("tbody.product_data").html(data);
        var prices = cartArr.map(function (item) {
          return item.price * item.qty;
        });
        data = prices.reduce((sum, current) => {
          return (sum += current);
        }, 0);
      }
      $(".total_cost").html(data);
    }
  });