import { useState } from "react"; // hook o utilidades => guarda variables si esta o no siguiendo 

export function CardFollow({userName, children, initialFollow}) {

  const [isFollow, setIsFollow] = useState(initialFollow)

  const text = isFollow ? 'Siguiendo' : 'Sigueme'
  const buttonClassName = isFollow ? 'follow' : ''
  const userImg = `https://unavatar.io/${userName}`;

  const handClick = () => {
    setIsFollow(!isFollow);
  }
  // retorna componente

  return (
    <article className="card">
      <header className="cardHead">
        <img className="avatarCard" src={userImg} alt="avatar de @nombre" />

        <section className="bodyCard">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </section>
      </header>

      <footer className="footerCard">
        <button className={buttonClassName} onClick={handClick}>
          <span className="btn_follow_text">{text}</span>
          <span className="btn_notFollow">Dejar De Seguir</span>
        </button>
      </footer>
    </article>
  );
}
