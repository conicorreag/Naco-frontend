import './buttons.css';

export default function ButtonV({ escudo, id, disabled, handleClick }) {
  return (
    <div>
      <button
        className={`buttonV ${disabled ? 'disabled-button' : ''}`}
        disabled={disabled}
        onClick={() => handleClick(id)}
      >
        <img src={escudo} alt="escudo" className="buttonR-image" />
      </button>
    </div>
  );
}