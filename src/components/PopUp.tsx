
import styles from '../Styles/PopUp.module.scss';


interface PopUpProps {
  nome: string | undefined,
  email: string | undefined,
  send: boolean,
  button: () => void
}
function PopUp({ nome, email, send, button }: PopUpProps,) {


  return (

    <>
      {send === true ?
        <div id={styles.popup} style={{ boxShadow: "0 0  0 3px rgba(255, 0, 0, .8)" }}>
          <header>⌚ <button onClick={button}>❌</button></header>
          <p>
            Não Foi possível enviar o formulário <br />
            Verifica as informações, se estão
            corretas! <br />
            <span><strong>Nome: </strong>{nome}</span>
            <span><strong>E-mail: </strong>{email}</span>

          </p>
        </div>
        :
        <div id={styles.popup} style={{ boxShadow: "0 0  0 3px rgba(0, 255, 13, 0.8)" }}>
          <header>⌚ <button onClick={button}>❌</button></header>
          <p>
            Não Foi possível enviar o formulário <br />
            Verifica as informações, se estão
            corretas! <br />
            <span><strong>Nome: </strong>{nome}</span>
            <span><strong>E-mail: </strong>{email}</span>

          </p>
        </div>
      }

    </>

  );
}

export default PopUp;
