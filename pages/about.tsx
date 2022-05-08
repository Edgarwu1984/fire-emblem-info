/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import SectionTitle from '../components/SectionTitle';
import getBlurDataURL from '../helper/getBlurDataURL';

const AboutPage: NextPage = () => {
  return (
    <Layout
      title='About'
      heroTitle='About Me'
      heroSubtitle='Welcome to my space'
    >
      <div className='home_page'>
        <section className='bio'>
          <SectionTitle text='Bio' />
          <p className='bio_intro'>
            <img className='photo' src='/img/edgarwu.jpeg' alt='Edgar_Wu' />
            Hi, my name is Edgar, I am working for Zenexus as Full-stack web
            developer at the moment. In the meantime, I am also a Diploma
            student in Holmesglenfor learning full-stack web development. I
            started my web development journey about 2 years ago. I learned
            everything by myself. After spent 2 years self-learning, I enrolled
            a web development diploma course in Holmesglen. Building functional
            and visually attractive websites is my passion. Through working on
            my personal projects, I keep learning new tech and skills. During my
            first semester in Holmesglen, I finished 3 major assessments
            including 2 full-stack website and 1 Capstone project (To help real
            client to build their website). <br />
            <br />
            My previous title is a 3D Artist which have over 10 years of game
            industry experience. I worked on Fiend Legion in Spree Entertainment
            as an Art Director for 4 years. Before I joined Spree Entertainment,
            I was working on Moonlight Blade in Tencent about 4 years. I also
            worked on some of the AAA games development before I joined Tencent,
            some of the game like Battlefield 3, Medal of Honor 2010 and
            Transformers: war of cybertron, etc.
          </p>
        </section>
        <section>
          <SectionTitle text='Fire Emblem Wiki' />
          <div>
            <Image
              src={'/img/fewiki.jpeg'}
              alt={'fire_emblem_wiki'}
              width={400}
              height={300}
              objectFit='cover'
              placeholder='blur'
              blurDataURL={getBlurDataURL()}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
