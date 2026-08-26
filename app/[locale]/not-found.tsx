import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">{t('title')}</h2>
      <p className="text-gray-400 mb-8 max-w-md">{t('description')}</p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
      >
        {t('backHome')}
      </Link>
    </div>
  );
}
