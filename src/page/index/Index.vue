<template>
  <div>
  	<header class="header">
  		<div class="back"><i class="iconfont icon-fanhui "></i></div>
  		<div class="search">
  			输入城市/景点/游玩主题
  		</div>
  		<div class="city"><span class="cityName">城市城市</span></div>
  	</header>
	  <swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
	    	<div class="swiper-img-con">
	    	</div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>
<script>
	export default {
		name: 'Index',
		data () {
      return {
        swiperOption: {
        	autoplay: 1000
        }
      }
    }
	}
</script>
<style scoped>
	.header {
		display: flex;
		background: #05bad5;
		color: #fff;
	}
	.back {
		width: .44rem;
		margin-left: .2rem;
		line-height: .88rem;
	}
	.icon-fanhui {
		text-align: right;
	}
	.search {
		flex: 1;
		line-height: .6rem;
		margin: .14rem .18rem;
		background: #fff;
		border-radius: .1rem;
		color: #000;
		text-align: center;
		vertical-align: center;
	}
	.city {
		width: 1.14rem;
		line-height: .88rem;
	}
	.cityName {
		display: block;
		width: .9rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.cityName::after {
    border-left: .15rem solid transparent;  
	  border-right: .15rem solid transparent;  
	  border-top: .18rem solid #fff;  
	  content: "";  
	  position: absolute;      
	  width: 0;
	  top: .35rem;
	  right: .13rem;  
  }
  .swiper-img-con {
  	width: 100%;
  }
  .swiper-img {
  	width: 100%;
  }
</style>
