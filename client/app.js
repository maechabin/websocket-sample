const sock = new WebSocket('ws://localhost:5001');

let data = '';

// 接続
sock.addEventListener('open', e => {
  console.log('Socket 接続成功');
});

// サーバーからデータを受け取る
sock.addEventListener('message', e => {
  console.log(e.data);
  const message = document.querySelector('.message');
  data = data + `${e.data}<br>`;
  message.innerHTML = data;
});

document.addEventListener('DOMContentLoaded', e => {
  // サーバーにデータを送る
  document.querySelector('button').addEventListener('click', e => {
    const name = document.querySelector('.input').value;
    sock.send(name);
  });
});
