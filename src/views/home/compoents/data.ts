type Direction =
  | 'discover'
  | 'my'
  | 'fri'
  | 'shop'
  | 'music'
  | 'download'
  | 'recommend'
  | 'rank'
  | 'songList'
  | 'radio'
  | 'artist'
  | 'album'

export type MenuItem = {
  path: string
  label: string
  value: Direction
  dot?: boolean
}

export type HomePageState = {
  menus: MenuItem[]
  currentTab: Direction
  subMenus: MenuItem[]
}
