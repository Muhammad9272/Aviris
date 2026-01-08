import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads - AVIRIS | Get Apps for All Your Devices',
  description: 'Download AVIRIS security applications for Windows, macOS, Android, iOS, and Linux. Protect all your devices with comprehensive VPN, antivirus, and AI-powered threat detection.',
};

export default function DownloadsPage() {
  const downloads = [
    {
      name: 'Windows',
      icon: 'ri-windows-fill',
      iconClass: 'windows',
      description: 'Secure your PC with full AVIRIS protection, including VPN, antivirus & AI threat detection.',
      available: true
    },
    {
      name: 'Android',
      icon: 'ri-android-fill',
      iconClass: 'android',
      description: 'Protect your mobile on the go with VPN, malware scan, and device management in one app.',
      available: true
    },
    {
      name: 'macOS',
      icon: 'ri-apple-fill',
      iconClass: 'macos',
      description: 'Download AVIRIS for Mac and keep your system fast, secure, and protected from digital threats.',
      available: false
    },
    {
      name: 'iOS',
      icon: 'ri-apple-fill',
      iconClass: 'ios',
      description: 'Keep your iPhone or iPad secure with encrypted browsing, AI analytics, and real-time protection.',
      available: false
    },
    {
      name: 'Linux',
      icon: 'ri-terminal-box-line',
      iconClass: 'linux',
      description: 'Lightweight AVIRIS client for Linux with advanced protection and command-line control.',
      available: false
    }
  ];

  return (
    <div className="main-content-wrapper">
      <div className="card-custom p-4 mb-4">
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-3">
          <div className="stat-icon badge-success-custom flex-shrink-0">
            <i className="ri-download-cloud-line"></i>
          </div>
          <div className="flex-grow-1">
            <h2 className="welcome-heading mb-1 fs-5 fs-sm-4">Download</h2>
            <p className="welcome-description mb-0 small">Download the software as per your device type & enjoy in multiple devices.</p>
          </div>
        </div>

        {/* Download Items */}
        <div className="mt-4">
          {downloads.map((download) => (
            <div key={download.name} className={`download-item ${!download.available ? 'disabled' : ''}`}>
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                <div className="d-flex align-items-center gap-3 w-100 w-md-auto flex-row">
                  <div className={`download-icon ${download.iconClass}`}>
                    <i className={download.icon}></i>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="download-title mb-1">{download.name}</h5>
                    <p className="download-description mb-0">{download.description}</p>
                  </div>
                </div>
                {download.available ? (
                  <button className="btn btn-primary-custom d-flex align-items-center gap-2 px-4 flex-row w-md-auto justify-content-center">
                    <i className="ri-download-2-line"></i>
                    Download
                  </button>
                ) : (
                  <span className="badge-custom badge-secondary-custom px-4 py-2 text-center text-nowrap flex-shrink-0">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
