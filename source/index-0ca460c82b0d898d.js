(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
  7596: function (e, t, A) {
    'use strict'
    A.r(t), A.d(t, { default: function () {return ue} })
    var s = A(7294), i = A(6215), n = A(1355), r = A(1799), a = A(243), o = A(5893), l = function () {
        var e = [{ name: 'Docs', href: 'https://docs.certux.fi/certux/' }],
          t = (0, s.useState)(0),
          A = t[0],
          l = t[1]
        return (0, s.useEffect)((function () {
          var e = function () {return l(window.pageYOffset / 300)}
          return window.removeEventListener('scroll', e), window.addEventListener('scroll', e, { passive: !0 }), function () {return window.removeEventListener('scroll', e)}
        }), []), (0, o.jsxs)(i.J, {
          className: 'fixed top-0 w-full ease-in-out transition-opacity duration-1500  bg-nexter-bg z-50 md:pl-6 md:pr-8 px-3 md:pt-[25px] lgDesktop:px-12 lgDesktop:pt-6 pt-[14px] pb-6 bg-white '.concat(A ? 'bg-opacity-['.concat(A.toFixed(2), ']') : 'bg-opacity-0'),
          children: [
            (0, o.jsxs)('div', {
              className: 'flex items-center justify-between w-full',
              children: [
                (0, o.jsxs)('div', {
                  className: 'relative flex items-center justify-center w-full lg:justify-between md:w-auto',
                  children: [
                    (0, o.jsx)('div', {
                      className: 'absolute top-0 left-0  md:hidden',
                      children: (0, o.jsxs)(i.J.Button, {
                        className: 'inline-flex items-center justify-center p-1 rounded bg-white-light-06 text-nexter-white focus:outline-none shadow-box-black-shadow',
                        children: [(0, o.jsx)('span', {
                          className: 'sr-only',
                          children: 'Open menu'
                        }), (0, o.jsx)(r, { className: 'w-6 h-6', 'aria-hidden': 'true' })]
                      })
                    }),
                    (0, o.jsxs)('div', {
                      className: 'flex justify-end flex-col sm:items-baseline items-center w-full lg:w-auto',
                      children: [
                        (0, o.jsxs)('a', {
                          href: '#',
                          className: 'flex',
                          children: [(0, o.jsx)('span', { className: 'sr-only', children: 'Certux' }), (0, o.jsx)(m, {})]
                        }),
                        // (0, o.jsx)('div', {
                        //   className: 'flex justify-center w-full lg:w-auto ',
                        //   children: (0, o.jsx)('a', {
                        //     href: '#',
                        //     className: 'flex',
                        //     children: (0, o.jsx)('span', {
                        //       className: 'text-xs ml-[48px] mt-[2px]',
                        //       children: 'Previously Bhavish'
                        //     })
                        //   })
                        // })
                      ]
                    })
                  ]
                }),
                (0, o.jsx)('div', {
                  className: 'items-center hidden md:flex',
                  children: e.map((function (e) {
                    return (0, o.jsx)('a', {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: e.href,
                      className: 'px-6 py-3 text-sm leading-[22px] font-medium transition-all divide-purple-500 rounded-md text-nexter-white hover:bg-gradient-primary',
                      children: e.name
                    }, e.name)
                  }))
                })
              ]
            }),
            (0, o.jsx)(n.u, {
              as: s.Fragment,
              enter: 'duration-200 ease-out',
              enterFrom: 'opacity-0 scale-95',
              enterTo: 'opacity-100 scale-100',
              leave: 'duration-100 ease-in',
              leaveFrom: 'opacity-100 scale-100',
              leaveTo: 'opacity-0 scale-95',
              children: (0, o.jsx)(i.J.Panel, {
                focus: !0,
                className: 'absolute inset-x-0 top-0 transition origin-top-right transform md:hidden z-[9999] bg-nexter-bg p-5',
                children: (0, o.jsx)('div', {
                  className: 'bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5',
                  children: (0, o.jsxs)('div', {
                    className: '',
                    children: [
                      (0, o.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [(0, o.jsx)('div', {
                          children: (0, o.jsxs)('a', {
                            href: '#',
                            className: 'flex focus:outline-none',
                            children: [(0, o.jsx)('span', {
                              className: 'sr-only',
                              children: 'Certux'
                            }), (0, o.jsx)(m, {})]
                          })
                        }), (0, o.jsx)('div', {
                          className: '-mr-2',
                          children: (0, o.jsxs)(i.J.Button, {
                            className: 'inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md focus:outline-none',
                            children: [(0, o.jsx)('span', {
                              className: 'sr-only',
                              children: 'Close menu'
                            }), (0, o.jsx)(a, { className: 'w-6 h-6', 'aria-hidden': 'true' })]
                          })
                        })]
                      }),
                      (0, o.jsx)('div', {
                        className: 'mt-3',
                        children: (0, o.jsx)('nav', {
                          className: 'grid gap-0',
                          children: e.map((function (e) {
                            return (0, o.jsx)('a', {
                              href: e.href,
                              className: 'flex items-center p-3 rounded-lg hover:bg-gradient-primary',
                              children: (0, o.jsx)('div', {
                                className: 'ml-4 text-base font-medium text-nexter-white',
                                children: e.name
                              })
                            }, e.name)
                          }))
                        })
                      })
                    ]
                  })
                })
              })
            })]
        })
      },
      c = A(9499)
    var d = function () {
      return (0, o.jsxs)(
        'img', {
          className: '',
          src: './source/certux.svg',
          alt: 'logo'
        }
      )
    }
    var g = [
        {
          name: 'TradingView', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '147',
              height: '65',
              viewBox: '0 0 147 65',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M68.7964 23.5555H59.6774V9.19195H50.5583V0.0644531H68.7964V23.5555Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M87.0485 23.5555H76.6228L86.3813 0.0644531H96.807L87.0485 23.5555Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M76.6123 10.4946C79.4894 10.4946 81.8217 8.1566 81.8217 5.27247C81.8217 2.38834 79.4894 0.050293 76.6123 0.050293C73.7353 0.050293 71.403 2.38834 71.403 5.27247C71.403 8.1566 73.7353 10.4946 76.6123 10.4946Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M4.79335 59.3912H8.49306V44.8528H13.3371V41.3365H0V44.8421H4.80136L4.79335 59.3912Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M13.3425 59.3913H16.8102V53.316C16.8102 51.2062 17.9011 49.9361 19.5469 49.9361C20.083 49.9334 20.6155 50.0239 21.1207 50.2035V46.6845C20.7414 46.574 20.3473 46.5226 19.9524 46.5321C19.2696 46.5345 18.6035 46.7446 18.0424 47.1347C17.4814 47.5248 17.0516 48.0765 16.8102 48.7168V46.6845H13.3425V59.3913Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M27.7918 59.6718C29.5416 59.6718 30.8593 58.7814 31.4435 57.9685V59.3911H34.9111V46.6843H31.4435V48.1069C30.8593 47.3047 29.5416 46.4036 27.7918 46.4036C24.4202 46.4036 21.8328 49.4546 21.8328 53.0377C21.8328 56.6208 24.4228 59.6718 27.7918 59.6718ZM28.528 56.4925C26.5994 56.4925 25.3271 55.0458 25.3271 53.0377C25.3271 51.0295 26.5941 49.5802 28.528 49.5802C30.4619 49.5802 31.7289 51.0295 31.7289 53.0377C31.7289 55.0458 30.4539 56.4925 28.528 56.4925Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M43.1857 59.6719C44.9355 59.6719 46.2532 58.7815 46.8374 57.9686V59.3911H50.305V40.3284H46.8294V48.107C46.2452 47.3048 44.9275 46.4036 43.1777 46.4036C39.8141 46.417 37.2267 49.4546 37.2267 53.0378C37.2267 56.6209 39.8141 59.6719 43.1857 59.6719ZM43.9219 56.4925C41.9934 56.4925 40.721 55.0459 40.721 53.0378C40.721 51.0296 41.988 49.5803 43.9219 49.5803C45.8558 49.5803 47.1228 51.0296 47.1228 53.0378C47.1228 55.0459 45.8478 56.4925 43.9219 56.4925Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M55.1569 44.5987C55.5932 44.5987 56.0197 44.469 56.3824 44.226C56.7452 43.983 57.028 43.6376 57.1949 43.2335C57.3619 42.8295 57.4056 42.3848 57.3204 41.9559C57.2353 41.5269 57.0252 41.1329 56.7167 40.8236C56.4082 40.5143 56.0152 40.3037 55.5872 40.2184C55.1593 40.1331 54.7158 40.1769 54.3127 40.3442C53.9096 40.5116 53.5651 40.795 53.3227 41.1587C53.0803 41.5224 52.9509 41.9499 52.9509 42.3873C52.953 42.9731 53.1861 43.5344 53.5994 43.9486C54.0126 44.3629 54.5725 44.5965 55.1569 44.5987ZM53.4337 59.3911H56.9014V46.6844H53.4337V59.3911Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M59.9876 59.3911H63.4553V53.1901C63.4553 50.7488 64.6476 49.5802 66.2694 49.5802C67.7152 49.5802 68.502 50.698 68.502 52.5216V59.383H71.9697V51.944C71.9697 48.6417 70.1452 46.4036 67.075 46.4036C65.4292 46.4036 64.1408 47.1148 63.4499 48.1309V46.6843H59.9823L59.9876 59.3911Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M80.8201 56.086C80.1768 56.0913 79.5465 55.9049 79.0091 55.5504C78.4717 55.196 78.0515 54.6895 77.8017 54.0952C77.552 53.5009 77.4841 52.8456 77.6065 52.2125C77.729 51.5794 78.0363 50.9971 78.4895 50.5394C78.9426 50.0817 79.5213 49.7693 80.1519 49.6419C80.7825 49.5144 81.4366 49.5777 82.0313 49.8236C82.626 50.0695 83.1344 50.487 83.492 51.023C83.8495 51.5591 84.0402 52.1896 84.0397 52.8345C84.0498 53.2622 83.9736 53.6876 83.8157 54.0851C83.6578 54.4826 83.4214 54.844 83.1207 55.1476C82.82 55.4513 82.4613 55.691 82.0659 55.8522C81.6706 56.0135 81.2468 56.093 80.8201 56.086ZM80.412 64.9583C84.2931 64.9583 87.2326 62.9742 87.2326 58.399V46.6843H83.7649V48.1069C83.0821 47.1148 81.711 46.4036 80.0892 46.4036C76.7683 46.4036 74.1062 49.2513 74.1062 52.8345C74.1062 56.4176 76.7736 59.2386 80.0892 59.2386C81.711 59.2386 83.0821 58.5006 83.7649 57.5621V58.4257C83.7649 60.458 82.4312 61.9019 80.3666 61.9019C78.8905 61.921 77.4671 61.3527 76.4082 60.3216L74.5063 62.9127C75.9521 64.3326 78.2087 64.9583 80.412 64.9583Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M94.5759 59.3912H97.8488L105.302 41.3365H101.244L96.2243 53.8641L91.1296 41.3365H87.1498L94.5759 59.3912Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M108.489 44.5987C108.926 44.5987 109.352 44.469 109.715 44.226C110.078 43.983 110.36 43.6376 110.527 43.2335C110.694 42.8295 110.738 42.3848 110.653 41.9559C110.568 41.5269 110.358 41.1329 110.049 40.8236C109.741 40.5143 109.348 40.3037 108.92 40.2184C108.492 40.1331 108.048 40.1769 107.645 40.3442C107.242 40.5116 106.898 40.795 106.655 41.1587C106.413 41.5224 106.283 41.9499 106.283 42.3873C106.285 42.9733 106.518 43.535 106.931 43.9494C107.344 44.3638 107.905 44.5972 108.489 44.5987ZM106.764 59.3911H110.231V46.6844H106.764V59.3911Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M119.229 59.672C121.896 59.672 123.918 58.5516 125.097 56.8242L122.512 54.8936C121.928 55.7813 120.84 56.498 119.242 56.498C117.567 56.498 116.073 55.5594 115.87 53.8561H125.35C125.402 53.4599 125.42 53.06 125.404 52.6608C125.404 48.5188 122.488 46.4091 119.165 46.4091C115.31 46.4091 112.496 49.2809 112.496 53.0432C112.509 57.0541 115.449 59.672 119.229 59.672ZM116.006 51.4976C116.337 49.9467 117.783 49.2863 119.074 49.2863C120.365 49.2863 121.637 49.9735 121.939 51.4976H116.006Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                }),
                (0, o.jsx)('path', {
                  d: 'M138.426 59.3913H141.875L146.057 46.6846H142.323L139.938 54.8161L137.362 46.6846H134.694L132.133 54.8161L129.733 46.6846H126.028L130.237 59.3913H133.686L136.041 52.1716L138.426 59.3913Z',
                  fill: 'white',
                  fillOpacity: '0.4'
                })
              ]
            })
          }, link: 'https://in.tradingview.com/'
        },
        {
          name: 'Nautilus Chain', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '158',
              height: '99',
              viewBox: '0 0 158 99',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('rect', {
                  x: '50',
                  width: '58',
                  height: '58',
                  fill: 'url(#pattern0)',
                }),
                (0, o.jsx)('path', {
                  d: 'M5.256 81H1.56V64.824H5.616L9.384 71.52C9.912 72.464 10.368 73.352 10.752 74.184C11.152 75 11.408 75.576 11.52 75.912L11.712 76.44C11.552 75.256 11.472 73.616 11.472 71.52V64.824H15.168V81H11.112L7.248 74.304C6.736 73.44 6.28 72.592 5.88 71.76C5.496 70.912 5.232 70.288 5.088 69.888L4.896 69.288C5.136 70.728 5.256 72.4 5.256 74.304V81ZM22.6384 78.6C23.1344 78.6 23.5184 78.448 23.7904 78.144C24.0624 77.84 24.1984 77.424 24.1984 76.896V76.008H23.0704C22.4784 76.008 22.0224 76.136 21.7024 76.392C21.3824 76.648 21.2224 76.976 21.2224 77.376C21.2224 78.192 21.6944 78.6 22.6384 78.6ZM24.3664 79.512C23.8544 80.552 22.8464 81.072 21.3424 81.072C20.1584 81.072 19.2304 80.736 18.5584 80.064C17.9024 79.392 17.5744 78.552 17.5744 77.544C17.5744 76.376 17.9984 75.472 18.8464 74.832C19.7104 74.176 20.9824 73.848 22.6624 73.848H24.1984V73.008C24.1984 71.984 23.5184 71.472 22.1584 71.472C20.8464 71.472 19.6304 71.84 18.5104 72.576V69.432C19.4704 68.888 20.8544 68.616 22.6624 68.616C24.3904 68.616 25.6784 68.992 26.5264 69.744C27.3744 70.48 27.7984 71.632 27.7984 73.2V81H24.3664V79.512ZM41.5894 81H38.0854V79.056C37.4454 80.416 36.2134 81.096 34.3894 81.096C33.1414 81.096 32.1654 80.752 31.4614 80.064C30.7734 79.36 30.4294 78.328 30.4294 76.968V68.832H33.9334V76.176C33.9334 77.6 34.5574 78.312 35.8054 78.312C37.3254 78.312 38.0854 77.296 38.0854 75.264V68.832H41.5894V81ZM51.5753 80.736C50.9833 80.992 50.1833 81.12 49.1753 81.12C46.4073 81.12 45.0233 79.736 45.0233 76.968V71.4H43.2713V68.832H45.0233V65.952H48.5273V68.832H51.3593V71.4H48.5273V76.992C48.5273 77.424 48.6473 77.752 48.8873 77.976C49.1433 78.2 49.4713 78.312 49.8713 78.312C50.5113 78.312 51.0793 78.152 51.5753 77.832V80.736ZM57.3531 81H53.8491V68.832H57.3531V81ZM57.0411 63.864C57.4411 64.264 57.6411 64.744 57.6411 65.304C57.6411 65.864 57.4411 66.344 57.0411 66.744C56.6411 67.144 56.1611 67.344 55.6011 67.344C55.0411 67.344 54.5611 67.144 54.1611 66.744C53.7611 66.344 53.5611 65.864 53.5611 65.304C53.5611 64.744 53.7611 64.264 54.1611 63.864C54.5611 63.464 55.0411 63.264 55.6011 63.264C56.1611 63.264 56.6411 63.464 57.0411 63.864ZM63.9859 81H60.4819V64.032H63.9859V81ZM78.0347 81H74.5307V79.056C73.8907 80.416 72.6587 81.096 70.8347 81.096C69.5867 81.096 68.6107 80.752 67.9067 80.064C67.2187 79.36 66.8747 78.328 66.8747 76.968V68.832H70.3787V76.176C70.3787 77.6 71.0027 78.312 72.2507 78.312C73.7707 78.312 74.5307 77.296 74.5307 75.264V68.832H78.0347V81ZM89.2206 77.328C89.2206 78.528 88.7886 79.456 87.9246 80.112C87.0606 80.768 85.9166 81.096 84.4926 81.096C83.0206 81.096 81.7886 80.848 80.7966 80.352V77.232C81.9006 78 83.0686 78.384 84.3006 78.384C85.1806 78.384 85.6206 78.104 85.6206 77.544C85.6206 77.4 85.5806 77.264 85.5006 77.136C85.4206 77.008 85.2846 76.888 85.0926 76.776C84.9006 76.664 84.7246 76.576 84.5646 76.512C84.4046 76.432 84.1726 76.328 83.8686 76.2C83.5646 76.072 83.3326 75.968 83.1726 75.888C81.5566 75.12 80.7486 73.968 80.7486 72.432C80.7486 71.248 81.1966 70.328 82.0926 69.672C83.0046 69.016 84.1326 68.688 85.4766 68.688C86.7246 68.688 87.7646 68.856 88.5966 69.192V72.192C87.7486 71.696 86.7566 71.448 85.6206 71.448C85.2046 71.448 84.8846 71.536 84.6606 71.712C84.4366 71.872 84.3246 72.08 84.3246 72.336C84.3246 72.48 84.3646 72.616 84.4446 72.744C84.5246 72.872 84.6526 72.992 84.8286 73.104C85.0206 73.216 85.1966 73.32 85.3566 73.416C85.5326 73.496 85.7646 73.6 86.0526 73.728C86.3566 73.856 86.5966 73.968 86.7726 74.064C87.5086 74.448 88.1006 74.896 88.5486 75.408C88.9966 75.904 89.2206 76.544 89.2206 77.328ZM109.442 80.28C108.466 80.888 107.058 81.192 105.218 81.192C102.85 81.192 100.866 80.432 99.2657 78.912C97.6817 77.376 96.8897 75.392 96.8897 72.96C96.8897 70.496 97.6577 68.488 99.1937 66.936C100.746 65.384 102.762 64.608 105.242 64.608C107.066 64.608 108.466 64.912 109.442 65.52V69.072C108.242 68.336 106.906 67.968 105.434 67.968C104.138 67.968 103.05 68.424 102.17 69.336C101.29 70.232 100.85 71.44 100.85 72.96C100.85 74.448 101.29 75.632 102.17 76.512C103.05 77.376 104.186 77.808 105.578 77.808C107.082 77.808 108.37 77.424 109.442 76.656V80.28ZM123.248 81H119.744V73.8C119.744 73.096 119.568 72.544 119.216 72.144C118.864 71.744 118.408 71.544 117.848 71.544C117.608 71.544 117.376 71.584 117.152 71.664C116.944 71.728 116.712 71.856 116.456 72.048C116.2 72.224 115.992 72.536 115.832 72.984C115.672 73.416 115.592 73.944 115.592 74.568V81H112.088V64.032H115.592V70.896C116.216 69.44 117.432 68.712 119.24 68.712C120.424 68.712 121.384 69.088 122.12 69.84C122.872 70.592 123.248 71.728 123.248 73.248V81ZM130.474 78.6C130.97 78.6 131.354 78.448 131.626 78.144C131.898 77.84 132.034 77.424 132.034 76.896V76.008H130.906C130.314 76.008 129.858 76.136 129.538 76.392C129.218 76.648 129.058 76.976 129.058 77.376C129.058 78.192 129.53 78.6 130.474 78.6ZM132.202 79.512C131.69 80.552 130.682 81.072 129.178 81.072C127.994 81.072 127.066 80.736 126.394 80.064C125.738 79.392 125.41 78.552 125.41 77.544C125.41 76.376 125.834 75.472 126.682 74.832C127.546 74.176 128.818 73.848 130.498 73.848H132.034V73.008C132.034 71.984 131.354 71.472 129.994 71.472C128.682 71.472 127.466 71.84 126.346 72.576V69.432C127.306 68.888 128.69 68.616 130.498 68.616C132.226 68.616 133.514 68.992 134.362 69.744C135.21 70.48 135.634 71.632 135.634 73.2V81H132.202V79.512ZM142.009 81H138.505V68.832H142.009V81ZM141.697 63.864C142.097 64.264 142.297 64.744 142.297 65.304C142.297 65.864 142.097 66.344 141.697 66.744C141.297 67.144 140.817 67.344 140.257 67.344C139.697 67.344 139.217 67.144 138.817 66.744C138.417 66.344 138.217 65.864 138.217 65.304C138.217 64.744 138.417 64.264 138.817 63.864C139.217 63.464 139.697 63.264 140.257 63.264C140.817 63.264 141.297 63.464 141.697 63.864ZM156.178 81H152.674V73.752C152.674 73.032 152.506 72.488 152.17 72.12C151.834 71.736 151.362 71.544 150.754 71.544C150.114 71.544 149.578 71.8 149.146 72.312C148.73 72.808 148.522 73.56 148.522 74.568V81H145.018V68.832H148.522V70.896C148.826 70.224 149.29 69.696 149.914 69.312C150.554 68.912 151.314 68.712 152.194 68.712C153.442 68.712 154.418 69.088 155.122 69.84C155.826 70.576 156.178 71.664 156.178 73.104V81Z',
                  fill: '#747479',
                }),
                (0, o.jsxs)('defs', {
                  children: [
                    (0, o.jsx)('pattern', {
                      id: 'pattern0',
                      patternContentUnits: 'objectBoundingBox',
                      width: '1',
                      height: '1',
                      children: (0, o.jsx)('use', {
                        xlinkHref: '#image0_424_796',
                        transform: 'scale(0.00277778)'
                      })
                    }),
                    (0, o.jsx)('image', {
                      id: 'image0_424_796',
                      width: '360',
                      height: '360',
                      xlinkHref: 'data:image/png;base64,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'
                    })
                  ]
                })]
            })
          }, link: 'https://nautchain.xyz/'
        },
        {
          name: 'Polygon Chain',
          Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '158',
              height: '86',
              viewBox: '0 0 158 86',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M7.128 62.768H5.256V68H1.56V51.824H7.128C8.92 51.824 10.368 52.328 11.472 53.336C12.592 54.344 13.152 55.624 13.152 57.176C13.152 58.952 12.568 60.328 11.4 61.304C10.248 62.28 8.824 62.768 7.128 62.768ZM6.696 54.776H5.256V59.84H6.48C8.432 59.84 9.408 58.952 9.408 57.176C9.408 55.576 8.504 54.776 6.696 54.776ZM26.2914 61.856C26.2914 63.696 25.7634 65.216 24.7074 66.416C23.6674 67.6 22.2114 68.192 20.3394 68.192C18.4354 68.192 16.9634 67.624 15.9234 66.488C14.8834 65.336 14.3634 63.864 14.3634 62.072C14.3634 60.2 14.9074 58.664 15.9954 57.464C17.0834 56.248 18.5314 55.64 20.3394 55.64C22.2274 55.64 23.6914 56.224 24.7314 57.392C25.7714 58.56 26.2914 60.048 26.2914 61.856ZM18.5874 59.384C18.2034 60.04 18.0114 60.888 18.0114 61.928C18.0114 62.968 18.2034 63.824 18.5874 64.496C18.9874 65.152 19.5794 65.48 20.3634 65.48C21.1314 65.48 21.6994 65.16 22.0674 64.52C22.4514 63.864 22.6434 63.016 22.6434 61.976C22.6434 59.592 21.8674 58.4 20.3154 58.4C19.5474 58.4 18.9714 58.728 18.5874 59.384ZM32.2046 68H28.7006V51.032H32.2046V68ZM42.0294 67.64C40.7654 71.048 38.8374 72.752 36.2454 72.752C35.7494 72.752 35.3014 72.712 34.9014 72.632V69.848C35.1574 69.912 35.4294 69.944 35.7174 69.944C37.0454 69.944 38.0054 69.232 38.5974 67.808L33.8934 55.832H37.7094L39.0294 59.624C39.3654 60.6 39.6374 61.44 39.8454 62.144C40.0694 62.848 40.2054 63.312 40.2534 63.536L40.3254 63.872C40.5014 63.232 40.9334 61.816 41.6214 59.624L42.8214 55.832H46.4214L42.0294 67.64ZM59.2669 66.824C59.2669 68.776 58.6829 70.24 57.5149 71.216C56.3469 72.208 54.8829 72.704 53.1229 72.704C51.4109 72.704 49.9149 72.4 48.6349 71.792V68.216C49.7549 69.112 51.1309 69.56 52.7629 69.56C53.8189 69.56 54.5869 69.336 55.0669 68.888C55.5469 68.44 55.7869 67.736 55.7869 66.776V65.96C55.0829 67.048 53.9629 67.592 52.4269 67.592C51.0829 67.592 49.9229 67.096 48.9469 66.104C47.9869 65.112 47.5069 63.64 47.5069 61.688C47.5069 59.96 47.9709 58.536 48.8989 57.416C49.8429 56.28 51.0749 55.712 52.5949 55.712C54.0349 55.712 55.0989 56.288 55.7869 57.44V55.832H59.2669V66.824ZM51.1549 61.712C51.1549 62.72 51.3469 63.488 51.7309 64.016C52.1149 64.544 52.6669 64.808 53.3869 64.808C54.1389 64.808 54.7229 64.528 55.1389 63.968C55.5709 63.392 55.7869 62.704 55.7869 61.904C55.7869 59.728 54.9949 58.64 53.4109 58.64C52.7069 58.64 52.1549 58.912 51.7549 59.456C51.3549 60 51.1549 60.752 51.1549 61.712ZM73.3539 61.856C73.3539 63.696 72.8259 65.216 71.7699 66.416C70.7299 67.6 69.2739 68.192 67.4019 68.192C65.4979 68.192 64.0259 67.624 62.9859 66.488C61.9459 65.336 61.4259 63.864 61.4259 62.072C61.4259 60.2 61.9699 58.664 63.0579 57.464C64.1459 56.248 65.5939 55.64 67.4019 55.64C69.2899 55.64 70.7539 56.224 71.7939 57.392C72.8339 58.56 73.3539 60.048 73.3539 61.856ZM65.6499 59.384C65.2659 60.04 65.0739 60.888 65.0739 61.928C65.0739 62.968 65.2659 63.824 65.6499 64.496C66.0499 65.152 66.6419 65.48 67.4259 65.48C68.1939 65.48 68.7619 65.16 69.1299 64.52C69.5139 63.864 69.7059 63.016 69.7059 61.976C69.7059 59.592 68.9299 58.4 67.3779 58.4C66.6099 58.4 66.0339 58.728 65.6499 59.384ZM86.8031 68H83.2991V60.752C83.2991 60.032 83.1311 59.488 82.7951 59.12C82.4591 58.736 81.9871 58.544 81.3791 58.544C80.7391 58.544 80.2031 58.8 79.7711 59.312C79.3551 59.808 79.1471 60.56 79.1471 61.568V68H75.6431V55.832H79.1471V57.896C79.4511 57.224 79.9151 56.696 80.5391 56.312C81.1791 55.912 81.9391 55.712 82.8191 55.712C84.0671 55.712 85.0431 56.088 85.7471 56.84C86.4511 57.576 86.8031 58.664 86.8031 60.104V68ZM107.637 67.28C106.661 67.888 105.253 68.192 103.413 68.192C101.045 68.192 99.061 67.432 97.461 65.912C95.877 64.376 95.085 62.392 95.085 59.96C95.085 57.496 95.853 55.488 97.389 53.936C98.941 52.384 100.957 51.608 103.437 51.608C105.261 51.608 106.661 51.912 107.637 52.52V56.072C106.437 55.336 105.101 54.968 103.629 54.968C102.333 54.968 101.245 55.424 100.365 56.336C99.485 57.232 99.045 58.44 99.045 59.96C99.045 61.448 99.485 62.632 100.365 63.512C101.245 64.376 102.381 64.808 103.773 64.808C105.277 64.808 106.565 64.424 107.637 63.656V67.28ZM121.444 68H117.94V60.8C117.94 60.096 117.764 59.544 117.412 59.144C117.06 58.744 116.604 58.544 116.044 58.544C115.804 58.544 115.572 58.584 115.348 58.664C115.14 58.728 114.908 58.856 114.652 59.048C114.396 59.224 114.188 59.536 114.028 59.984C113.868 60.416 113.788 60.944 113.788 61.568V68H110.284V51.032H113.788V57.896C114.412 56.44 115.628 55.712 117.436 55.712C118.62 55.712 119.58 56.088 120.316 56.84C121.068 57.592 121.444 58.728 121.444 60.248V68ZM128.67 65.6C129.166 65.6 129.55 65.448 129.822 65.144C130.094 64.84 130.23 64.424 130.23 63.896V63.008H129.102C128.51 63.008 128.054 63.136 127.734 63.392C127.414 63.648 127.254 63.976 127.254 64.376C127.254 65.192 127.726 65.6 128.67 65.6ZM130.398 66.512C129.886 67.552 128.878 68.072 127.374 68.072C126.19 68.072 125.262 67.736 124.59 67.064C123.934 66.392 123.606 65.552 123.606 64.544C123.606 63.376 124.03 62.472 124.878 61.832C125.742 61.176 127.014 60.848 128.694 60.848H130.23V60.008C130.23 58.984 129.55 58.472 128.19 58.472C126.878 58.472 125.662 58.84 124.542 59.576V56.432C125.502 55.888 126.886 55.616 128.694 55.616C130.422 55.616 131.71 55.992 132.558 56.744C133.406 57.48 133.83 58.632 133.83 60.2V68H130.398V66.512ZM140.205 68H136.701V55.832H140.205V68ZM139.893 50.864C140.293 51.264 140.493 51.744 140.493 52.304C140.493 52.864 140.293 53.344 139.893 53.744C139.493 54.144 139.013 54.344 138.453 54.344C137.893 54.344 137.413 54.144 137.013 53.744C136.613 53.344 136.413 52.864 136.413 52.304C136.413 51.744 136.613 51.264 137.013 50.864C137.413 50.464 137.893 50.264 138.453 50.264C139.013 50.264 139.493 50.464 139.893 50.864ZM154.373 68H150.869V60.752C150.869 60.032 150.701 59.488 150.365 59.12C150.029 58.736 149.557 58.544 148.949 58.544C148.309 58.544 147.773 58.8 147.341 59.312C146.925 59.808 146.717 60.56 146.717 61.568V68H143.213V55.832H146.717V57.896C147.021 57.224 147.485 56.696 148.109 56.312C148.749 55.912 149.509 55.712 150.389 55.712C151.637 55.712 152.613 56.088 153.317 56.84C154.021 57.576 154.373 58.664 154.373 60.104V68Z',
                  fill: '#747479',
                }),
                (0, o.jsx)('rect', {
                  x: '60',
                  width: '36',
                  height: '31',
                  fill: 'url(#pattern1)',
                }),
                (0, o.jsxs)('defs', {
                  children: [
                    (0, o.jsx)('pattern', {
                      id: 'pattern1',
                      patternContentUnits: 'objectBoundingBox',
                      width: '1',
                      height: '1',
                      children: (0, o.jsx)('use', {
                        xlinkHref: '#image0_424_797',
                        transform: 'matrix(0.00396825 0 0 0.00460829 0 -0.0184332)'
                      })
                    }),
                    (0, o.jsx)('image', {
                      id: 'image0_424_797',
                      width: '252',
                      height: '225',
                      xlinkHref: 'data:image/png;base64,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'
                    })
                  ]
                })
              ]
            })
          }, link: 'https://polygon.technology/'
        },
        {
          name: 'Quick Swap',
          Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '128',
              height: '89',
              viewBox: '0 0 128 89',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                (0, o.jsx)('path', {
                  d: 'M16.704 62.864C16.704 64.56 16.36 66.048 15.672 67.328C14.984 68.608 14.016 69.584 12.768 70.256L17.712 73.016L13.512 74.624L8.736 71.168C6.368 71.152 4.48 70.384 3.072 68.864C1.664 67.344 0.96 65.344 0.96 62.864C0.96 60.384 1.672 58.384 3.096 56.864C4.536 55.328 6.448 54.56 8.832 54.56C11.232 54.56 13.144 55.32 14.568 56.84C15.992 58.36 16.704 60.368 16.704 62.864ZM5.976 59.264C5.272 60.144 4.92 61.344 4.92 62.864C4.92 64.384 5.272 65.592 5.976 66.488C6.68 67.368 7.632 67.808 8.832 67.808C10.032 67.808 10.984 67.368 11.688 66.488C12.392 65.592 12.744 64.384 12.744 62.864C12.744 61.344 12.392 60.144 11.688 59.264C10.984 58.368 10.032 57.92 8.832 57.92C7.632 57.92 6.68 58.368 5.976 59.264ZM30.2691 71H26.7651V69.056C26.1251 70.416 24.8931 71.096 23.0691 71.096C21.8211 71.096 20.8451 70.752 20.1411 70.064C19.4531 69.36 19.1091 68.328 19.1091 66.968V58.832H22.6131V66.176C22.6131 67.6 23.2371 68.312 24.4851 68.312C26.0051 68.312 26.7651 67.296 26.7651 65.264V58.832H30.2691V71ZM36.7749 71H33.2709V58.832H36.7749V71ZM36.4629 53.864C36.8629 54.264 37.0629 54.744 37.0629 55.304C37.0629 55.864 36.8629 56.344 36.4629 56.744C36.0629 57.144 35.5829 57.344 35.0229 57.344C34.4629 57.344 33.9829 57.144 33.5829 56.744C33.1829 56.344 32.9829 55.864 32.9829 55.304C32.9829 54.744 33.1829 54.264 33.5829 53.864C33.9829 53.464 34.4629 53.264 35.0229 53.264C35.5829 53.264 36.0629 53.464 36.4629 53.864ZM48.8798 70.424C47.9358 70.936 46.7998 71.192 45.4718 71.192C43.6478 71.192 42.1438 70.616 40.9598 69.464C39.7758 68.296 39.1838 66.792 39.1838 64.952C39.2158 63.128 39.8078 61.624 40.9598 60.44C42.1118 59.24 43.6878 58.64 45.6878 58.64C46.9198 58.64 47.9838 58.872 48.8798 59.336V62.336C48.0318 61.808 47.0878 61.544 46.0478 61.544C45.0718 61.544 44.2798 61.84 43.6718 62.432C43.0638 63.008 42.7518 63.848 42.7358 64.952C42.7998 66.024 43.1198 66.856 43.6958 67.448C44.2718 68.04 45.0318 68.336 45.9758 68.336C46.9838 68.336 47.9518 68.056 48.8798 67.496V70.424ZM54.5378 71H51.0338V54.44H54.5378V64.28L58.3778 58.832H62.4098L58.1858 64.664L62.4818 71H58.4258L54.5378 65.024V71ZM80.3582 66.296C80.3582 67.752 79.8222 68.936 78.7502 69.848C77.6782 70.744 76.2542 71.192 74.4782 71.192C72.5742 71.192 71.0222 70.856 69.8222 70.184V66.464C71.2782 67.52 72.8302 68.048 74.4782 68.048C75.0382 68.048 75.5022 67.904 75.8702 67.616C76.2382 67.312 76.4222 66.92 76.4222 66.44C76.4222 66.28 76.3982 66.128 76.3502 65.984C76.3022 65.84 76.2142 65.704 76.0862 65.576C75.9582 65.448 75.8302 65.344 75.7022 65.264C75.5902 65.168 75.4142 65.064 75.1742 64.952C74.9502 64.824 74.7582 64.72 74.5982 64.64C74.4382 64.56 74.1982 64.448 73.8782 64.304C73.5742 64.16 73.3262 64.048 73.1342 63.968C72.0942 63.488 71.2542 62.896 70.6142 62.192C69.9902 61.488 69.6782 60.552 69.6782 59.384C69.6782 57.992 70.1902 56.872 71.2142 56.024C72.2382 55.16 73.6542 54.728 75.4622 54.728C77.0782 54.728 78.4702 55 79.6382 55.544V59C78.3422 58.248 76.9982 57.872 75.6062 57.872C74.9822 57.872 74.5022 58 74.1662 58.256C73.8462 58.512 73.6862 58.84 73.6862 59.24C73.6862 59.64 73.8862 60 74.2862 60.32C74.6862 60.624 75.2862 60.952 76.0862 61.304C76.5822 61.528 76.9902 61.728 77.3102 61.904C77.6462 62.064 78.0222 62.296 78.4382 62.6C78.8702 62.888 79.2062 63.2 79.4462 63.536C79.7022 63.856 79.9182 64.256 80.0942 64.736C80.2702 65.216 80.3582 65.736 80.3582 66.296ZM88.7023 71H85.1023L81.1903 58.832H84.8143L85.8703 62.84C86.1263 63.848 86.3423 64.76 86.5183 65.576C86.6943 66.376 86.7983 66.928 86.8303 67.232L86.9023 67.688C87.0143 66.728 87.4063 65.112 88.0783 62.84L89.2543 58.832H92.2783L93.4303 62.84C93.7183 63.864 93.9583 64.784 94.1503 65.6C94.3423 66.4 94.4623 66.952 94.5103 67.256L94.5823 67.688C94.6943 66.744 95.0703 65.128 95.7103 62.84L96.8383 58.832H100.294L96.4063 71H92.8063L91.7503 67.016C91.5263 66.152 91.3263 65.344 91.1503 64.592C90.9903 63.84 90.8863 63.304 90.8383 62.984L90.7663 62.504C90.6063 63.576 90.2703 65.08 89.7583 67.016L88.7023 71ZM106.31 68.6C106.806 68.6 107.19 68.448 107.462 68.144C107.734 67.84 107.87 67.424 107.87 66.896V66.008H106.742C106.15 66.008 105.694 66.136 105.374 66.392C105.054 66.648 104.894 66.976 104.894 67.376C104.894 68.192 105.366 68.6 106.31 68.6ZM108.038 69.512C107.526 70.552 106.518 71.072 105.014 71.072C103.83 71.072 102.902 70.736 102.23 70.064C101.574 69.392 101.246 68.552 101.246 67.544C101.246 66.376 101.67 65.472 102.518 64.832C103.382 64.176 104.654 63.848 106.334 63.848H107.87V63.008C107.87 61.984 107.19 61.472 105.83 61.472C104.518 61.472 103.302 61.84 102.182 62.576V59.432C103.142 58.888 104.526 58.616 106.334 58.616C108.062 58.616 109.35 58.992 110.198 59.744C111.046 60.48 111.47 61.632 111.47 63.2V71H108.038V69.512ZM117.725 75.488H114.221V58.832H117.725V60.704C118.573 59.36 119.797 58.688 121.397 58.688C122.965 58.688 124.221 59.248 125.165 60.368C126.125 61.472 126.605 62.976 126.605 64.88C126.605 66.688 126.141 68.184 125.213 69.368C124.301 70.552 123.029 71.144 121.397 71.144C119.749 71.144 118.525 70.496 117.725 69.2V75.488ZM117.725 64.784C117.725 65.824 117.981 66.656 118.493 67.28C119.005 67.904 119.661 68.216 120.461 68.216C121.229 68.216 121.853 67.928 122.333 67.352C122.813 66.76 123.053 65.96 123.053 64.952C123.053 63.848 122.805 63.016 122.309 62.456C121.829 61.88 121.213 61.592 120.461 61.592C119.725 61.592 119.085 61.872 118.541 62.432C117.997 62.992 117.725 63.776 117.725 64.784Z',
                  fill: '#747479',
                }),
                (0, o.jsx)('rect', {
                  x: '41',
                  width: '47',
                  height: '38',
                  fill: 'url(#pattern2)',
                }),
                (0, o.jsxs)('defs', {
                  children: [
                    (0, o.jsx)('pattern', {
                      id: 'pattern2',
                      patternContentUnits: 'objectBoundingBox',
                      width: '1',
                      height: '1',
                      children: (0, o.jsx)('use', {
                        xlinkHref: '#image0_425_798',
                        transform: 'matrix(0.00222717 0 0 0.00275466 0 -0.0151213)'
                      })
                    }),
                    (0, o.jsx)('image', {
                      id: 'image0_425_798',
                      width: '449',
                      height: '374',
                      xlinkHref: 'data:image/png;base64,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'
                    })
                  ]
                })
              ]
            })
          }, link: 'https://quickswap.exchange/#/'
        },
      ],
      m = function () {return (0, o.jsx)(d, {})}, x = function (e) {
        var t = e.text, A = e.fromColor, s = void 0 === A ? 'from-sky-blue-dark' : A, i = e.toColor,
          n = void 0 === i ? 'to-cyan' : i, r = e.classes, a = void 0 === r ? '' : r
        return (0, o.jsx)('span', {
          className: ''.concat(a, ' text-transparent bg-clip-text bg-gradient-to-r ').concat(s.trim(), ' ').concat(n.trim()),
          children: t
        })
      }, p = A(5675), h = A.n(p), C = A(4821)

    function u (e) {
      var t = e.open, A = e.setOpen
      return (0, o.jsx)(n.u.Root, {
        show: t, as: s.Fragment, children: (0, o.jsxs)(C.V, {
          as: 'div',
          className: 'relative z-[100]',
          onClose: A,
          children: [
            (0, o.jsx)(n.u.Child, {
              as: s.Fragment,
              enter: 'ease-out duration-300',
              enterFrom: 'opacity-0',
              enterTo: 'opacity-100',
              leave: 'ease-in duration-200',
              leaveFrom: 'opacity-100',
              leaveTo: 'opacity-0',
              children: (0, o.jsx)('div', { className: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' })
            }),
            (0, o.jsx)('div', {
              className: 'fixed inset-0 z-10 overflow-y-auto',
              children: (0, o.jsx)('div', {
                className: 'flex min-h-full w-screen  items-center justify-center lg:p-4 text-center sm:items-center sm:p-0',
                children: (0, o.jsx)(n.u.Child, {
                  as: s.Fragment,
                  enter: 'ease-out duration-300',
                  enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                  enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                  leave: 'ease-in duration-200',
                  leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                  leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                  children: (0, o.jsx)(C.V.Panel, {
                    className: ' w-screen  relative transform overflow-hidden rounded-lg bg-white px-4 bg-[#17181F] pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-2 lg:mx-4 max-w-[984px] h-full sm:p-6',
                    children: (0, o.jsx)('iframe', {
                      width: '100%',
                      height: '514',
                      src: 'https://www.youtube.com/embed/MevvGxHMjCE',
                      title: 'YouTube video player',
                      frameBorder: '0',
                      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                      allowFullScreen: !0
                    })
                  })
                })
              })
            })]
        })
      })
    }

    var f = function () {
      var e = (0, s.useState)(!1),
        t = e[0],
        A = e[1]
      return (0, o.jsxs)('div', {
        className: 'relative flex flex-col items-center ',
        children: [
          (0, o.jsxs)('div', {
            // className: 'relative flex items-center px-6 py-3 mb-[18px] md:mb-5 space-x-2 rounded-full lg:mb-8 bg-light-06 shadow-box-black-shadow backdrop-blur-36 ',
            className: 'relative flex items-center px-6 py-3 mb-[18px] md:mb-5 space-x-2 rounded-full lg:mb-8 bg-light-06 backdrop-blur-36 ',
            children: [
              // (0, o.jsx)('div', {
              //   className: 'relative flex-shrink-0 h-8 w-7',
              //   children: (0, o.jsx)(
              //     'img', {
              //       quality: 100,
              //       src: './icons/bnb-icon.svg',
              //       alt: 'bnb',
              //       objectFit: 'contain',
              //       layout: 'fill',
              //       objectPosition: 'center'
              //     })
              // }),
              // (0, o.jsx)('div', {
              //   className: 'flex-1 min-w-0',
              //   children: (0, o.jsxs)(
              //     'a', {
              //       target: '_blank',
              //       href: 'https://www.bnbchain.org/en/blog/bnb-chains-european-innovation-incubator-unveils-winners/',
              //       className: 'flex focus:outline-none  tracking-[-0.03em]',
              //       children: [
              //         (0, o.jsx)(
              //           'span', {
              //             className: 'mr-1 text-sm font-[300] font-oldschool  leading-[22px] ',
              //             children: 'Graduated from'
              //           }), (0, o.jsx)(
              //           x, {
              //             text: 'BNB Chain European Innovation Incubator Program ',
              //             classes: '!text-sm !font-[500] !font-oldschool !underline underline-offset-1 !leading-[22px]'
              //           }), (0, o.jsx)(
              //           'img', {
              //             quality: 100,
              //             src: './icons/external-link.svg',
              //             alt: 'link',
              //             className: '!top-2 display-inline',
              //             width: '20px',
              //             height: '20px'
              //           }
              //         )
              //       ]
              //     })
              // })
            ]
          }),
          (0, o.jsxs)('div', {
            className: 'max-w-[913px] z-20',
            children: [
              (0, o.jsx)('h1', {
                className: 'mb-4 md:mb-6 font-recoleta text-nexter-white text-[2.125rem]  leading-[3.5rem] xl:text-[80px] font-normal xl:leading-[6.5rem] text-center',
                children: ' Unleash the Power of Predictions and Play-to-Earn'
              }),
              (0, o.jsx)('p', {
                className: ' text-sm leading-6 md:text-base  font-[300] md:leading-8 text-center font-oldschool text-white-800 mb-6 md:mb-8',
                children: 'Revolutionizing the prediction market landscape with a focus on simplicity, accessibility, and user retention.'
              })
            ]
          }),
          (0, o.jsx)('a', {
            href: 'https://test.certux.xyz/earlyBird',
            target: '_blank',
            children: (0, o.jsx)(b, { className: 'text-xl !leading-10 font-[500]', children: 'Join Eearly Bird' })
          }),
          // (0, o.jsxs)('div', {
          //   className: 'flex gap-2 items-center px-3 py-2 mt-4 cursor-pointer',
          //   onClick: function () {return A(!0)},
          //   children: [
          //     (0, o.jsx)('img', {
          //       className: '',
          //       quality: 100,
          //       src: './icons/video-icon.svg',
          //       alt: 'video icon', height: '32px', width: '32px'
          //     }),
          //     (0, o.jsx)('span', { className: 'text-base text-[#F6F6F499]', children: 'How it works' })
          //   ]
          // }),
          (0, o.jsx)(u, { open: t, setOpen: A })]
      })
    }, w = A(4730), j = ['className', 'children']

    function B (e, t) {
      var A = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        t && (s = s.filter((function (t) {return Object.getOwnPropertyDescriptor(e, t).enumerable}))), A.push.apply(A, s)
      }
      return A
    }

    function v (e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {}
        t % 2 ? B(Object(A), !0).forEach((function (t) {(0, c.Z)(e, t, A[t])})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : B(Object(A)).forEach((function (t) {Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))}))
      }
      return e
    }

    var b = function (e) {
        var t = e.className, A = void 0 === t ? '' : t, s = e.children, i = (0, w.Z)(e, j)
        return (0, o.jsx)('button', v(v({ className: 'py-2 px-6 rounded-xl  text-nexter-white font-oldschool bg-gradient-primary '.concat(A) }, i), {}, { children: s }))
      },
      Q = function (e) {
        var t = e.text, A = e.className
        return (0, o.jsx)('h1', {
          className: ''.concat(A, ' md:text-28 text-[28px] leading-[40px]  lg:text-48 lg:leading-[64px] lgDesktop:text-[64px] lgDesktop:leading-[88px] mb-6 md:mb-8 lg:mb-8 font-recoleta font-normal md:leading-[2rem] text-center text-nexter-white'),
          children: t
        })
      },
      Q1 = function (e) {
        var t = e.text, A = e.className
        return (0, o.jsx)('h2', {
          className: ''.concat(A, ' md:text20 text-[24px] leading-[28px]  lg:text-32 lg:text-32 lg:leading-[56px] lgDesktop:text-[40px] lgDesktop:leading-[60px] mb-2 md:mb-5 lg:mb-4 font-recoleta font-normal md:leading-[1.5rem] text-center text-nexter-white'),
          children: t
        })
      },
      Q2 = function (e) {
        var t = e.text, A = e.className
        return (0, o.jsx)('h2', {
          className: ''.concat(A, ' md:text20 text-[24px] leading-[28px]  lg:text-32 lg:text-32 lg:leading-[56px] lgDesktop:text-[32px] lgDesktop:leading-[48px] mb-5 md:mb-5 lg:mb-8 font-recoleta font-normal md:leading-[1.5rem] text-gray-500'),
          children: t
        })
      },
      y = function () {
        return (0, o.jsxs)('div', {
          children: [
            (0, o.jsx)(Q, { text: 'Advantage' }),
            (0, o.jsx)(Q1, { text: 'Experience the Certux Advantage' }),
            (0, o.jsx)(Q2, { text: 'Certux\'s seamless integration of play-and-earn elements, user-friendly onboarding solutions, and automated prediction vaults set us apart from the competition. Become a part of our vibrant community and experience the next generation of prediction markets and crypto gaming.' }),
            (0, o.jsx)('img', { src: './icons/bg-new1.svg', className: 'w-100-p', width: '100%' })
          ]
        })
      },
      U = A(6835),
      E = A(3556)

    function D (e, t) {
      var A = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        t && (s = s.filter((function (t) {return Object.getOwnPropertyDescriptor(e, t).enumerable}))), A.push.apply(A, s)
      }
      return A
    }

    function M (e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {}
        t % 2 ? D(Object(A), !0).forEach((function (t) {(0, c.Z)(e, t, A[t])})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : D(Object(A)).forEach((function (t) {Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))}))
      }
      return e
    }

    var G = {
        audits: [
          { name: 'Blocksec Audit', href: '/docs/blocksec-audit-report.pdf' },
          { name: 'Slowmist Audit', href: '/docs/slowmist-audit-report.pdf' }
        ],
        termsAndPolicies: [
          { name: 'Privacy policy', href: '/docs/certux-privacy-policy.pdf' },
          { name: 'Terms of Use', href: '/docs/certux-terms.pdf' }
        ],
        social: [
          // {
          //   name: 'Telegram',
          //   href: 'https://bit.ly/3l5zAAn',
          //   icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({
          //       width: '25',
          //       height: '21',
          //       viewBox: '0 0 25 21',
          //       fill: 'none',
          //       xmlns: 'http://www.w3.org/2000/svg'
          //     }, e), {}, {
          //       children: (0, o.jsx)('path', {
          //         opacity: '0.56',
          //         d: 'M24.9576 1.48174L20.4045 17.4182C20.1903 18.1687 19.1993 18.5554 18.3868 18.199L12.6283 15.6744L9.90535 19.4576C9.16446 20.4887 7.28966 20.0415 7.28966 18.8358V14.6204C7.28966 14.2945 7.45027 13.9836 7.72707 13.7562L18.9493 4.65829C18.9404 4.54456 18.7975 4.44607 18.6548 4.52933L5.26339 12.4445L0.763922 10.4733C-0.289434 10.0108 -0.244796 8.71427 0.84423 8.31253L23.0296 0.101913C24.0919 -0.292397 25.2348 0.518899 24.958 1.48167L24.9576 1.48174Z',
          //         fill: 'white'
          //       })
          //     }))
          //   }
          // },
          // {
          //   name: 'Medium', href: 'https://medium.com/@Nexter_finance', icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({
          //       width: '42',
          //       height: '21',
          //       viewBox: '0 0 42 21',
          //       fill: 'currentColor',
          //       xmlns: 'http://www.w3.org/2000/svg'
          //     }, e), {}, {
          //       children: (0, o.jsx)('path', {
          //         opacity: '0.56',
          //         d: 'M11.9 0C10.3373 -1.96e-08 8.78984 0.259075 7.34607 0.762431C5.90229 1.26579 4.59045 2.00357 3.48543 2.93365C2.38041 3.86373 1.50386 4.9679 0.905834 6.18311C0.307803 7.39832 0 8.70078 0 10.0161C0 11.3314 0.307803 12.6339 0.905834 13.8491C1.50386 15.0643 2.38041 16.1685 3.48543 17.0986C4.59045 18.0287 5.90229 18.7664 7.34607 19.2698C8.78984 19.7732 10.3373 20.0322 11.9 20.0322C13.4627 20.0322 15.0102 19.7732 16.4539 19.2698C17.8977 18.7664 19.2096 18.0287 20.3146 17.0986C21.4196 16.1685 22.2961 15.0643 22.8942 13.8491C23.4922 12.6339 23.8 11.3314 23.8 10.0161C23.8 8.70078 23.4922 7.39832 22.8942 6.18311C22.2961 4.9679 21.4196 3.86373 20.3146 2.93365C19.2096 2.00357 17.8977 1.26579 16.4539 0.762431C15.0102 0.259075 13.4627 -1.96e-08 11.9 0ZM30.8 1.17837C30.0646 1.17837 29.3364 1.40696 28.657 1.8511C27.9776 2.29524 27.3602 2.94622 26.8402 3.76688C26.3202 4.58754 25.9077 5.56181 25.6263 6.63405C25.3448 7.7063 25.2 8.85552 25.2 10.0161C25.2 11.1767 25.3448 12.3259 25.6263 13.3982C25.9077 14.4704 26.3202 15.4447 26.8402 16.2653C27.3602 17.086 27.9776 17.737 28.657 18.1811C29.3364 18.6253 30.0646 18.8539 30.8 18.8539C31.5354 18.8539 32.2636 18.6253 32.943 18.1811C33.6224 17.737 34.2398 17.086 34.7598 16.2653C35.2798 15.4447 35.6923 14.4704 35.9737 13.3982C36.2551 12.3259 36.4 11.1767 36.4 10.0161C36.4 8.85552 36.2551 7.7063 35.9737 6.63405C35.6923 5.56181 35.2798 4.58754 34.7598 3.76688C34.2398 2.94622 33.6224 2.29524 32.943 1.8511C32.2636 1.40696 31.5354 1.17837 30.8 1.17837ZM39.9 2.35673C39.343 2.35673 38.8089 3.1637 38.4151 4.60011C38.0213 6.03653 37.8 7.98472 37.8 10.0161C37.8 12.0475 38.0213 13.9957 38.4151 15.4321C38.8089 16.8685 39.343 17.6755 39.9 17.6755C40.457 17.6755 40.9911 16.8685 41.3849 15.4321C41.7787 13.9957 42 12.0475 42 10.0161C42 7.98472 41.7787 6.03653 41.3849 4.60011C40.9911 3.1637 40.457 2.35673 39.9 2.35673Z',
          //         fill: 'white'
          //       })
          //     }))
          //   }
          // },
          // {
          //   name: 'Instagram', href: 'https://www.instagram.com/nexterfinance/', icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({ fill: 'currentColor', viewBox: '0 0 24 24' }, e), {}, {
          //       children: (0, o.jsx)('path', {
          //         fillRule: 'evenodd',
          //         d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
          //         clipRule: 'evenodd'
          //       })
          //     }))
          //   }
          // },
          {
            name: 'Twitter',
            href: 'https://twitter.com/certuxxyz',
            icon: function (e) {
              return (0, o.jsx)('svg', M(M({
                fill: 'currentColor',
                viewBox: '0 0 24 24'
              }, e), {}, { children: (0, o.jsx)('path', { d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' }) }))
            }
          },
          // {
          //   name: 'GitHub',
          //   href: 'https://github.com/bhavish-finance',
          //   icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({
          //       fill: 'currentColor',
          //       viewBox: '0 0 24 24'
          //     }, e), {}, {
          //       children: (0, o.jsx)('path', {
          //         fillRule: 'evenodd',
          //         d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
          //         clipRule: 'evenodd'
          //       })
          //     }))
          //   }
          // },
          // {
          //   name: 'YouTube',
          //   href: 'https://www.youtube.com/@nexterfinanceofficial3306',
          //   icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({
          //       fill: 'currentColor',
          //       viewBox: '0 0 24 24'
          //     }, e), {}, {
          //       children: (0, o.jsx)('path', {
          //         fillRule: 'evenodd',
          //         d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
          //         clipRule: 'evenodd'
          //       })
          //     }))
          //   }
          // },
          // {
          //   name: 'Discord', href: 'https://discord.gg/fx6BBwssA5', icon: function (e) {
          //     return (0, o.jsx)('svg', M(M({
          //       width: '16',
          //       height: '10',
          //       viewBox: '0 0 16 10',
          //       fill: 'currentColor'
          //     }, e), {}, {
          //       xmlns: 'http://www.w3.org/2000/svg', children: (0, o.jsx)('path', {
          //         d: 'M13.4165 1.41595C12.4257 0.64794 11.2367 0.263956 9.98165 0.199951L9.78347 0.391965C10.9064 0.64794 11.8973 1.15993 12.822 1.86394C11.6991 1.28794 10.444 0.903959 9.12292 0.775949C8.7266 0.711945 8.3963 0.711945 7.99999 0.711945C7.60367 0.711945 7.27337 0.711945 6.87706 0.775949C5.55595 0.903959 4.3009 1.28794 3.17797 1.86394C4.10272 1.15993 5.09357 0.64794 6.2165 0.391965L6.01832 0.199951C4.76327 0.263956 3.57428 0.64794 2.58347 1.41595C1.46054 3.46397 0.866043 5.76796 0.799988 8.13592C1.7908 9.15995 3.17797 9.79995 4.6312 9.79995C4.6312 9.79995 5.09357 9.28796 5.42383 8.83992C4.56514 8.64795 3.77246 8.19992 3.24403 7.49596C3.7064 7.75193 4.16878 8.00795 4.6312 8.19992C5.22569 8.45594 5.82019 8.58395 6.41468 8.71196C6.94312 8.77592 7.47155 8.83992 7.99999 8.83992C8.52842 8.83992 9.05686 8.77592 9.58529 8.71196C10.1798 8.58395 10.7743 8.45594 11.3688 8.19992C11.8312 8.00795 12.2936 7.75193 12.7559 7.49596C12.2275 8.19992 11.4348 8.64795 10.5761 8.83992C10.9064 9.28796 11.3688 9.79995 11.3688 9.79995C12.822 9.79995 14.2092 9.15995 15.2 8.13592C15.1339 5.76796 14.5394 3.46397 13.4165 1.41595ZM5.82019 6.98392C5.15963 6.98392 4.56514 6.40792 4.56514 5.70396C4.56514 4.99995 5.15963 4.42395 5.82019 4.42395C6.48074 4.42395 7.07524 4.99995 7.07524 5.70396C7.07524 6.40792 6.48074 6.98392 5.82019 6.98392ZM10.1798 6.98392C9.51923 6.98392 8.92474 6.40792 8.92474 5.70396C8.92474 4.99995 9.51923 4.42395 10.1798 4.42395C10.8403 4.42395 11.4348 4.99995 11.4348 5.70396C11.4348 6.40792 10.8403 6.98392 10.1798 6.98392Z',
          //         fillRule: 'evenodd'
          //       })
          //     }))
          //   }
          // }
        ]
      },
      L = function () {
        var e, t = (0, E.cI)('xgedbpkg'), A = (0, U.Z)(t, 3), i = A[0], n = A[1], r = A[2], a = (0, s.useState)(''),
          l = a[0], c = a[1]
        return (0, o.jsxs)(
          'footer', {
            className: ' bg-[#16171C]', 'aria-labelledby': 'footer-heading',
            children: [(0, o.jsx)('h2', {
              id: 'footer-heading',
              className: 'sr-only',
              children: 'Footer'
            }), (0, o.jsx)(
              'div', {
                className: 'container m-auto p-6 md:px-12 md:py-10', children: (0, o.jsxs)('div', {
                  className: 'xl:flex xl:justify-between',
                  children: [(0, o.jsxs)('div', {
                    className: 'space-y-4 max-w-[283px]',
                    children: [(0, o.jsx)(d, {}), (0, o.jsx)('p', {
                      className: 'text-sm leading-6 text-nexter-white opacity-60',
                      children: 'Decentralised predictions for crypto, commodities, and sporting events'
                    }), (0, o.jsx)('div', {
                      className: 'flex space-x-6 pt-6 md:pt-8',
                      children: G.social.map((function (e) {
                        return (0, o.jsxs)('a', {
                          href: e.href,
                          target: '_blank',
                          className: 'text-gray-400 hover:text-gray-500',
                          children: [(0, o.jsx)('span', {
                            className: 'sr-only',
                            children: e.name
                          }), (0, o.jsx)(e.icon, { className: 'h-6 w-6', 'aria-hidden': 'true' })]
                        }, e.name)
                      }))
                    })]
                  }), (0, o.jsxs)('div', {
                    className: 'mt-10 md:mt-16 grid md:grid-cols-2 grid-cols-1 gap-7 xl:col-span-2 xl:mt-0',
                    children: [
                      (0, o.jsxs)('div', {
                        className: 'grid grid-cols-2 md:gap-7',
                        children: [
                          (0, o.jsxs)('div', {
                            children: [
                              (0, o.jsx)('h3', {
                                className: 'text-base leading-[18px] font-medium text-nexter-white',
                                children: 'Audit'
                              }),
                              (0, o.jsx)('ul', {
                                role: 'list',
                                className: 'mt-[21px] space-y-4',
                                children: G.audits.map((function (e) {
                                  return (0, o.jsx)('li', {
                                    children: (0, o.jsx)('a', {
                                      href: e.href,
                                      target: '_blank',
                                      className: 'text-sm leading-[22px] text-nexter-white opacity-60 hover:text-nexter-white',
                                      children: e.name
                                    })
                                  }, e.name)
                                }))
                              })
                            ]
                          }),
                          (0, o.jsxs)('div', {
                            className: '',
                            children: [
                              (0, o.jsx)('h3', {
                                className: 'text-base leading-[18px] font-medium whitespace-nowrap text-nexter-white',
                                children: 'Terms and Policies'
                              }),
                              (0, o.jsx)('ul', {
                                role: 'list',
                                className: 'mt-[21px] space-y-4',
                                children: G.termsAndPolicies.map((function (e) {
                                  return (0, o.jsx)('li', {
                                    children: (0, o.jsx)('a', {
                                      href: e.href,
                                      target: '_blank',
                                      className: 'text-sm leading-[22px] text-nexter-white opacity-60 hover:text-nexter-white',
                                      children: e.name
                                    })
                                  }, e.name)
                                }))
                              })
                            ]
                          })
                        ]
                      }),
                      // (0, o.jsxs)('div', {
                      //   className: 'md:mt-10 xl:mt-0', children: [
                      //     (0, o.jsx)('h3', {
                      //       className: 'text-base leading-[18px] font-medium text-nexter-white',
                      //       children: 'Newsletter'
                      //     }),
                      //     (0, o.jsx)('p', {
                      //       className: 'mt-3 md:mt-2 text-sm leading-[22px] md:leading-6 text-nexter-white opacity-60',
                      //       children: 'Be the first one to know about us!'
                      //     }),
                      //     i.succeeded && (0, o.jsx)('div', {
                      //       children: (0, o.jsx)('p', {
                      //         className: 'max-w-xs text-center pt-10 text-green sm:max-w-sm md:max-w-none text-xs',
                      //         children: 'Thank you for signing up. You will now receive news letters from our side'
                      //       })
                      //     }),
                      //     !i.succeeded && (0, o.jsxs)('form', {
                      //       className: 'mt-6 sm:flex sm:max-w-md',
                      //       onSubmit: n,
                      //       children: [
                      //         (0, o.jsxs)('div', {
                      //           children: [
                      //             (0, o.jsx)('label', {
                      //               htmlFor: 'email-address',
                      //               className: 'sr-only',
                      //               children: 'Email address'
                      //             }),
                      //             (0, o.jsx)('input', {
                      //               type: 'email',
                      //               name: 'email',
                      //               onChange: function (e) {return c(e.target.value), void r()},
                      //               value: l,
                      //               id: 'email',
                      //               placeholder: 'Enter your email',
                      //               autoComplete: 'email',
                      //               required: !0,
                      //               className: 'w-full min-w-0 appearance-none rounded-md border-0 bg-gray-400/10 px-3 py-1.5 text-base leading-7 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full'
                      //             }),
                      //             'TYPE_EMAIL' === (null === i || void 0 === i || null === (e = i.errors[0]) || void 0 === e ? void 0 : e.code) && (0, o.jsx)('span', {
                      //               className: 'block mt-2 text-red-500 text-xs',
                      //               children: 'Enter a valid email address'
                      //             })
                      //           ]
                      //         }),
                      //         (0, o.jsx)('div', {
                      //           className: 'mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0', children: (0, o.jsx)('button', {
                      //             type: 'submit',
                      //             className: ''.concat(!l && 'disabled:opacity-25', ' flex w-full items-center justify-center rounded-md bg-[#36353B] hover:bg-gradient-primary py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'),
                      //             disabled: i.submitting || i.succeeded || !l, children: 'Subscribe'
                      //           })
                      //         })
                      //       ]
                      //     }),
                      //     // (0, o.jsx)('p', {
                      //     //   className: 'text-xs leading-5 text-gray-500 mt-6 lg:mt-12',
                      //     //   children: '\xa9 2023 Bhavish Labs Pte Ltd. All rights reserved.'
                      //     // })
                      //   ]
                      // })
                    ]
                  })]
                })
              })]
          })
      },
      q = function (e) {
        var t = e.children, A = e.classes, s = e.margin, i = void 0 === s ? 'my-14 first:mt-6' : s
        return (0, o.jsx)('section', {
          className: ''.concat(A, ' container mx-auto ').concat(i, '  relative'),
          children: t
        })
      },
      I = function () {
        return (0, o.jsxs)('div', {
          className: 'flex flex-col items-center mb-16',
          children: [(0, o.jsxs)('p', {
            className: 'mb-4 text-xs leading-7 md:text-base font-normal text-center font-oldschool text-nexter-white opacity-60',
            children: ['We are completely decentralised and powered by:', ' ']
          }), (0, o.jsx)('div', {
            className: 'flex flex-wrap items-center justify-center gap-3 lg:justify-start',
            children: [{
              name: 'polygon',
              imageUrl: '/icons/polygon-chain.svg',
              link: 'https://www.polygon.technology/'
            }, {
              name: 'binance',
              imageUrl: './icons/binance-chain.svg',
              link: 'https://www.binance.com/'
            }, {
              name: 'chain-link',
              imageUrl: './icons/chain-link-icon.svg',
              link: 'https://chain.link/'
            }, {
              name: 'reality-eth',
              imageUrl: './icons/reality-eth.svg',
              link: 'https://reality.eth.link/'
            }, {
              name: 'kleros',
              imageUrl: './icons/kleros-icon.svg',
              link: 'https://kleros.io/'
            }].map((function (e, t) {
              return (0, o.jsx)('span', {
                children: (0, o.jsx)('div', {
                  className: 'relative flex-shrink-0',
                  children: (0, o.jsx)('a', {
                    href: e.link,
                    target: '_blank',
                    className: 'text-gray-400 hover:text-gray-500',
                    children: (0, o.jsx)('img', { src: e.imageUrl, className: 'md:h-6 h-6', alt: 'icon' })
                  }, e.name)
                })
              }, t)
            }))
          })]
        })
      }, k = function () {
        var e = (0, s.useState)(0), t = e[0], A = e[1], i = (0, s.useRef)(null);
        (0, s.useMemo)((function () {
          var e, A = null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.offsetTop
          return t > A - 100
        }), [t])
        return (0, s.useEffect)((function () {
          var e = function (e) {A(e.target.documentElement.scrollTop)}
          return window.addEventListener('scroll', e), function () {return window.removeEventListener('scroll', e)}
        }), [t]), (0, o.jsx)('div', {
          className: 'flex flex-col',
          children: (0, o.jsx)('div', { className: 'relative z-10 mt-6 md:mt-0', ref: i, children: (0, o.jsx)(I, {}) })
        })
      }, H = function () {
        var e = function (e) {
          return e.map((function (e) {
            return (0, o.jsxs)('div', {
              className: 'relative flex flex-col items-center md:flex-row py-10 md:py-10 xl:py-10  rounded-xl bg-white-light-06 shadow-box-black-shadow backdrop-blur-36 max-w-[534px]',
              children: [(0, o.jsx)('div', {
                className: 'relative w-[155px] flex justify-center items-center '.concat(e.bgImage, ' bg-contain bg-center bg-no-repeat'),
                children: (0, o.jsx)('img', { className: '', src: e.imageUrl, alt: 'icon' })
              }), (0, o.jsxs)('div', {
                className: 'relative flex-1 min-w-0 my-4 md:my-0 pr-4 pl-12 md:pl-0  xl:pr-10',
                children: [(0, o.jsx)('span', {
                  className: 'absolute md:left-[-30px] left-4',
                  children: (0, o.jsx)('img', { src: null === e || void 0 === e ? void 0 : e.numberIcon, alt: 'icon' })
                }), (0, o.jsx)('h5', {
                  className: ''.concat(e.titleColor, ' md:mb-5 mb-2 md:text-2xl text-xl font-bold font-oldschool'),
                  children: e.title
                }), (0, o.jsx)('p', {
                  className: 'font-oldschool font-normal text-sm leading-[22px] text-nexter-white md:text-lg md:leading-8',
                  children: e.content
                })]
              })]
            }, e.title)
          }))
        }
        return (0, o.jsxs)('div', {
          className: 'flex flex-col items-center gap-8 sm:items-start lg:gap-10 lg:px-[46px]',
          children: [
            (0, o.jsx)('div', {
              className: 'flex flex-wrap justify-center w-full gap-4 md:gap-8 md:justify-between lg:gap-24 md:flex-nowrap',
              children: e([
                {
                  title: 'Lack of Accessibility in Decentralized Prediction Markets',
                  bgImage: 'bg-glass-effect',
                  titleColor: 'text-cyan',
                  numberIcon: '/icons/icon-1.svg',
                  content: 'Traditional prediction markets can be complex and difficult to navigate, especially for users who aren\'t familiar with the underlying technologies or concepts. Certux aims to solve this by providing easy onboarding tools and a user-friendly platform that\'s accessible to users of all technical backgrounds.',
                  imageUrl: '/images/pot-plant-icon.png'
                },
                {
                  title: 'Limited Play-and-Earn Opportunities in Prediction Markets',
                  bgImage: 'bg-glass-effect-2',
                  titleColor: 'text-yellow',
                  numberIcon: './icons/icon-2.svg',
                  content: 'There are limited opportunities for users to earn rewards in traditional prediction markets. Certux addresses this by intertwining play-and-earn elements with prediction markets, offering multiple predictions in a single round and betting in both directions.',
                  imageUrl: '/images/lock-icon.png'
                }
              ])
            }),
            (0, o.jsx)('div', {
              className: 'flex justify-center w-full',
              children: e([{
                title: 'Crypto Market Volatility Risks',
                titleColor: 'text-nexter-purple',
                numberIcon: '/icons/icon-3.svg',
                content: 'The volatility of the crypto market can pose significant risks to users. Certux provides a solution by allowing users to bet in both directions, thereby mitigating some of the risks associated with crypto market volatility.',
                imageUrl: '/images/cpu-icon.png'
              }])
            }),
            (0, o.jsx)('div', {
              className: 'flex flex-wrap justify-center w-full gap-8 md:justify-between lg:gap-24 md:flex-nowrap',
              children: e([{
                title: 'Inefficiencies in Maximizing Returns',
                titleColor: 'text-parrot-green',
                numberIcon: '/icons/icon-4.svg',
                bgImage: 'bg-lack-bg-effect',
                content: 'There is a lack of efficient tools to help users maximize their returns in prediction markets. Certux aims to solve this problem through their automated prediction vaults, which execute automated prediction strategies to generate returns on user deposits.',
                imageUrl: '/images/compatibility.png'
              },
                {
                  title: 'No mobile support',
                  bgImage: 'bg-mobile-bg-effect',
                  titleColor: 'text-green',
                  numberIcon: '/icons/icon-5.svg',
                  content: 'Most prediction markets are designed for the web and have complex UI/UX issues that result in bad user experience.',
                  imageUrl: '/images/phone-icon.png'
                }])
            })]
        })
      }, Y = function () {
        return (0, o.jsxs)('div', {
          className: 'flex flex-col',
          children: [(0, o.jsx)(Q, { text: 'Problems' }), (0, o.jsx)(H, {})]
        })
      }, T = function (e) {
        var t = e.solution
        return (0, o.jsxs)('div', {
          className: 'container flex gap-[72px] mx-auto items-center w-full justify-center lgDesktop:gap-16 px-10',
          children: [
            (0, o.jsx)('div', {
              className: 'flex-[40%]',
              children: (0, o.jsx)('div', {
                className: 'relative rounded-3xl w-[527px] h-[527px]',
                children: (0, o.jsxs)('video', {
                  id: 'videoUrl',
                  width: '100%',
                  height: '100%',
                  autoPlay: !0,
                  className: 'rounded-[40px] border-[8px] border-nexter-black',
                  muted: !0,
                  loop: !0,
                  children: [(0, o.jsx)('source', {
                    src: '/videos/'.concat(null === t || void 0 === t ? void 0 : t.link),
                    type: 'video/mp4'
                  }), 'Your browser does not support HTML video.']
                })
              })
            }),
            (0, o.jsx)('div', {
              className: 'flex flex-col justify-center items-center  flex-[60%]',
              children: (0, o.jsxs)('div', {
                className: '',
                children: [
                  (0, o.jsx)('h4', {
                    className: ' font-oldschool text-2xl font-[700]  text-nexter-white mb-6 lgDesktop:text-32',
                    children: null === t || void 0 === t ? void 0 : t.title
                  }),
                  (0, o.jsx)('p', {
                    className: 'mb-6 text-lg leading-8 font-normal font-oldschool text-white-600 max-w-[545px] lgDesktop:text-xl lgDesktop:leading-8',
                    children: null === t || void 0 === t ? void 0 : t.description
                  })
                ]
              })
            })]
        })
      }, K = function (e) {
        var t = e.list, A = e.classes, i = e.pageScrollIndex, n = void 0 === i ? 1 : i, r = (0, s.useRef)(null),
          a = 100 / t.length, l = ''.concat(a * n, '%')
        return (0, o.jsxs)('div', {
          className: ''.concat(A, ' relative'),
          children: [(0, o.jsxs)('div', {
            className: 'absolute top-0 right-0 h-full flex flex-col justify-center items-center gap-2',
            children: [(0, o.jsxs)('span', {
              className: ' font-oldschool text-[20px] leading-8 text-nexter-white ',
              children: ['0', n]
            }), (0, o.jsx)('div', {
              className: 'relative w-1 h-full bg-grey-black-dark',
              children: (0, o.jsx)('div', {
                className: ' w-1 flex-1  bg-blue-cyan-gradient transition-all duration-700 h-auto',
                style: { height: l }
              })
            }), (0, o.jsxs)('span', {
              className: ' font-oldschool text-[20px] leading-8 text-nexter-white ',
              children: ['0', t.length]
            })]
          }), (0, o.jsx)('div', {
            className: 'relative h-[527px] overflow-hidden handleScroll',
            ref: r,
            children: t.map((function (e, t) {
              return (0, o.jsx)('div', {
                className: 'flex items-center justify-start',
                children: (0, o.jsx)('div', {
                  className: 'absolute top-0 opacity-0 transition-all duration-1000 w-full  '.concat(n - 1 == t && 'animate-fadeIn'),
                  children: (0, o.jsx)(T, { solution: e })
                }, t)
              })
            }))
          })]
        })
      }, P = s.memo(K), V = A(8368), O = A(5960), Z = A(6963), R = function (e) {
        var t = e.list, A = e.classes
        return (0, o.jsx)('div', {
          className: ''.concat(A, ' w-full md:px-4'),
          children: (0, o.jsx)('div', {
            className: 'w-full md:px-2 mx-auto bg-white rounded-2xl',
            children: t.map((function (e) {
              return (0, o.jsx)(V.p, {
                as: 'div',
                className: 'py-6 border-t-[1px] border-b-[1px] border-white-150',
                children: function (t) {
                  var A = t.open
                  return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(V.p.Button, {
                      className: 'flex justify-between w-full md:px-4 md:py-2 text-left focus:outline-none ',
                      children: [(0, o.jsx)('span', {
                        className: ' font-oldschool font-[500] text-xl leading-8',
                        children: e.title
                      }), (0, o.jsx)('span', {
                        className: 'flex items-center justify-center w-8 h-8 rounded-full shadow-box-black-shadow bg-white-300',
                        children: A ? (0, o.jsx)(O, { className: 'w-6 h-6 ' }) : (0, o.jsx)(Z, { className: 'w-6 h-6 ' })
                      })]
                    }), (0, o.jsx)(V.p.Panel, {
                      className: 'md:px-4 pt-4 pb-2 text-sm text-gray-500',
                      children: e.description
                    })]
                  })
                }
              }, e.title)
            }))
          })
        })
      }, F = { position: 'sticky', top: 0, right: 0, left: 0, minHeight: 'var(--100vh, 100vh)' }, z = {
        height: '--Stickyroll_height',
        pages: '--Stickyroll_pages',
        factor: '--Stickyroll_factor',
        progress: '--Stickyroll_progress',
        page: '--Stickyroll_page'
      }, X = {
        root: 'Stickyroll_root',
        above: 'Stickyroll_above',
        below: 'Stickyroll_below',
        sticky: 'Stickyroll_sticky',
        nonSticky: 'Stickyroll_nonSticky',
        page: function (e) {return 'Stickyroll_page_'.concat(e)}
      }, J = A(7812)

    function W (e, t) {
      var A, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      (A = e.classList).remove.apply(A, (0, J.Z)(t.map((function (e) {return X[e]}))).concat((0, J.Z)(Array.from({ length: s ? s + 1 : 0 }, (function (e, t) {return X.page(t - 1)})))))
    }

    function S (e, t, A) {
      var s;
      (s = e.classList).add.apply(s, (0, J.Z)(t.map((function (e) {return X[e]})))), void 0 !== A && e.classList.add(X.page(A))
    }

    function _ (e, t) {
      Object.entries(t).forEach((function (t) {
        var A = (0, U.Z)(t, 2), s = A[0], i = A[1]
        e.style.setProperty(z[s], i.toString())
      }))
    }

    var $ = ['pages', 'factor', 'onPage', 'onProgress', 'onStart', 'onEnd', 'children', 'className', 'style']

    function ee (e, t) {
      var A = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        t && (s = s.filter((function (t) {return Object.getOwnPropertyDescriptor(e, t).enumerable}))), A.push.apply(A, s)
      }
      return A
    }

    function te (e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {}
        t % 2 ? ee(Object(A), !0).forEach((function (t) {(0, c.Z)(e, t, A[t])})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : ee(Object(A)).forEach((function (t) {Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))}))
      }
      return e
    }

    function Ae (e, t) {
      var A = e.pages, i = e.factor, n = e.onPage, r = e.onProgress, a = e.onStart, l = e.onEnd, c = e.children,
        d = e.className, g = e.style, m = void 0 === g ? {} : g, x = (0, w.Z)(e, $), p = (0, s.useRef)(null)
      return function (e, t) {
        var A = t.pages, i = t.factor, n = void 0 === i ? 1 : i, r = t.onPage, a = t.onProgress, o = t.onStart,
          l = t.onEnd, c = (0, s.useRef)({ onPage: r, onProgress: a, onStart: o, onEnd: l });
        (0, s.useEffect)((function () {
          var t = !1, s = !1, i = -1

          function r () {
            var r = window.innerHeight, a = r * (A * n) * -1, o = e.current.getBoundingClientRect().top
            if (o > 0 && t && (t = !1, i = -1, c.current.onProgress && c.current.onProgress(0, 0, -1)), o > 0 && !t) {
              var l = Math.max(-1, o / r * -1)
              _(e.current, {
                progress: l,
                page: -1
              }), W(e.current, ['sticky', 'below'], A), S(e.current, ['nonSticky', 'above'], -1)
            } else if (o <= 0 && o >= a) {
              var d = !t, g = o / r / n * -1, m = Math.abs(Math.floor(g)), x = g - m, p = i !== m
              s = !1, t = !0, i = m, _(e.current, {
                progress: x,
                page: m
              }), W(e.current, ['nonSticky', 'above', 'below'], A), S(e.current, ['sticky'], m), d && c.current.onStart && c.current.onStart(), p && c.current.onPage && c.current.onPage(m + 1, m), c.current.onProgress && x < 1 && x > 0 && c.current.onProgress(x, m + 1, m)
            } else o < a && !s && (s = !0, i = A, _(e.current, {
              progress: 1,
              page: A - 1
            }), W(e.current, ['sticky', 'above'], A), S(e.current, ['nonSticky', 'below'], A - 1), c.current.onEnd && c.current.onEnd(), c.current.onProgress && c.current.onProgress(1, A, A - 1))
          }

          return _(e.current, {
            height: 'calc('.concat(A * n + 1, ' * var(--100vh, 100vh))'),
            pages: A,
            factor: n,
            progress: 0,
            page: -1
          }), S(e.current, ['root']), r(), window.addEventListener('scroll', r, { passive: !0 }), window.addEventListener('resize', r, { passive: !0 }), window.addEventListener('orientationchange', r, { passive: !0 }), function () {window.removeEventListener('scroll', r), window.removeEventListener('resize', r), window.removeEventListener('orientationchange', r)}
        }), [e, A, n, c])
      }(null !== t && void 0 !== t ? t : p, {
        pages: A,
        factor: i,
        onPage: n,
        onProgress: r,
        onStart: a,
        onEnd: l
      }),
        (0, o.jsx)('div', te(te({ ref: null !== t && void 0 !== t ? t : p }, x), {}, {
          className: [X.root, d].filter(Boolean).join(' '),
          style: te(te({}, m), {}, {
            minHeight: 'var(--100vh, 100vh)',
            height: 'var('.concat(z.height, ', var(--100vh, 100vh))')
          }),
          children: (0, o.jsx)('div', { style: F, children: c })
        }))
    }

    var se = (0, s.forwardRef)(Ae), ie = function (e) {
        var t = e.factor, A = void 0 === t ? 2 : t, i = (0, s.useState)(1), n = i[0], r = i[1], a = (0, s.useRef)(null),
          l = [{
            title: 'Embrace the Future of Decentralized Prediction Markets',
            description: 'Certux is dedicated to democratizing and decentralizing prediction markets by harnessing the wisdom of the crowd in a web3 ecosystem. Our platform boasts easy onboarding tools, making it accessible to users of all technical backgrounds. Join us on our mission to reshape the world of prediction markets and crypto gaming.',
            link: '3.Sol.mp4'
          }, {
            title: 'Innovative GameFi Elements and Strategies',
            description: 'Certux is the first platform to intertwine play-and-earn elements with prediction markets, offering multiple predictions in a single round and betting in both directions to mitigate crypto market volatility risks. As you engage more with the platform, unlock a treasure trove of rewards, and enjoy a user-friendly experience like never before.',
            link: '4.Sol.mp4'
          }, {
            title: 'Maximize Returns with Automated Prediction Vaults',
            description: 'Our innovative prediction vaults generate returns on user deposits by executing automated prediction strategies. Be the first to explore this unique approach to crypto gaming and experience the thrill of accurate predictions and lucrative returns.',
            link: '2.Sol.mp4'
          }, {
            title: 'Composability',
            description: 'Certux allows for a high level composability that enables Dapps to build on top of the protocol and utilize its extensive collection of prediction tools.',
            link: '1.Sol.mp4'
          }, {
            title: 'Mobile Prediction Experience',
            description: 'Users can explore Certux\'s prediction offerings seamlessly  over mobile with an easy-to-use user interface.',
            link: '5.Sol.mp4'
          }]
        return (0, o.jsxs)('div', {
          className: 'solution-wp',
          children: [
            (0, o.jsx)('div', {
              className: 'lg:hidden',
              children: (0, o.jsxs)('div', {
                className: 'flex flex-col transition-all duration-500 relative ',
                ref: a,
                children: [(0, o.jsx)(Q, { text: 'Our Solutions' }), (0, o.jsx)(R, { list: l, classes: 'lg:hidden' })]
              })
            }),
            (0, o.jsx)('div', {
              className: 'hidden lg:block pr-10',
              children: (0, o.jsx)(se, {
                pages: l.length,
                factor: A,
                onPage: function (e) {r(e)},
                children: (0, o.jsxs)('div', {
                  className: 'flex flex-col transition-all duration-500 relative ',
                  ref: a,
                  children: [
                    (0, o.jsx)(Q, {
                      text: 'Our Solutions',
                      className: '!mt-[100px]'
                    }),
                    (0, o.jsx)(P, { classes: 'hidden lg:block', list: l, pageScrollIndex: n })
                  ]
                })
              })
            })]
        })
      },
      ne = A(6066), re = (A(8322), A(8745), function (e) {
        var t = e.content
        return (0, o.jsxs)('div', {
          className: 'flex gap-24 min-h-[600px] relative xl:min-h-[700px] lg:mb-12 mx-6 overflow-hidden',
          children: [
            (0, o.jsx)('div', {
              className: 'flex flex-col justify-center  flex-[50%]',
              children: (0, o.jsxs)('div', {
                className: '',
                children: [
                  (0, o.jsx)('h4', {
                    className: ' font-oldschool  text-[40px] leading-[48px] text-nexter-white mb-6',
                    children: null === t || void 0 === t ? void 0 : t.title
                  }),
                  (0, o.jsx)('p', {
                    className: 'mb-6 text-[20px] lg:text-[32px] leading-[64px] font-normal font-oldschool text-white-600 max-w-[545px]',
                    children: null === t || void 0 === t ? void 0 : t.description
                  })
                ]
              })
            }),
            (0, o.jsx)('img', {
              src: null === t || void 0 === t ? void 0 : t.imageUrl,
              alt: 'icon',
              height: 700,
              width: 1264,
              className: 'absolute left-[50%] rounded-l-lg border-[#FFFFFF1A] border-[3px]'
            })
          ]
        })
      })

    function ae (e, t) {
      var A = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        t && (s = s.filter((function (t) {return Object.getOwnPropertyDescriptor(e, t).enumerable}))), A.push.apply(A, s)
      }
      return A
    }

    function oe (e) {
      for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {}
        t % 2 ? ae(Object(A), !0).forEach((function (t) {(0, c.Z)(e, t, A[t])})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : ae(Object(A)).forEach((function (t) {Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))}))
      }
      return e
    }

    var le = function (e) {
        var t = e.list, A = e.classes, i = (0, s.useState)(0), n = i[0], r = i[1], a = (0, s.useRef)(null), l = {
          arrows: !1,
          dots: !1,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 300,
          autoplay: !1,
          pauseOnHover: !1,
          afterChange: function (e) {r(e)}
        }
        return (0, o.jsxs)('div', {
          className: ''.concat(A, ' relative bg-grid-lines bg-contain bg-left bg-no-repeat'),
          children: [
            (0, o.jsx)('div', {
              className: 'absolute top-0 flex items-center gap-4',
              children: t.map((function (e, t) {
                return (0, o.jsx)('div', {
                  onClick: function () {return function (e) {r(e), a.current.slickGoTo(e)}(t)},
                  className: ' z-10 cursor-pointer text-xl lgDesktop:text-2xl leading-7 font-recoleta font-normal '.concat(n == t ? 'text-nexter-white border-b-[2px] border-nexter-white' : 'text-white-light-200', ' '),
                  children: e.title
                }, t)
              }))
            }),
            (0, o.jsx)(ne.Z, oe(oe({}, l), {}, {
              ref: a,
              children: t.map((function (e, t) {
                return (0, o.jsx)('div', {
                  className: 'mx-6',
                  children: (0, o.jsx)(re, { content: e })
                }, t)
              }))
            }))]
        })
      },
      ce = function () {
        var e = [
          {
            title: 'Crypto',
            description: 'Predict on $BTC, $ETH, $BNB and $MATIC prices',
            imageUrl: '/images/prediction-1.png'
          },
          {
            title: 'Commodities',
            imageUrl: '/images/prediction-2.png',
            description: 'Predict on GOLD and SILVER prices'
          },
          {
            title: 'Quests',
            description: 'Bet on real world events like sports, politics and crypto',
            imageUrl: '/images/prediction-3.png'
          },
          {
            title: 'Vaults',
            imageUrl: '/images/prediction-4.png',
            description: 'Automate your predictions using vaults and earn high  APYs'
          }
        ]
        return (0, o.jsxs)('div', {
          className: 'flex flex-col lg:pl-12 lgDesktop:pl-[100px] bg-grid-bg bg-cover bg-center mt-10 md:mt-0 mx-4 md:mx-0 bg-no-repeat mb-10 md:mb-0',
          children: [(0, o.jsx)(Q, { text: 'Explore Markets' }), (0, o.jsx)(R, {
            list: e,
            classes: 'lg:hidden'
          }), (0, o.jsx)(le, { classes: 'hidden lg:block', list: e })]
        })
      },
      de = function () {
        var e = (0, s.useState)(0), t = e[0], A = e[1],
          i = {
            // 0: {
            //   handle: '@0xkhan_',
            //   imageURL: './images/JXGKFcO__400x400.jpeg',
            //   info: 'I have been exploring Certux for quite some time and I am thoroughly impressed. The platform is user-friendly and provides in-depth insights into various market trends and events. It\u2019s amazing to see how accurate the predictions can be. The market data and analysis provided have helped me make accurate predictions. The No-loss feature and prediction vaults are exceptional. Certux is truly a game-changer!',
            //   companyName: 'Polygon',
            //   twitterLink: 'https://twitter.com/0xkhan_',
            //   companyLink: 'https://polygon.technology/'
            // },
            // 0: {
            //   handle: '@AlexiAtlas',
            //   imageURL: './images/tf2xgiu7_400x400.jpeg',
            //   info: 'I have been using Certux (prev Bhavish) for quite sometime now and have been extremely impressed with its prediction accuracy and ease of use. Certux\u2019s built-in analytics tools have also been extremely helpful in identifying profitable trades and making accurate predictions. The user interface is intuitive and easy to navigate, making it simple for me to track my prediction portfolio. Overall, a neat DeFi prediction protocol.',
            //   companyName: 'Quickswap',
            //   twitterLink: 'https://twitter.com/AlexiAtlas',
            //   companyLink: 'https://quickswap.exchange/#/'
            // },
            0: {
              handle: '@daisugist',
              imageURL: './images/lRmXoLeB_400x400.jpeg',
              info: 'Cements its lead in the industry by bringing the lossless prediction experience to Polygon users, and we are excited to be able to secure their prediction markets with Kleros\u2019s decentralized court technology!',
              companyName: 'Kleros',
              twitterLink: 'https://twitter.com/daisugist',
              companyLink: 'https://kleros.io/'
            },
            1: {
              handle: '@TherealSpatrick',
              imageURL: './images/a17UNna3_400x400.jpeg',
              info: 'I have known about Certux for quite some time since it\'s leading the charge in the decentralised prediction market space, offering a seamless and intuitive platform that allows users to easily predict outcomes for a wide range of markets, including crypto, commodities, and sporting events. And after shipping amazing features like automated predictions I\'m more excited than ever to see how Certux will shape the future for no-loss prediction markets!',
              companyName: 'Gelato',
              twitterLink: 'https://twitter.com/TherealSpatrick',
              companyLink: 'https://www.gelato.network/'
            },
            2: {
              handle: '@yeskay_01',
              imageURL: './images/YZSsIjaM_400x400.jpeg',
              info: 'Certux is an excellent product for anyone interested in crypto predictions. The app\'s interface was intuitive and easy to navigate, and I was able to quickly find the information I needed to make accurate predictions. The app\'s use of gamification to create no-loss predictions was one of the things that stood out to me. Even automated prediction vaults are a fantastic improvement. Overall, I found Certux to be a well-designed and user-friendly platform in Web3.',
              companyName: 'Alphablockz',
              twitterLink: 'https://twitter.com/yeskay_01',
              companyLink: 'https://alphablockz.io/'
            }
          },
          n = Object.keys(i).length
        return (0, o.jsx)('div', {
          className: 'bg-white',
          children: (0, o.jsx)('section', {
            className: 'overflow-hidden',
            children: (0, o.jsx)('div', {
              className: 'relative px-6 pb-12 mx-auto max-w-7xl lg:px-8 lg:pb-20',
              children: (0, o.jsxs)('div', {
                className: 'relative flex items-center flex-col lg:grid lg:grid-rows-2 gap-x-[128px]',
                style: { gridTemplateColumns: '15% 1fr' },
                children: [
                  (0, o.jsxs)('div', {
                    className: 'flex flex-col items-center justify-center',
                    style: { gridArea: '1 / 1 / 2 / 2' },
                    children: [(0, o.jsx)('div', {
                      className: 'flex-shrink-0',
                      children: (0, o.jsx)('a', {
                        href: i[t].companyLink,
                        target: '_blank',
                        children: (0, o.jsx)('img', {
                          className: 'h-[60px] w-[60px] rounded-full',
                          src: i[t].imageURL,
                          alt: ''
                        })
                      })
                    }),
                      (0, o.jsx)('div', {
                        className: 'mt-4 lg:ml-0',
                        children: (0, o.jsx)('a', {
                          href: i[t].twitterLink,
                          target: '_blank',
                          children: (0, o.jsx)('div', {
                            className: 'text-base font-oldschool text-nexter-white lg:text-2xl',
                            children: i[t].handle
                          })
                        })
                      }),
                      (0, o.jsx)('div', {
                        className: 'mt-2 lg:ml-0',
                        children: (0, o.jsx)('a', {
                          href: i[t].companyLink,
                          target: '_blank',
                          children: (0, o.jsx)('div', {
                            className: 'text-sm md:text-lg opacity-[.64] font-oldschool text-nexter-white',
                            children: i[t].companyName
                          })
                        })
                      })
                    ]
                  }),
                  (0, o.jsxs)('div', {
                    className: 'text-base leading-[28px] lg:text-[28px] lg:h-[356px] h-[307px] lg:leading-[56px] font-recoleta text-nexter-white text-center',
                    style: { gridArea: '1 / 2 / 3 / 3' },
                    children: [
                      (0, o.jsx)('span', {
                        className: ' text-[40px] leading-10',
                        children: '\u201c'
                      }), i[t].info, (0, o.jsx)('span', { className: ' text-[40px] leading-10', children: '\u201d' })
                    ]
                  }),
                  (0, o.jsxs)('div', {
                    className: 'flex gap-2 items-center justify-center mt-36 smMobile:mt-6 lg:mt-[134px]',
                    style: { gridArea: '2 / 1 / 3 / 2' },
                    children: [
                      (0, o.jsx)('img', {
                        className: 'cursor-pointer',
                        quality: 100,
                        src: './source/plusarrow.png',
                        alt: 'solution',
                        width: '40px',
                        height: '40px',
                        onClick: function () {
                          return A(0 === t ? n - 1 : t - 1)
                        }
                      }),
                      (0, o.jsxs)('div', {
                        className: 'text-nexter-white text-opacity-40 text-2xl font-[300]',
                        children: [(0, o.jsxs)('span', {
                          className: 'text-nexter-white',
                          children: ['0', t + 1]
                        }), '/0', n]
                      }),
                      (0, o.jsx)('img', {
                        className: 'cursor-pointer',
                        quality: 100,
                        src: './source/minusarrow.png',
                        alt: 'solution',
                        width: '40px',
                        height: '40px',
                        onClick: function () {return A((t + 1) % n)}
                      })
                    ]
                  })]
              })
            })
          })
        })
      },
      ge = function () {
        return (0, o.jsxs)('div', {
          className: 'flex flex-col bg-center bg-no-repeat bg-cover bg-cards-gradients',
          children: [(0, o.jsx)(Q, { className: 'font-recoleta', text: 'Testimonials' }), (0, o.jsx)(de, {})]
        })
      },
      pe = function () {
        return (0, o.jsxs)('div', {
          className: 'flex flex-col relative',
          id: 'metrics',
          children: [
            (0, o.jsx)('div', {
              className: 'absolute bg-no-repeat w-full h-full bg-auto bg-protocol-metrics-xs sm:bg-center-top-position sm:bg-protocol-metrics',
              children: [
                (0, o.jsx)(Q, {
                  text: 'Protocol Metrics',
                  className: ''
                }),
                (0, o.jsx)(Q1, { text: 'Join the Certux Early Bird Program' }),
                (0, o.jsx)(Q2, { text: 'Get a head start on your Certux journey with our Early Bird Program, offering exclusive benefits, such as $CTX airdrops and attractive investment packages. Don\'t miss out on this limited-time opportunity to maximize your potential returns and be a pioneer in the Certux ecosystem.' }),
                (0, o.jsx)('a', {
                  href: 'https://test.certux.xyz/earlyBird',
                  target: '_blank',
                  className: 'bottom-button-own',
                  children: (0, o.jsx)(b, { className: 'text-xl !leading-10 font-[500]', children: 'Join Eearly Bird' })
                }),
              ]
            }),
          ]
        })
      },
      he = function () {
        return (0, o.jsx)('div', {
          className: 'bg-[#17181F] w-full flex md:my-14',
          id: 'partners',
          children: (0, o.jsxs)('div', {
            className: 'container mx-auto px-6 lg:px-8 py-8 md:py-6 flex flex-col lg:flex-row items-center justify-around lg:gap-10 gap-4 lgDesktop:gap-24',
            children: [(0, o.jsx)('h2', {
              className: 'text-center text-3xl font-recoleta leading-[38px] text-white w-[239px]',
              children: 'Ecosystem'
            }), (0, o.jsx)('div', { className: 'bg-gradient-divider h-0.5 w-24 lg:w-0.5 lg:h-24' }), (0, o.jsx)('ul', {
              className: 'flex flex-wrap items-center justify-around lg:justify-between grid-cols-5 gap-10 md:gap-1 flex-1',
              children: g.map((function (e) {
                var t = e.Logo, A = e.name, s = e.link
                return (0, o.jsx)('li', {
                  className: 'flex justify-center align-middle md:p-5',
                  children: (0, o.jsx)('a', {
                    href: s,
                    target: '_blank',
                    className: 'text-gray-400 hover:text-gray-500',
                    children: (0, o.jsx)(t, {})
                  }, A)
                }, A)
              }))
            })]
          })
        })
      },
      Ce = function (e) {
        var t = e.videoUrl, A = e.classes, i = e.vedioTagClassName, n = e.width, r = void 0 === n ? '100%' : n,
          a = (0, s.useRef)()
        return (0, o.jsx)('div', {
          className: ''.concat(A, '  hidden xl:block absolute rounded-3xl m-auto z-[0] w-full top-0 right-0 left-0 h-[100vh]'),
          style: { width: r },
          children: (0, o.jsxs)('video', {
            ref: a,
            id: 'videoUrl',
            width: '100%',
            height: '300px',
            className: ''.concat(i),
            autoPlay: !0,
            muted: !0,
            loop: !0,
            style: { filter: 'opacity(60%)' },
            children: [(0, o.jsx)('source', { src: t, type: 'video/mp4' }), 'Your browser does not support HTML video.']
          })
        })
      },
      ue = function () {
        return (0, o.jsxs)('div', {
          className: 'relative flex flex-col min-h-screen bg-nexter-bg',
          children: [
            (0, o.jsx)(Ce, { videoUrl: '/videos/heroVideo.mp4' }),
            (0, o.jsx)(l, {}), (0, o.jsx)
            (q, {
              classes: '!mt-[7rem]  lg:!mt-[11.688rem]',
              children: (0, o.jsx)(f, {})
            }),
            (0, o.jsx)(q, {
              classes: '!mb-0 md:!mb-14',
              children: (0, o.jsx)(k, {})
            }),
            (0, o.jsxs)('div', {
              className: 'relative',
              children: [
                (0, o.jsx)('div', { className: 'hidden lg:block absolute w-full h-full max-h-[1374px] bg-center bg-no-repeat bg-cover bg-mesh-dark-gradients z-30' }), (0, o.jsx)(Ce, {
                  vedioTagClassName: '',
                  videoUrl: '/videos/predictionMarketVideo.mp4'
                }),
                (0, o.jsx)(q, { margin: 'my-14 first:mt-6 sm:my-0 sm:mt-0', children: (0, o.jsx)(Y, {}) })
              ]
            }),
            (0, o.jsx)(q, { children: (0, o.jsx)(ie, {}) }),
            (0, o.jsx)('div', {
              className: '',
              children: (0, o.jsx)(ce, {})
            }),
            (0, o.jsx)(q, { children: (0, o.jsx)(y, {}) }),
            (0, o.jsx)(q, { children: (0, o.jsx)(pe, {}), classes: 'm-b-0' }),
            (0, o.jsx)(he, {}),
            // (0, o.jsx)(q, { children: (0, o.jsx)(ge, {}) }),
            (0, o.jsx)(L, {})]
        })
      }
  },
  8312: function (e, t, A) {(window.__NEXT_P = window.__NEXT_P || []).push(['/', function () {return A(7596)}])}
},
  function (e) {
    e.O(0, [699, 774, 888, 179], (function () {
      return t = 8312, e(e.s = t)
      var t
    }))
    var t = e.O()
    _N_E = t
  }])
