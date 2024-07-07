'use client';

import Head from 'next/head';
import * as React from 'react';

import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>YO</title>
      </Head>
      <section className=''>
        <Header />

        <div className='layout relative flex h-full mt-44 flex-col items-center justify-center py-12 text-center'>
          <h1 data-testid='main-header' className=''>
            Frontend Technology Assessment
          </h1>
          <p className='mt-2 text-sm '>
            Build a simple app to hit the NY Times Most Popular Articles API and
            show a list of articles that shows details when items on the list
            are tapped (a typical master/detail web app). You should use react.
          </p>
        </div>
      </section>
    </main>
  );
}
