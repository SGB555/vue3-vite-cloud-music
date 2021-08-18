export type bannerItem = {
  imageUrl: string
  targetId: number
  adid?: unknown
  targetType: number
  titleColor: string
  typeTitle: string
  url?: unknown
  exclusive: boolean
  monitorImpress?: unknown
  monitorClick?: unknown
  monitorType?: unknown
  monitorImpressList?: unknown
  monitorClickList?: unknown
  monitorBlackList?: unknown
  extMonitor?: unknown
  extMonitorInfo?: unknown
  adSource?: unknown
  adLocation?: unknown
  adDispatchJson?: unknown
  encodeId: string
  program?: unknown
  event?: unknown
  video?: unknown
  song?: unknown
  scm: string
}

export type BannerState = {
  bannerList: bannerItem[]
}
