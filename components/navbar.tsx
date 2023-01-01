import Link from 'next/link';
import Image from 'next/Image';
import IconHome from '../public/assets/icon-nav-home.svg';
import IconHomeFull from '../public/assets/icon-nav-home-full.svg';
import IconMovies from '../public/assets/icon-nav-movies.svg';
import IconMoviesFull from '../public/assets/icon-nav-movies-full.svg';
import IconTVSeries from '../public/assets/icon-nav-tv-series.svg';
import IconTVSeriesFull from '../public/assets/icon-nav-tv-series-full.svg';
import IconBookmarked from '../public/assets/icon-nav-bookmark.svg';
import IconBookmarkFull from '../public/assets/icon-nav-bookmark-full.svg';
import Logo from '../public/assets/logo.svg';
import IconAvatar from '../public/assets/image-avatar.png';
import {useState} from 'react';

export default function Navbar() {
    const [currentNav, setCurrentNav] = useState('')
    return (
        <div className='bg-medium-navy p-4 flex justify-between
        md:h-[90vh] md:ml-[3vw] md:p-4 md:mt-8 md:absolute md:flex-col md:rounded-lg
        lg:h-[95vh] lg:p-4 lg:ml-[3vw] lg:w-[4vw] lg:flex-col lg:rounded-xl'>
            <div className='cursor-pointer'>
                <Link href='/' passHref>
                    <Image src={Logo} alt='logo'/>
                </Link>
            </div>
            <ul className="list-none h-full flex justify-between md:ml-1 md:mt-4 md:flex-col md:justify-start">
                <li className='ml-4 md:ml-0 cursor-pointer'>
                    <Link href='/' passHref>
                        <Image src={currentNav === 'home' ? IconHomeFull : IconHome} alt='icon-home' onClick={() => setCurrentNav('home')} />
                    </Link>
                </li>
                <li className='ml-4 md:ml-0 md:mt-4 cursor-pointer'>
                    <Link href='/movies' passHref>
                        <Image src={currentNav === 'movies' ? IconMoviesFull : IconMovies} alt='icon-movies' onClick={() => setCurrentNav('movies')}/>
                    </Link>
                </li>
                <li className='ml-4 md:ml-0 md:mt-4 cursor-pointer'>
                    <Link href='/tvSeries' passHref>
                        <Image src={currentNav === 'tvSeries' ? IconTVSeriesFull : IconTVSeries} onClick={() => setCurrentNav('tvSeries')} alt='icon-tv-series'/>
                    </Link>
                </li>
                <li className='ml-4 md:ml-0 md:mt-4 cursor-pointer'>
                    <Link href='/bookmarked' passHref>
                        <Image src={currentNav === 'bookmarked' ? IconBookmarkFull : IconBookmarked} onClick={() => setCurrentNav('bookmarked')} alt='icon-bookmark'/>
                    </Link>
                </li>
            </ul>

            <div className='h-8 w-8 cursor-pointer'>
                <Link href='/profile' passHref>
                    <Image src={IconAvatar} alt='profile-avatar' layout='responsive'/>
                </Link>
            </div>
        </div>
    )
}