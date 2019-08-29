<template>
	<div>
		<el-row style="">
			<div v-for="posts in postsList" v-bind:title="posts.title" v-bind:pic="posts.pic" v-bind:content="posts.content"
			 :key="posts.id">
				<el-col :span="6">
					<div class="grid-content">
						<div class="pic">
							<img :src="posts.pic">
						</div>
						<h4>{{posts.title}}</h4>
						<p>{{posts.content}}</p>
					</div>
				</el-col>
			</div>
			<img src="https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAggJ_-zQUo_4rolwcwsAk4yAE.jpg" style="width: 100%; margin-top:90px; position: relative;"
			 alt="" />
		</el-row>
	</div>

</template>

<script>
	export default {
		name: 'product',
		props: {
			pic: String,
			title: String,
			content: String,
		},
		data() {
			return {
				postsList: [{
						id: 1,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgocb0xAUo75u5jAQwmAI4mAI.jpg',
						title: '原味鹰嘴豆',
						content: '坚果炒货 休闲零食',
					},
					{
						id: 2,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgo8b0xAUo-tLBmAIwmAI4mAI.jpg',
						title: '手剥巴旦木235gx2',
						content: '大颗饱满，壳薄易剥',
					},
					{
						id: 3,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgpcb0xAUomOWAGTCYAjiYAg.jpg',
						title: '开心果225gx2袋 原味无漂白',
						content: '精选优质开心果，营养丰富',
					},
					{
						id: 4,
						title: '麻薯组合630g',
						content: '芒果、抹茶、椰丝3种口味',
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgp8b0xAUosO7W-gQwmAI4mAI.jpg'
					},
					{
						id: 5,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgrMb0xAUo-JGf3wIwmAI4mAI.jpg',
						title: '精选草莓干',
						content: '冷热交替烘干，大小完整',
					},
					{
						id: 6,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgqsb0xAUohNLjyAEwmAI4mAI.jpg',
						title: '黄桃干 休闲零食特产果脯',
						content: '合适品种+合适熟度，自然多美味',
					},
					{
						id: 7,
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgqMb0xAUo2JuH0wcwmAI4mAI.jpg',
						title: '精制猪肉脯',
						content: '就好这一口肉',
					},
					{
						id: 8,
						title: '枣夹核桃258g',
						content: '甜夹脆，甜中夹脆，营养翻倍',
						pic: 'https://12780472.s61i.faiusr.com/2/AD0IuIeMBhACGAAgrsb0xAUoo8CZ-wIwmAI4mAI.jpg'
					}
				]
			}

		}
	}
</script>

<style>
</style>
