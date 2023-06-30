import './buttons.css';

export default function ButtonM({ escudo, id, disabled, handleClick }) {
  return (
    <div>
      <button
        className={`buttonM ${disabled ? 'disabled-button' : ''}`}
        disabled={disabled}
        onClick={() => handleClick(id)}
      >
        <img src={escudo} alt="escudo" className="buttonR-image" />
      </button>
    </div>
  );
}