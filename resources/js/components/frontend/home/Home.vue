<template lang="">

<div class="bodywrap">
    <h1 class="d-none">Sudes Fashion - </h1>

    <div class="home-slider">
        <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="20"
            :autoplay="{ delay: 3000 }"
            :navigation=true
        >
            <SwiperSlide>
                <a href="/collections/all" class="clearfix" title="Slider">
                        <img width="2000" height="938"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/slider_1.jpg?1738662131654"
                                alt="Slider" class="img-responsive">
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/collections/all" class="clearfix" title="Slider">
                        <img width="2000" height="938"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/slider_1.jpg?1738662131654"
                                alt="Slider" class="img-responsive">
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/collections/all" class="clearfix" title="Slider">
                        <img width="2000" height="938"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/slider_1.jpg?1738662131654"
                                alt="Slider" class="img-responsive">
                </a>
            </SwiperSlide>
        </Swiper>
    </div>

    <section class="section_chinhsach">
        <div class="container">
            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="4"
                :space-between="20"
                :autoplay="{ delay: 2500 }"
                :loop="true"
                >
                <SwiperSlide>
                    <a href="/collections/all" class="swiper-slide" title="Miễn phí vẫn chuyển">
                        <div class="thumb-icon">

                            <img width="40" height="40"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1738662131654"
                                alt="Miễn phí vẫn chuyển">
                        </div>
                        <div class="text">
                            <span class="title">Miễn phí vẫn chuyển</span>
                            <span class="des">Cho đơn hàng từ 500K</span>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/collections/all" class="swiper-slide" title="Miễn phí vẫn chuyển">
                        <div class="thumb-icon">

                            <img width="40" height="40"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1738662131654"
                                alt="Miễn phí vẫn chuyển">
                        </div>
                        <div class="text">
                            <span class="title">Miễn phí vẫn chuyển</span>
                            <span class="des">Cho đơn hàng từ 500K</span>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/collections/all" class="swiper-slide" title="Miễn phí vẫn chuyển">
                        <div class="thumb-icon">

                            <img width="40" height="40"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1738662131654"
                                alt="Miễn phí vẫn chuyển">
                        </div>
                        <div class="text">
                            <span class="title">Miễn phí vẫn chuyển</span>
                            <span class="des">Cho đơn hàng từ 500K</span>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/collections/all" class="swiper-slide" title="Miễn phí vẫn chuyển">
                        <div class="thumb-icon">

                            <img width="40" height="40"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1738662131654"
                                alt="Miễn phí vẫn chuyển">
                        </div>
                        <div class="text">
                            <span class="title">Miễn phí vẫn chuyển</span>
                            <span class="des">Cho đơn hàng từ 500K</span>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/collections/all" class="swiper-slide" title="Miễn phí vẫn chuyển">
                        <div class="thumb-icon">

                            <img width="40" height="40"
                                src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1738662131654"
                                alt="Miễn phí vẫn chuyển">
                        </div>
                        <div class="text">
                            <span class="title">Miễn phí vẫn chuyển</span>
                            <span class="des">Cho đơn hàng từ 500K</span>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

    <section class="section_search">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="title-search">
                        Mặc gì hôm nay?
                    </div>
                    <div class="search-smart">
                        <form action="/search" method="get" class="header-search-form input-group search-bar"
                              role="search">
                            <input type="text" name="query" required=""
                                   class="input-group-field auto-search search-auto form-control"
                                   placeholder="Nhập tên sản phẩm..." autocomplete="off">
                            <input type="hidden" name="type" value="product">
                            <button type="submit" class="btn icon-fallback-text" aria-label="Tìm kiếm" title="Tìm kiếm">
                                <svg class="icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
                                </svg>
                            </button>

                            <div class="search-suggest">
                                <div class="list-search list-search-style">
                                </div>
                                <div class="list-search2 list-search-style">
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="title-key">
                        Từ khóa nổi bật ngày hôm nay
                    </div>
                    <ul>

                        <li><a href="/search?q=tags:(%C3%81o+Thun)&amp;type=product">Áo Thun</a></li>

                        <li><a href="/search?q=tags:(Qu%E1%BA%A7n+short)&amp;type=product">Quần short</a></li>

                        <li>
                            <a href="/search?q=tags:(Qu%E1%BA%A7n+Kaki+%26+Chino)&amp;type=product">Quần Kaki &amp;
                                Chino</a>
                        </li>

                        <li><a href="/search?q=tags:(M%E1%BA%AFt+K%C3%ADnh)&amp;type=product">Mắt Kính</a></li>

                        <li><a href="/search?q=tags:(%C3%81o+N%E1%BB%89+V%C3%A0+Len)&amp;type=product">Áo Nỉ Và Len</a>
                        </li>

                        <li><a href="/search?q=tags:(%C3%81o+Kho%C3%A1c)&amp;type=product">Áo Khoác</a></li>

                        <li><a href="/search?q=tags:(%C3%81o+S%C6%A1mi)&amp;type=product">Áo Sơmi</a></li>

                        <li><a href="/search?q=tags:(%C3%81o+Polo)&amp;type=product">Áo Polo</a></li>

                        <li><a href="/search?q=tags:(Hoodie)&amp;type=product">Hoodie</a></li>

                        <li><a href="/search?q=tags:(Tank+Top+-+%C3%81o+Ba+L%E1%BB%97)&amp;type=product">Tank Top - Áo
                                Ba Lỗ</a></li>

                        <li><a href="/search?q=tags:(Qu%E1%BA%A7n+Jogger)&amp;type=product">Quần Jogger</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="section_danhmuc">
        <div class="container">

            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="3"
                :space-between="20"
                :autoplay="{ delay: 2500 }"
                :loop="true"
                :class="danhmuc-swiper"
                >
                <SwiperSlide>
                    <div class="thumb-danhmuc">
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/small/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654">
                                <img height="253" class=" danhmuc-back"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                            <div class="thumb-content">
                                <span class="title1">Sản phẩm</span>
                                <span class="title2">Áo thời trang</span>
                                <a href="san-pham-noi-bat" title="xem thêm">Xem thêm</a>
                            </div>
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/medium/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654">
                                <img width="244" height="288" class=" danhmuc-img"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="thumb-danhmuc">
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/small/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654">
                                <img height="253" class=" danhmuc-back"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                            <div class="thumb-content">
                                <span class="title1">Sản phẩm</span>
                                <span class="title2">Áo thời trang</span>
                                <a href="san-pham-noi-bat" title="xem thêm">Xem thêm</a>
                            </div>
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/medium/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654">
                                <img width="244" height="288" class=" danhmuc-img"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="thumb-danhmuc">
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/small/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654">
                                <img height="253" class=" danhmuc-back"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                            <div class="thumb-content">
                                <span class="title1">Sản phẩm</span>
                                <span class="title2">Áo thời trang</span>
                                <a href="san-pham-noi-bat" title="xem thêm">Xem thêm</a>
                            </div>
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/medium/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654">
                                <img width="244" height="288" class=" danhmuc-img"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="thumb-danhmuc">
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/small/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654">
                                <img height="253" class=" danhmuc-back"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                            <div class="thumb-content">
                                <span class="title1">Sản phẩm</span>
                                <span class="title2">Áo thời trang</span>
                                <a href="san-pham-noi-bat" title="xem thêm">Xem thêm</a>
                            </div>
                            <picture>

                                <source media="(max-width: 567px)"
                                        srcset="http://bizweb.dktcdn.net/thumb/medium/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654">
                                <img width="244" height="288" class=" danhmuc-img"
                                     src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_1.jpg?1738662131654"
                                     alt="Áo thời trang">
                            </picture>
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>


    <section class="section_flashsale">
        <div class="container">
            <div class="title row">
                <h2 class="title-module col-lg-3 col-xl-2">
                    <a href="san-pham-noi-bat" title="Flash Sale">Flash Sale</a> <span class="dot"></span>
                </h2>

                <div class="col-lg-6 col-xl-8">
                    <div class="flash-text">
                        <div class="text-slider swiper-container">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide"> Combo 599K: Back to School - Share
                                    Giảm 239K khi mua 1 Collar Shirt + 1 Smart Pants
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="thump-flash col-lg-3 col-xl-2">
                    <div class="count-down">
                        <div class="timer-view" data-countdown="countdown" data-date="2023-12-01-00-00-00">
                            <div class="lof-labelexpired"> Chương trình đã kết thúc</div>
                        </div>
                    </div>

                </div>
            </div>

            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="5"
                :space-between="20"
                :autoplay="{ delay: 2500 }"
                :loop="true"
                :class="'product-flash-swiper'"
                >
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>
                                <div class="image-khung">
                                    <img width="298" height="412" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/khung_flash.png?1738662131654"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">
                                </div>
                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="color-video">

                                    <div class="swatches clearfix">

                                        <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                        </div>

                                        <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                        </div>

                                        <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                             data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                        </div>

                                        <div class="count-color">

                                            + 1

                                        </div>

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>

                                <div class="elio-productcount">

                                    <div class="countdown">
                                        <span class="title"><img alt="countdown" width="28" height="28"
                                                                 class="lazyload loaded"
                                                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1738662131654"
                                                                 data-was-processed="true">Đã bán 41</span>
                                        <div class="line"><span style="width:20%;"> </span></div>

                                    </div>

                                </div>

                            </div>
                        </form>
                </SwiperSlide>
            </Swiper>

            
            <div class="see-more-flash">
                <a href="san-pham-noi-bat" title="Xem thêm sản phẩm">Xem thêm sản phẩm</a>
            </div>
        </div>
    </section>


    <section class="section_coupon">
        <div class="container">
            <div class="row row-fix">

                <div class="col-xl-3 col-lg-6 col-md-6 col-fix">
                    <div class=" item-coupon">

                        <div class="image">
                            <img width="86" height="114" class="lazyload loaded"
                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_1.jpg?1738662131654"
                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_1.jpg?1738662131654"
                                 alt="HELLO" data-was-processed="true">
                        </div>
                        <div class="content_wrap">
                            <a title="Chi tiết" href="javascript:void(0)" class="info-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                     fill="none">
                                    <path
                                        d="M16.0002 12.1372C15.1556 12.1372 14.5551 12.4938 14.5551 13.0193V20.1694C14.5551 20.6198 15.1557 21.0702 16.0002 21.0702C16.8071 21.0702 17.4639 20.6198 17.4639 20.1694V13.0193C17.4639 12.4938 16.8071 12.1372 16.0002 12.1372Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M16.0001 7.72705C15.1369 7.72705 14.4612 8.34636 14.4612 9.05949C14.4612 9.77263 15.1369 10.4107 16.0001 10.4107C16.8447 10.4107 17.5203 9.77263 17.5203 9.05949C17.5203 8.34642 16.8446 7.72705 16.0001 7.72705Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M24.1352 2.66304C17.325 -1.67624 8.30488 0.320358 3.96835 7.12622C0.427361 12.6835 1.14605 19.6293 5.08053 24.3397L5.2509 30.2551C5.26358 30.6952 5.49353 31.1004 5.86483 31.337C6.23614 31.5736 6.70053 31.6108 7.10474 31.4364L12.5383 29.0916C18.4726 30.6683 25.0706 28.3822 28.61 22.8273C32.9493 16.0171 30.9409 6.99951 24.1352 2.66304ZM12.832 26.4139C12.5315 26.3227 12.2084 26.341 11.9201 26.4654L7.84973 28.2218L7.72208 23.7906C7.71296 23.4767 7.59306 23.1761 7.38339 22.9423C3.93246 19.0926 3.23571 13.2191 6.2085 8.55359C9.74777 2.99897 17.1493 1.36146 22.7078 4.90319C28.2663 8.44493 29.9091 15.8453 26.3699 21.3999C23.3941 26.0701 17.7737 27.9137 12.832 26.4139Z"
                                        fill="#194FDB"></path>
                                </svg>
                            </a>
                            <div class="content-top">
                                TẶNG BẠN MỚI
                                <span>Giảm 15% cho đơn hàng đầu tiên từ 699K</span>
                            </div>
                            <div class="content-bottom">
        <span>Nhập mã
    <b>HELLO</b>
    </span>
                                <div class="coupon-code js-copy" data-copy="HELLO" title="Sao chép">Sao chép</div>
                            </div>
                        </div>
                        <div class="thongtin-coupon">
                            <div class="content">
                                <ul>
                                    <li>
                                        <span>Mã giảm giá:</span>
                                        <span class="code">HELLO</span>
                                    </li>
                                    <li>
                                        <span>Ngày hết hạn:</span>
                                        <span class="time">1/1/2023</span>
                                    </li>
                                    <li>
                                        <span>Điều kiện:</span>
                                        <span class="dieukien">
        Áp dụng cho đơn hàng từ 200k trở lên<br>
    Không đi kèm với chương trình khác
    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-fix">
                    <div class=" item-coupon">

                        <div class="image">
                            <img width="86" height="114" class="lazyload loaded"
                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_2.jpg?1738662131654"
                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_2.jpg?1738662131654"
                                 alt="FREESHIP" data-was-processed="true">
                        </div>
                        <div class="content_wrap">
                            <a title="Chi tiết" href="javascript:void(0)" class="info-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                     fill="none">
                                    <path
                                        d="M16.0002 12.1372C15.1556 12.1372 14.5551 12.4938 14.5551 13.0193V20.1694C14.5551 20.6198 15.1557 21.0702 16.0002 21.0702C16.8071 21.0702 17.4639 20.6198 17.4639 20.1694V13.0193C17.4639 12.4938 16.8071 12.1372 16.0002 12.1372Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M16.0001 7.72705C15.1369 7.72705 14.4612 8.34636 14.4612 9.05949C14.4612 9.77263 15.1369 10.4107 16.0001 10.4107C16.8447 10.4107 17.5203 9.77263 17.5203 9.05949C17.5203 8.34642 16.8446 7.72705 16.0001 7.72705Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M24.1352 2.66304C17.325 -1.67624 8.30488 0.320358 3.96835 7.12622C0.427361 12.6835 1.14605 19.6293 5.08053 24.3397L5.2509 30.2551C5.26358 30.6952 5.49353 31.1004 5.86483 31.337C6.23614 31.5736 6.70053 31.6108 7.10474 31.4364L12.5383 29.0916C18.4726 30.6683 25.0706 28.3822 28.61 22.8273C32.9493 16.0171 30.9409 6.99951 24.1352 2.66304ZM12.832 26.4139C12.5315 26.3227 12.2084 26.341 11.9201 26.4654L7.84973 28.2218L7.72208 23.7906C7.71296 23.4767 7.59306 23.1761 7.38339 22.9423C3.93246 19.0926 3.23571 13.2191 6.2085 8.55359C9.74777 2.99897 17.1493 1.36146 22.7078 4.90319C28.2663 8.44493 29.9091 15.8453 26.3699 21.3999C23.3941 26.0701 17.7737 27.9137 12.832 26.4139Z"
                                        fill="#194FDB"></path>
                                </svg>
                            </a>
                            <div class="content-top">
                                MIỄN PHÍ VẬN CHUYỂN
                                <span>Khi mua hóa đơn từ 250k</span>
                            </div>
                            <div class="content-bottom">
        <span>Nhập mã
    <b>FREESHIP</b>
    </span>
                                <div class="coupon-code js-copy" data-copy="FREESHIP" title="Sao chép">Sao chép</div>
                            </div>
                        </div>
                        <div class="thongtin-coupon">
                            <div class="content">
                                <ul>
                                    <li>
                                        <span>Mã giảm giá:</span>
                                        <span class="code">FREESHIP</span>
                                    </li>
                                    <li>
                                        <span>Ngày hết hạn:</span>
                                        <span class="time">Không thời hạn</span>
                                    </li>
                                    <li>
                                        <span>Điều kiện:</span>
                                        <span class="dieukien">
        Áp dụng cho đơn hàng từ 300k trở lên
    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-fix">
                    <div class=" item-coupon">

                        <div class="image">
                            <img width="86" height="114" class="lazyload loaded"
                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_3.jpg?1738662131654"
                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_3.jpg?1738662131654"
                                 alt="SUDES50K" data-was-processed="true">
                        </div>
                        <div class="content_wrap">
                            <a title="Chi tiết" href="javascript:void(0)" class="info-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                     fill="none">
                                    <path
                                        d="M16.0002 12.1372C15.1556 12.1372 14.5551 12.4938 14.5551 13.0193V20.1694C14.5551 20.6198 15.1557 21.0702 16.0002 21.0702C16.8071 21.0702 17.4639 20.6198 17.4639 20.1694V13.0193C17.4639 12.4938 16.8071 12.1372 16.0002 12.1372Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M16.0001 7.72705C15.1369 7.72705 14.4612 8.34636 14.4612 9.05949C14.4612 9.77263 15.1369 10.4107 16.0001 10.4107C16.8447 10.4107 17.5203 9.77263 17.5203 9.05949C17.5203 8.34642 16.8446 7.72705 16.0001 7.72705Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M24.1352 2.66304C17.325 -1.67624 8.30488 0.320358 3.96835 7.12622C0.427361 12.6835 1.14605 19.6293 5.08053 24.3397L5.2509 30.2551C5.26358 30.6952 5.49353 31.1004 5.86483 31.337C6.23614 31.5736 6.70053 31.6108 7.10474 31.4364L12.5383 29.0916C18.4726 30.6683 25.0706 28.3822 28.61 22.8273C32.9493 16.0171 30.9409 6.99951 24.1352 2.66304ZM12.832 26.4139C12.5315 26.3227 12.2084 26.341 11.9201 26.4654L7.84973 28.2218L7.72208 23.7906C7.71296 23.4767 7.59306 23.1761 7.38339 22.9423C3.93246 19.0926 3.23571 13.2191 6.2085 8.55359C9.74777 2.99897 17.1493 1.36146 22.7078 4.90319C28.2663 8.44493 29.9091 15.8453 26.3699 21.3999C23.3941 26.0701 17.7737 27.9137 12.832 26.4139Z"
                                        fill="#194FDB"></path>
                                </svg>
                            </a>
                            <div class="content-top">
                                GIẢM 50K
                                <span>Khi mua với hóa đơn 150k</span>
                            </div>
                            <div class="content-bottom">
        <span>Nhập mã
    <b>SUDES50K</b>
    </span>
                                <div class="coupon-code js-copy" data-copy="SUDES50K" title="Sao chép">Sao chép</div>
                            </div>
                        </div>
                        <div class="thongtin-coupon">
                            <div class="content">
                                <ul>
                                    <li>
                                        <span>Mã giảm giá:</span>
                                        <span class="code">SUDES50K</span>
                                    </li>
                                    <li>
                                        <span>Ngày hết hạn:</span>
                                        <span class="time">1/1/2023</span>
                                    </li>
                                    <li>
                                        <span>Điều kiện:</span>
                                        <span class="dieukien">
        Áp dụng cho đơn hàng từ 2 triệu trở lên<br>
    Không đi kèm với chương trình khác
    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-6 col-md-6 col-fix">
                    <div class=" item-coupon">

                        <div class="image">
                            <img width="86" height="114" class="lazyload loaded"
                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_4.jpg?1738662131654"
                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_4.jpg?1738662131654"
                                 alt="SUDES50" data-was-processed="true">
                        </div>
                        <div class="content_wrap">
                            <a title="Chi tiết" href="javascript:void(0)" class="info-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                     fill="none">
                                    <path
                                        d="M16.0002 12.1372C15.1556 12.1372 14.5551 12.4938 14.5551 13.0193V20.1694C14.5551 20.6198 15.1557 21.0702 16.0002 21.0702C16.8071 21.0702 17.4639 20.6198 17.4639 20.1694V13.0193C17.4639 12.4938 16.8071 12.1372 16.0002 12.1372Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M16.0001 7.72705C15.1369 7.72705 14.4612 8.34636 14.4612 9.05949C14.4612 9.77263 15.1369 10.4107 16.0001 10.4107C16.8447 10.4107 17.5203 9.77263 17.5203 9.05949C17.5203 8.34642 16.8446 7.72705 16.0001 7.72705Z"
                                        fill="#194FDB"></path>
                                    <path
                                        d="M24.1352 2.66304C17.325 -1.67624 8.30488 0.320358 3.96835 7.12622C0.427361 12.6835 1.14605 19.6293 5.08053 24.3397L5.2509 30.2551C5.26358 30.6952 5.49353 31.1004 5.86483 31.337C6.23614 31.5736 6.70053 31.6108 7.10474 31.4364L12.5383 29.0916C18.4726 30.6683 25.0706 28.3822 28.61 22.8273C32.9493 16.0171 30.9409 6.99951 24.1352 2.66304ZM12.832 26.4139C12.5315 26.3227 12.2084 26.341 11.9201 26.4654L7.84973 28.2218L7.72208 23.7906C7.71296 23.4767 7.59306 23.1761 7.38339 22.9423C3.93246 19.0926 3.23571 13.2191 6.2085 8.55359C9.74777 2.99897 17.1493 1.36146 22.7078 4.90319C28.2663 8.44493 29.9091 15.8453 26.3699 21.3999C23.3941 26.0701 17.7737 27.9137 12.832 26.4139Z"
                                        fill="#194FDB"></path>
                                </svg>
                            </a>
                            <div class="content-top">
                                TẶNG VOUCHER 50%
                                <span>Khi mua từ 5 sản phẩm trở lên</span>
                            </div>
                            <div class="content-bottom">
        <span>Nhập mã
    <b>SUDES50</b>
    </span>
                                <div class="coupon-code js-copy" data-copy="SUDES50" title="Sao chép">Sao chép</div>
                            </div>
                        </div>
                        <div class="thongtin-coupon">
                            <div class="content">
                                <ul>
                                    <li>
                                        <span>Mã giảm giá:</span>
                                        <span class="code">SUDES50</span>
                                    </li>
                                    <li>
                                        <span>Ngày hết hạn:</span>
                                        <span class="time">10/05/2023</span>
                                    </li>
                                    <li>
                                        <span>Điều kiện:</span>
                                        <span class="dieukien">
        Áp dụng cho đơn hàng từ 2 triệu trở lên<br>
    Không đi kèm với chương trình khác
    </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="section_product_noibat">
        <div class="container">
            <div class="title">
                <h2 class="title-module">
                    <a href="san-pham-moi" title="Sản phẩm mới">Sản phẩm mới</a>
                </h2>
                <a href="san-pham-moi" title="Xem thêm">Xem thêm</a>
            </div>

            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="5"
                :space-between="20"
                :autoplay="{ delay: 2500 }"
                :loop="true"
                :class="'product-noibat-swiper'"
                >
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
            </Swiper>
            
        </div>
    </section>

    <section class="section_banner">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <a href="#" title="Banner" class="image-effect">
                        <img width="794" height="365" class="lazyload loaded"
                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner1.png?1738662131654"
                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner1.png?1738662131654"
                             alt="Banner" data-was-processed="true">
                    </a>
                </div>
                <div class="col-md-6 col-12">
                    <a href="#" title="Banner" class="image-effect">
                        <img width="794" height="365" class="lazyload loaded"
                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner2.png?1738662131654"
                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/banner2.png?1738662131654"
                             alt="Banner" data-was-processed="true">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="section_product_tab e-tabs not-dqtab ajax-tab-1" data-section="ajax-tab-1" data-view="grid_4">
        <div class="container">
            <h2 class=" title-module">
                Sản phẩm nổi bật
            </h2>
            <div class="group-title">
                <ul class="tabs tabs-title tab-desktop ajax clearfix">

                    <li class="tab-link has-content current" data-tab="tab-1" data-url="san-pham-noi-bat">
        <span class="line-clamp line-clamp-1" title="Tất cả">
        Tất cả
    </span>
                    </li>

                    <li class="tab-link has-content" data-tab="tab-2" data-url="ao">
        <span class="line-clamp line-clamp-1" title="Áo ">
        Áo
        </span>
                    </li>

                    <li class="tab-link has-content" data-tab="tab-3" data-url="quan">
        <span class="line-clamp line-clamp-1" title="Quần">
        Quần
        </span>
                    </li>

                    <li class="tab-link has-content" data-tab="tab-5" data-url="giay-phu-kien">
        <span class="line-clamp line-clamp-1" title="Giày - Phụ Kiện">
        Giày - Phụ Kiện
    </span>
                    </li>

                </ul>
                <a href="san-pham-noi-bat" title="Xem thêm" class="see-more-tab">Xem thêm</a>
            </div>

            <div class="tab-1 tab-content current">

                <div class="row row-fix">

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                    </div>

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                    </div>

                                    <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                    </div>

                                    <div class="count-color">

                                        + 1

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32315317" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy"
                                   title="Áo Sơ Mi Nam Tay Dài Cổ V Túi Đắp Trơn Form Boxy">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shl036-beige-1-1.png?v=1692629224440"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shl036-beige-1-1.png?v=1692629224440"
                                         alt="Áo Sơ Mi Nam Tay Dài Cổ V Túi Đắp Trơn Form Boxy"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96231803">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy"
                                       data-handle="ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-co-v-tui-dap-tron-form-boxy"
                                                            title="Áo Sơ Mi Nam Tay Dài Cổ V Túi Đắp Trơn Form Boxy">Áo
                                        Sơ Mi Nam Tay Dài Cổ V Túi Đắp Trơn Form Boxy</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#fc9905;" class="swatch-elementes colors  beige">

                                    </div>

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                        + 1

                                    </div>

                                </div>

                                <div class="price-box">
                                    552.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            20%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32315328" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose"
                                   title="Áo Sơ Mi Nam Tay Dài Kẻ Sọc Seesucker Form Loose">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shl035-navy-white-ao-so-mi.png?v=1692629642783"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shl035-navy-white-ao-so-mi.png?v=1692629642783"
                                         alt="Áo Sơ Mi Nam Tay Dài Kẻ Sọc Seesucker Form Loose"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96231830">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose"
                                       data-handle="ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-ke-soc-seesucker-form-loose"
                                                            title="Áo Sơ Mi Nam Tay Dài Kẻ Sọc Seesucker Form Loose">Áo
                                        Sơ Mi Nam Tay Dài Kẻ Sọc Seesucker Form Loose</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    470.000₫
                                    <span class="compare-price">900.000₫</span>

                                    <div class="smart"><span>-
            48%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32338770" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-jean-nam-tron-form-wide-leg-19"
                                   title="Quần Jean Nam Trơn Form Wide Leg">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23dpa025-m-blue-quan-jean-nam-1-2.jpg?v=1692767005130"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23dpa025-m-blue-quan-jean-nam-1-2.jpg?v=1692767005130"
                                         alt="Quần Jean Nam Trơn Form Wide Leg" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799124">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-jean-nam-tron-form-wide-leg-19'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-jean-nam-tron-form-wide-leg-19"
                                       data-handle="quan-jean-nam-tron-form-wide-leg-19" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-jean-nam-tron-form-wide-leg-19" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-jean-nam-tron-form-wide-leg-19"
                                                            title="Quần Jean Nam Trơn Form Wide Leg">Quần Jean Nam Trơn
                                        Form Wide Leg</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#4571cf;" class="swatch-elementes colors  xanh-blue">

                                    </div>

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    569.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            28%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356397" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-jean-nam-tron-form-straight-slim"
                                   title="Quần Short Jean Nam Trơn Form Straight Slim">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-cream-quan-short-nam-1.png?v=1692885690987"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-cream-quan-short-nam-1.png?v=1692885690987"
                                         alt="Quần Short Jean Nam Trơn Form Straight Slim" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656740">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-jean-nam-tron-form-straight-slim'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-jean-nam-tron-form-straight-slim"
                                       data-handle="quan-short-jean-nam-tron-form-straight-slim"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-jean-nam-tron-form-straight-slim" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-jean-nam-tron-form-straight-slim"
                                                            title="Quần Short Jean Nam Trơn Form Straight Slim">Quần
                                        Short Jean Nam Trơn Form Straight Slim</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    240.000₫
                                    <span class="compare-price">360.000₫</span>

                                    <div class="smart"><span>-
            33%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356010" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-chu-doi-form-loose"
                                   title="Áo Thun Nam Tay Ngắn In Chữ Dỗi Form Loose">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-10s23tss069-black-1-2.png?v=1692881844157"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-10s23tss069-black-1-2.png?v=1692881844157"
                                         alt="Áo Thun Nam Tay Ngắn In Chữ Dỗi Form Loose" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96655881">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-chu-doi-form-loose'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-chu-doi-form-loose"
                                       data-handle="ao-thun-nam-tay-ngan-in-chu-doi-form-loose"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-chu-doi-form-loose" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-chu-doi-form-loose"
                                                            title="Áo Thun Nam Tay Ngắn In Chữ Dỗi Form Loose">Áo Thun
                                        Nam Tay Ngắn In Chữ Dỗi Form Loose</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    322.000₫
                                    <span class="compare-price">580.000₫</span>

                                    <div class="smart"><span>-
            44%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32338497" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-polo-nam-tay-ngan-phoi-mau"
                                   title="Áo Polo Nam Tay Ngắn Phối Màu New Collection Mùa Thu">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-polo-nam-10f22pol024r1-bright-white-3-1.jpg?v=1692766432230"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-polo-nam-10f22pol024r1-bright-white-3-1.jpg?v=1692766432230"
                                         alt="Áo Polo Nam Tay Ngắn Phối Màu New Collection Mùa Thu"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96410619">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-polo-nam-tay-ngan-phoi-mau'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-polo-nam-tay-ngan-phoi-mau"
                                       data-handle="ao-polo-nam-tay-ngan-phoi-mau" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-polo-nam-tay-ngan-phoi-mau" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-polo-nam-tay-ngan-phoi-mau"
                                                            title="Áo Polo Nam Tay Ngắn Phối Màu New Collection Mùa Thu">Áo
                                        Polo Nam Tay Ngắn Phối Màu New Collection Mùa Thu</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size: S- Ngoại cỡ</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    410.000₫
                                    <span class="compare-price">550.000₫</span>

                                    <div class="smart"><span>-
            25%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356006" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-than-sau-form-regular"
                                   title="Áo Thun Nam Tay Ngắn In Thân Sau Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-16-10f22tss008-brigh.png?v=1692882443213"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-16-10f22tss008-brigh.png?v=1692882443213"
                                         alt="Áo Thun Nam Tay Ngắn In Thân Sau Form Regular" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96655873">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-than-sau-form-regular'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-than-sau-form-regular"
                                       data-handle="ao-thun-nam-tay-ngan-in-than-sau-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-than-sau-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-than-sau-form-regular"
                                                            title="Áo Thun Nam Tay Ngắn In Thân Sau Form Regular">Áo
                                        Thun Nam Tay Ngắn In Thân Sau Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    322.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            53%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32355998" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted"
                                   title="Áo Thun Tay Ngắn Nam In Họa Tiết Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10f22tss014-white-al.png?v=1692881677533"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10f22tss014-white-al.png?v=1692881677533"
                                         alt="Áo Thun Tay Ngắn Nam In Họa Tiết Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96655812">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted"
                                       data-handle="ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-tay-ngan-nam-in-hoa-tiet-form-fitted"
                                                            title="Áo Thun Tay Ngắn Nam In Họa Tiết Form Fitted">Áo Thun
                                        Tay Ngắn Nam In Họa Tiết Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    322.000₫
                                    <span class="compare-price">600.000₫</span>

                                    <div class="smart"><span>-
            46%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-md-4 col-sm-6 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356116" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Ngắn Linen Xếp Ly Trước Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shs004-ballad.png?v=1692882972363"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shs004-ballad.png?v=1692882972363"
                                         alt="Áo Sơ Mi Nam Tay Ngắn Linen Xếp Ly Trước Form Fitted"
                                         data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656069">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-ngan-linen-xep-ly-truoc-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Ngắn Linen Xếp Ly Trước Form Fitted">Áo
                                        Sơ Mi Nam Tay Ngắn Linen Xếp Ly Trước Form Fitted</a></h3>

                                <div class="price-box">
                                    520.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div class="tab-2 tab-content">

                <div class="row row-fix">

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32371104" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                   title="Áo Thun Nam Tay Ngắn In Hình Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207"
                                         alt="Áo Thun Nam Tay Ngắn In Hình Form Regular" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96799188">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-thun-nam-tay-ngan-in-hinh-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       data-handle="ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-thun-nam-tay-ngan-in-hinh-form-regular-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-thun-nam-tay-ngan-in-hinh-form-regular-1"
                                                            title="Áo Thun Nam Tay Ngắn In Hình Form Regular">Áo Thun
                                        Nam Tay Ngắn In Hình Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-bright-w.png?v=1693028874207">

                                    </div>

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-black-2.png?v=1693028880547">

                                    </div>

                                    <div style="background-color:#15841e;" class="swatch-elementes colors  xanh-la"
                                         data-image="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-thun-nam-10s23tss034-eden-2-1.png?v=1693028879627">

                                    </div>

                                    <div class="count-color">

                                        + 1

                                    </div>

                                </div>

                                <div class="price-box">
                                    390.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            43%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356224" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-khoac-nam-tay-dai-nylon-tui-co-nap-tron-form-regular"
                                   title="Áo Khoác Nam Tay Dài Nylon Túi Có Nắp Trơn Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f23jac004-black-1-1.png?v=1692883828280"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f23jac004-black-1-1.png?v=1692883828280"
                                         alt="Áo Khoác Nam Tay Dài Nylon Túi Có Nắp Trơn Form Regular"
                                         data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input type="hidden" name="variantId" value="96656316">
                                    <button class="btn-cart btn-views add_to_cart " title="Thêm vào giỏ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                             viewBox="0 0 33 33" fill="none">
                                            <g clip-path="url(#clip0_476_732)">
                                                <path
                                                    d="M32.5101 11.9281C32.0743 11.3814 31.4206 11.0678 30.7164 11.0678H24.361L20.9148 3.1766C20.7011 2.68733 20.1312 2.46375 19.6419 2.67754C19.1526 2.8912 18.9291 3.46116 19.1428 3.95049L22.2511 11.0679H10.7489L13.8572 3.95049C14.0708 3.46116 13.8474 2.89126 13.3581 2.67754C12.8688 2.46375 12.2989 2.6872 12.0852 3.1766L8.63898 11.0679H2.28364C1.57943 11.0679 0.92568 11.3814 0.489912 11.9282C0.0621368 12.4649 -0.0957088 13.155 0.0568517 13.8215L3.45076 28.6458C3.68775 29.6809 4.60344 30.4038 5.67755 30.4038H27.3225C28.3966 30.4038 29.3123 29.6809 29.5492 28.6458L32.9432 13.8215C33.0957 13.1549 32.9379 12.4649 32.5101 11.9281ZM27.3225 28.4701H5.67755C5.51339 28.4701 5.36959 28.3625 5.33563 28.2141L1.94172 13.39C1.9151 13.2737 1.95977 13.1862 2.00205 13.1333C2.04123 13.084 2.12999 13.0014 2.28364 13.0014H7.79458L7.54134 13.5813C7.32768 14.0707 7.55107 14.6406 8.0404 14.8543C8.16634 14.9093 8.29757 14.9354 8.4268 14.9354C8.79947 14.9354 9.1546 14.7186 9.31329 14.3553L9.90451 13.0016H23.0956L23.6868 14.3553C23.8455 14.7187 24.2007 14.9354 24.5733 14.9354C24.7025 14.9354 24.8338 14.9093 24.9597 14.8543C25.4491 14.6406 25.6725 14.0707 25.4588 13.5813L25.2056 13.0014H30.7165C30.8701 13.0014 30.9589 13.084 30.9981 13.1333C31.0403 13.1862 31.085 13.2738 31.0584 13.39L27.6645 28.2142C27.6305 28.3625 27.4866 28.4701 27.3225 28.4701Z"></path>
                                                <path
                                                    d="M10.6992 17.1907C10.1653 17.1907 9.73242 17.6235 9.73242 18.1575V25.2473C9.73242 25.7812 10.1653 26.2141 10.6992 26.2141C11.2331 26.2141 11.666 25.7812 11.666 25.2473V18.1575C11.666 17.6235 11.2332 17.1907 10.6992 17.1907Z"></path>
                                                <path
                                                    d="M16.5 17.1907C15.9661 17.1907 15.5332 17.6235 15.5332 18.1575V25.2473C15.5332 25.7812 15.9661 26.2141 16.5 26.2141C17.0339 26.2141 17.4668 25.7812 17.4668 25.2473V18.1575C17.4668 17.6235 17.0339 17.1907 16.5 17.1907Z"></path>
                                                <path
                                                    d="M22.3008 17.1907C21.7669 17.1907 21.334 17.6235 21.334 18.1575V25.2473C21.334 25.7812 21.7669 26.2141 22.3008 26.2141C22.8347 26.2141 23.2676 25.7812 23.2676 25.2473V18.1575C23.2675 17.6235 22.8347 17.1907 22.3008 17.1907Z"></path>
                                            </g>

                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-khoac-nam-tay-dai-nylon-tui-co-nap-tron-form-regular"
                                       data-handle="ao-khoac-nam-tay-dai-nylon-tui-co-nap-tron-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-khoac-nam-tay-dai-nylon-tui-co-nap-tron-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-khoac-nam-tay-dai-nylon-tui-co-nap-tron-form-regular"
                                                            title="Áo Khoác Nam Tay Dài Nylon Túi Có Nắp Trơn Form Regular">Áo
                                        Khoác Nam Tay Dài Nylon Túi Có Nắp Trơn Form Regular</a></h3>

                                <div class="price-box">
                                    784.400₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356222" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-khoac-gio-nam-chong-tham-tay-dai-tron-form-regular"
                                   title="Áo Khoác Gió Nam Chống Thấm Tay Dài Trơn Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-khoac-10f22wja004r1-black-2.png?v=1692883789057"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-khoac-10f22wja004r1-black-2.png?v=1692883789057"
                                         alt="Áo Khoác Gió Nam Chống Thấm Tay Dài Trơn Form Regular"
                                         data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input type="hidden" name="variantId" value="96656314">
                                    <button class="btn-cart btn-views add_to_cart " title="Thêm vào giỏ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                             viewBox="0 0 33 33" fill="none">
                                            <g clip-path="url(#clip0_476_732)">
                                                <path
                                                    d="M32.5101 11.9281C32.0743 11.3814 31.4206 11.0678 30.7164 11.0678H24.361L20.9148 3.1766C20.7011 2.68733 20.1312 2.46375 19.6419 2.67754C19.1526 2.8912 18.9291 3.46116 19.1428 3.95049L22.2511 11.0679H10.7489L13.8572 3.95049C14.0708 3.46116 13.8474 2.89126 13.3581 2.67754C12.8688 2.46375 12.2989 2.6872 12.0852 3.1766L8.63898 11.0679H2.28364C1.57943 11.0679 0.92568 11.3814 0.489912 11.9282C0.0621368 12.4649 -0.0957088 13.155 0.0568517 13.8215L3.45076 28.6458C3.68775 29.6809 4.60344 30.4038 5.67755 30.4038H27.3225C28.3966 30.4038 29.3123 29.6809 29.5492 28.6458L32.9432 13.8215C33.0957 13.1549 32.9379 12.4649 32.5101 11.9281ZM27.3225 28.4701H5.67755C5.51339 28.4701 5.36959 28.3625 5.33563 28.2141L1.94172 13.39C1.9151 13.2737 1.95977 13.1862 2.00205 13.1333C2.04123 13.084 2.12999 13.0014 2.28364 13.0014H7.79458L7.54134 13.5813C7.32768 14.0707 7.55107 14.6406 8.0404 14.8543C8.16634 14.9093 8.29757 14.9354 8.4268 14.9354C8.79947 14.9354 9.1546 14.7186 9.31329 14.3553L9.90451 13.0016H23.0956L23.6868 14.3553C23.8455 14.7187 24.2007 14.9354 24.5733 14.9354C24.7025 14.9354 24.8338 14.9093 24.9597 14.8543C25.4491 14.6406 25.6725 14.0707 25.4588 13.5813L25.2056 13.0014H30.7165C30.8701 13.0014 30.9589 13.084 30.9981 13.1333C31.0403 13.1862 31.085 13.2738 31.0584 13.39L27.6645 28.2142C27.6305 28.3625 27.4866 28.4701 27.3225 28.4701Z"></path>
                                                <path
                                                    d="M10.6992 17.1907C10.1653 17.1907 9.73242 17.6235 9.73242 18.1575V25.2473C9.73242 25.7812 10.1653 26.2141 10.6992 26.2141C11.2331 26.2141 11.666 25.7812 11.666 25.2473V18.1575C11.666 17.6235 11.2332 17.1907 10.6992 17.1907Z"></path>
                                                <path
                                                    d="M16.5 17.1907C15.9661 17.1907 15.5332 17.6235 15.5332 18.1575V25.2473C15.5332 25.7812 15.9661 26.2141 16.5 26.2141C17.0339 26.2141 17.4668 25.7812 17.4668 25.2473V18.1575C17.4668 17.6235 17.0339 17.1907 16.5 17.1907Z"></path>
                                                <path
                                                    d="M22.3008 17.1907C21.7669 17.1907 21.334 17.6235 21.334 18.1575V25.2473C21.334 25.7812 21.7669 26.2141 22.3008 26.2141C22.8347 26.2141 23.2676 25.7812 23.2676 25.2473V18.1575C23.2675 17.6235 22.8347 17.1907 22.3008 17.1907Z"></path>
                                            </g>

                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-khoac-gio-nam-chong-tham-tay-dai-tron-form-regular"
                                       data-handle="ao-khoac-gio-nam-chong-tham-tay-dai-tron-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-khoac-gio-nam-chong-tham-tay-dai-tron-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_2_tag.png?1738662131654">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-khoac-gio-nam-chong-tham-tay-dai-tron-form-regular"
                                                            title="Áo Khoác Gió Nam Chống Thấm Tay Dài Trơn Form Regular">Áo
                                        Khoác Gió Nam Chống Thấm Tay Dài Trơn Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="price-box">
                                    449.000₫
                                    <span class="compare-price">900.000₫</span>

                                    <div class="smart"><span>-
            50%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356216" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-khoac-nam-polyester-form-regular"
                                   title="Áo Khoác Nam Polyester Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22jac018-pumice-stone-thumbna-1.png?v=1692883746540"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22jac018-pumice-stone-thumbna-1.png?v=1692883746540"
                                         alt="Áo Khoác Nam Polyester Form Regular" data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input type="hidden" name="variantId" value="96656268">
                                    <button class="btn-cart btn-views add_to_cart " title="Thêm vào giỏ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                             viewBox="0 0 33 33" fill="none">
                                            <g clip-path="url(#clip0_476_732)">
                                                <path
                                                    d="M32.5101 11.9281C32.0743 11.3814 31.4206 11.0678 30.7164 11.0678H24.361L20.9148 3.1766C20.7011 2.68733 20.1312 2.46375 19.6419 2.67754C19.1526 2.8912 18.9291 3.46116 19.1428 3.95049L22.2511 11.0679H10.7489L13.8572 3.95049C14.0708 3.46116 13.8474 2.89126 13.3581 2.67754C12.8688 2.46375 12.2989 2.6872 12.0852 3.1766L8.63898 11.0679H2.28364C1.57943 11.0679 0.92568 11.3814 0.489912 11.9282C0.0621368 12.4649 -0.0957088 13.155 0.0568517 13.8215L3.45076 28.6458C3.68775 29.6809 4.60344 30.4038 5.67755 30.4038H27.3225C28.3966 30.4038 29.3123 29.6809 29.5492 28.6458L32.9432 13.8215C33.0957 13.1549 32.9379 12.4649 32.5101 11.9281ZM27.3225 28.4701H5.67755C5.51339 28.4701 5.36959 28.3625 5.33563 28.2141L1.94172 13.39C1.9151 13.2737 1.95977 13.1862 2.00205 13.1333C2.04123 13.084 2.12999 13.0014 2.28364 13.0014H7.79458L7.54134 13.5813C7.32768 14.0707 7.55107 14.6406 8.0404 14.8543C8.16634 14.9093 8.29757 14.9354 8.4268 14.9354C8.79947 14.9354 9.1546 14.7186 9.31329 14.3553L9.90451 13.0016H23.0956L23.6868 14.3553C23.8455 14.7187 24.2007 14.9354 24.5733 14.9354C24.7025 14.9354 24.8338 14.9093 24.9597 14.8543C25.4491 14.6406 25.6725 14.0707 25.4588 13.5813L25.2056 13.0014H30.7165C30.8701 13.0014 30.9589 13.084 30.9981 13.1333C31.0403 13.1862 31.085 13.2738 31.0584 13.39L27.6645 28.2142C27.6305 28.3625 27.4866 28.4701 27.3225 28.4701Z"></path>
                                                <path
                                                    d="M10.6992 17.1907C10.1653 17.1907 9.73242 17.6235 9.73242 18.1575V25.2473C9.73242 25.7812 10.1653 26.2141 10.6992 26.2141C11.2331 26.2141 11.666 25.7812 11.666 25.2473V18.1575C11.666 17.6235 11.2332 17.1907 10.6992 17.1907Z"></path>
                                                <path
                                                    d="M16.5 17.1907C15.9661 17.1907 15.5332 17.6235 15.5332 18.1575V25.2473C15.5332 25.7812 15.9661 26.2141 16.5 26.2141C17.0339 26.2141 17.4668 25.7812 17.4668 25.2473V18.1575C17.4668 17.6235 17.0339 17.1907 16.5 17.1907Z"></path>
                                                <path
                                                    d="M22.3008 17.1907C21.7669 17.1907 21.334 17.6235 21.334 18.1575V25.2473C21.334 25.7812 21.7669 26.2141 22.3008 26.2141C22.8347 26.2141 23.2676 25.7812 23.2676 25.2473V18.1575C23.2675 17.6235 22.8347 17.1907 22.3008 17.1907Z"></path>
                                            </g>

                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-khoac-nam-polyester-form-regular"
                                       data-handle="ao-khoac-nam-polyester-form-regular" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-khoac-nam-polyester-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-khoac-nam-polyester-form-regular"
                                                            title="Áo Khoác Nam Polyester Form Regular">Áo Khoác Nam
                                        Polyester Form Regular</a></h3>

                                <div class="price-box">
                                    834.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356208" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-khoac-chan-bong-nam-polyester-form-regular"
                                   title="Áo Khoác Chần Bông Nam Polyester Form Regular">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-khoac-10f22jac005-deep-black.png?v=1692883687143"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-khoac-10f22jac005-deep-black.png?v=1692883687143"
                                         alt="Áo Khoác Chần Bông Nam Polyester Form Regular" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input type="hidden" name="variantId" value="96656259">
                                    <button class="btn-cart btn-views add_to_cart " title="Thêm vào giỏ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                             viewBox="0 0 33 33" fill="none">
                                            <g clip-path="url(#clip0_476_732)">
                                                <path
                                                    d="M32.5101 11.9281C32.0743 11.3814 31.4206 11.0678 30.7164 11.0678H24.361L20.9148 3.1766C20.7011 2.68733 20.1312 2.46375 19.6419 2.67754C19.1526 2.8912 18.9291 3.46116 19.1428 3.95049L22.2511 11.0679H10.7489L13.8572 3.95049C14.0708 3.46116 13.8474 2.89126 13.3581 2.67754C12.8688 2.46375 12.2989 2.6872 12.0852 3.1766L8.63898 11.0679H2.28364C1.57943 11.0679 0.92568 11.3814 0.489912 11.9282C0.0621368 12.4649 -0.0957088 13.155 0.0568517 13.8215L3.45076 28.6458C3.68775 29.6809 4.60344 30.4038 5.67755 30.4038H27.3225C28.3966 30.4038 29.3123 29.6809 29.5492 28.6458L32.9432 13.8215C33.0957 13.1549 32.9379 12.4649 32.5101 11.9281ZM27.3225 28.4701H5.67755C5.51339 28.4701 5.36959 28.3625 5.33563 28.2141L1.94172 13.39C1.9151 13.2737 1.95977 13.1862 2.00205 13.1333C2.04123 13.084 2.12999 13.0014 2.28364 13.0014H7.79458L7.54134 13.5813C7.32768 14.0707 7.55107 14.6406 8.0404 14.8543C8.16634 14.9093 8.29757 14.9354 8.4268 14.9354C8.79947 14.9354 9.1546 14.7186 9.31329 14.3553L9.90451 13.0016H23.0956L23.6868 14.3553C23.8455 14.7187 24.2007 14.9354 24.5733 14.9354C24.7025 14.9354 24.8338 14.9093 24.9597 14.8543C25.4491 14.6406 25.6725 14.0707 25.4588 13.5813L25.2056 13.0014H30.7165C30.8701 13.0014 30.9589 13.084 30.9981 13.1333C31.0403 13.1862 31.085 13.2738 31.0584 13.39L27.6645 28.2142C27.6305 28.3625 27.4866 28.4701 27.3225 28.4701Z"></path>
                                                <path
                                                    d="M10.6992 17.1907C10.1653 17.1907 9.73242 17.6235 9.73242 18.1575V25.2473C9.73242 25.7812 10.1653 26.2141 10.6992 26.2141C11.2331 26.2141 11.666 25.7812 11.666 25.2473V18.1575C11.666 17.6235 11.2332 17.1907 10.6992 17.1907Z"></path>
                                                <path
                                                    d="M16.5 17.1907C15.9661 17.1907 15.5332 17.6235 15.5332 18.1575V25.2473C15.5332 25.7812 15.9661 26.2141 16.5 26.2141C17.0339 26.2141 17.4668 25.7812 17.4668 25.2473V18.1575C17.4668 17.6235 17.0339 17.1907 16.5 17.1907Z"></path>
                                                <path
                                                    d="M22.3008 17.1907C21.7669 17.1907 21.334 17.6235 21.334 18.1575V25.2473C21.334 25.7812 21.7669 26.2141 22.3008 26.2141C22.8347 26.2141 23.2676 25.7812 23.2676 25.2473V18.1575C23.2675 17.6235 22.8347 17.1907 22.3008 17.1907Z"></path>
                                            </g>

                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-khoac-chan-bong-nam-polyester-form-regular"
                                       data-handle="ao-khoac-chan-bong-nam-polyester-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-khoac-chan-bong-nam-polyester-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_2_tag.png?1738662131654">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-khoac-chan-bong-nam-polyester-form-regular"
                                                            title="Áo Khoác Chần Bông Nam Polyester Form Regular">Áo
                                        Khoác Chần Bông Nam Polyester Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="price-box">
                                    1.714.000₫
                                    <span class="compare-price">2.000.000₫</span>

                                    <div class="smart"><span>-
            14%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356192" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-theu-form-regular"
                                   title="Áo Sơ Mi Nam Tay Dài Thêu Form Regular">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-10f22shl022-apple-cinna.png?v=1692883553117"
                                         alt="Áo Sơ Mi Nam Tay Dài Thêu Form Regular">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656240">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-theu-form-regular'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-theu-form-regular"
                                       data-handle="ao-so-mi-nam-tay-dai-theu-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-theu-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-theu-form-regular"
                                                            title="Áo Sơ Mi Nam Tay Dài Thêu Form Regular">Áo Sơ Mi Nam
                                        Tay Dài Thêu Form Regular</a></h3>

                                <div class="price-box">
                                    520.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356189" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-oxford-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Oxford Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-tay-dai-10f22shl002cr1.png?v=1692883505843"
                                         alt="Áo Sơ Mi Nam Tay Dài Oxford Trơn Form Fitted">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656234">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-oxford-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-oxford-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-oxford-tron-form-fitted"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-oxford-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-oxford-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Oxford Trơn Form Fitted">Áo Sơ
                                        Mi Nam Tay Dài Oxford Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">840.000₫</span>

                                    <div class="smart"><span>-
            38%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356185" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted"
                                   title="Áo Sơ Mi Nam Oxford Tay Dài Cổ Trụ Form Fitted">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22shl006cr1-black-iris-ao-so.png?v=1692883440627"
                                         alt="Áo Sơ Mi Nam Oxford Tay Dài Cổ Trụ Form Fitted">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656228">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted"
                                       data-handle="ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-oxford-tay-dai-co-tru-form-fitted"
                                                            title="Áo Sơ Mi Nam Oxford Tay Dài Cổ Trụ Form Fitted">Áo Sơ
                                        Mi Nam Oxford Tay Dài Cổ Trụ Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span></span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">750.000₫</span>

                                    <div class="smart"><span>-
            31%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356128" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb"
                                   href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1"
                                   title="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shs011-pink-1-2.png?v=1692883049283"
                                         alt="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656091">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh"
                                       href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1"
                                       data-handle="ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1"
                                       tabindex="0" title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular-1"
                                                            title="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">Áo
                                        Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular</a></h3>

                                <div class="price-box">
                                    520.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356127" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular"
                                   title="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23shs011-green-1-1.png?v=1692883012760"
                                         alt="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656088">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh"
                                       href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular"
                                       data-handle="ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_2_tag.png?1738662131654">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-vai-rayon-co-cuban-hoa-tiet-in-form-regular"
                                                            title="Áo Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular">Áo
                                        Sơ Mi Nam Vải Rayon Cổ Cuban Họa Tiết In Form Regular</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div class="tab-3 tab-content">

                <div class="row row-fix">

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356400" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-jean-nam-tron-form-straight-slim-1"
                                   title="Quần Short Jean Nam Trơn Form Straight Slim">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-burnt-oliver-2-1.png?v=1692885708053"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-burnt-oliver-2-1.png?v=1692885708053"
                                         alt="Quần Short Jean Nam Trơn Form Straight Slim" data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656743">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-jean-nam-tron-form-straight-slim-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-jean-nam-tron-form-straight-slim-1"
                                       data-handle="quan-short-jean-nam-tron-form-straight-slim-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-jean-nam-tron-form-straight-slim-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-jean-nam-tron-form-straight-slim-1"
                                                            title="Quần Short Jean Nam Trơn Form Straight Slim">Quần
                                        Short Jean Nam Trơn Form Straight Slim</a></h3>

                                <div class="price-box">
                                    240.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356397" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-jean-nam-tron-form-straight-slim"
                                   title="Quần Short Jean Nam Trơn Form Straight Slim">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-cream-quan-short-nam-1.png?v=1692885690987"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22dps001-cream-quan-short-nam-1.png?v=1692885690987"
                                         alt="Quần Short Jean Nam Trơn Form Straight Slim" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656740">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-jean-nam-tron-form-straight-slim'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-jean-nam-tron-form-straight-slim"
                                       data-handle="quan-short-jean-nam-tron-form-straight-slim"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-jean-nam-tron-form-straight-slim" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1738662131654">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-jean-nam-tron-form-straight-slim"
                                                            title="Quần Short Jean Nam Trơn Form Straight Slim">Quần
                                        Short Jean Nam Trơn Form Straight Slim</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Freesize</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    240.000₫
                                    <span class="compare-price">360.000₫</span>

                                    <div class="smart"><span>-
            33%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356393" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-jean-nam-tron-form-straight"
                                   title="Quần Short Jean Nam Trơn Form Straight">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/quan-short-nam-10f22dps001-cherr.png?v=1692885663063"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/quan-short-nam-10f22dps001-cherr.png?v=1692885663063"
                                         alt="Quần Short Jean Nam Trơn Form Straight" data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656728">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-jean-nam-tron-form-straight'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-jean-nam-tron-form-straight"
                                       data-handle="quan-short-jean-nam-tron-form-straight"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-jean-nam-tron-form-straight" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-jean-nam-tron-form-straight"
                                                            title="Quần Short Jean Nam Trơn Form Straight">Quần Short
                                        Jean Nam Trơn Form Straight</a></h3>

                                <div class="price-box">
                                    259.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356386" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-ngu-nam-tron-nhan-trang-tri-form-relax"
                                   title="Quần Ngủ Nam Trơn Nhãn Trang Trí Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23slp002-bright-white-2-4.png?v=1692885570937"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23slp002-bright-white-2-4.png?v=1692885570937"
                                         alt="Quần Ngủ Nam Trơn Nhãn Trang Trí Form Relax" data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656703">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-ngu-nam-tron-nhan-trang-tri-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-ngu-nam-tron-nhan-trang-tri-form-relax"
                                       data-handle="quan-ngu-nam-tron-nhan-trang-tri-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-ngu-nam-tron-nhan-trang-tri-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-ngu-nam-tron-nhan-trang-tri-form-relax"
                                                            title="Quần Ngủ Nam Trơn Nhãn Trang Trí Form Relax">Quần Ngủ
                                        Nam Trơn Nhãn Trang Trí Form Relax</a></h3>

                                <div class="price-box">
                                    259.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356313" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax"
                                   title="Quần Short Nam Kẻ Sọc Dọc Phối Dây Rút Form Relax">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh018-bijou-blue-quan-shor-1.png?v=1692884848680"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh018-bijou-blue-quan-shor-1.png?v=1692884848680"
                                         alt="Quần Short Nam Kẻ Sọc Dọc Phối Dây Rút Form Relax"
                                         data-was-processed="true">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656505">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax"
                                       data-handle="quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-ke-soc-doc-phoi-day-rut-form-relax"
                                                            title="Quần Short Nam Kẻ Sọc Dọc Phối Dây Rút Form Relax">Quần
                                        Short Nam Kẻ Sọc Dọc Phối Dây Rút Form Relax</a></h3>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  begi">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    190.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356307" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                   title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10s23psh021-beige-blue-quan-shor.png?v=1692884786977"
                                         alt="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656485">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       data-handle="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-short-nam-phoi-day-rut-hoa-tiet-in-form-relax"
                                                            title="Quần Short Nam Phối Dây Rút Họa Tiết In Form Relax">Quần
                                        Short Nam Phối Dây Rút Họa Tiết In Form Relax</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#000000;" class="swatch-elementes colors  den">

                                    </div>

                                    <div style="background-color:#ffffff;" class="swatch-elementes colors  trang">

                                    </div>

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    420.000₫
                                    <span class="compare-price">690.000₫</span>

                                    <div class="smart"><span>-
            39%
        </span></div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356291" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-vai-nam-form-slim-crop-au"
                                   title="Quần Vải Nam Form Slim Crop Âu">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/quan-vai-nam-10f21pfo002cr1-bl-5ca1409f-5392-4af0-9137-adc625551675.png?v=1692884493940"
                                         alt="Quần Vải Nam Form Slim Crop Âu">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656464">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-vai-nam-form-slim-crop-au'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-vai-nam-form-slim-crop-au"
                                       data-handle="quan-vai-nam-form-slim-crop-au" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-vai-nam-form-slim-crop-au" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-vai-nam-form-slim-crop-au"
                                                            title="Quần Vải Nam Form Slim Crop Âu">Quần Vải Nam Form
                                        Slim Crop Âu</a></h3>

                                <div class="price-box">
                                    569.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356284" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-vai-nam-ke-soc-doc-form-slim-crop-1"
                                   title="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/10f22pfo008-sky-captain-quan-vai.png?v=1692884458380"
                                         alt="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656452">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-vai-nam-ke-soc-doc-form-slim-crop-1'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-vai-nam-ke-soc-doc-form-slim-crop-1"
                                       data-handle="quan-vai-nam-ke-soc-doc-form-slim-crop-1"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-vai-nam-ke-soc-doc-form-slim-crop-1" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-vai-nam-ke-soc-doc-form-slim-crop-1"
                                                            title="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">Quần Vải Nam
                                        Kẻ Sọc Dọc Form Slim Crop</a></h3>

                                <div class="price-box">
                                    569.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356282" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-vai-nam-ke-soc-doc-form-slim-crop"
                                   title="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/quan-vai-nam-10f22pfo008-melange.png?v=1692884424270"
                                         alt="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656446">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-vai-nam-ke-soc-doc-form-slim-crop'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-vai-nam-ke-soc-doc-form-slim-crop"
                                       data-handle="quan-vai-nam-ke-soc-doc-form-slim-crop"
                                       class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-vai-nam-ke-soc-doc-form-slim-crop" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-vai-nam-ke-soc-doc-form-slim-crop"
                                                            title="Quần Vải Nam Kẻ Sọc Dọc Form Slim Crop">Quần Vải Nam
                                        Kẻ Sọc Dọc Form Slim Crop</a></h3>

                                <div class="price-box">
                                    569.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-xl-20 col-lg-4 col-sm-4 col-6 col-fix">

                        <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356274" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/quan-vai-nam-form-slim-crop"
                                   title="Quần Vải Nam Form Slim Crop">
                                    <img width="234" height="234" class="lazyload"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/quan-vai-nam-10f21pfo002cr1-bl.png?v=1692884389383"
                                         alt="Quần Vải Nam Form Slim Crop">

                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656433">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/quan-vai-nam-form-slim-crop'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/quan-vai-nam-form-slim-crop"
                                       data-handle="quan-vai-nam-form-slim-crop" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="quan-vai-nam-form-slim-crop" tabindex="0" title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                </div>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/quan-vai-nam-form-slim-crop"
                                                            title="Quần Vải Nam Form Slim Crop">Quần Vải Nam Form Slim
                                        Crop</a></h3>

                                <div class="price-box">
                                    569.000₫
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div class="tab-5 tab-content">

                <p class="a-center margin-0 padding-0">Danh mục đang cập nhật</p>

            </div>

        </div>
    </section>

    <section class="section_product_set">
        <div class="container">
            <h2 class="title-module">
                Set sản phẩm nổi bật
            </h2>
            <div class="row">
                <div class="col-lg-4">
                    <div class="thumb">
                        <img alt="Set sản phẩm trang trí" width="512" height="670" class="lazyload loaded"
                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_1.png?1738662131654"
                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_1.png?1738662131654"
                             data-was-processed="true">

                        <div class="thumb-dot" style="	top: 29%;left: 29%;">
        <span class="dot">

        </span>

                            <div class="product-dot left">
                                <div class="image">
                                    <a href="/kinh-mat-gong-tron-chong-tia-uv-hoa-tiet-da-bao-phong-cach-co-dien-thoi-trang-cho-nu"
                                       title="Kính mát gọng tròn chống tia UV họa tiết da báo phong cách cổ điển thời trang cho nữ">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/5c91305059480a41e8ff9a52237b8d2e.png?v=1693926417123"
                                             alt="Kính mát gọng tròn chống tia UV họa tiết da báo phong cách cổ điển thời trang cho nữ">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/kinh-mat-gong-tron-chong-tia-uv-hoa-tiet-da-bao-phong-cach-co-dien-thoi-trang-cho-nu"
                                           title="Kính mát gọng tròn chống tia UV họa tiết da báo phong cách cổ điển thời trang cho nữ">Kính
                                            mát gọng tròn chống tia UV họa tiết da báo phong cách cổ điển thời trang cho
                                            nữ</a>
                                    </h3>
                                    <span>420.000₫</span>
                                </div>
                            </div>

                        </div>

                        <div class="thumb-dot" style="	top: 52%;left: 49%;">
        <span class="dot">

        </span>

                            <div class="product-dot center">
                                <div class="image">
                                    <a href="/ao-khoac-jean-sat-nach-form-rong-ao-jeans-gile-denim-unisex-form-rong-mau-xanh"
                                       title="Áo khoác jean sát nách form rộng, Áo Jeans Gile Denim Unisex Form rộng màu xanh">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/vn-11134207-7qukw-lhdjd9epvlma67.png?v=1693926141180"
                                             alt="Áo khoác jean sát nách form rộng, Áo Jeans Gile Denim Unisex Form rộng màu xanh">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/ao-khoac-jean-sat-nach-form-rong-ao-jeans-gile-denim-unisex-form-rong-mau-xanh"
                                           title="Áo khoác jean sát nách form rộng, Áo Jeans Gile Denim Unisex Form rộng màu xanh">Áo
                                            khoác jean sát nách form rộng, Áo Jeans Gile Denim Unisex Form rộng màu
                                            xanh</a>
                                    </h3>
                                    <span>450.000₫</span>
                                </div>
                            </div>

                        </div>

                        <div class="thumb-dot" style="	top: 29%;left: 66%;">
        <span class="dot">

        </span>

                            <div class="product-dot right">
                                <div class="image">
                                    <a href="/ao-vest-nu-blazer-khan-mau-xanh-coban-co-vit-ao-khoac-cong-so-tay-dai-1-lop-phong-cach-han-quoc"
                                       title="Áo vest nữ blazer màu xanh coban cổ vịt áo khoác công sở tay dài 1 lớp phong cách Hàn Quốc">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/vn-11134207-7qukw-lkg6k5jbkiw8e1.png?v=1693926350670"
                                             alt="Áo vest nữ blazer màu xanh coban cổ vịt áo khoác công sở tay dài 1 lớp phong cách Hàn Quốc">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/ao-vest-nu-blazer-khan-mau-xanh-coban-co-vit-ao-khoac-cong-so-tay-dai-1-lop-phong-cach-han-quoc"
                                           title="Áo vest nữ blazer màu xanh coban cổ vịt áo khoác công sở tay dài 1 lớp phong cách Hàn Quốc">Áo
                                            vest nữ blazer màu xanh coban cổ vịt áo khoác công sở tay dài 1 lớp phong
                                            cách Hàn Quốc</a>
                                    </h3>
                                    <span>490.000₫</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="thumb">
                        <img alt="Set sản phẩm gia dụng" width="512" height="670" class="lazyload loaded"
                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_2.png?1738662131654"
                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_2.png?1738662131654"
                             data-was-processed="true">

                        <div class="thumb-dot" style="	top: 55%;left: 54%;">
        <span class="dot">

        </span>

                            <div class="product-dot center">
                                <div class="image">
                                    <a href="/ao-tay-lo-nu-vai-form-om" title="Áo tay lỡ nữ vải form ôm">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/httpscdn-images-farfetch-content.png?v=1694099976753"
                                             alt="Áo tay lỡ nữ vải form ôm">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/ao-tay-lo-nu-vai-form-om" title="Áo tay lỡ nữ vải form ôm">Áo tay lỡ
                                            nữ vải form ôm</a>
                                    </h3>
                                    <span>Liên hệ</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="thumb">
                        <img alt="Set ấm tách trà" width="512" height="670" class="lazyload loaded"
                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_3.png?1738662131654"
                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_set_3.png?1738662131654"
                             data-was-processed="true">

                        <div class="thumb-dot" style="	top: 65%;left: 60%;">
        <span class="dot">

        </span>

                            <div class="product-dot right">
                                <div class="image">
                                    <a href="/quan-dai-piccolo" title="Quần Dài Piccolo">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/screenshot-6.png?v=1694099852730"
                                             alt="Quần Dài Piccolo">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/quan-dai-piccolo" title="Quần Dài Piccolo">Quần Dài Piccolo</a>
                                    </h3>
                                    <span>880.000₫</span>
                                </div>
                            </div>

                        </div>

                        <div class="thumb-dot" style="	top: 38%;left: 60%;">
        <span class="dot">

        </span>

                            <div class="product-dot right">
                                <div class="image">
                                    <a href="/ao-khoac-denim-thoi-trang-thu-dong-han-quoc-moi-cho-nam"
                                       title="Áo Khoác Denim Thời Trang Thu Đông Hàn Quốc Mới Cho Nam">
                                        <img class="lazyload"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/lazy.png?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/sg-11134201-22090-vlwm9c1tbzhv32.png?v=1694099698047"
                                             alt="Áo Khoác Denim Thời Trang Thu Đông Hàn Quốc Mới Cho Nam">
                                    </a>
                                </div>
                                <div class="info">
                                    <h3 class="line-clamp line-clamp-2">
                                        <a href="/ao-khoac-denim-thoi-trang-thu-dong-han-quoc-moi-cho-nam"
                                           title="Áo Khoác Denim Thời Trang Thu Đông Hàn Quốc Mới Cho Nam">Áo Khoác
                                            Denim Thời Trang Thu Đông Hàn Quốc Mới Cho Nam</a>
                                    </h3>
                                    <span>500.000₫</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="section_product_noibat">
        <div class="container">
            <div class="title">
                <h2 class="title-module">
                    <a href="co-the-ban-thich" title="Bạn có thể thích">Bạn có thể thích</a>
                </h2>
                <a href="co-the-ban-thich" title="Xem thêm">Xem thêm</a>
            </div>

            <Swiper
                :modules="[Autoplay]"
                :slides-per-view="5"
                :space-between="20"
                :autoplay="{ delay: 2500 }"
                :loop="true"
                :class="'product-noibat-swiper2'"
                >
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356100" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         alt="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656045">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-tron-form-fitted" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">Áo Sơ Mi Nam
                                        Tay Dài Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            34%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356100" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         alt="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656045">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-tron-form-fitted" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">Áo Sơ Mi Nam
                                        Tay Dài Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            34%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356100" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         alt="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656045">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-tron-form-fitted" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">Áo Sơ Mi Nam
                                        Tay Dài Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            34%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356100" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         alt="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656045">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-tron-form-fitted" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">Áo Sơ Mi Nam
                                        Tay Dài Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            34%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
                <SwiperSlide>
                    <form action="/cart/add" method="post" class="variants product-action" data-cart-form=""
                              data-id="product-actions-32356100" enctype="multipart/form-data">
                            <div class="product-thumbnail">
                                <a class="image_thumb" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                   title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">
                                    <img width="234" height="234" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         data-src="http://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430"
                                         alt="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted" data-was-processed="true">

                                </a>

                                <a title="xem video" href="javascript:void(0)" data-video="67hxOWKjCsE"
                                   class="playVideo video">
                                    <img alt="play" width="26" height="26" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/play.png?1738662131654"
                                         data-was-processed="true">
                                </a>

                                <div class="action">
                                    <input class="hidden" type="hidden" name="variantId" value="96656045">
                                    <button class="btn-cart btn-views" title="Xem chi tiết" type="button"
                                            onclick="window.location.href='/ao-so-mi-nam-tay-dai-tron-form-fitted'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16"
                                             viewBox="0 0 20 18" fill="none">
                                            <path d="M1 3H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 15H4" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 3L19 3" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M12 15L19 15" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <path d="M1 9H2.5H3.25M13 9H7" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round"></path>
                                            <rect x="6" y="1" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="6" y="13" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                            <rect x="15" y="7" width="4" height="4" rx="1.5" stroke="#fff"
                                                  stroke-width="1.5"></rect>
                                        </svg>
                                    </button>
                                    <a title="Xem nhanh" href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                       data-handle="ao-so-mi-nam-tay-dai-tron-form-fitted" class="quick-view btn-views">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                             viewBox="0 0 34 34" fill="none">
                                            <g clip-path="url(#clip0_476_737)">
                                                <path
                                                    d="M32.1474 17.5204L32.4662 17L32.1474 16.4794C32.0939 16.3925 30.8115 14.3225 28.3199 12.2481C25.0061 9.48935 21.1021 8.03101 17.0298 8.03101C12.9586 8.03101 9.045 9.48857 5.71223 12.246C3.20644 14.3194 1.90944 16.3878 1.85548 16.475L1.52994 17L1.85548 17.525C1.90944 17.6122 3.20644 19.6806 5.71223 21.754C9.045 24.5114 12.9586 25.969 17.0298 25.969C21.1021 25.969 25.0061 24.5107 28.3199 21.7519C30.8115 19.6775 32.0939 17.6075 32.1474 17.5204ZM26.9923 20.2645C24.0113 22.7278 20.6593 23.9765 17.0298 23.9765C13.399 23.9765 10.0362 22.727 7.03491 20.2622C5.48267 18.9875 4.43028 17.6967 3.91486 17C4.43054 16.3027 5.48293 15.0122 7.03491 13.7375C10.0362 11.273 13.3988 10.0232 17.0298 10.0232C20.6593 10.0232 24.011 11.2722 26.9923 13.7352C28.5376 15.012 29.5809 16.3046 30.0893 17C29.5804 17.6957 28.5373 18.9883 26.9923 20.2645Z"></path>
                                                <path
                                                    d="M17 11.0146C13.6997 11.0146 11.0146 13.6997 11.0146 17C11.0146 20.3004 13.6997 22.9854 17 22.9854C20.3003 22.9854 22.9854 20.3004 22.9854 17C22.9854 13.6997 20.3003 11.0146 17 11.0146ZM17 20.9932C14.7982 20.9932 13.0068 19.2018 13.0068 17C13.0068 14.7982 14.7982 13.0068 17 13.0068C19.2018 13.0068 20.9932 14.7982 20.9932 17C20.9932 19.2018 19.2018 20.9932 17 20.9932Z"></path>
                                                <path d="M1.99219 1.99219H6.15088V0H0V6.07617H1.99219V1.99219Z"></path>
                                                <path d="M27.8491 0V1.99219H32.0078V6.07617H34V0H27.8491Z"></path>
                                                <path d="M1.99219 27.9238H0V34H6.15088V32.0078H1.99219V27.9238Z"></path>
                                                <path
                                                    d="M32.0078 32.0078H27.8491V34H34V27.9238H32.0078V32.0078Z"></path>
                                            </g>

                                        </svg>
                                    </a>

                                    <a href="javascript:void(0)" class="setWishlist btn-wishlist btn-views"
                                       data-wish="ao-so-mi-nam-tay-dai-tron-form-fitted" tabindex="0"
                                       title="Thêm vào yêu thích">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27"
                                             viewBox="0 0 30 27" fill="none">
                                            <path
                                                d="M14.1227 5.13447L15 6.73765L15.8772 5.1345C16.3339 4.29999 17.0935 3.18552 18.2071 2.32432C19.3515 1.43921 20.6299 1 22.0312 1C25.9469 1 29 4.19006 29 8.6434C29 10.9975 28.0687 13.0205 26.2843 15.1736C24.4747 17.3573 21.8657 19.585 18.6078 22.3613L18.6078 22.3613L18.6069 22.3621C17.5198 23.2885 16.2849 24.3409 15 25.464C13.7159 24.3416 12.4816 23.2897 11.3956 22.3642L11.3929 22.3619L11.3929 22.3618C8.13468 19.5853 5.52552 17.3575 3.71574 15.1737C1.93131 13.0205 1 10.9975 1 8.6434C1 4.19006 4.0531 1 7.96875 1C9.37012 1 10.6485 1.43921 11.7929 2.32432L12.4047 1.53328L11.7929 2.32432C12.9065 3.18552 13.6661 4.29995 14.1227 5.13447Z"
                                                stroke="#6F768A" stroke-width="2"></path>
                                        </svg>
                                    </a>

                                </div>
                                <div class="stiker">

                                    <img alt="stiker" width="151" height="56" class="lazyload loaded"
                                         src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1738662131654"
                                         data-was-processed="true">

                                </div>

                                <span class="tag-new">New</span>

                            </div>

                            <div class="product-info">
                                <h3 class="product-name"><a class="line-clamp line-clamp-2"
                                                            href="/ao-so-mi-nam-tay-dai-tron-form-fitted"
                                                            title="Áo Sơ Mi Nam Tay Dài Trơn Form Fitted">Áo Sơ Mi Nam
                                        Tay Dài Trơn Form Fitted</a></h3>

                                <div class="group-tag">

                                    <span>Nam</span>

                                    <span>Size S- Đủ size</span>

                                </div>

                                <div class="swatches clearfix">

                                    <div style="background-color:#d5ce8a;" class="swatch-elementes colors  begie">

                                    </div>

                                    <div style="background-color:#3646ea;" class="swatch-elementes colors  xanh-duong">

                                    </div>

                                    <div class="count-color">

                                    </div>

                                </div>

                                <div class="price-box">
                                    520.000₫
                                    <span class="compare-price">790.000₫</span>

                                    <div class="smart"><span>-
            34%
        </span></div>
                                </div>
                            </div>
                        </form>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>


    <section class="section_video">
        <h2 class="title-module container">
            SPECIAL COLLECTIONS
        </h2>
        <div class="pro-video">

            <div class="thumb-content-video">

                <div class="thumb-content row">

                    <div class="content col-md-7 col-12">
                        <span class="content1">LIMITED EDITION</span>
                        <span class="content2">Áo Thun Make Your Own Trail</span>
                        <span class="content3">Sắp mở bán....</span>
                        <div>
                            <a href="#" title="ĐẶT HÀNG TRƯỚC">ĐẶT HÀNG TRƯỚC</a>
                        </div>

                    </div>
                    <div class="col-md-5 no-padding image col-12">
                        <img width="298" height="412" src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/video_image.png?1738662131654"
                             alt="SPECIAL COLLECTIONS">
                    </div>
                </div>
            </div>
            <div class="row no-margin">
                <div class="col-lg-5 no-padding">

                </div>
                <div class="col-lg-7 no-padding">
                    <div class="thumb-video">
                        <video id="video" style="width=100%" class="film video-js"
                               data-setup="{'fluid': true, 'controls': false}" muted="" playsinline="" autoplay=""
                               loop="">
                            <source
                                src="https://www.dropbox.com/s/f07m4ijlnw2c2l1/_import_60c05a3e556e17.85022164_FPpreview.mp4?raw=1"
                                type="video/mp4">
                        </video>
                    </div>

                </div>
            </div>
        </div>

    </section>

    <section class="section_blog">
        <div class="container">
            <div class="title">
                <h2 class="title-module">
                    <a href="bat-kip-xu-huong" title="Tin tức mới nhất">Tin tức mới nhất</a>
                </h2>
                <a href="co-the-ban-thich" title="Xem thêm">Xem thêm</a>
            </div>
            <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :slides-per-view="3"
                :space-between="10"
                :autoplay="{ delay: 3000 }"
                :loop="true"
                :pagination="{ clickable: true }"
                :navigation="true"
                :class="'blog-swiper'"
                >
                <SwiperSlide>
                    <div class="item-blog">
                                <div class="block-thumb">

                                    <a class="thumb" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                    title="Phối đồ với quần relax chuẩn men dành cho nam">
                                        <img width="512" height="385" class="lazyload loaded" src=""
                                            alt="Phối đồ với quần relax chuẩn men dành cho nam" data-was-processed="true">
                                    </a>

                                    <div class="info">

                                        <h3>
                                            <a class="line-clamp line-clamp-1"
                                            href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                            title="Phối đồ với quần relax chuẩn men dành cho nam">Phối đồ với quần relax
                                                chuẩn men dành cho nam</a>
                                        </h3>
                                        <p class="justify line-clamp line-clamp-3">Tuy nhiên,&nbsp;form relax&nbsp;được biết
                                            đến là một form quần rộng rãi với phần ống rộng nên có rất nhiều chàng trai
                                            không biết phải phối đồ cùng form quần này như thế nào để không bị xuề xòa, luộm
                                            thuộm. Nhưng không cần lo lắng, vì trong bài viết ngày hôm nay Routine sẽ mách
                                            cho bạn&nbsp;cách mix quần nam ống rộng chuẩn men, sành điệu&nbsp;nhất cho các
                                            chàng, cùng theo dõi nhé
                                            1. Quần form relax phối cùng áo sơ mi trắng basic
                                            Nếu bạn đang đau đầu vì không biết&nbsp;phối đồ với quần form relax như thế nào,
                                            tại sao...</p>

                                        <a class="see" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                        title="Xem thêm">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg></span> Xem thêm
                                        </a>

                                    </div>

                                    <div class="time-post">
                                        Ngày 26, Tháng 08, 2023
                                    </div>
                                </div>

                            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item-blog">
                                <div class="block-thumb">

                                    <a class="thumb" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                    title="Phối đồ với quần relax chuẩn men dành cho nam">
                                        <img width="512" height="385" class="lazyload loaded" src=""
                                            alt="Phối đồ với quần relax chuẩn men dành cho nam" data-was-processed="true">
                                    </a>

                                    <div class="info">

                                        <h3>
                                            <a class="line-clamp line-clamp-1"
                                            href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                            title="Phối đồ với quần relax chuẩn men dành cho nam">Phối đồ với quần relax
                                                chuẩn men dành cho nam</a>
                                        </h3>
                                        <p class="justify line-clamp line-clamp-3">Tuy nhiên,&nbsp;form relax&nbsp;được biết
                                            đến là một form quần rộng rãi với phần ống rộng nên có rất nhiều chàng trai
                                            không biết phải phối đồ cùng form quần này như thế nào để không bị xuề xòa, luộm
                                            thuộm. Nhưng không cần lo lắng, vì trong bài viết ngày hôm nay Routine sẽ mách
                                            cho bạn&nbsp;cách mix quần nam ống rộng chuẩn men, sành điệu&nbsp;nhất cho các
                                            chàng, cùng theo dõi nhé
                                            1. Quần form relax phối cùng áo sơ mi trắng basic
                                            Nếu bạn đang đau đầu vì không biết&nbsp;phối đồ với quần form relax như thế nào,
                                            tại sao...</p>

                                        <a class="see" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                        title="Xem thêm">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg></span> Xem thêm
                                        </a>

                                    </div>

                                    <div class="time-post">
                                        Ngày 26, Tháng 08, 2023
                                    </div>
                                </div>

                            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item-blog">
                                <div class="block-thumb">

                                    <a class="thumb" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                    title="Phối đồ với quần relax chuẩn men dành cho nam">
                                        <img width="512" height="385" class="lazyload loaded" src=""
                                            alt="Phối đồ với quần relax chuẩn men dành cho nam" data-was-processed="true">
                                    </a>

                                    <div class="info">

                                        <h3>
                                            <a class="line-clamp line-clamp-1"
                                            href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                            title="Phối đồ với quần relax chuẩn men dành cho nam">Phối đồ với quần relax
                                                chuẩn men dành cho nam</a>
                                        </h3>
                                        <p class="justify line-clamp line-clamp-3">Tuy nhiên,&nbsp;form relax&nbsp;được biết
                                            đến là một form quần rộng rãi với phần ống rộng nên có rất nhiều chàng trai
                                            không biết phải phối đồ cùng form quần này như thế nào để không bị xuề xòa, luộm
                                            thuộm. Nhưng không cần lo lắng, vì trong bài viết ngày hôm nay Routine sẽ mách
                                            cho bạn&nbsp;cách mix quần nam ống rộng chuẩn men, sành điệu&nbsp;nhất cho các
                                            chàng, cùng theo dõi nhé
                                            1. Quần form relax phối cùng áo sơ mi trắng basic
                                            Nếu bạn đang đau đầu vì không biết&nbsp;phối đồ với quần form relax như thế nào,
                                            tại sao...</p>

                                        <a class="see" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                        title="Xem thêm">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg></span> Xem thêm
                                        </a>

                                    </div>

                                    <div class="time-post">
                                        Ngày 26, Tháng 08, 2023
                                    </div>
                                </div>

                            </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="item-blog">
                                <div class="block-thumb">

                                    <a class="thumb" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                    title="Phối đồ với quần relax chuẩn men dành cho nam">
                                        <img width="512" height="385" class="lazyload loaded" src=""
                                            alt="Phối đồ với quần relax chuẩn men dành cho nam" data-was-processed="true">
                                    </a>

                                    <div class="info">

                                        <h3>
                                            <a class="line-clamp line-clamp-1"
                                            href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                            title="Phối đồ với quần relax chuẩn men dành cho nam">Phối đồ với quần relax
                                                chuẩn men dành cho nam</a>
                                        </h3>
                                        <p class="justify line-clamp line-clamp-3">Tuy nhiên,&nbsp;form relax&nbsp;được biết
                                            đến là một form quần rộng rãi với phần ống rộng nên có rất nhiều chàng trai
                                            không biết phải phối đồ cùng form quần này như thế nào để không bị xuề xòa, luộm
                                            thuộm. Nhưng không cần lo lắng, vì trong bài viết ngày hôm nay Routine sẽ mách
                                            cho bạn&nbsp;cách mix quần nam ống rộng chuẩn men, sành điệu&nbsp;nhất cho các
                                            chàng, cùng theo dõi nhé
                                            1. Quần form relax phối cùng áo sơ mi trắng basic
                                            Nếu bạn đang đau đầu vì không biết&nbsp;phối đồ với quần form relax như thế nào,
                                            tại sao...</p>

                                        <a class="see" href="/phoi-do-voi-quan-relax-chuan-men-danh-cho-nam"
                                        title="Xem thêm">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg></span> Xem thêm
                                        </a>

                                    </div>

                                    <div class="time-post">
                                        Ngày 26, Tháng 08, 2023
                                    </div>
                                </div>

                            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>


    <section class="section_danhgia">
        <h2 class="title-module container">
            Ý kiến của khách hàng
        </h2>
        <div class="block-danhgia"
             style="    background: linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhgia.jpg?1738662131654') center no-repeat;">
            <div class="container">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :slides-per-view="2"
                :space-between="10"
                :autoplay="{ delay: 3000 }"
                :loop="true"
                :pagination="{ clickable: true }"
                :navigation="true"
                :class="'danhgia-slider'"
                >
                <SwiperSlide>
                    <div class="swiper-slide item1">
                            <div class="row align-items-center">
                                <div class="col-md-7 content">
                                    <div class="info">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"></path>
                                        </svg>
                                        <p>
                                            Sản phẩm giao vô cùng nhanh luôn mọi người ạ. Đã vậy mua trúng đợt giảm giá
                                            nên được giảm rất nhiều nữa chứ
                                        </p>
                                        <h5>
                                            Hoàng Dung
                                        </h5>
                                        <span>Nhân viên văn phòng </span>
                                    </div>
                                </div>
                                <div class="col-md-5 image">
                                    <div class="thumb-image">
                                        <img alt="Hoàng Dung" class="lazyload avatar loaded"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhgia_1.jpg?1738662131654"
                                             data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhgia_1.jpg?1738662131654"
                                             data-was-processed="true">
                                        <img alt="Hoàng Dung" class="frame"
                                             src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/frame_-1.png?1738662131654">
                                    </div>
                                    <ul class="contact-info">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24"
                                                 viewBox="0 0 23 24" fill="none">
                                                <path
                                                    d="M10.5721 8.71302V10.062H9.32697V12.0853H10.5721V18.1555H13.0625V12.0853H14.7186L14.9302 10.062H13.0625V8.88163C13.0625 8.33534 13.1123 8.0453 13.8905 8.0453H14.9302V6.01514H13.2617C11.2695 6.01519 10.5721 7.02686 10.5721 8.71302Z"
                                                    fill="#747474"></path>
                                                <path
                                                    d="M11.6617 1.3457C5.73038 1.3457 0.922119 6.15396 0.922119 12.0853C0.922119 18.0165 5.73038 22.8248 11.6617 22.8248C17.593 22.8248 22.4012 18.0165 22.4012 12.0853C22.4012 6.15396 17.593 1.3457 11.6617 1.3457ZM11.6617 21.8485C6.26958 21.8485 1.89845 17.4773 1.89845 12.0853C1.89845 6.69316 6.26958 2.32204 11.6617 2.32204C17.0538 2.32204 21.4249 6.69316 21.4249 12.0853C21.4249 17.4773 17.0538 21.8485 11.6617 21.8485Z"
                                                    fill="#747474" stroke="#747474"></path>
                                            </svg>
                                            <a href="#" title="Faecbook">Faecbook</a>

                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                 viewBox="0 0 21 21" fill="none">
                                                <g clip-path="url(#clip0_329_415)">
                                                    <path
                                                        d="M15.7499 0H5.25018C2.363 0 0.000305176 2.3627 0.000305176 5.24987V15.7501C0.000305176 18.6365 2.363 21 5.25018 21H15.7499C18.6371 21 20.9998 18.6365 20.9998 15.7501V5.24987C20.9998 2.3627 18.6371 0 15.7499 0ZM19.2498 15.7501C19.2498 17.6795 17.6803 19.25 15.7499 19.25H5.25018C3.32059 19.25 1.75035 17.6795 1.75035 15.7501V5.24987C1.75035 3.32003 3.32059 1.75004 5.25018 1.75004H15.7499C17.6803 1.75004 19.2498 3.32003 19.2498 5.24987V15.7501Z"
                                                        fill="#747474"></path>
                                                    <path
                                                        d="M16.1882 6.12494C16.9131 6.12494 17.5007 5.53732 17.5007 4.81247C17.5007 4.08761 16.9131 3.5 16.1882 3.5C15.4633 3.5 14.8757 4.08761 14.8757 4.81247C14.8757 5.53732 15.4633 6.12494 16.1882 6.12494Z"
                                                        fill="#747474"></path>
                                                    <path
                                                        d="M10.5 5.25C7.59995 5.25 5.25012 7.60009 5.25012 10.4999C5.25012 13.3986 7.59995 15.7503 10.5 15.7503C13.3992 15.7503 15.7499 13.3986 15.7499 10.4999C15.7499 7.60009 13.3992 5.25 10.5 5.25ZM10.5 14.0002C8.56723 14.0002 7.00016 12.4331 7.00016 10.4999C7.00016 8.5666 8.56723 7.00004 10.5 7.00004C12.4328 7.00004 13.9998 8.5666 13.9998 10.4999C13.9998 12.4331 12.4328 14.0002 10.5 14.0002Z"
                                                        fill="#747474"></path>
                                                </g>

                                            </svg>
                                            <a href="#" title="Instagram">Instagram</a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
                
            </div>
        </div>
    </section>


    <section class="section_instagram">
        <div class="thumb-title">
            <h2 class="title-module">Nhật ký <img alt="Nhật ký" width="35" height="35" class="lazyload loaded"
                                                  src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/instagram_-2-_1.png?1738662131654"
                                                  data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/instagram_-2-_1.png?1738662131654"
                                                  data-was-processed="true"> Denny</h2>
            <a class="link" href="https://www.instagram.com/" title="Folower @Denny fashion intagram">Folower @Denny
                fashion intagram </a>
        </div>

        <div class="container">
            <div class="instagram-swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="thumb-image">
                            <img width="500" height="333" class="lazyload loaded"
                                 src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_ins_1.png?1738662131654"
                                 data-src="http://bizweb.dktcdn.net/100/491/897/themes/915864/assets/image_ins_1.png?1738662131654"
                                 alt="Banner" data-was-processed="true">
                            <a href="#" title="Banner">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="swiper-button-next swiper-button-disabled">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
                        <path
                            d="M2.01746 9.81882H21.9292L18.1988 14.0002C17.1272 15.2012 18.7345 17.0026 19.8061 15.8016L23.2035 11.9877L25.4714 9.44161C25.9109 8.946 25.9109 8.14557 25.4714 7.64996L19.8061 1.29244C19.5905 1.04418 19.2938 0.904877 18.9847 0.907759C17.9643 0.907903 17.4636 2.30096 18.1988 3.09405L21.938 7.2754H1.95879C0.3873 7.36279 0.504637 9.9065 2.01746 9.81882Z"
                            fill="black"></path>
                    </svg>
                </div>
                <div class="swiper-button-prev swiper-button-disabled">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
                        <path
                            d="M23.7836 7.28677L3.87185 7.28677L7.60226 3.10543C8.67378 1.90441 7.0665 0.102942 5.99497 1.30396L2.59757 5.11792L0.329633 7.66398C-0.109914 8.15959 -0.109914 8.96002 0.329632 9.45563L5.99497 15.8132C6.21052 16.0614 6.50721 16.2007 6.81633 16.1978C7.83671 16.1977 8.33747 14.8046 7.60226 14.0115L3.863 9.83019L23.8422 9.83019C25.4137 9.7428 25.2964 7.19909 23.7836 7.28677Z"
                            fill="black"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>

</div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>
