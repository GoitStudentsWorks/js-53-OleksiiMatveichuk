export function createModal1() {
  //e.preventDefault();
  const body = document.body;

  const modalForm = modal1();

  body.insertAdjacentHTML('afterbegin', modalForm);

  const closeModalForm = document.querySelector('.bacground-modal');
  closeModalForm.addEventListener('click', closeModal);
  const close_btn = document.querySelector('.close-modal-btn');
  close_btn.addEventListener('click', closeModal);
}

function modal1() {
  return `
   <div class="bacground-modal">
  <section class="modal-window">
    <div class="container-modal">
      <svg class="close-modal-btn" width="20" height="20">
        <use href="./images/symbol-defs.svg#icon-close"></use>
      </svg>
<div class="modal1-content">
      <div class="img-info">
        <img
          class="img-modal"
          src="../images/remove_img/modal1-img.jpg"
          alt="amg"
          width="295"
        />

        <ul class="img-list">
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal1.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal2.jpg"
              alt="img"
              width="80"
            />
          </li>
          <li>
            <img
              class="img-list-item"
              src="../images/remove_img/modal3.jpg"
              alt="img"
              width="80"
            />
          </li>
        </ul>
      </div>

     <div class="black-widow">
  <div class="black-widow-info">
    <h4 class="black-widow-info-text">Black Widow</h4>
    <p class="black-widow-info-data">July 9, 2021</p>
  </div>
  <p class="black-widow-content">
    A deadly assassin is closing in on Natasha Romanoff. Now Natasha must
    reunite with an unlikely group of spies from her past in order to survive
    and stop a lethal force from being unleashed on the world.
  </p>
  <h4 class="black-widow-list-text">List of comics</h4>

  <ul class="black-widow-list">
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card1.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card2.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
    <li class="black-widow-list-item">
      <div class="black-widow-card">
        <img
          class="img-list-item-card"
          src="../images/remove_img/card3.jpg"
          alt="img"
          width="263"
        />
        <div class="black-widow-card-footer">
          <h4 class="black-widow-card-text">Black Widow (2020)</h4>
          <p class="black-widow-card-description">Kelly Thompson</p>
        </div>
      </div>
    </li>
  </ul>
</div> 

</div>
    </div>
  </section>
</div>
    
    `;
}

function closeModal(e) {
  console.log('e.target ', e.target.classList.value);
  if (
    e.target.classList.value === 'bacground-modal' ||
    e.target.classList.value === 'close-modal-btn'
  ) {
    const modal1 = document.querySelector('.bacground-modal');

    modal1?.remove();
  }
}

// ======================
