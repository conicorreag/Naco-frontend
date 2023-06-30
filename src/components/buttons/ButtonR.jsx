import './buttons.css';

export default function ButtonR({ escudo, id, disabled, handleClick }) {
  return (
    <div>
      <button
        className={`buttonR ${disabled ? 'disabled-button' : ''}`}
        disabled={disabled}
        onClick={() => handleClick(id)}
      >
        <img src={escudo} alt="escudo" className="buttonR-image" />
      </button>
    </div>
  );
}