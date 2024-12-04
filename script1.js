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

async function getResponce() {

    let responce = await fetch("JS.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    console.log(content)
    let key
    content_price=content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_price) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content[key].img}>
                <h5 class="card-title">${content[key].title}</h5>
                <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
                <p class="card-text" >Заказать <input class="w-25" type="text" value="0" name="check"></p>
                </li>
                        `
            }

}
async function getResponce1() {
    let responce = await fetch("JS.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 11)
    console.log(content)
    let key


    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_title) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content[key].img}>
                <h5 class="card-title">${content[key].title}</h5>
                <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
                <p class="card-text" >Заказать <input class="w-25" type="checkbox" name="check" value="0" onClick='this.value = this.checked ? 1 : 0'></p>
                </li>
                        `
            }

}

sort()
