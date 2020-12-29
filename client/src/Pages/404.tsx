import Image from '../images/404.png'
export default function NotFound() {
    return (
        <div className='DivError'>
            <img className='ImageError' src={Image} alt='404 not found!'></img>
        </div>
    )
}
