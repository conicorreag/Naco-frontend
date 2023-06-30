import './comp_button.css';

export default function CompButton({onClick, label}){
  return(
    <div>
      <button class="button_comp" onClick={onClick}>
        {label}
      </button>
    </div>
  )
}