import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom'
import CartIcon from './CartIcon'
import { useAuth } from '../utils/useAuth'
import '../components/MyNavbar.css'
import { useCart } from '../utils/useCart'

function MyNavbar(props) {
  const { auth } = useAuth()
  const { clearCart } = useCart()
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        opacity=".7"
        variant="dark"
        fixed="top"
        className="nav-bar w-100"
      >
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{
            color: '#5A3B34',
            fontWeight: 'bold',
          }}
          onClick={() => {
            clearCart()
            window.scrollTo(0, 0)
          }}
        >
          Chocolate
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="me-auto">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
            {/* https://reactrouter.com/en/main/components/nav-link */}
            {!auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="/home"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'blue' : 'black',
                    listStyleType: isActive ? 'none' : 'none',
                  }
                }}
              >
                首頁
              </NavLink>
            )}
            {!auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="product-pages"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                商品一覽
              </NavLink>
            )}
            {!auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="about"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                關於我們
              </NavLink>
            )}
            {/* {!auth.isAuth && (
              <NavLink
                as={NavLink}
                to="cart"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                購物車
              </NavLink>
            )} */}

            {auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="home"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                首頁
              </NavLink>
            )}
            {auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="product-pages"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                商品一覽
              </NavLink>
            )}
            {auth.isAuth && (
              <NavLink
                className="noneline"
                as={NavLink}
                to="about"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                關於我們
              </NavLink>
            )}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="cart"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                購物車
              </NavLink>
            )} */}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="collect"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                收藏頁
              </NavLink>
            )} */}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="profile"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                個人資料
              </NavLink>
            )} */}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="orderform"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                運送&付款方式
              </NavLink>
            )} */}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="order"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                訂單頁
              </NavLink>
            )} */}
            {/* {auth.isAuth && (
              <NavLink
                as={NavLink}
                to="ordermember"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isPending ? 'gray' : 'black',
                  }
                }}
              >
                訂單查詢
              </NavLink>
            )} */}
          </Nav>
          <Nav.Link as={NavLink} to="cart" className="mx-4">
            <CartIcon />
          </Nav.Link>
          {!auth.isAuth && (
            <NavLink
              className="noneline"
              as={NavLink}
              to="register"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? 'bold' : '',
                  color: isPending ? 'gray' : 'black',
                }
              }}
            >
              <i class="fa-regular fa-user mx-3"></i>註冊
            </NavLink>
          )}
          {!auth.isAuth && (
            <NavLink
              className="noneline"
              as={NavLink}
              to="login"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? 'bold' : '',
                  color: isPending ? 'gray' : 'black',
                }
              }}
            >
              登入
            </NavLink>
          )}
          {auth.isAuth && (
            <NavLink
              className="noneline"
              as={NavLink}
              to="memberpage"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? 'bold' : '',
                  color: isPending ? 'gray' : 'black',
                }
              }}
            >
              <i class="fa-regular fa-user mx-3"></i>會員中心
            </NavLink>
          )}
          {auth.isAuth && (
            <NavLink
              className="noneline"
              as={NavLink}
              to="logout"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? 'bold' : '',
                  color: isPending ? 'gray' : 'black',
                }
              }}
            >
              登出
            </NavLink>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
