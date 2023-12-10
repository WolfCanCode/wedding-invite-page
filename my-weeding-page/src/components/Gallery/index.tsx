'use client';

import Lottie from 'lottie-react';
import { Hachi_Maru_Pop } from 'next/font/google';
import React from 'react';
import PhotoAlbum, { Image } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { galleryData } from './data';
import animationData from './gallery.json';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { useMedia, useMount } from 'react-use';

const font1 = Hachi_Maru_Pop({ weight: '400', subsets: ['latin'] });

const Gallery: React.FC = () => {
  const isWide = useMedia('(min-width: 768px)');
  const [index, setIndex] = React.useState(-1);
  const [mobGallery, setMobGallery] = React.useState<typeof galleryData>([]);
  useMount(() => {
    setMobGallery(getRandomImages());
  });
  const getRandomImages = () => {
    const randomItems = [];
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * 39);
      randomItems.push(galleryData[randomIndex]);
    }
    return randomItems;
  };

  const openImage = (src: string) => {
    setIndex(galleryData.findIndex((image) => image.thumbnailUrl === src));
  };

  return (
    <section
      id='gallery'
      className='flex flex-col justify-center bg-white py-12 text-center'
    >
      <div className='justify-center'>
        <Lottie
          animationData={animationData}
          className='h-[150px] items-center justify-center'
          loop={true}
        />
      </div>
      <div className={[font1.className, 'text-5xl'].join(' ')}>Gallery</div>
      <div className='pt-10'>
        <PhotoAlbum
          layout='masonry'
          photos={mobGallery.map((image) => ({
            src: image.thumbnailUrl,
            width: image?.width ?? 1000,
            height: image?.height ?? 1000,
          }))}
          targetRowHeight={150}
          spacing={10}
          columns={isWide ? 4 : 2}
          padding={0}
          onClick={({ photo }) => openImage(photo.src)}
        />

        <Lightbox
          index={index}
          plugins={[Zoom]}
          slides={mobGallery.map((image) => ({
            src: image.url,
            width: image.width,
            height: image.height,
          }))}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default Gallery;
