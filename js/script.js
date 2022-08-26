import data from "../data/transport.js";
const main = document.getElementById("main");

const createElement = (type, src, fpk, capacity) => {
  const div = document.createElement("div");
  div.className = "card w-96 mx-auto shadow-xl ";
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
          <label for="my-modal-4" class="btn modal-button btn-secondary  text-white">Lets Go</label>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative shadow-none" for="">
              <div class="card w-full bg-base-100 ">
                <figure><img src=${src} alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">
                    ${type}
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end text-secondary">
                    <div class="badge badge-outline hover:text-white hover:bg-secondary ">Capacity: ${capacity}</div> 
                    <div class="badge badge-outline hover:text-white hover:bg-secondary">Fare/km: $${fpk}</div>
                  </div>
                  <div class= 'flex gap-2 mx-auto'> 
                  <input placeholder='Distance' class='distance h-12 placeholder:text-gray-700 tracking-widest font-mono rounded-lg pl-4 outline-none' type='number'/> <input placeholder='Vehicles Numbers' class='vehicles h-12 placeholder:text-gray-700 tracking-widest font-mono rounded-lg pl-4 outline-none' type='number'/>
                  </div>
                  <button class= 'btn btn-secondary text-white'>Submit</button>
                  
                </div>
              </div>
            </label>
          </label>
          </div>
        </div>
  `;
  main.appendChild(div);
};
data.map((e) => {
  createElement(e.type, e.src, e.fpk, e.capacity);
});

/* --------------------------------------------------------------------- */

main.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.addEventListener("click", (e) => {
      console.log("dkfj");
    });
  }
});
