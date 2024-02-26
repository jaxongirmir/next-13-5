"use client"
import {  NextPage } from 'next'
import { ImagesData } from './carImagesData'
import styles from './Car.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Cars: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.cars}>
        {ImagesData.map(data => (
          <div key={data.id} className={styles.car}>
            <h2>{data.title}</h2>
            <Image
              src={data.image}
              width={350}
              height={200}
              alt={data.title}
              onClick={() => router.push(`/cars/${data.id}`)}
            />
            <p>Price: {data.price}$</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cars
