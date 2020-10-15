const body = document.body

for(let i = 0 ; i < 3 ; i++){
  const div = document.createElement('div')
  div.innerHTML="로딩중"
  body.appendChild(div)
}

var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                const data =JSON.parse(xhr.responseText)
                body.innerHTML=""
                for(let i = 0 ; i < data.length ; i++){
                  console.log(data[i])
                  const div = document.createElement('div')
                  const img = document.createElement('img')
                  img.src=data[i].bigImg
                  div.appendChild(img)
                  body.appendChild(div)
                }
            } else {
                console.error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', '요청 서버 주소');
    xhr.send();
