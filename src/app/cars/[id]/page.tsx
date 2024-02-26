import { Metadata, NextPage } from 'next'
import { ImagesData } from '../carImagesData'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Car | next vs react',
  description: 'hello my name is Jaxongir',
}
interface SingleCarPageProps {
  params: {
    id: string
  }
}

const SingleCarPage: NextPage<SingleCarPageProps> = ({ params }) => {
  if (!params || !params.id) {
    return <div>No ID provided</div>
  }

  const { id } = params

  const imageData = ImagesData.find(el => el.id === +id)
  if (!imageData) {
    return <div>No data found for ID: {id}</div>
  }

  return (
    <div>
      <h2>{imageData.title}</h2>
      <Image
        src={imageData.image}
        alt={imageData.title}
        width={350}
        height={230}
      />
      <p>{imageData.price}</p>
    </div>
  )
}

export default SingleCarPage
