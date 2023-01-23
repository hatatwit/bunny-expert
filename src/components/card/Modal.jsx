export default function Modal({ content, open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {content}
      </div>
    </div>
  );
}
