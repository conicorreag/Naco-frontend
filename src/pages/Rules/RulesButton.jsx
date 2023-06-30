import './rules_button.css';

export default function RulesButton({onClick, label}){
  return(
    <div>
      <button class="button_rules" onClick={onClick}>
        {label}
      </button>
    </div>
  )
}