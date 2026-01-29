export default function Btn({onClick, content, btnClass, btnMargin,}) {
  return (
    <div className={`btn ${btnMargin} ${btnClass}`} onClick={onClick}>
      {content}
    </div>
  );
}
