/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

  для функції showMessage краще вказати тип void (вона нічого не повертає), для функції customError --  тип never (вона викидає помилку, а не повертає)
*/

function showMessage(message: string): void {
  console.log(message);
  
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
  
}

export {};