// {
//   // Example 1 - Коллбек функции
//   // Напишите следующие функции:

//   // createProduct(obj, callback) - принимает объект товара без id, а также колбек.
//   // Функция создаёт обьект товара, добавляя ему уникальный идентификатор
//   // в свойство id и вызывает колбек передавая ему созданный обьект.
//   // logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
//   // logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую
//   // стоимость товара в консоль

//   const createProduct = function (obj, callback) {
//     const product = {
//       id: Date.now(),
//       ...obj,
//     };
//     callback(product);
//   };

//   const logProduct = product => console.log(product);

//   const logTotalPrice = product =>
//     console.log(product.price * product.quantity);

//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// }

{
  //    **   Example 2 - Коллбек функции */
  // Добавьте объекту account методы withdraw(amount, onSuccess, onError)
  // и deposit(amount, onSuccess, onError), где первый параметр это сумма операции,
  // а второй и третий - колбеки.
  // Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance,
  // и onSuccess в противном случае.
  // Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT
  // или меньше либо равен нулю, и onSuccess в противном случае.
  // Решение
  // const TRANSACTION_LIMIT = 1000;
  // const account = {
  //   username: 'Jacob',
  //   balance: 400,
  //   withdraw(amount, onSuccess, onError) {
  //     if (amount > TRANSACTION_LIMIT) {
  //       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
  //     } else if (amount > this.balance) {
  //       onError(
  //         `Amount can't exceed account balance of ${this.balance} credits`,
  //       );
  //     } else {
  //       this.balance -= amount;
  //       onSuccess(`Account balance: ${this.balance}`);
  //     }
  //   },
  //   deposit(amount, onSuccess, onError) {},
  // };
  //   account.withdraw(2000, handleSuccess, handleError);
  //   account.withdraw(600, handleSuccess, handleError);
  //   account.withdraw(300, handleSuccess, handleError);
  //   account.deposit(1700, handleSuccess, handleError);
  //   account.deposit(0, handleSuccess, handleError);
  //   account.deposit(-600, handleSuccess, handleError);
  //   account.deposit(600, handleSuccess, handleError);
}
