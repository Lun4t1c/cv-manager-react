import { useTranslation } from 'react-i18next';

function WelcomePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('hello_world')}</h1>
    </>
  );
}

export default WelcomePage;
