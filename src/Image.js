export default function Image({imgUrl,userClass}) {
  return (
    <div 
      xs="auto"
      className={`avatar ${userClass}`} 
      style={{backgroundImage:`url(${imgUrl})`}}
    />
  );
}