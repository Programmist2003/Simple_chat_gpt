const messageArea = document.getElementById('messageArea');
const messageInput = document.getElementById('messageInput');

// Функция отправления сообщения
function sendMessage(){
    const message = messageInput.value;

    if(message){
        messageArea.innerHTML += `<div><b>Вы:</b> ${message}</div>`;
        //Добавить отправку сообщения на сервер и получение ответа от GPT
        messageInput.value = "";
    }
}
// Функция для отправки сообщения на сервер
function sendMessage() {
    var message = document.getElementById('messageInput').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://yourserverendpoint.com/chat', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Обработка успешного ответа от сервера
            console.log('Сообщение успешно отправлено на сервер');
        } else {
            // Обработка ошибок
            console.error('Произошла ошибка при отправке сообщения на сервер');
        }
    };

    var data = JSON.stringify({ message: message });
    xhr.send(data);
}