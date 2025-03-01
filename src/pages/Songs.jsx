import { useState, useEffect } from 'react'
import { FaSpotify } from 'react-icons/fa'

const key = '4200236921msh6f55cd855578ddap111fd8jsnaa1c18381ea5'

const Tracks = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [limit, setLimit] = useState(10)
  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true)
      try {
        const url = new URL('https://spotify23.p.rapidapi.com/search/')
        url.searchParams.append('q', 'eminem')
        url.searchParams.append('type', 'multi')
        url.searchParams.append('offset', '0')
        url.searchParams.append('limit', limit)
        url.searchParams.append('numberOfTopResults', '5')

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': key,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          },
        })

        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()

        setTracks(data.tracks?.items || []) // Correcting the data source
      } catch (error) {
        console.error('Error fetching tracks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTracks()
  }, [limit])

  if (isLoading) {
    return (
      <div className='py-6'>
        <h1 className='text-4xl text-center font-bold'>Tracks</h1>
        <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 '>
          <div className='flex w-96 flex-col gap-4 m-10 '>
            <div className='skeleton h-32 w-full'></div>
            <div className='skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
          </div>
          <div className='flex w-96 flex-col gap-4 m-10 '>
            <div className='skeleton h-32 w-full'></div>
            <div className='skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
          </div>
          <div className='flex w-96 flex-col gap-4 m-10 '>
            <div className='skeleton h-32 w-full'></div>
            <div className='skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-full  py-6'>
      <h1 className='text-4xl text-center font-bold'>Tracks</h1>
      <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 '>
        {tracks.length === 0 ? (
          <p className='text-center mt-5 text-lg'>No tracks found.</p>
        ) : (
          tracks.map((track, index) => (
            <div key={index} className='mb-8'>
              <hr />
              <div className='hero bg-base-100 py-8 px-4 rounded-lg shadow-lg'>
                <div className='hero-content flex-col  items-center'>
                  {track?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url && (
                    <img
                      src={track.data.albumOfTrack.coverArt.sources[0].url}
                      alt={track.data.name}
                      className='max-w-xs rounded-lg shadow-lg'
                    />
                  )}
                  <div className='ml-6 '>
                    <h1 className='text-3xl text-black font-bold'>
                      {track?.data?.name || 'Unknown Track'}
                    </h1>
                    <p className='py-2 text-black ml-3'>
                      By{' '}
                      {track?.data?.artists?.items?.[0]?.profile?.name ||
                        'Unknown Artist'}
                    </p>
                    {/* Spotify Playable Link */}
                    {track?.data?.uri && (
                      <a
                        href={`https://open.spotify.com/track/${
                          track.data.uri.split(':')[2]
                        }`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary mt-3'
                      >
                        <FaSpotify className='mr-2' />
                        Listen on Spotify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <hr />
      <div className='text-center mt-8'>
        <button className='btn' onClick={() => setLimit((prev) => prev + 5)}>
          Show More
        </button>
      </div>
    </div>
  )
}

export default Tracks
