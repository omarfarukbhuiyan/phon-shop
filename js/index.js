const phoneLoad = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);
  phoneDisplay(phone);
};

const phoneDisplay = (phone) => {
  // console.log(phone)

  const phoneContainer = document.getElementById('phone-container')

  phone.forEach((phone) => {
    console.log(phone);

    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
};

phoneLoad();
