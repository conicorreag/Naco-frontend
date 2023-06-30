import './buttons.css';

export default function ButtonA({ escudo, id, disabled, handleClick }) {
  return (
    <div>
      <button
        className={`buttonA ${disabled ? 'disabled-button' : ''}`}
        disabled={disabled}
        onClick={() => handleClick(id)}
      >
        <img src={escudo} alt="escudo" className="buttonR-image" />
      </button>
    </div>
  );
}


