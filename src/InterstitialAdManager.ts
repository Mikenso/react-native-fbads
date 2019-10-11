import { NativeModules } from 'react-native';

const { CTKInterstitialAdManager } = NativeModules;

export default {
  /**
   * Shows interstitial ad for a given placementId
   */
  showAd(placementId: string): Promise<boolean> {
    return CTKInterstitialAdManager.showAd(placementId);
  },
  loadAd(placementId: string): Promise<boolean> {
    return CTKInterstitialAdManager.loadAd(placementId);
  },
  showPreloadedAd() {
    return CTKInterstitialAdManager.showPreloadedAd();
  },
};
