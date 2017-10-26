let carDatabase = JSON.parse(localStorage.getItem("car")) 
const carElement = document.getElementById("car-main")

for (let i = 0; i < car.length; i++) {
    const currentCar = car[i];

carElement.innerHTML += `
        <section class="car--featured">
        <h1 class="car__name">${currentCar.name}</h1>
        
        <div><img class="car__pic" src="${currentCar.pic}"></div>
        
        <div class="car__price">Price- ${currentCar.price}</div>

        <div class="car__year">Year- ${currentCar.year}</div>
        <div class="car__color">Color- ${currentCar.color}</div>
        <div class="car__milage">Milage- ${currentCar.milage}</div>
        <div class="car__engine">Engine Size- ${currentCar.engine}</div>
        <div class="car__description">"${currentCar.description}"</div>
        </section>
        </section>
        `
    } 