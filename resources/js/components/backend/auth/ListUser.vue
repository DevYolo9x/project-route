<template lang="">
    <div class="container-fluid p-0">
        <h1 class="h3 mb-3">Danh sách thành viên</h1>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-6 mb-2 mb-md-0">
                                <div class="input-group input-group-search">
                                    <input type="text" class="form-control" id="datatables-customers-search" placeholder="Search customers…">
                                    <button class="btn" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" class="lucide lucide-search align-middle"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-sm-end">
                                    <button type="button" class="btn btn-light btn-lg me-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="download" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> Export</button>
                                    <button type="button" class="btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plus" class="lucide lucide-plus"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Thêm mới</button>
                                </div>
                            </div>
                        </div>
                        <div id="datatables-customers_wrapper" class="dt-container dt-bootstrap5 dt-empty-footer"><div class="row mt-2 justify-content-md-center">
                            <div class="col-12 ">
                                <table id="datatables-customers" class="table w-100 dataTable dtr-inline" aria-describedby="datatables-customers_info">
                                    <colgroup>
                                        <col data-dt-column="0" style="width: 2%">
                                        <col data-dt-column="1" style="width: 30%">
                                        <col data-dt-column="2" style="width: 20%">
                                        <col data-dt-column="3" style="width: 20%">
                                        <col data-dt-column="4" style="width: 18%">
                                        <col data-dt-column="5" style="width: 10%">
                                    </colgroup>
                                    <thead>
                                        <tr role="row">
                                            <th class="text-start dt-type-numeric dt-orderable-none" data-dt-column="0" rowspan="1" colspan="1" aria-label="#">
                                                <span class="dt-column-title">
                                                    <div class="form-check fs-4">
                                                        <input class="form-check-input" type="checkbox" id="datatables-products-check-all">
                                                        <label class="form-check-label" for="datatables-products-check-all"></label>
                                                    </div>
                                                </span>
                                            </th>
                                            <th class="align-middle dt-orderable-asc dt-orderable-desc dt-ordering-asc" data-dt-column="1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Item Name: Activate to invert sorting" tabindex="0">
                                                <span class="dt-column-title" role="button">Họ và tên</span>
                                                <span class="dt-column-order"></span>
                                            </th>
                                            <th data-dt-column="2" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Company: Activate to sort" tabindex="0">
                                                <span class="dt-column-title" role="button">Danh mục</span>
                                                <span class="dt-column-order"></span>
                                            </th>
                                            <th data-dt-column="3" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Email: Activate to sort" tabindex="0">
                                                <span class="dt-column-title" role="button">Email</span><span class="dt-column-order"></span>
                                            </th>
                                            <th data-dt-column="4" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Status: Activate to sort" tabindex="0">
                                                <span class="dt-column-title" role="button">Trạng thái</span>
                                                <span class="dt-column-order"></span>
                                            </th>
                                            <th data-dt-column="4" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc" aria-label="Status: Activate to sort" tabindex="0">
                                                <span class="dt-column-title" role="button">Thao tác</span>
                                                <span class="dt-column-order"></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check fs-4">
                                                    <input class="form-check-input" type="checkbox">
                                                    <label class="form-check-label"></label>
                                                </div>
                                            </td>
                                            <td class="d-flex align-items-center sorting_1">
                                                <div class="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                                    <img src="https://appstack.bootlab.io/img/avatars/avatar.jpg" width="32" height="32" class="rounded-circle my-n1" alt="Avatar">
                                                </div>
                                                <p class="mb-0">
                                                    <strong>Apple iPad Pro</strong><br>
                                                    <span class="text-muted">Silver</span>
                                                </p>
                                            </td>
                                            <td>The Wiz</td>
                                            <td>angelica@ramos.com</td>
                                            <td><span class="badge badge-subtle-success">Active</span></td>
                                            <td>
                                                <button type="button" class="btn btn-light m-1" @click="openModalUser(1)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="edit-2" class="lucide lucide-edit-2 align-middle"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                                                </button>
                                                <button type="button" class="btn btn-danger m-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" class="lucide lucide-trash align-middle"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="row mt-2 justify-content-between">
                            <div class="col-md-auto me-auto ">
                                <div class="dt-info" aria-live="polite" id="datatables-customers_info" role="status">Showing 1 to 10 of 20 entries</div>
                            </div>
                                <div class="col-md-auto ms-auto ">
                                    <div class="dt-paging paging_full_numbers">
                                        <ul class="pagination">
                                            <li class="dt-paging-button page-item disabled">
                                                <a class="page-link first" aria-controls="datatables-customers" aria-disabled="true" aria-label="First" data-dt-idx="first" tabindex="-1">«</a>
                                            </li>
                                            <li class="dt-paging-button page-item disabled"><a class="page-link previous" aria-controls="datatables-customers" aria-disabled="true" aria-label="Previous" data-dt-idx="previous" tabindex="-1">‹</a>
                                            </li>
                                            <li class="dt-paging-button page-item active"><a href="#" class="page-link" aria-controls="datatables-customers" aria-current="page" data-dt-idx="0" tabindex="0">1</a>
                                            </li>
                                            <li class="dt-paging-button page-item"><a href="#" class="page-link" aria-controls="datatables-customers" data-dt-idx="1" tabindex="0">2</a>
                                            </li>
                                            <li class="dt-paging-button page-item"><a href="#" class="page-link next" aria-controls="datatables-customers" aria-label="Next" data-dt-idx="next" tabindex="0">›</a>
                                            </li>
                                            <li class="dt-paging-button page-item"><a href="#" class="page-link last" aria-controls="datatables-customers" aria-label="Last" data-dt-idx="last" tabindex="0">»</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="updateUser" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-uppercase">Cập nhật thành viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body m-3">
                    <p class="mb-0">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'

let modalInstance = null
const openModalUser = () => { // Lấy thông tin user và hiển thị popup
  const modalEl = document.getElementById('updateUser')
  if (!modalInstance) {
    modalInstance = new Modal(modalEl)
  }
  modalInstance.show()
}

</script>