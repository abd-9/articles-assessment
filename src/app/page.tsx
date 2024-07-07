'use client';

import Head from 'next/head';
import * as React from 'react';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>YO</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 data-testid='main-header' className='mt-4'>
            Frontend Technology Assessment
          </h1>
          <p className='mt-2 text-sm text-gray-800'>
            Build a simple app to hit the NY Times Most Popular Articles API and
            show a list of articles that shows details when items on the list
            are tapped (a typical master/detail web app). You should use react.
          </p>
        </div>
      </section>
    </main>
  );
}
