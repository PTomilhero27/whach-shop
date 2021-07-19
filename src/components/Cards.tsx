

import { useState } from 'react';
import styles from '../Styles/Cards.module.scss';

type CardsProps = {
  Photo?: string,
  Photo2?: string,
  Name?: string,
  Price?: string,
  Parcela?: string,
  Alt?: string
}

export function Card({ Photo, Photo2, Price, Name, Parcela, Alt }: CardsProps) {

  const [comprar, setComprar] = useState(false);

  function ShowButtonComprar() {
    setComprar(true)
  }

  return (

    <div className={styles.card}>

      <div className={styles.photos}>
        <img src={Photo} alt={Alt} className={styles.photo1} />
        <img src={Photo2} alt={Alt} className={styles.photo2} />
      </div>


      <strong >
        {Name}
      </strong>



      {
        comprar === false ?
          <button onClick={ShowButtonComprar}><p>consultar</p></button>
          :
          <div>
            <span >{Price}</span>
            <p >10x de R$ {Parcela} sem juros </p>

            <button><p>comprar</p></button>
          </div>
      }

    </div>


  );
}


