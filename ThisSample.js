/*
 * アロー関数でのthisの実験
 */

// グローバルスコープで'message'を定義
var message = 'origin'

/* 従来の関数 */
function show() {
  // コンテキスト上(=呼び出し元)を'this'として参照する
  console.log(this.message);
}

/* アロー関数 */
let showWithArrow = () => {
  //定義時点での'this'をキャプチャする
  console.log(this.message);
}

var test1 = {
  message: 'test1',
  show: show
}

var test2 = {
  message: 'test2',
  show: showWithArrow
}

test1.show() // →test1
test2.show() // →origin