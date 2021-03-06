const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.setCustomerMoney = function(value){ this.customerMoney = value};
    let summ = 0;
    this.countTotalPrice = function(order){
      for (let el in order){
         summ = summ + order[el]* this.productDatabase[el];
      }
      return summ;
    }
    this.countChange = function(){
    if (this.customerMoney >= summ){
    return this.customerMoney - summ;}
    else{
     return null
    }
    }
    this.onSuccess = () => console.log(`Спасибо за покупку, ваша сдача ${this.countChange()}!`);
    this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки');
    this.reset = () => this.customerMoney = 0;
}
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем setCustomerMoney для запроса денег покупателя
mango.setCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError   
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0

