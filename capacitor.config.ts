import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.killercatstudios',
  appName: 'yes-no',
  webDir: 'dist/yes-no/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
