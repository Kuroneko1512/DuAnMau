<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NekoSports</title>

    <!-- icon library -->
    <link rel="shortcut icon" href="./lib/img/NekoSports_logo.svg" type="image/svg+xml">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./lib/css/style.css">
    <link rel="stylesheet" href="./lib/css/product_detail.css">
    <link rel="stylesheet" href="./lib/css/cart.css">
</head>
<body>
    <div class="container">
        <!-- header start -->
        <header>
            <!-- top header -->
            <div class="logo">
                <img src="./lib/img/NekoSports.svg" alt="">
                
            </div>
            
            <form action="">
                <div class="search">
                    <input type="text" name="" placeholder="Tìm kiếm sản phẩm" required>
                    <button type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
            <div class="right">
                <div class="account-icon" id="account">  
                    <p>Tài khoản</p>
                    <i class="fa-regular fa-user" aria-hidden="true"></i>
                </div>
                <div class="love-icon">
                    <p>Yêu thích</p>
                    <i class="fa-regular fa-heart" aria-hidden="true"></i>
                </div>
                <div class="cart-icon">
                    <p>Giỏ hàng</p>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <div class="cart-count">
                        <span class="count" id="count">99</span>
                    </div>                    
                </div>
            </div>
            
        </header>
        <!-- header end -->