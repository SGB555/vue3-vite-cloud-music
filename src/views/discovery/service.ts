import service from '../../api'
import { bannerItem } from './data'

export const banner = (): Promise<API.BaseResponse<{ banners: bannerItem[] }>> =>
  service.get('/banner')
