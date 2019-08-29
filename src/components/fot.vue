<template>
	<div class="dress">
		<el-row>
			<el-col :span="8" v-for="dre in dreList" :key="dre.id">
				<div class="fir" >
					<div><img :src="dre.img"></div>
					<div><p>{{dre.tit}}</p>
					<p>{{dre.num}}</p></div>
				</div>
			</el-col>
		</el-row>
		<hr style="color: #000000;"/>
		<div class="copyright">
			<p>&copy;2019  小胖子私有 版权所有</p>
			<p>手机版 |本站使用凡科建站搭建 | 管理登录</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fot',
		data() {
			return {
				dreList: [{
						id: 1,
						img: "https://12780472.s61i.faiusr.com/4/AD0IuIeMBhAEGAAgk8b1xAUohNfL2wYwODg8.png",
						tit: '公司电话',
						num: '020-0000000'
					},
					{
						id: 2,
						img: "https://12780472.s61i.faiusr.com/4/AD0IuIeMBhAEGAAglMb1xAUo2LO16AQwQjg8.png",
						tit: '公司邮箱',
						num: 'xxx@.co.m'
					},
					{
						id: 3,
						img: "https://12780472.s61i.faiusr.com/4/AD0IuIeMBhAEGAAglsb1xAUoxP2w1gQwSThC.png",
						tit: '公司地址',
						num: 'xxx省xxx市xxx县xxx；路xx号'
					}
				]
			}
		}
	}
</script>

<style>
</style>
