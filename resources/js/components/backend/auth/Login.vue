<template lang="">
    <div class="auth-full-page d-flex">
		<div class="auth-form p-3">
			<div class="text-center">
				<h1 class="h2 text-uppercase">Đăng nhập</h1>
				<p class="lead">
					Đăng nhập để sử dụng dịch vụ
				</p>
			</div>

			<div class="mb-3">
				
				<div class="row">
					<div class="col">
						<hr>
					</div>
					<div class="col-auto text-uppercase d-flex align-items-center">ADMIN</div>
					<div class="col">
						<hr>
					</div>
				</div>
				<form @submit.prevent="loginForm">
					<div class="mb-3">
						<label class="form-label">Email</label>
						<input class="form-control form-control-lg" type="email" name="email" placeholder="Nhập email">
					</div>
					<div class="mb-3">
						<label class="form-label">Mật khẩu</label>
						<input class="form-control form-control-lg" type="password" name="password" placeholder="Nhập mật khẩu">
                        <button type="button" class="outline-0" hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="eye" class="lucide lucide-eye align-middle me-2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
					</div>
					<div>
						<div class="form-check align-items-center">
							<input id="customControlInline" type="checkbox" class="form-check-input" value="remember-me" name="remember-me" checked="">
							<label class="form-check-label text-small" for="customControlInline">Ghi nhớ</label>
						</div>
					</div>
					<div class="d-grid gap-2 mt-3">
						<button type="submit" class="btn btn-lg btn-primary">Đăng nhập</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup>
const loginForm = () => {
    console.log(1323);
    
}
</script>