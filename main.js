function placeOrder(order, callback) {
    console.log(`Placing order`);
    setTimeout(() => {
      console.log(`Order has been placed.`);
      callback(order);
    }, 3000);
  }

  function prepareOrder(order, callback) {
    console.log(`Preparing The order`);
    setTimeout(() => {
      console.log(`Your order is ready.`);
      callback(order);
    }, 3000);
  }
  
  function packageOrder(order, callback) {
    console.log(`Packaging`);
    setTimeout(() => {
      console.log(`your order has been packaged.`);
      callback(order);
    }, 4000);
  }
  
  function deliverOrder(order, callback) {
    console.log(`Delivering the order`);
    setTimeout(() => {
      console.log(`your order has been delivered.`);
      callback();
    }, 5000);
  }
    function processOrder(order) {
    placeOrder(order, (order) => {
      prepareOrder(order, (order) => {
        packageOrder(order, (order) => {
          deliverOrder(order, () => {
            console.log("Order process completed successfully.");
          });
        });
      });
    });
  }
    processOrder("");
  