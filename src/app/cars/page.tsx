import { NextPage } from 'next'
import { ImagesData } from './carImagesData'
import styles from './Car.module.css'
import Image from 'next/image'

// import styles from './styles.module.css'; // Adjust the import path based on your project structure
// import { ImagesData } from './path/to/ImagesData'; // Adjust the import path

const Cars: NextPage = () => {
  return (
    <>
      <div className={styles.cars}>
        {ImagesData.map(data => (
          <div key={data.id} className={styles.car}>
            <h2>{data.title}</h2>
            <Image src={data.image} width={350} height={200} alt={data.title} />
            <p>Price: {data.price}$</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cars
