import { redirect } from 'next/navigation';

export default function LocalePage({ params }: { params: { locale: string } }) {
  const locale = params.locale || 'en';
  redirect(`/${locale}/docs/v1/introduction`);
}
