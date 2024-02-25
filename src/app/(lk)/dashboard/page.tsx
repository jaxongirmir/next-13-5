const fetchData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      {
        // cache: 'no-store',
        next: { revalidate: 10 },
      }
    )
    if (!response.ok) {
      throw new Error('Fetch failed')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // Rethrow the error to be handled where fetchData is called
  }
}

export default async function DashboardPage() {
  const data = await fetchData()
  return <div>{data.id}</div>
}
