<template>
	<div class="mainc">
		<el-row class="tac">
			<el-col :span="6">
				<h5>全部产品</h5>
				<el-menu default-active="2" class="el-menu-vertical-demo">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>休闲零食</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">饼干</el-menu-item>
							<el-menu-item index="1-2">糖果</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">糕点</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span slot="title">巧克力</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">地方特产</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-setting"></i>
						<span slot="title">进口零食</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="16">
				<div class="lin">
					<router-link to="/index">首页</router-link>
					<router-link to="/about">关于我们</router-link>
					
				</div>
				<div class="banner">
					<el-carousel :interval="5000" arrow="always">
						<el-carousel-item v-for="item in bgList" :key="item.id">
							<img style="width: 100%; height: 100%;" :src="item.imgSrc" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'maincontent',
		data() {
			return {
				bgList: [{
						id: 1,
						imgSrc: require("../assets/s1.jpg")
					},
					{
						id: 2,
						imgSrc: require("../assets/s2.jpg")
					},
					{
						id: 3,
						imgSrc: require("../assets/s3.jpg")
					},
					{
						id: 4,
						imgSrc: require("../assets/s4.jpg")
					},
				]
			}
		}
	}
</script>

<style>
</style>
