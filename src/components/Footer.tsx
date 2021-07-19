import '../Styles/Footer.module.scss';



import { FormEvent, useState } from 'react';
import PopUp from './PopUp';

function Footer() {


  const [name, setName] = useState<string>()
  const [email, setEmail] = useState("")
  const [send, setSend] = useState(false)
  const [sendErro, setSendErro] = useState(false)

  function handleForm(e: FormEvent) {
    e.preventDefault();

    if (!name || !email) {
      return setSendErro(true)
    } else {

      return setSend(true)
    }

  }

  function closePopUp() {
    if(sendErro === true) {
      setSendErro(false)
    } if(send === true) {
      setSend(false)
    }
  }


  return (

    <footer>
      <h2>assine nossas newsletter</h2>
      <p>
        Fique por dentro das nossas novidades e receba
        10% de desconto na primeiras compra
      </p>
      <span>*valido somente  para joias e não acumulativo com outras promoções</span>
      <form onSubmit={handleForm} >
        <input
          placeholder="Seu nome"
          type="text"
          aria-label="Seu nome"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          style={{ borderColor: name ? "#0e6b25" : '#000' }}
        />
        <input
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          style={{ borderColor: email ? "#0e6b25" : '#000' }}
        />
        <button
          type="submit"
          style={{ borderColor: name && email ? "#0e6b25" : '#000' }}
        >
          <p>enviar</p>
        </button>
      </form>
      {send === true
        ?
        <PopUp nome={name} email={email} send={!send} button={closePopUp} />
        :
        sendErro === true ? <PopUp nome={name} email={email} send={sendErro} button={closePopUp} />
          : ''
      }

    </footer>

  );
}

export default Footer;
