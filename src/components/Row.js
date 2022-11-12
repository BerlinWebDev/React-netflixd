import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Movie from '../components/Movie'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Row = ({title, fetchUrl, id}) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
      axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results)
      })
    

    }, [fetchUrl])
    
const slideLeft = () => {
    var slider = document.getElementById('slider' + id)
    slider.scrollLeft = slider.scrollLeft - 500
}

const slideRight = () => {
    var slider = document.getElementById('slider' + id)
    slider.scrollLeft = slider.scrollLeft + 500
}


  return (
    <>
        <h2 className='text-white font-bold md:text-xl py-4 '>{title}</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft}
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block  z-10' size={40} />
            <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie id={id} item={item} />
                    ))}
            </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 right-0 cursor-pointer z-10 hidden group-hover:block' size={40}  />
        </div>

    </>
  )
}

export default Row
