import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl 
        text-center tracking-wide'>
            VirtualR build tools 
            <span className='bg-linear-to-r from-orange-500 to-red-800
            text-transparent bg-clip-text'>
                {" "} for developer
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Empower your ctrativity and bring your VR app ideas 
            to life with our initutaive development tools.
            Get started with roday and turn your ideas into immerse reality!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='px-4 py-3 mx-3 rounded-md
            bg-linear-to-r from-orange-500 to-orange-800'>
                Start for Free
            </a>
            <a href="#" className='px-4 py-3 mx-3 border rounded-md'>
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-1/2 border
             border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                Your Browser dosen't support this video
             </video>
            {/* 2nd video */}
             <video autoPlay loop muted className='rounded-lg w-1/2 border
             border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                Your Browser dosen't support this video
             </video>
        </div>
    </div>
  )
}

export default HeroSection