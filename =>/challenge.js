// functionをアロー関数に変換
/*
次のコードの関数はfunctionを使っています。functionを使っていることには問題はないのですが、
折角アロー関数を学んだので、アロー関数にリファクタしてください。

アロー関数のルールは以下の通りです。
1.関数卯の中身が一つしか評価がない場合は中括弧とreturnを省略することができます。
2.関数が一つしか引数を持っていない場合、引数を囲むかっこを省略することができます。
*/

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}



// アロー関数はどこでも使っていいわけではない
/*
アロー関数は、定義されているコンテキストのthisをキャプチャして関数内で使えるようにします。
この動きは思わぬ副作用を起こしてしまうことがあります。
下のコードではnameをもったオブジェクトがあります。このオブジェクトにgetNameというキーを増やして
このオブジェクトのnameをthis.nameで取得して返すメソッドとして定義してください。
この時、アロー関数を使ってもいいのか、あるいはfunctionにするべきなのかがポイントです。
*/

const profile = {
  name: '太郎',
  getName: function () {
    return this.name;
  }
};
