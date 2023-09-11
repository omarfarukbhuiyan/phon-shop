const phoneLoad = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  phoneDisplay(phone);
};

const phoneDisplay = (phone) => {
  // console.log(phone)

  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.textContent = " ";
  const showAll = document.getElementById('showAllButton')
  if(phone.length > 12 ){
    showAll.classList.remove('hidden')
  }
  else{
    showAll.classList.add('hidden')
  }

  // phone = phone.slice(0,12);
  
  phone.forEach((phone) => {
    console.log(phone);

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
  </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
};

const handlerSearch = () =>{
  const searchInput = document.getElementById ('searchInput');
  const searchText = searchInput.value;
  console.log(searchText)
  phoneLoad(searchText)
}

// phoneLoad();
