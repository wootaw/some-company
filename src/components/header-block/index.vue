<template lang="pug">
  header
    .header-wrapper
      .logo-wrapper
        h1.logo
      .header-body
        .search-wrapper
          input(type="text" placeholder="Search Companies")
        span.or-text OR
        button.new-list NEW SMARTLIST
        ul.menu
          li PROSPECT
          li ALERT
          li LEARN
      .avatar-wrapper
        .chrome-logo
        .avatar-box
          i
            img(src="~@/assets/group@3x.png")
</template>

<style lang="scss">
@import "~@/styles/variables.scss";
header {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  padding: 10px 40px;
  justify-content: space-between;
  height: 60px;
  min-width: 1300px;
  color: #fff;
  background-color: $primary_color;
  box-sizing: border-box;
}
.header-wrapper {
  height: 40px;
  width: 1400px;
  margin: 0 auto;
}
.logo-wrapper {
  float: left;
  width: 100px;
}
h1.logo {
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  background-image: url(~@/assets/logo-pink.svg);
}
.header-body {
  float: left;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  .search-wrapper {
    width: 320px;
    height: 100%;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 10px 5px 50px;
    box-sizing: border-box;
    position: relative;
    float: left;
    &::before {
      content: "";
      width: 30px;
      height: 30px;
      display: block;
      position: absolute;
      left: 10px;
      background-image: url(~@/assets/search.svg);
    }
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: 0;
      padding: 0;
      color: white;
      background-color: transparent;
    }
  }
  .or-text {
    float: left;
    width: 40px;
    height: 100%;
    line-height: 40px;
  }
  .new-list {
    float: left;
    height: 100%;
    outline: none;
    border: 0;
    border-radius: 6px;
    padding: 0 20px;
    color: white;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  .menu {
    display: block;
    float: left;
    margin: 0 10px 0 30px;
    padding: 0;
    height: 100%;
    li {
      list-style: none;
      display: block;
      float: left;
      height: 100%;
      line-height: 40px;
      position: relative;
      text-align: right;
      padding: 0 30px 0 0;
      margin: 0 25px 0 0;
      font-size: 14px;
      font-weight: bold;
      &::after {
        content: "";
        width: 30px;
        height: 40px;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        background-image: url(~@/assets/arrow-down.svg);
        background-repeat: no-repeat;
        background-position: center center;
        opacity: 0.3;
      }
    }
  }
}
.avatar-wrapper {
  float: left;
  width: 100px;
  box-sizing: border-box;
  padding: 3px 0;
  .chrome-logo {
    float: left;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: white;
    background-image: url(~@/assets/chrome-copy-7.svg);
  }
  .avatar-box {
    float: left;
    width: 30px;
    height: 30px;
    padding: 0 20px 0 15px;
    position: relative;
    i {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &::after {
      content: "";
      width: 20px;
      height: 30px;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      background-image: url(~@/assets/arrow-down.svg);
      background-repeat: no-repeat;
      background-position: right center;
      opacity: 0.3;
    }
  }
}
</style>