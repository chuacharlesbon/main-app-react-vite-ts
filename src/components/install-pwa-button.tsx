import { useEffect, useState } from 'react';

let deferredPrompt: any;

const InstallPWAButton = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // Prevent the default mini-infobar
      deferredPrompt = e;
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
    setShowInstallButton(false);
  };

  return (
    <>
      {showInstallButton && (
        <button onClick={handleInstallClick} style={{ padding: '10px', fontSize: '16px' }}>
          📲 Install App
        </button>
      )}
    </>
  );
};

export default InstallPWAButton;
