import data from "../data/transport.js";
const main = document.getElementById("main");

const createElement = (type, src, fpk, capacity) => {
  const div = document.createElement("div");
  div.className = "card w-96 mx-auto shadow-xl image-full";
  div.innerHTML = `
        <figure>
          <img src=${src} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold">${type}!</h2>  
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="text-lg font-medium flex justify-between">
          
            <span>Fare Per Kilo : ${fpk}</span><span>Capacity: ${capacity}</span>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary text-white">Lets Go</button>
          </div>
        </div>
  `;
  main.appendChild(div);
};
data.map((e) => {
  createElement(e.type, e.src, e.fpk, e.capacity);
});
