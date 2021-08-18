import service from '../../api'
import { bannerItem } from './data'

export const banner = (): Promise<API.BaseResponse<{ banner: bannerItem[] }>> =>
  service.get('/banner')
