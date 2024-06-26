import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
    FaMapMarkerAlt,
    FaShare,
} from 'react-icons/fa';
export default function Listing() {
    SwiperCore.use([Navigation]);
    const [copied, setCopied] = useState(false);
    const params = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`)
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchListing();
    }, [params.listingId]);
    return (
        <main>
            {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
            {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
            {listing && !loading && !error &&
                <>
                    <Swiper navigation>
                        {listing.imageUrls.map((url) => (
                            <SwiperSlide key={url}>
                                <div
                                    className='h-[700px]'
                                    style={{
                                        background: `url(${url}) center no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
                        <FaShare
                            className='text-slate-500'
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 2000);
                            }}
                        />
                    </div>
                    {copied && (
                        <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
                            Link copied!
                        </p>
                    )}
                    <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
                        <p className='text-2xl font-semibold'>
                            {listing.name}
                        </p>
                        <p className='text-slate-800'>
                            <span className='font-semibold text-black'>Description - </span>
                            {listing.description}
                        </p>
                        <p className='text-slate-800'>
                            <span className='font-semibold text-black'>Speaker - </span>
                            {listing.speaker}
                        </p>
                        <p className='text-slate-800'>
                            <span className='font-semibold text-black'>Club - </span>
                            {listing.club}
                        </p>
                        <div className='flex gap-4'>
                            <p className='bg-green-900 w-full max-w-[100px] text-white text-center p-1 rounded-md'>
                                Rs.{listing.price}
                            </p>
                        </div>
                    </div>
                </>
            }
        </main>
    )
}
