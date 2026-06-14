import { useMemo } from 'react';

declare const process:
  | {
      env?: Record<string, string | undefined>;
    }
  | undefined;

const fallbackEmailAssetBaseUrl = 'https://murphyrepos.com';

const withProtocol = (url: string) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);

const normalizeEmailAssetBaseUrl = (url: string) => {
  const urlWithProtocol = withProtocol(url).replace(/\/+$/, '');

  try {
    const parsedUrl = new URL(urlWithProtocol);

    if (parsedUrl.hostname === 'www.murphyrepos.com') {
      parsedUrl.hostname = 'murphyrepos.com';
    }

    return parsedUrl.toString().replace(/\/+$/, '');
  } catch {
    return urlWithProtocol;
  }
};

export const getEmailAssetBaseUrl = () => {
  const configuredBaseUrl =
    process?.env?.EMAIL_ASSET_BASE_URL ??
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.SITE_URL ??
    fallbackEmailAssetBaseUrl;

  return normalizeEmailAssetBaseUrl(configuredBaseUrl);
};

type UseEmailAssetsOptions = {
  logoUrl?: string;
  logoMarkUrl?: string;
};

export const useEmailAssets = ({ logoUrl, logoMarkUrl }: UseEmailAssetsOptions = {}) =>
  useMemo(() => {
    const assetBaseUrl = getEmailAssetBaseUrl();

    return {
      assetBaseUrl,
      logoUrl: logoUrl ?? `${assetBaseUrl}/logos/white.png`,
      logoMarkUrl: logoMarkUrl ?? `${assetBaseUrl}/logos/small_white.png`,
    };
  }, [logoUrl, logoMarkUrl]);
