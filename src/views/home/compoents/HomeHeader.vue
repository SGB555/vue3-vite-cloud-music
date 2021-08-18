<template>
  <div class="home-header">
    <div class="home-header__top align-center space-between">
      <!-- <a-menu v-model:selectedKeys="currentTab" mode="horizontal">
        <a-menu-item key="discover"> Navigation One </a-menu-item>
        <a-menu-item key="discover1"> Navigation One </a-menu-item>
            </a-menu>-->
      <div class="logo" />
      <div class="menu align-center">
        <div
          v-for="(item, index) in menus"
          :key="index"
          :class="{ 'menu-item__active': currentTab === item.value }"
          class="menu-item"
        >
          {{ item.label }}
          <sub v-show="currentTab === item.value" class="menu-item__cor"></sub>
        </div>
      </div>
      <div class="search-bar align-center sapce-between">
        <div class="search-bar__icon" />
        <!-- <a-input placeholder="音乐/视频/电台/用户"></a-input> -->
        <el-input placeholder="音乐/视频/电台/用户" />
      </div>
      <el-button shape="round" class="creator-btn">创造者中心</el-button>
      <el-button type="text" class="login-btn">登录</el-button>
    </div>
    <div class="home-header__sub">
      <div class="sub-menu align-center">
        <div
          v-for="(item, index) in subMenus"
          :key="index"
          class="sub-menu__item"
          :class="{ 'sub-menu__item_active': item.path === $route.path }"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { HomePageState } from './data'
  import { ElInput, ElButton } from 'element-plus'
  export default defineComponent({
    name: 'HomeHeader',
    components: {
      ElInput,
      ElButton
      // [Input.name]: Input,
      // AButton: Button
      // [Menu.name]: Menu,
      // [Menu.Item.name]: Menu.Item,
    },
    setup() {
      const state = reactive<HomePageState>({
        currentTab: 'discover',
        menus: [
          { label: '发现音乐', path: '', value: 'discover' },
          { label: '我的音乐', path: '', value: 'my' },
          { label: '朋友', path: '', value: 'fri', dot: false },
          { label: '商城', path: '', value: 'shop' },
          { label: '音乐人', path: '', value: 'music' },
          { label: '下载客户端', path: '', value: 'download' }
        ],
        subMenus: [
          { label: '推荐', value: 'recommend', path: '/discovery' },
          { label: '排行榜', value: 'rank', path: '' },
          { label: '歌单', value: 'rank', path: '' },
          { label: '歌手', value: 'artist', path: '' },
          { label: '新碟上架', value: 'album', path: '' }
        ]
      })
      return state
    }
  })
</script>
<style lang="less" scoped>
  .home-header {
    width: 100%;
    background: #242424;
    border-bottom: 1px solid #000;
    .home-header__top {
      width: 1100px;
      margin: 0 auto;
      .menu {
        color: #ccc;
        .menu-item {
          height: 70px;
          line-height: 70px;
          padding: 0 19px;
          cursor: pointer;
          position: relative;
          &:hover {
            background-color: #000;
          }
        }
        .menu-item__active {
          background-color: #000;
          color: #fff;
        }
        .menu-item__cor {
          top: 58px;
          position: absolute;
          left: 50%;
          width: 0px;
          height: 0px;
          border-style: solid;
          border-width: 6px;
          border-color: transparent transparent #c20c0c transparent;
          margin-left: -6px;
          overflow: hidden;
        }
      }
      .logo {
        width: 176px;
        height: 70px;
        background-position: 0 0;
        background: url('src/assets/imgs/topbar.png');
        span {
          line-height: 70px;
          color: #fff;
        }
      }
      .search-bar {
        border-radius: 32px;
        width: 158px;
        height: 32px;
        background-color: #fff;
        padding: 0 5px;
        margin-left: 20px;
        .search-bar__icon {
          background: url('../../../assets/imgs/topbar.png');
          background-position: 0 -99px;
          width: 30px;
          height: 35px;
        }
        .ant-input {
          margin-left: 5px;
          border: none;
          padding: 0;
          font-size: 12px;
          color: #9b9b9b;
          &:focus {
            box-shadow: none;
          }
        }
      }
      .creator-btn {
        width: 90px;
        height: 32px;
        background-color: transparent;
        border: 1px solid #4f4f4f;
        font-size: 12px;
        color: #ccc;
        &:hover {
          border: 1px solid #ccc;
          color: #fff;
        }
      }
      .login-btn {
        font-size: 12px;
        color: #787878;
        &:hover {
          text-decoration: underline;
          color: #666;
        }
      }
    }
    .home-header__sub {
      max-height: 35px;
      min-height: 5px;
      box-sizing: border-box;
      background-color: #c20c0c;
      border-bottom: 1px solid #a40011;
      .sub-menu {
        height: 35px;
        width: 1100px;
        margin: 0 auto;
        padding-left: 220px;
        font-size: 12px;
        .sub-menu__item {
          // display: inline-block;
          height: 20px;
          margin-right: 50px;
          padding: 0 13px;
          border-radius: 20px;
          line-height: 20px;
          color: #fff;
          text-decoration: none;
        }
        .sub-menu__item_active {
          background: #9b0909;
        }
      }
    }
  }
</style>
