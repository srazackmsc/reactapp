const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  //if (!isOpen){ return null;}
  function hideWithDelay() {
    const el = document.getElementById("overlay");
    const popupBody = document.getElementById("popupBody");
    popupBody.classList.remove("popup-open");
    popupBody.classList.add("popup-close");
    setTimeout(() => {
      el.classList.add("hidden");
      onClose();
    }, 100);
  }
  return (
    <div
      id="overlay"
      className={`fixed bottom-0 inset-0 bg-modal-overlay bg-opacity-10 z-50 flex justify-center ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <div
        className="backdrop"
        onClick={(e) => {
          hideWithDelay();
        }}
      ></div>
      <div
        id="popupBody"
        className={`bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 popup-content absolute md:w-2xl ${
          !isOpen ? "popup-close" : "popup-open"
        }`}
      >
        <button
           onClick={(e) => {
          hideWithDelay();
        }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
