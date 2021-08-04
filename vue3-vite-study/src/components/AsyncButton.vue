

<script lang="ts">
import {
	defineAsyncComponent,
} from 'vue'
export default defineAsyncComponent({
	loader: () => import('./QfButton.vue'),
  delay: 2000,
  timeout: 2000
})
</script>

<style scoped>
.avatar {
	display: block;
	width: 150px;
	height: 150px;
	margin: 10px auto;
}
</style>
