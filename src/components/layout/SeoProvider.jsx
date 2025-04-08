'use client'; // 🔥 THIS IS IMPORTANT

import SEO from '@/app/next-seo.config';
import { DefaultSeo } from 'next-seo';

export default function SeoProvider() {
  return <DefaultSeo {...SEO} />;
}
