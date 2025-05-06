<template lang="">
    <div class="auth-full-page d-flex">
		<div class="auth-form p-3">
			<div class="text-center">
				<h1 class="display-1 fw-bold">404</h1>
				<p class="h2">Không tìm thấy trang.</p>
				<p class="lead fw-normal mt-3 mb-4">Trang bạn đang tìm kiếm có thể đã bị xóa.</p>
                <router-link :to="{name: 'admin.dashboard'}" class="btn btn-primary btn-lg">Quay lại trang chủ</router-link>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>