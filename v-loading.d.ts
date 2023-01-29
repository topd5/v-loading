export interface vLoadingOptions {
  loaderHtml?: string,
  disableRotate?: boolean,
}

export default function vLoading(options?: vLoadingOptions): (...rest: any[]) => {}
