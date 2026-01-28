import Header from '@/components/Header';
import { LOCALES } from '@/lib/utils';

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale || 'en';

  return (
    <>
      <Header />
      {children}
    </>
  );
}
