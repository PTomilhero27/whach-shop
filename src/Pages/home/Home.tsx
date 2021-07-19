import styles from './Home.module.scss';

import LogoImg from '../../assets/Logo.png'
import { Card } from '../../components/Cards';
import { api } from '../../services/api';

import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';



function Home() {

  const [relogios, setRelogios] = useState<[string]>();
  const [loading, setLoading] = useState(true)


  async function relogio() {
    const { data } = await api.get('catalogo')
    setRelogios(data)
    if (!data) {
      return setLoading(true)
    } else {
      return setLoading(false)
    }



  }

  useEffect(() => {
    relogio()

  }, [])


  if (loading) {
    return <Loading />
  }
  return (
    <div id={styles.container}>
      <header>
        <img src={LogoImg} alt="Logo da empresa Shiftinc" />
        <p>⌚</p>
      </header>

      <section>
        {relogios?.map((catalogo: any) => {
          const price = catalogo.items[0].sellers[0].commertialOffer.Price / 10

          return (
            <Card
              key={catalogo.productId}
              Name={catalogo.productName}
              Photo={catalogo.items[0].images[0].imageUrl}
              Photo2={catalogo.items[0].images[0].imageUrl2}
              Alt={catalogo.items[0].images[0].imageText}
              Price={catalogo.items[0].sellers[0].commertialOffer.Price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              Parcela={price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            />
          )
        })}

      </section>

      <Footer />

    </div>
  );
}

export default Home;
