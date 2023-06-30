import './buttons.css';

export default function ButtonN({ escudo, id, disabled, handleClick }) {
  return (
    <div>
      <button
        className={`buttonN ${disabled ? 'disabled-button' : ''}`}
        disabled={disabled}
        onClick={() => handleClick(id)}
      >
        <img src={escudo} alt="escudo" className="buttonR-image" />
      </button>
    </div>
  );
}