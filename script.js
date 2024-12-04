function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

function search(){

if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}



async function getResponce1() {
    let response = await fetch("JS.json");
    let content = await response.text();
    content = JSON.parse(content);

    let content_title = content.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    let content_filter = []; // Объявляем переменную
    let word = document.getElementById('search') ? document.getElementById('search').value.toLowerCase() : "";

    content_filter = content_title.filter((product) => {
        return (
            product.title.toLowerCase().includes(word) ||
            product.description.toLowerCase().includes(word) ||
            product.price.toString().includes(word)
        );
    });

    console.log(content_filter); // Для проверки результата фильтрации
}

    //let word=document.getElementById('search').value.toLowerCase();
   //let word = 'search'.toLowerCase();
    content_filter= content_price.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.description.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    //node_for_insert.innerHTML='';
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text" >!!Заказать!! <input class="w-25" type="text" value="0" name="check"></p>
                </li>
                        `
            }

async function getResponce() {
    let response = await fetch("JS.json");
    let content = await response.text();
    content = JSON.parse(content);

    // Сортируем массив content по цене
    let content_price = content.sort((a, b) => a.price - b.price);

    // Фильтруем content_price
    let content_filter = [];
    let word = document.getElementById('search') ? document.getElementById('search').value.toLowerCase() : "";

    content_filter = content_price.filter((product) => {
        return (
            product.title.toLowerCase().includes(word) ||
            product.description.toLowerCase().includes(word) ||
            product.price.toString().includes(word)
        );
    });

    console.log(content_filter);

    // Вставляем данные в DOM
    let node_for_insert = document.getElementById("node_for_insert");
    node_for_insert.innerHTML = ""; // Очищаем список перед добавлением
    for (let key in content_filter) {
        node_for_insert.innerHTML += `
            <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена ${content_filter[key].price} р.</p>
                <input type="hidden" name="vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text">Заказать <input class="w-25" type="text" value="0" name="check"></p>
            </li>
        `;
    }
}


sort()