const subscribeBtn = document.querySelector('.js-subscribe-btn')
const successModal = document.querySelector('.success-modal')

function showSuccessModal(e) {
    e.preventDefault();
    console.log('test')
    successModal.showModal();
}