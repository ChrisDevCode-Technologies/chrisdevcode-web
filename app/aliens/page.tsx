import Title from '@/components/ui/aliens/Title'
import NotHiring from '@/components/ui/aliens/NotHiring'
import AlienCard from '@/components/ui/aliens/AlienCard'
import developers from '@/data/aliens'

const page = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <Title />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {developers.map((dev) => (
          <AlienCard
            key={dev.name}
            name={dev.name}
            role={dev.role}
            description={dev.bio}
          />
        ))}
        <NotHiring />
      </div>
    </div>
  )
}

export default page
