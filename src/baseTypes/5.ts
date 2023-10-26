/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

enum UserStatus {
 Enable = 'enable',
 Disable = 'disable',
}
 
let union: string | number ;
let literal: UserStatus = UserStatus.Enable;

console.log(literal);

export {};