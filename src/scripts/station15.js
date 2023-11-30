async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const result = await test();
  return result
}

function test() {
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  return new Promise(resolve => {
    setTimeout(() => {
      const fullNames = userList.map(buildFullName);
      resolve(fullNames);
    }, 3000); // 3秒後に解決
  });
}

function buildFullName(data) {
  return {
      ...data,
      full_name: `${data.family_name} ${data.first_name}`
  };
}