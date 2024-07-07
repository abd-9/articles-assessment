import * as React from 'react';

import '@/styles/colors.css';
import Layout from '@/components/layout/Layout';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
