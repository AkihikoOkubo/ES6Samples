/*
 * Arrayのfilterサンプル
 */

// 従来の書き方
var items = [1, 2, 3]
var result = items.filter( function(v){
  return v > 1
})
console.log(result) // [2, 3]

// アロー関数での書き方
var result2 = items.filter( v => v > 1)
console.log(result2) // [2, 3]