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
              children: [(0, o.jsx)('path', {
                d: 'M68.7964 23.5555H59.6774V9.19195H50.5583V0.0644531H68.7964V23.5555Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M87.0485 23.5555H76.6228L86.3813 0.0644531H96.807L87.0485 23.5555Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M76.6123 10.4946C79.4894 10.4946 81.8217 8.1566 81.8217 5.27247C81.8217 2.38834 79.4894 0.050293 76.6123 0.050293C73.7353 0.050293 71.403 2.38834 71.403 5.27247C71.403 8.1566 73.7353 10.4946 76.6123 10.4946Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M4.79335 59.3912H8.49306V44.8528H13.3371V41.3365H0V44.8421H4.80136L4.79335 59.3912Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M13.3425 59.3913H16.8102V53.316C16.8102 51.2062 17.9011 49.9361 19.5469 49.9361C20.083 49.9334 20.6155 50.0239 21.1207 50.2035V46.6845C20.7414 46.574 20.3473 46.5226 19.9524 46.5321C19.2696 46.5345 18.6035 46.7446 18.0424 47.1347C17.4814 47.5248 17.0516 48.0765 16.8102 48.7168V46.6845H13.3425V59.3913Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M27.7918 59.6718C29.5416 59.6718 30.8593 58.7814 31.4435 57.9685V59.3911H34.9111V46.6843H31.4435V48.1069C30.8593 47.3047 29.5416 46.4036 27.7918 46.4036C24.4202 46.4036 21.8328 49.4546 21.8328 53.0377C21.8328 56.6208 24.4228 59.6718 27.7918 59.6718ZM28.528 56.4925C26.5994 56.4925 25.3271 55.0458 25.3271 53.0377C25.3271 51.0295 26.5941 49.5802 28.528 49.5802C30.4619 49.5802 31.7289 51.0295 31.7289 53.0377C31.7289 55.0458 30.4539 56.4925 28.528 56.4925Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M43.1857 59.6719C44.9355 59.6719 46.2532 58.7815 46.8374 57.9686V59.3911H50.305V40.3284H46.8294V48.107C46.2452 47.3048 44.9275 46.4036 43.1777 46.4036C39.8141 46.417 37.2267 49.4546 37.2267 53.0378C37.2267 56.6209 39.8141 59.6719 43.1857 59.6719ZM43.9219 56.4925C41.9934 56.4925 40.721 55.0459 40.721 53.0378C40.721 51.0296 41.988 49.5803 43.9219 49.5803C45.8558 49.5803 47.1228 51.0296 47.1228 53.0378C47.1228 55.0459 45.8478 56.4925 43.9219 56.4925Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M55.1569 44.5987C55.5932 44.5987 56.0197 44.469 56.3824 44.226C56.7452 43.983 57.028 43.6376 57.1949 43.2335C57.3619 42.8295 57.4056 42.3848 57.3204 41.9559C57.2353 41.5269 57.0252 41.1329 56.7167 40.8236C56.4082 40.5143 56.0152 40.3037 55.5872 40.2184C55.1593 40.1331 54.7158 40.1769 54.3127 40.3442C53.9096 40.5116 53.5651 40.795 53.3227 41.1587C53.0803 41.5224 52.9509 41.9499 52.9509 42.3873C52.953 42.9731 53.1861 43.5344 53.5994 43.9486C54.0126 44.3629 54.5725 44.5965 55.1569 44.5987ZM53.4337 59.3911H56.9014V46.6844H53.4337V59.3911Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M59.9876 59.3911H63.4553V53.1901C63.4553 50.7488 64.6476 49.5802 66.2694 49.5802C67.7152 49.5802 68.502 50.698 68.502 52.5216V59.383H71.9697V51.944C71.9697 48.6417 70.1452 46.4036 67.075 46.4036C65.4292 46.4036 64.1408 47.1148 63.4499 48.1309V46.6843H59.9823L59.9876 59.3911Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M80.8201 56.086C80.1768 56.0913 79.5465 55.9049 79.0091 55.5504C78.4717 55.196 78.0515 54.6895 77.8017 54.0952C77.552 53.5009 77.4841 52.8456 77.6065 52.2125C77.729 51.5794 78.0363 50.9971 78.4895 50.5394C78.9426 50.0817 79.5213 49.7693 80.1519 49.6419C80.7825 49.5144 81.4366 49.5777 82.0313 49.8236C82.626 50.0695 83.1344 50.487 83.492 51.023C83.8495 51.5591 84.0402 52.1896 84.0397 52.8345C84.0498 53.2622 83.9736 53.6876 83.8157 54.0851C83.6578 54.4826 83.4214 54.844 83.1207 55.1476C82.82 55.4513 82.4613 55.691 82.0659 55.8522C81.6706 56.0135 81.2468 56.093 80.8201 56.086ZM80.412 64.9583C84.2931 64.9583 87.2326 62.9742 87.2326 58.399V46.6843H83.7649V48.1069C83.0821 47.1148 81.711 46.4036 80.0892 46.4036C76.7683 46.4036 74.1062 49.2513 74.1062 52.8345C74.1062 56.4176 76.7736 59.2386 80.0892 59.2386C81.711 59.2386 83.0821 58.5006 83.7649 57.5621V58.4257C83.7649 60.458 82.4312 61.9019 80.3666 61.9019C78.8905 61.921 77.4671 61.3527 76.4082 60.3216L74.5063 62.9127C75.9521 64.3326 78.2087 64.9583 80.412 64.9583Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M94.5759 59.3912H97.8488L105.302 41.3365H101.244L96.2243 53.8641L91.1296 41.3365H87.1498L94.5759 59.3912Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M108.489 44.5987C108.926 44.5987 109.352 44.469 109.715 44.226C110.078 43.983 110.36 43.6376 110.527 43.2335C110.694 42.8295 110.738 42.3848 110.653 41.9559C110.568 41.5269 110.358 41.1329 110.049 40.8236C109.741 40.5143 109.348 40.3037 108.92 40.2184C108.492 40.1331 108.048 40.1769 107.645 40.3442C107.242 40.5116 106.898 40.795 106.655 41.1587C106.413 41.5224 106.283 41.9499 106.283 42.3873C106.285 42.9733 106.518 43.535 106.931 43.9494C107.344 44.3638 107.905 44.5972 108.489 44.5987ZM106.764 59.3911H110.231V46.6844H106.764V59.3911Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M119.229 59.672C121.896 59.672 123.918 58.5516 125.097 56.8242L122.512 54.8936C121.928 55.7813 120.84 56.498 119.242 56.498C117.567 56.498 116.073 55.5594 115.87 53.8561H125.35C125.402 53.4599 125.42 53.06 125.404 52.6608C125.404 48.5188 122.488 46.4091 119.165 46.4091C115.31 46.4091 112.496 49.2809 112.496 53.0432C112.509 57.0541 115.449 59.672 119.229 59.672ZM116.006 51.4976C116.337 49.9467 117.783 49.2863 119.074 49.2863C120.365 49.2863 121.637 49.9735 121.939 51.4976H116.006Z',
                fill: 'white',
                fillOpacity: '0.4'
              }), (0, o.jsx)('path', {
                d: 'M138.426 59.3913H141.875L146.057 46.6846H142.323L139.938 54.8161L137.362 46.6846H134.694L132.133 54.8161L129.733 46.6846H126.028L130.237 59.3913H133.686L136.041 52.1716L138.426 59.3913Z',
                fill: 'white',
                fillOpacity: '0.4'
              })]
            })
          }, link: 'https://in.tradingview.com/'
        },
        {
          name: 'Magic', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '78',
              height: '96',
              viewBox: '0 0 78 96',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [(0, o.jsx)('rect', {
                width: '78',
                height: '96',
                fill: 'url(#pattern0)',
                fillOpacity: '0.4'
              }), (0, o.jsxs)('defs', {
                children: [(0, o.jsx)('pattern', {
                  id: 'pattern0',
                  patternContentUnits: 'objectBoundingBox',
                  width: '1',
                  height: '1',
                  children: (0, o.jsx)('use', {
                    xlinkHref: '#image0_8_1276',
                    transform: 'matrix(0.00102564 0 0 0.000833333 -0.0025641 0)'
                  })
                }), (0, o.jsx)('image', {
                  id: 'image0_8_1276',
                  width: '980',
                  height: '1200',
                  xlinkHref: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAASwCAYAAAAaFgJGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAcSZJREFUeNrs3ft11Mi6N+Cus87/4wwQEWAiQERwIILTzgAiGCYC5ovAPhHAjgARASaCaSIYTwT1qbA8eBhfutWSSio9z1q9zLnM3sNrtVQ/vXXZbACA2YkxbtvPl/ZzohoAAACwX5g+jT98UBEAAAB4PEyftJ8/4z+9VxkAAAB4OEx/iXfbqhAAAADcHajP48NOVQkAAAD+Gabfxcf9aZMyAAAA+BGmt3F/dv4GAACAbkfvP+NhzlUOAACANYfpkx5h+sY7FQQAAGCtYfpLPM5WJQEAAFhboD6Pw7DzNwAAAKsJ0+/icNKU8UpVAQAAKD1Mb+Pw7PwNAABA0WH6NI7ngwoDAABQYpiujtjR23FaAAAArDJMD7Gjt52/AQAAWF2g/hSn9UrVAQAAWHqYPo/T+9NxWgAAACw5TL+J+fxp528AAACWGKa3MT/HaQEAALCoMH06wY7ejtMCAABAmHacFgAAAGsO01Mej3WoN35DAAAACNPOqAaA7IISAMAggTpNq15CYH0eQrj0GwOA4/2XEgDAasJ08skZ1QAwDB1qADguTKcgvbRNv3ab6071ld8gAPSnQw0A6wrTSbW57lQ7oxoAjqBDDQD9wnSaNv2p/Sw5lH4MIbz22wSAfnSoAWCdYTp55YxqABCoAWCqMJ1C9IcCwvSNbft3euc3CwCHM+UbAA4L06kzXeIu2WchhAu/ZQAQqAFgjECdwnRd8F/xdRuqP/pNA8B+TPkGgP3C9HnhYTo5d0Y1AOxPhxoA9gvT25X8ddPZ1C9DCJd+8wAgUAPAMWE6Bem17YS9az/P21B95QoAgPuZ8g0AwvTPqvbzqduEDQC4hw41ANwdpl9tro/HWrM07fulTjUA3E2HGgD+HabTxlznKvH9eLD3ygAAd9OhBoB/h+l0PJbpzj9chBDOlAEABGoAuC9MpxD9hzB9p9/bUP1WGQDgB1O+AeBHmNaZvt+bbpM2AKCjQw2AMP0jTJ+qxqPOQggXygAAOtQAkHwQpvd2rlMNANd0qAFYtTYcpt28BcTDpGO00nFal0oBgEANAMI0QjUACNQAIEwL1QAgUAPA8GE6BelzlRgsVD9tQ/WVUgCwNjYlA0CY5hjfd0jvdkoHgFXRoQZAmGYIadr3S51qAARqABCmEaoBQKAGYPVhOp0x/UUlpgnVbaB+rgwArIE11ACsIUx/UonJnHY7qANA8XSoAVhDmLZh1vQuQghnygCAQA0AwjRCNQAI1AAI0wjVACBQA8A/w3QK0X8I00I1AIzNpmQAlBamdabnZ9v+bt4oAwCl0aEGoLQwfaoas3UWQrhQBgAEagAQphGqARCoAUCYRqgGAIEaAGEaoRoABGoAEKaFagAQqAFAmEaoBkCgBgBhGqEagLVyDjUAS3MuTJf3O40xbpUBAIEaAEbShq4Upl+phFANAHNgyjcASwrTAlf5XocQPioDAAI1AAjTHOaq/bxsQ/WlUgAgUAOAMI1QDYBADQDCNEI1AAjUAAjTCNUAIFADIEwjVAPAdBybBYAwzZydtJ9P7XXhuDQAZkeHGgBhmqU4CyFcKAMAc6FDDcAcgvSJMM0eztvrxDUCwGzoUAOQPUy3Pz61n1PVYE861QAI1AAI08I0QjUAAjUACNMI1QAI1AAgTCNUA4BADYAwjVANAAI1AMI0CNUACNQACNMgVAOwSM6hBkCYphTpnOo3ygDAVHSoARg7TKcQ/aH9VKrBRC5CCGfKAIBADcDSw3TqTJ+oBkI1AAI1AAjTCNUAIFADIEwjVANAHzYlA0CYpmTb9po87zbGA4BB6VADMGSY3rY/3gvTzNBl+3kZQrhSCgAEagDmGKbPVQKhGgCBGgCEaYRqALiXNdQACNOsyfc1/u11WykFAMfSoQbgmDCd1ku/UQkWKHWoU6f6UikAEKgBmDpMp670ViUQqgEQqAFAmEaoBoC9WUMNwCFB+qT9fBCmKUg64u1LtxcAABxEhxqAvcN0++PT5npTJyjRWQjhQhkAEKgBEKZBqAZgRKZ8A/BYmE4h+oswzUqcd3sEAMCjdKgBeCxMp870iWqwMhchhDNlAOAhOtQA3Bema2GaFdumDfi65Q4AcCcdagDuCtPb9odpr7DZpOO00rFaV0oBgEANgDANQjUAAzDlG4DbYfq9MA3/kvYS+KPbUwAA/qZDDcBNmE5BeqsScK/UoU6d6kulACDRoQYQpE/S5kvCNDzq+3ns3bIIANChBlh7mN5c7+RtKisc5iyEcKEMAOumQw2w3jB9KkxDb+fdngMArJgONcC6w7QzduE4FyGEM2UAWCcdaoD1helXwjQMZtt+pz51yycAWBkdaoB1hentxrFYMAZnVQOskA41wHrCtDOmYTxpGcUXZ1UDrIsONcA6wrQzpmEazqoGEKgBKCRIOxYL8nCsFoBADcDCA/UXYRqyed2G6o/KAFAua6gBymbnYfD9A0CgBqAH3THw/QNAoAagh/9TAsji0hFaAAI1AAvW7TRsUA/T8zILQKAGoACmnYLvHQACNQA9/EcJYFK7EMJOGQAEagCWr1ECmJTuNIBADUAJuo2RDPBhOmaFAAjUABTksxLAJK5CCI0yAAjUAJRDhxp81wAQqAE4VLdB0qVKwOjMBgEQqAEoUKMEMDodagCBGoAC2SgJxnXZbQIIgEANQEm6jZIM9mE8/6cEAAI1AOUyHRXG0ygBgEANQLlsmATj2IUQbPwHIFADUDAdahhHowQAAjUABes2TNJFg+HZ9A9AoAbAwB/ooVECAIEagPKZ9g0Dh2nHZQEI1ACsQLdxksE/DMesDwCBGoAV0aWG4TRKACBQA7Aejs+CYTguC0CgBmBlGiUA3yUABGoADhRC2G0cnwVDMNsDQKAGYIUaJYCj2Y8AQKAGYIXsTAzHuXRcFoBADcAKtUGgUQU4ipdSAAI1ACtmuir01ygBgEANwHrZUAn6uTLLAwCBGmDdBALw3QFAoAbgUCGEdHTWTiXgYGZ3ACBQA6DTBj3YfwAAgRoAnTY40C6EsFMGAARqAHTa4DCNEgAgUAOQ1lFftT8uVQL2ZlYHAAI1AH9rlAD2ZlYHAAI1AH/TcYP9XHazOgBAoAbgu0YJwHcFAIEagAN1HTdBAR5nNgcAAjUAggL00CgBAAI1AIICHMb6aQAEagD+rQ0KAjU87D9KAIBADcB9hGrw/QBAoAagB+uo4R5mcQAgUAPwEIEBfDcAEKgBOJQOHNzL7A0ABGoAHiVUg+8FAAI1AD3oxMFPzN4AQKAGYB+CA/hOACBQA3AonTj4F7M2ABCoAdibUA2+DwAI1AD0oCMHHbM2ABCoATiEAAG+CwAI1AAcSkcO/ma2BgACNQAHE6rB9wAAgRqAHnTmYLO5VAIABGoADtUoAWsP0yGEK2UAQKAG4CDWUYOXSgAI1AD0Z7ora2bZAwACNbBsMcbT9vNOJbJolADXPxPe7yv3e0CgBhhucJUGVl/az/+qRhY6dKzVzvrpLOr282t77/+SXqYqByBQA/QL0qlL8SkNrLr/VfqfK5WZXKMEuPaZ0IvuZwrTn9r7/hslAQRqgMPC9HZz3ZWuf/o/1aozra5Dt1MJVsjsjDxud6VP2s/79HLVC1VAoAZ4PEiftJ8P7R/Pu4HUz56pUhaNEuC6Z4pnwE+B+kbdftIU8FeqBAjUAHcPpNJA6Y/289CAqVapLHTqWJurEMJOGSb30D0+he0P6aVrF7wBBGqAriudOtIfNnd3pW87NZDKwtFZrE2jBFnsswnZ95evutWAQA0I0zHWm+u10tuBB1wMKISQArXdjlmTr0qQxYs9//9uutXnXrICAjWwxiCdutLv2z+mXbyrA//xWgWzaJQA1zsjO/T+vt1cr632XAAEamA1YToNfFJXuu9RKC9UMQsdO1YjhCBQT/9s6Dv7qNpcH6/1XrcaEKiBkgdLx3SlbzPlOw8BA9c6Y6qP/OfTS1rdakCgBooM02mAc0xX+raTIzoZ9KRjx4rYhC+PIWYfVRvdakCgBgoK0kN1pX8mUAsaMBbHxOUx5H1dtxoQqIHFh+k0kBmqK/0z66jzaJSAFfDiaPrnReomVwP/x6b/PN1qQKAGljcwGqkrfZsOdR42JqN0uxDCThkmV4/4n61bDQjUwGLCdBqwjNWV/keg1nHIolECCqc7ncfYL0mrjW41IFADMw7SU3Slpx6A8ZOuc3elEhTMLIw8plrGo1sNCNTA7MJ0GphM0ZX+mQFRHjp4lKxRgiymvJ9XG91qQKAGZhCkc3Slb7MxWR52QKZYjofL8izJNdsovQT+o/3vf+W3AAjUwNQDoDQA+WMzfVf6NlO+8xA4KJXZF+u7l6cO9Yf2mfZBtxoQqIEpgnTqSn9IA5BuIJJT+nep/FaEDhhIowRZzGG20feXxLrVgEANjBmmv0+P6wYec1H7zUwrhJA2JdupBAWyIVkec5ltdNOt/uRlLSBQA0MG6SoNMNo/vt/k70r/7JnfUBaNElAgsy/WHahv1JvrncDf+NUAAjVwbJh+t7newbs2EOMWnTyKE0IQqKd/xsz12ZJeHqddwL9k3DQNEKiBBQ9yTtNAov3jr5v5daVvq/22shA8KE2jBO7hd0hhOoXqdzYtAwRqYJ8gfXMU1pfNQrq/ugfTc7QQBXIcXB5LWbbzaxesa78yQKAG7gumr7ogvbR1YwJ1HrrUuJ5Z0/27aj9pw7Jz3WpAoAZuB+nq1lFY1QL/Ci/8FgUQcD0v7tlzstBnznZzfcTW1m8REKjBgCZ1o1NXeslnb+pQ52FjMkpxFULYKYN79wHSy4BzR2wBAjWsN0jfbDo2x6OwBOplaJSAQuhO51EX8nf4w6ZlIFAD6wnSi9t0bM+/V+23Oy1HDFEQG5Ll8aygv4tNy0CgBlYQptO07j82y9t0bB+61Hk0SkABvBxy3x5CtbnetOyDaeAgUANlBem06dinzfWmY6VOSXvmNy2IgOt4Mc+lpW5Ito/vJ2Z0e5QAAjWw5AFLWte1ue5K14X/dXWo87AxGUtnQzL37DGkFwbv014lpoGDQA0sM0ynB3haJ/2rwRkjEkRYOt3pPNYSMtOzydnVIFADCwrSN2dKpyne1cr+7rUrYFohhEYVWDgbkuWxtmU62831buCmgYNADcw4UL7bLP9M6WNUroIsdPhw/XKoNc4quj0N3KwqEKiBGQXpuv2kddK/bsrddGwfNiYTSMD1O/9nVskbku0jhekvpoGDQA3kH5Ssdnr3A4MUpmdjMhbLhmTu1RltN6aBg0ANZAnSJ6Z336lWgix0+FiqRgncqzOzGzgI1MDEYfrV5sfu3aaK/bs+Oh8TszEZC+ZlUB5PlOBf7AYOAjUwclBM07vT1O40xbtSkQcHJQgmsA/LFdyn52a7uZ4G/k4pQKAGhgnSaXr3+/SA3Zgmt49KCbLYKQEL5EWQQD1HqUP9a9ps1DRwEKiB48L0tgvSNizZ3wslyEKnj8UJIQjU0z/XBMT9VZvraeDpUykHCNTAAQOOtEFJ+8fzjXXSh9L5yKNRAhZGmM4XEjlMvemmgVtfDQI18HCQvn0MlmDYz4kBh3ACrtnZeqYEvf3aBeutUoBADfwzSN8cg5WmdzsG63heRkwshHDV/rhSCRbkmxK4Py9QemF87pgtEKiBH2F62wXpX1VjMAYZeej4sSSNEgjUC69jWlv9wfpqEKhhrUHaOunxmFKYx2clYEG8AJr+uVd53g0uzWqzvhoEaljXgMI66dFVSpDFTglYiKtumQLuzaWwvhoEaig+SFsnPR0vKvLQ8cO1ykNqJRjVzfpq51eDQA3Fhek3G+ukp665UD0xZ/qyIJYn5GE5zjSqzY/zqz0LQaCGRYe6V+lNcfvH9xvrxqZmEJGHUM0S7JQgW9BjOnX7SbuBn9u4DARqWFqQThuOpTXSHwwgDNwEFZgdL37y8KIzj20XrG1cBgI1zD5Ipw3H0q7dKUzXKpLVCyXI4qsSMHeWJ2R5PgrTeaUgbeMyEKhhtgOFtOFYmtadpnd7UM1DpQRZCCq4RrmLQD2fYH2zcZkNUkGghlkE6XddkH6jIgI1wgqzt1MC92S+/z4+dBuX1coBAjXkCNPb9seXzfUUKmuS5vk7MkiYWAhBWGHuLEvIwzKceUrPyRSqP9i4DARqmCqk3ezcndZKe/jMmymGeTRKwIyZRZGH5+W8penff9gRHARqGDNI27l7eZ4oQRY7JcD1iUC9SNuNHcFBoIaBg/RpF6Tt3L08OtR5fFMC5soO31meo56dy3J7R3DBGgRq6D0AuDkC64sgLVBzkEYJmClhOo9KCRYdrL84agsEaugTpB2BVcBgwJv1LHZKgGsTgbqo39/NUVvGRSBQw71B+vYRWB4Y5dClnpidvpkxO3znYYfv8oJ1rRwgUMNdQfpXFRGoGUSjBMyQKd/5ghhl/T4/OcMaBGoE6Z+DtKnBZfJ7zWOnBLguEaiLVgvWIFCz3jD9RpBeDVMN87DTN7Njh+8sz1tBS7AGgRoKerBv09qf9o/vBenVqJQgi0YJmBlh2j2YaYL1h7TBq3IgUEOZQfrcw91gjklcKQEzs1MC92Am8WpzfYb1uWCNQA2CNGVcB7UqTMvUWmbIDt95PFOC1doK1gjUIEhTBtdAHkI1c7JTAvdfBGsQqEGQxoBOgAHX41I4uhDBGoEaBGkWzpTDPEyxZTZCCI0qTP5s9jxGsEagBkGaArg28tgpATNhkzz3XgRrEKhBkKYnUw4FatbNev48aiVAsEagBkGaMq4d18vETLFFoF69X5SAHsH6g9M5EKhh2CB00n7etZ8/BWmO4LrJw1Rb5uAvJcjC7CD6SOdYf2rHfZ8EawRqGCBIt39MHelf28+JqmBgtzg6g8xBowTuuyxOLVgjUIMgzXw8UYIsdkqA63C1PL8ZOli/Ug7m6L+VgBmF6TSl+5WHMCPQKcnjmxKQWwhBoJ7+eV6rAiME67q9ttL3+cw+HcyJDjVzu1kK04yhUoIsTPnGNbhOnuWM+Tz3khyBGu7RKAECdVF2SkBmNsbLQ+BhTB+VAIEa7vYfJWAsMUYDvImFEHQHye2zEmRh3wrGcmkZBwI13D/49saRMZmCmIeBDznpUOdRKQEjaZQAgRoeJlQzlloJBGpWxyyJPMwIYixmMyJQgxslmfyiBAINq7NTgizMCGIMV3b3RqCGx7lRMhYdkzz+UgJysdZyeo7MYkRmMSJQw56DHx0txlApQRa+z7j21kV3mrHYZBCBGvbUKAECdTFsCoVrb13MBmIsOtQI1LAn66gZRYxRqJ6Y9W5kpEOdhyOzGOX73D5PvCRDoAYDcDITqPMwCCIH6/fdZymHZgsCNRzItB7GYCpiHjqF5NAogUCN7zMI1KyVjScYg81y8tChBoEaej9DzF5EoIbD6VAzhmdKkMVXJWBqBuDTizGaBcQYfJcRqKHHQGjX/tipBAPToc7Dd5mpmRXhHks5zFpEoIaeGiVgYLUSCNSsgnX7eehQMwazFhGooSdvJEGghj50qPPQoWbw50c3axEEaujBG0kGF2OsVWFaBkNkYN1+HvapYGiNEiBQQ/9BeOowmLYHZRCqmZIOdR461AzNbEUEajhSowQMrFYCgZrieRmbhzXUGAciUMPMeDMJAjUcSoc6Dx1qhnRpyRACNRyvUQIG9kIJsvimBEylHYTrUE/MGdQYAyJQwzwHRdZRQxl2SsBEdKfz0J1maGYpIlDDQBolYEC1EgjUFM1L2Dx0qDH+Q6CGmfKGEgRq2JcOdR461AzpspulCAI1DKBRAoZkrd/0bCzDhJxBnccTJcDYD4Ea5jkQt46aoemk5KHbAOWqlIABeTGGQA0Da5SAAelQ5+HFGJ4XAjX4HiNQQwbWUTMkHeo8dKhBoIbH7CwTQqCG4elsMSRr/fIwhY/RtQPxRhWmFWP0kpIh+Q4jUMMIA6Tdxi7BDKdSAoDBWEbDkMxKRKCGkTRKwEB0U3yHKZPZTOB7DAI13MN0UYaimwJlsk4/j1oJGOo7HEIQqBGoYSSNEsCiGSQxtp0SgOcECNRwh+6Npe4Dg4gx1qow+XfY95exfVOCLJ4pAQOxfhqBGkbmzSUs204JGJGXNnnYl4KhNEqAQA3j8uaSoVhHLVBTHi9d86iUAN9hBGpwo2VddFQABGpmNMazNAiBGsbXKAED+UUJsjDLhFEH5EoAvr8gUMM9ujeXO5VgAKZ8Q5nPCCZkg0cG5IUrAjVMxBtM8P2FnwnT4PkAAjXswRtMhlArgdCDwThHM9uHQXTHo4JADQZNgEANq2GDR4bQKAECNUwkhOCmyyBijJUqTP799UKMsZi9lIcNHhmCZwMCNbjxskACNcBxTPlmCF+VAIEaBGrA95d8LCcAzwUQqGFP3mQyhFoJBB8MyDlKpQQcy3IgBGowcAIAgRoO1ygBAjUI1CyTzXTysHkUnguA7y4CNeQSQkhTRncqwZFspgNlPReYUIyxVgUGYBkfAjVk4o0mLJPgA8CNnRIgUEMe3mhyrEoJsvAyjKE1SpDFiRJwrBCC7y8CNRiUI1ADrI5lMxjLIVArAW7CwMR2SsDALCMAzwMQqOEQIQQ3YY4WY9Rh8d1l+SwByuOJEuC7i0ANy9YoAUeyBhCgn0oJMI5DoIZlM+0bfHfBlG9Ypp0SIFBDXt+UgCOZ8i0AsXxe0ORRKQHHsAQIgRoMolg+U74BBGqm1ygBAjUI1IDvLvmZ8QDLs1MCBGrILIRwZSDFkZ4pQRZ/KQEDPgu8oJlYjLFSBY5k2R4CNcyEgRTHMOUb4HACNcdqlACBGgRqoJ+dEjAQs5TAcwAEajiCqaMco1ICAykWzUvVPMzu4Sh2+EaghvlolACBGmBSjhzE2A0EagqxUwJYHNN0ATwDQKCG3EwZ4lgxRlMXp//emqbLUD4rASzOVyVAoIZ5MTjnGKYuAhzmhRJg3AYCNeXYKQEAwCKY8o1ADTNj6hAsT6MEDGCnBLAsIQT3fwRqMKCiIKZ8g/s/h6mUgJ50pxGowYCKwtiUDECgZhrWTyNQg5szMABdCoD12SkBAjXMTAjBwJxj/KIEWdj7gCHu/40qwKJ8UwIEapgnXWr6soYaYE8xRvdMjrFTAgRqmCddagAYn30nEKhBoKZAn5UADKpYFS9SYXnMKESgBiiMbotAjYE5MAH73iBQw3w1SkBP1gMC7K9WAnryEgyBGgAAoAfdaQRqmCtHp8Di7JQAYFV0qBGoAUoUY7SOemIhBIGaY9mMEpblLyVAoIZ58+aTvqyjBtjPMyWgp50SIFDDvFmbAwDjMqMHgRoEagqlQw3L4iUYgEANAjXMhLU5sCxeguH6gZWwdwYCNcyfGzV9WUMNy2OGQx6mfAMI1AjUYIAI0IMXkPTRKAECNQAAACBQU54QQqMKsCg7JQBYBXseIFADwMC+KQEG6LAKNo5FoIaF2CkBPTxTAliWEIJNySYWY7TfBH35viJQg0BNwQwSAR5nQzL6MqMEgRoAAAAQqCmXN6CwHKYAAqzDTgkQqGEZbHoBy+EFGAbnsAIhBN9ZBGqAgllDDQI1AAjUrF6jBPRgox2Ax1VKQA9mIyFQAwAgUCsBPdgvA4EaAAAAEKgpWAihUQUAgNnYKQECNQAMzAswjmAKKSzHNyVAoAYAmI+vSgCAQA3j2CkBh4ox2ukbAIZnRgkCNQjUrICzqAEe9kIJ6MGxWQjUAAAAgEANAAAAAjXc4bMSAADMwk4JEKgBYBzW1gEULIQgUCNQA8BI7P5KH17EACBQAwD04EUMAAI1jETngj6cQw0AgEDN6ulc0IdzqAEe5sUjh2qUAIEaAAC8eAQQqAEAAECgBgAAAIEaBrNTAgAAQKCGA4UQBGoAgPw+KwECNQAYbAEACNQAwOLtlAAAgRoA4ECW9gAgUAMAAIBADQAAAAI1lOBSCTjQEyUAAECghs3mSgk4UKUEADAoDQ4EagAA1i3GeKoK9KDBgUANAMDqnSgBgEANAAAAAjUAAAAI1AAAACBQAwAAgEANAAAACNQAAAAgUAMAAIBADQAAAAI1AAAACNQAAACAQA0AAAACNQAAAAjUAAAAIFADAACAQA0AAAAI1AAAACBQAwAAgEANAAAAAjUAAAAI1AAAAIBADQAAAAI1AAAACNQAAMzJTgkABGoAAA4UQhCo6aNSAgRqcANnHS6VAACMx0CgBjdwDveXEgAAIFADAACAQA0AAAACNQDAUWKMtSoAIFADsHZPlAAAEKgB4HCVEgAUy0tTBGpYmhjjqSoAAGRXKQECNSzPiRIAAAACNQAAAAjUAAAAIFADALAel0rAgSzDQ6CGBbIpGQaKAMO7UgKMyUCgpnzehmKgCACAQA0A8JNKCQAQqAEQjMB1A4BADbPxRAlAMAIgvxhjrQoI1GCADgAAIFADAACAQA0AwBR2SkAPTl9BoIaFceYhfTiHGuBh35QA4zIQqCmfN6EcLITgHGoAAARqAOYvxujlF329UAIABGoYfoBeqQIshmmAAOV7pgQI1LAcAjUAwHyYjYRADQAAAAjUlK1SAnqwIRnA45yGQB+W9yBQg0CNQSLA6nn5SB+mfCNQA4BBFjNSKwEAAjUM74kSwGKYBgiwAjHGWhUQqGEZKiUAAAAEagAA5sIaavqyxAeBGhaiVgJ6sCkZwCNCCO6V9GWJDwI1QMH+UgJYlhhjpQoACNRgcAVr9UIJOIJ7PizHMyVAoAaDKwAADmcNNQI1AACrZ2MyBGoQqClUrQT0ZKMdAPdLxmNTMgRqgILpuOShY4EBOgACNcyEDS9AIGI9vJCBBYkx1qqAQA0GVwAAAAI1xamUgJ5M+QbYjzXU9GVWEgI1CNSUKIRggAjL84sSZPGXEtCTmYQI1DBXMUZhGpb1ndWp4FiuIVgWe90gUMOMCdSwLDoVAO77IFCDQA0Aq7FTAnoyqwSBGgRqCtQoASySbpdAje8sCNQwkCdKAIuiU4FrCFbG/hkI1DBflRLAouhUALj3g0ANAjUL5wxqgP3tlIAj6FAjUINATWG+KgEskyMTpxdCEKg5hg41AjXMcEDlbScszwslYAACNbj3g0ANR/K2EwDAmA0EauihVgKOsFMCgIM0SkBPZhUiUMMM/aIECNSLUykBBuewPvY+QKAGAypAoGYeTB8F938QqMGNGQAWY6cEHEEjBIEaBGpKEUJoVAEW64kSZPFNCTiCmSUI1DAXMcZaFcD3ltWqlAAWx9FZCNQwI95yAsC0rpSAI1RKgEAN82EdDse4VAJYNC9V3TsRqEGghiM8UwKOoMuShxdhuJZgxSz9QaCG+aiUABZHVxHAcwAEapgB3QmOYdoiwIGcjoDxGwjUFCDG6GbMsf5Sgiws1WDIZ0GtCuA5AAI1HK5SAlgkU/0AjOFAoIbMdKg51k4JAHpplABjOARqWDbThRCoDaSgVgJYHss1EKghv0oJYJFM+QbAOA6BGjLT5eJYdvmG5ftFCbL4rAQI1AjUsFCmCTGEEMKVKkz+3fUijKG5pmCZXigBAjXkUykBLJLp3lAGLyQ5lpdhCNSQkQ3JOFajBFCESgmysGSGY53EGL1kRaCGTLzVhGWqlQCBGjCeQ6AGN2CWzXRFgP52SsAAaiVAoIaJxRirjXWYHO+rEmTxRAkY4bngJevEQggCNUOwhA+BGjIwcILlqpSAEXjJCsZ0IFCDmy8T2ikBwFFsTMaxKhuTIVDD9JxbiEC9XF6IMYZaCbKwFwWeCwjU4MYLTEgnAgRquK1WAgRqmIgNyRhKCKFRhcm/v767jMVmd3nY3JEh2JgMgRompDsNvr/ws0oJwLMBBGpw02UaOyUAOJpNyRiCjckQqGFCNiRDoF4uL8QYS60EWVhDjecDAjUYNAET0YEAgRqM7xCoIYcYo7eXDOWzEmTxixIw4jOiUoVphRBM+WYoNiZDoIYJCNTgOwz3EahhuWolQKCG8Vk/zVB0VaA8lhTk0SgBQ3x/zTJBoIbx6W4xFOv+8qiVAM8IwDMCgRom1h2nYLCEQA0wLzslYCDWUSNQw4iEaQZjI53p2VSQCVgWlMc3JWAgtRIgUIObLHA361uhTGb8MBQvXhGoYUQ6DwylUYIsKiXAYLxIZvwwmBhjrQoI1GCgBAjUTM8sCFg+gRqBGobWrb00UGIouil5/KIETPC8qFRhWiGERhUYkBmJCNQwgloJGNBfSpCFWSZMQaAGYz4QqOEn3lYyJB1qKJfZTHk0SsBQnAqBQA3Dq5WAAdmR1veYchmIg+cFCNRww/ppRrBTAiiWtfp5mPnDkMxMRKCGAek2MKgQgkA9Mceg4JlRPHtTMCTPDARqGJC3lAxJmIaymdGUhw41g36PraNGoIbh1EqAQO17DHsyCM/D3hR4biBQw9x054lWKoFADTBrOtQMzQxFBGoYwCslYGDflMDAiLJZsz+9EIIONUPzPUagBoNwZminBADur8yeddQI1DCAWgkw4PNdBteb+yu+yyBQwwGcP40BH9CTs6jzsI6aof2PEiBQQ3+1EjA0Z1BPz3pWMjBNNA9nUWMsiEANM2L9NEMTpmEdzG7KQ4eawXkpi0AN/dnhG4G6DAZDTE2HOg87fTMG074RqOFQ3kYiUANHPkd0qaenQ80YjAkRqKEHbyMZgzOo87B8gxx0qSfmLGrG+i57QYZADYerlYAR6J7kYSBEDpUSZNEoASOwDBCBGvYVY0yDIJ0FxqB7kofvMwI1cAwznRCo4QC1EjASHeqJmaZHRk+UIIvPSsAIdKgRqOEA1k8zCuv7stCdJpdKCbJwn2UMJzFGzxMEathTrQSMoFECoYZVMfjOw0wgjA8RqCGX7rgsU0QZg66JQM26eJbksVMCRvK/SoBADY8z3ZuxfFWCLJ4pAbl0L2mZUAhBoGYsjs9CoIY9GPwwFoO8PAx+cP2538JQbE6GQA33cVwWBnhFqpWAjDxT3G8pi+OzEKjhAd46MiYb5UzM1DxmwNFZ7rcYK4JAzWp468hoHJmVhe4guVVKkMVfSsBITuyNgEAN9/PWkbE0SiDMsEpe6rjnUh6BGoEa7vG0/VwoAyPQnRaoWSfLDvLYKQEjXVdn7ed3pUCghjukozbaz5lgzQgcmZWHI7PIzvTQPM9zVWDoIN1eV0/bz4UlXAjUcHiwduNkiIcx06uUgBnQpc7DxmQMGqSVA4EajgvWvwnWCNSLY/0qrsP18symr0aQRqCGYYP1Vft5J1hzxDXUqMK0unPlYQ4sPcjjsxLQI0i/bJ/ZLwVpBGoQrJkP10keAjVzYcp3HjsloEeQbpQDgRoEa+bFOr48TLNlLmolEKgRpEGgBsEag7oleaIEzIUlCFl4mYkgjUANgjUF+KYEWehQMycCdYZns+cxgjQCNQjWlPEAR6DG9cj0dKkRpBGoQbBm4XZKkIWNoJgTSxDcfxGkQaAGwZoe14EB3cRijLUqMDM61HlYciNIC9II1CBYs2CmG+ZRKQECNRtLbgRpEKhBsGbRdkogUMPGEgT3YMb+Pb8WpBGoYX3B+nn7uVCRon1VgixeKAFzYylCluetQF1+kD5rf89P289H5UCghhU+6NvP2ea6Yy1Yl8mU7zwqJcB1SadRgqKDtPETArUSIFgL1oU/9BFcwHXpPszxrgRpEKhhn2D9cuONeim/Ux3qiZlWy4xZipCHnb7LCNJp7xlBGgRq2CuENWljDcF68YTpPColwLXJLZ6jZQTpd2kPGiUBgRr6BOvXG1PWlsjvTGgB16Z7Mf1ctJ/ngjQI1DBEsP6Y1gu1fzwzMFgUO3znYVots2VJQpZnqOfm8oJ06kif+d2BQA1DDwouumDtDOtlMOU7j0oJcH3yk0YJFvE7eilIg0ANUwTrd5vrHcEF63kzIBBY4GfPlMD9mH+47IJ0+jTKAQI1TBWqr7pg/XzjqK25/o50qCdmOi0LcKoEWdjpe352m+sjsJ4L0iBQQ87QdvsMaw+k+RCm86iUAIGaO3g+zsf3nbudJQ0CNcwxWN8ctSXMCdQCNczTSYzxRBkmt1OCWfh90x2BpRQgUMNcg3U6aitNA7cjeF6mF+Zhh2+WQJd6+mej52FeF12QfusILBCoYSmDh/TwSsHaxmV5NEogqIDr1H1Zze3cDQI1LDdUX93aEfxCRSZl4DCxbhqtqbQsgZ2+87AUZ9pn4Gs7d4NADSUFaxuXTefKm/gsdP1YikoJsrAUZ4Ln3+bHhmMflQMEaigtWN/euEzgG48uSB61EuBaxb05GxuOgUANqwnWaeOy1K1OXWvrqw3aSvFECViKGKMZFRmefaowimZjwzEQqGGlg4uLzfU08N9UY1BflSALAYUlqZQgi50SDFrLl906aXUFgRpWG6pvb1xmvZMBm0ANrteSmUF0vNSFftutk26UAwRqYPP3+urXm+v11QYcx9XSAGNips+yQM5Mz8MMouPcrJP+XSlAoAbuCYPtJ51f/XZjfXUfXkbkIVCzNJUSuEcvSLOxThoEauCgYP39LfTm+m00+9spgXAC+1yz3dnpCNRzf6a9tk4aBGqgX6hO66tTpzp1rBsV2YvphHmYPssSmVkx/XMthUId1sc5TxoEamDAAchld351WmO9U5EHNUogmMCeaiXIQpf6YRft57nzpEGgBoYP1uktdepWO2bLQG02YoxV+8PUWZbI2enu03OrS5rafWZ6NwjUwHih2jFb99vZrCUL3WlcuxzC0px/ujkG67lTKkCgBqYL1reP2dqpyHWgVgKhBFy7s6dD/cPFxjFYIFADWYN1OmYrdavTNPC1d2c/uyKyeKYELFWMsVaFyZ9bAvU/p3ebWQUCNTCDAcq7zfX66jVPAzdIy0OXD9cvh2pW+vc2vRsEamDGoXrt08AF6ol15/hWKsGCmWHhfj2Vi43p3SBQA4sI1mucBn5lV9QsdPdwDdPHmjYmM70bBGpgocH63eZ6GnizkgEL06uVAIGaHnYr+Dua3g0CNVBAqE7TwNMU8NeFD2BsSJaH6bIsno3JsjybSg+YaT8T07tBoAYKGrykh3vqVpf6cNehzkN3D9cx7ts/7DbX07tfm94NAjVQXqhO64zfbsqcBi5QT8yGZBTETAv37SH8lvYvMb0bBGqg/GB92U0DT+G6hDfoNiTLQ1cP1zLHKGWpTgrQT7t9SwCBGlhRsE7Tv9Nu4Es/u1p3Oo9aCRCoWfG9O72QTlO7X3qpCwI1sN5QfVXA2dU2JMvDNFmKYWOyLM+fJQfq7y+ku/1JAIEaMLD5vuYrra3+bYH/+jrUeejq4XrmWM3C/n13m+tNx97adAwQqIGfQ/XVQs+uFqgnFmOsNjYkoyxmXLh/P8amY4BADewVrJe0adnO2rUsdPNwTTOErwv4d0wB2qZjgEANHBys0xqx1K2e8xox3WnhAwa5pruj4HAPv5FeKL+16RggUAPHhOpdt2nZ6808u9Vf/ZayeKEElBiqlWDyZ8zlTJ8t6UXy0+7FMoBADRw96Pk+uGg/FzP7V2v8dgQPGEitBFnMqUt9cxTWa5uOAQI1MHSoTpuWnW3mdcSWKd8TizGmMG1qLCWyMVkeczn60FFYgEANTBKsm8312urcU+EudRCy0J3Gtc2g9/LM//27jaOwAIEamDhUp2512gX8ZcbBkO50Hrp4lKrqjoRjPffy75tvOgoLEKiBXMG6aT+pW/1bhv96G5LlUSsBBdOlnv45sttMv4wohXhdaUCgBmYzIHq3uZ4GPmWnoVF5gQMGZgf7PKZ8dvyWXgTrSgMCNTC3UH05Zbe6O26FCcUYa1WgcF4Y5THFxmTpmfG8ewEMIFADsw3WabAydre6UWlhA0ZQK0EWY78gvelKexELCNTAIkL12N3qz6qchemwFK87Go5pnxnNiEFdVxoQqIHFDpLSIGaMbrUuQx6CBmtQK0EWQ4dqXWlAoAaKCNVjdKsblZ1Wd5xQpRKsgKPh8rgc8D9HVxoQqIHignUa3AzRrd455iSLWglwrTOiIZby6EoDAjVQdKgeolvdqGQWunasRdXNyGBal0f+s7rSgEANrCZYp0FP3271VxXMolYCVsR+AdM/F3btj12Pf1RXGhCogVUOnm661b8f+I82qidgwMjsaJ/HIaE4he+XutKAQA2sPVi/TYOizX6diStdiOnFGGtVYGW8QMpj33XU6UXs8xGP2wIQqIFFheo0KNqnWy1M5yFQ45pnCo8F5N3muiv91uaUgEAN8M9QfXWrW33fQOmzSmVh+iurY2ZGlufAQy9NP250pQGBGuDRAVUaLD3tBk8/M5DKw/RX1kigzuPn+3x6wfq6fTa81pUGBGqA/UJ16la/ToOoza1utc7E9GKMKUyfqAQr5Ki4PD7/FK6ftvf+j8oCCNQAhwfr71P8ukGV9dN51EqAa58Jpft9epGa1km/1JUG5u6/lQCYeajetT9edp1SpqdLx1qdpPuOkwUml+r9vLv3A8yeDjWwlGBtUJtHrQS4/pnwXn8lTAMCNQCLF2Os2h+VSrBidrgHQKAGoJdaCVg5S00AEKgB6EV3jrWrupkaACBQA3CQWgnA9wAAgRqAA8QY09nTlUqAmRoACNQAHKZWAvBdAECgBuBwunJwzTpqAARqAA5SKwH4PgAgUANwgG79tOOC4AczNgAQqAHYS60E4DsBgEANwOF04+CfrKMGQKAGYC+1EoDvBQACNQAHsH4a7mXmBgACNQAPqpUAfDcAEKgBOJwuHNzNOmoABGoAHlQrAfh+ACBQA3CArvtm/TTczwwOAARqAO5UKwH4jgAgUANwON03eJh11AAI1ADcqVYC8D0BQKAG4ABd161SCXjU/ygBAAI1ALfVSgC+KwAI1AAcTtcN9nMSY7QbPgACNQB/q5UAfF8AEKgBOEDXbTtRCdibHfEBEKgB+K5WAjjIKyUAQKAGILF+Gg4UY6xVAQCBGgDBAA7nRRQAAjXAmsUYTV2FfmolAECgBlg3mytBP6cxRpv5AQjUAKxYrQTQmxkeAAI1AGsUY6zaH6cqAb2Z4QEgUAOwUrUSgO8QAAI1AIfTXYPjVDFGszwABGoAVsj6TzherQQAAjUAK9J11exQDMdzHjWAQA3AyuhOwzBqJQAQqAFYF101GEiM0QsqAIEagJUM/tNUbxspwXBs8AcgUAOwErUSwKB0qAEEagBWwnRvGFY6PqtSBgCBGoDy1UoAg9OlBhCoAShZd1xWpRIwOOuoAQRqAAqniwa+WwAI1AD0YP00jMTxWQACNQDlDvYdlwXj8sIKQKAGoFC6ZzCuWgkABGoAymTTJBhX1W38B4BADUBhdKhhfLUSAAjUABQkxpgG+ScqAaP7XyUAEKgBKIvNkmAap90GgAAI1AAUwnRv8H0DQKAG4BAxxqr9UakETMaMEACBGoBC6JbBtGolABCoASiDbhlM6yTG6EUWgEANwJJ1myPVKgGTc+47gEANwMLpkoHvHgACNQA96JJBHlWM8VQZAARqAJZLlwx8/wAQqAHo4f8pAWSxaz8flQGgbEEJAMoWY9y2P85VAiZz2X5ehhCulAKgbDrUAIVrB/UXaXDffgzuYXwfhWmAFY2zlABgHboNkj61nxPVgFFctEH6TBkA1kOHGmAl2oF+mob6dHM9HRUY1lthGmCF4yslAFiXGGPqUH9oP7VqwCDOuqUVAAjUAKwkWKeNyrYqAb2lddKv2zDdKAWAQA3A+kL1+/bHG5WAXmH6ZbeUAgCBGoCVhurtxrFacIgUolNneqcUAAI1AEK1UA37h2nHYgHwnV2+Abg5q/r5xlnV8JALYRqAf4yhlACAG86qhvvDtGOxAPiZDjUAf+s2WEqdahstwQ+/CdMA3Dl2UgIAftadVZ061aeqwco5YxqAe+lQA/Av3RrRl+2nUQ2EaQC4Z8ykBAA8JMaYdv/eqgQr4oxpAARqAIRqEKYBGIsp3wA8qtuQ6a1KULidMA3AQWMkJQBgXzHGbfvjXCUo0OXGGdMACNQACNUgTAMgUAMwz1Bdtz8+tJ8T1WDhmvbzWpgGQKAGYMpQnc6o/iRUs2AX3f4AACBQAyBUgzANwFTs8g1Ab91uyC8317sjgzANgEANAAeG6ueb642dYO5+E6YBGGwcpAQADCHGmKZ9p+nfp6rBTJ21YfpCGQAQqAEQqkGYBkCgBkCoBmEagGWxhhqAQaXzfNtPWlMtwJDblTANwKjjHiUAYCwxxvP2x1YlyBSmX3ab5gGAQA2AUA3CNAACNQBCNQjTAAjUACBUI0wDsC42JQNgEm3IOWt//K4SCNMAFDO+UQIAphRj3LY/zlWCAe3az2thGgCBGgChGvaXQnTqTF8pBQACNQBCNQjTAAjUACBUI0wDIFADgFCNMA0AAjUAQjXCNAAI1AAI1QjTACBQAyBUgzANgEANAEI1wjQAAjUACNUI0wAgUAMgVCNMA4BADYBQjTANAAI1AAjVwrQwDYBADQBCNcI0AAI1AAjVCNMAIFADIFQjTAOAQA2AUI0wDQACNQAI1cI0AAjUACBUI0wDIFADgFCNMA2AQA0AQjXCNAAI1AAI1cxaCtFPhWkASvBfSgDA0rXh7KL98VYlFhGmdaYBKGcMogQAlCLGmLrUW5WYdZi+VAoABGoAEKoRpgEQqAFAqEaYBgCBGgChWqgWpgFAoAYAoVqYBgCBGgCmDtWf2h+1SkzurNt9HQCK5dgsAEr3uv3okgrTADA4HWoAihdjPGl/pE71qWoI0wAgUAOAUC1MA0BGpnwDsApt0Pu+SdbG9O+x/CZMA7C68YUSALAmMcbUoU6d6hPVGMxFG6bPlAEAgRoAhGqEaQAQqAFAqBamAUCgBoDhQ/UXlejlsg3Tz5UBgDWzKRkAq9UGwrRBmQ5rjzC9ud7gDQDWPZZQAgDWLsa4bX+cq8T+YbrbNR0ABGoAEKqF6j2kEP1UmAaAa6Z8A8Dm+/Tvi/bHhUo8GKZ1pgHg9vhBCQDghxhj6lJvVeLOMH2pFAAgUAOAUL2/FKYbZQCAfzLlGwD+7e3mevMtNpszYRoA7qZDDQB3iDGetD8+tZ/TlYfpC1cDAAjUANAnVP/Rfk5W+Nf/vQ3Tb10FAHA/U74B4B7djtYvN9ebcq3JhTANAHuMFZQAAB4WY0zTvtP07zV0qj+2Yfq13zoAPE6HGgAe0R0XtYaObfp7nvmNA8CeYwQlAID9xBi37Y/zgsP0y26aOwCwBx1qANhTt+P1bwX+1VKIfi1MA8CBYwMlAIDDxBhTl3pbUJh+2U1rBwAEagAYPVR/aH+8KuCvksJ04zcKAIcz5RsA+kmbdy29q3smTAOAQA0Ak7p1RvVuoX+F37o14QBA3/GAEgBAfws9o/qiDdOOxwIAgRoAhOoDfGzD9Gu/NQA4ninfAHCkbofstwv4V03/njrTADDUGEAJAGAYMcZt++N8pv96ac33U2dNA8BwdKgBYCDdJl8XMw3TL4VpAAAAZi2dUR3npfZbAQAAYAmB+qT9fJlJmN76jQAAALC0UP1n5jD93m8CAACAJYbq04yh+txvAAAAgCWH6jpDmP6i8gAAAJQQqrdThuk03VzVAQAAKCVUn08QptP08lPVBgAAoLRQ/cHxWAAAAHB4oB7zOK2tCgMAAFB6qP7T8VgAAABweKge8jitDyoKAADAmkL11o7eAAAA0C9UvztyR+9KFQEAAFhrqD53PBYAAAAcHqj77Py9VTkAAACE6sN2/n6nYgAAAPAjVO+z87cdvQEAAOCOUL21ozcAAAD0C9Xv7OgNAAAA/UL1zzt/29EbAAAA9gjUt3f+3qoIAAAA7B+qq/bzXiUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P+zd+/XTeR+H4DHe/b/zVvBmgoIFeBUsKECnAqSVEBSAVBBTAWECjAVECrAW8HmV0HeEZFZh83Fd4++ep5zfBz2mtHMSPqMNBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBW9RQBAADsxs3NzX771W8/+4/8Y9ft56r9THq93kSpgUANAAC1BujD9vOy/QyW+E+kcD1uP5/St4ANAABA5BDdbz9v28/3m/X73H6GShkAAIBIQXrQfj7ebMc/7ees/ewpeQAAAEoN0mlE+uJmN/4xYg0AAECJYfokh9pd+5rf1wYAAIBOB+m9/D5z15w4OwAAAHQ1TO93ZFT6IRfOEmyGbbMAAGD5MJ22wEqBteuLgaV9rA96vd61swYCNQAA7DpMD3OYLoVQDQI1AADsPEwP2q/PBf7qQjWs0W+KAAAAFgrTafXsj4X++ul39041CNQAALD1ML2Xw/RewYdx2B7HmbMJqzPlGwAA5g/UKUwfBjmcNPV77KyCQA0AAJsO0ylIfwx0SJP288L71LA8U74BAODpMJ2meEd797jffk6cXRCoAQBgk1Lw3At4XG9ubm76Ti8sx5RvAAB4RA6c3wMf4qjX6x0507A4I9QAAPC44+DHNzRKDQI1AACsVX53eljBoR472yBQAwDAOqWVvfcqOM6hUw0CNQAArNPrSo5zL28LBgjUAACwmjzde1DRIf/lrINADQAA63DoeAGBGgAAFveysuNN0773nXYQqAEAYFX7jhkQqAEAQLicR99ph/n9fnNzc1Z5GYx6vd7EpcBD8oIkJ+4T9wkAVbX/tQbLl84+LBCo288bxdCcKQIeMXSfNOP2I1ADUJO+IgCeYsp30xwrAlwjAAA/9BUBCNSLSKsZDhUD92mvjUMNCwAgUAMC9cNeKwJcGwAAgEC9uIE99/hVXozkUEkAAAAC9eO8J4trAgCo3bUiAIF6GcO8PRJMt8oaKgkAoDJXigAE6qVDtSIgS1O9PWABgHoZqQUE6gWZ4otrAQBoer1erSO1X5x9EKiX1c/bJFGx9hoYtF8WqQMAagzVE6cdBOpV2CYJ1wAAUGug9g41CNQrOczbJVEhi5EBADNqm/58XfFUdxCo18j7s/U6UQQAQDZ2vIBAvbihIqiW6d4AwA+9Xm/S1DUF+pOzDgL1Ouzd3NwI1ZXJC9L1lQQAMONDJceZtgm7dLpBoF4X076dcwCAUSXHednr9ey9DQL12uzn7ZOoQF6IzvkGAO7IIbOGUH3ubINAvW7ep63HG0UAAFQaNsf5fXFAoF6rYd5GicDyOT5UEgDAfXLYHAU+xFNnGQTqTbGNUnwpTHtwAgA8FTojvmM8svc0CNSbZNp3fKZ7AwCPyu9SR5v6nY7J6DQI1BvVz9spEVBeeK6vJACAOUL1u/ZrHOiQjqzsDQL1NthOKS4zEACARbxqYkz9fteGaftOw4p6Ny3FMJdnVj+MJW+V9V1JzOWgvf7HigEAfvQh9tuvrwUfwlXbrr9wJmF1Rqjn5z3beIaKAABYVF7E66jUMN1+DpxFEKi37dAWWuGYyg8ALBuqRwWG6h9h2nvTIFDvgr2KA7m5uRk2tsoCAOoJ1cI0CNQ7Z9p3HBYjAwDWFaq7vlDZWJgGgboL+nmbJQqWFxJxHgGAdYXqtFp2ei/5qoO/3nn7+wnTIFB3hpHN8nl3GgBYd6ierpx93pFfadLcjkqfOTsgUHfJMG+3RIHywnLehQcANhWsU4BNwXq8o1/hOof6F7a8BIG6s6FaERR97ixGBgBsMlSn0eo0Bfxgy8F6lIP0mSnesKX7/aalGBY2aSupZ4qhPO3l/r396iuJhR14yg0AS/c/Bs3ta4PDTfRL28+H9vNOiAaBuiRHeVVHymrMPisJgRoAdtQXmb569rK5XSC1v+R/KrXJX9rPZRoNV7IgUJdonKfyUE4j9rHx/rRADQDd6Zv0c6ge5L/0vPnvq2kpMP+vuR2JnmiPQaCO5IWngkU1WN+VhEANAADrYlGy1dh+ybkCAAAEapZwmN+FofuGigAAABCou2NPUOu+m5ubYWOrLAAAQKDuHFOJnSMAAECgZgn9vB0THdSem/32a19JAAAAAnU3GQF1bgAAAIGaJRzmbZnokLxg3FBJAAAAAnW3GQntHmEaAAAQqIU3luAhBwAAIFAXYC9vz0QHtOfisP3qKwkAAECgLoMRUecCAAAQqFnCft6miR3KC8QNlAQAACBQl8XIqHMAAAAI1CxhmLdrYgdslQUAAAjUhYdqRbAzaTEyDzQAAACBulCmHCt7AABAoGYJ/bxtE1vUlvmg/bIoHAAAIFAXzkjp9r1WBAAAgEBdvkHevoktyGU9VBIAAIBAHYNR6u0RpgEAAIE6UsizhdbWmO4NAABs1e+KYKNSmE6Lk40Uxebc3NwM26++koA790V/5r7Yb+5uJ/dHs9gCftft59svf77KP096vd5EidOha3722p/3Wk/X8/+m1/T049oGCm7rnzeLbSX75Zc/j6dtflsXXinth/XaE3GjGDbqqr0IXyiGjVYmn9uvgZLYqIP2Oh4rhs5d+4OZ8DBtOPeb3ezFPg3Z0/A9DSSuG9Z93U+v80G+7vvNZnd4uMrX87fcwUzt+rUzAWypztufqef+nPl5F239WDsvUAsj8SqZVKl8VxKu4YoCxMvm7ghcCSY5lAgkLHv9H+Zrf9CRa/8qX8ufulI3BlucM3XSRx2/Ls8C3WYjszE6FZ7T5/lMu19cO19bn1Gg3l5FdaQYNlLxXDQWJBOo413X/Znw3JUAsYnGN11TX3LjqzPHr/dACtGvm82OPq9Dejh02X4+7LKezDNWPge5BFKdcNDxazRS/1kbv/u6btreR1p7abaND319CdTb80yHce2VUKp0vgerfDS29V7P+zk8DAoIEJsK2CmUfGmvtUtXRLV1+rCQEP3Ydfy+uX2Qfr3l8hOoBWptfBl13TRAp+9+RYee2vZP6TvaLDWrfG/PUBGs3aEwTeGNatqv/qL9/NP+8Wv7Oak0TDe5U5GO/+PNrfRtp4R67oOP7Y/pPnhb+D3Qz8fwPU0Jdv0C0xA9095/zO1dv7JiSP32NLP0n7T+UaQ23gj19qT3gZ4phrVWTt8bq3tvi6fX67tu0zV73NT3ZHoVYZ9qV34vDNuvN8Hvg3S9phHrd5u+do1Qb/36NUKN9n59bfyHkmenGaHenn7uPLC+joPKiaLCQ16RPj0IOnH9LmT6VPt7fsK/r0iKvxe+53Ma/T7Yyw8NvusDQDV13KH2fuE2Ps1KK3Zmj0C9Xa8VwdocKwIKaFT32s/JTHgYKJWVw0kKJV/bMv0qoAjShV27F3maowdCELO9n9ZxH7X3S0ntQnoA+U9+eF5MOyFQb9egpIujw5VWKsNDJUHHG9az5vbp9NvG0+lN2M8Bxbuq3b8fBhUH6f/0A5rbB0JnrgwI196r49Zn2Pw7K63zZSpQb98bRbCWmwy63rCme13I27x+8++UWsG6W/dDP097/KyT+d++QJ5lYbQayq3jTrT3grVAvRuHOnwrM92bLjasqdL/qmHdmem7qqaCd+N+OMv3w0BpPCiF6c+uVyiufjvMs27eau+3HqzfdjFHCdS76fSZrrxaaFF50aVrcj+Pwpnq1Q3pHFzk0T9hbjf3gwdLi/UJ0vV6oSigmPb+o/Z+Z06aDi7yKFDvhmnfy7OwG11pWPeMwnXadPTvrVlBW7snUkfnc1PvXuqrGOYFy1yr0M32/q32vjM6t8ijQL0bfSMnS1Vo+yoyOnQtTkfh6LYU8oxWb76zmUZsTH9cTbpGhWroVv02yO39idLoZJ3ZiUUeBerd8R6wMqPMxvUsN659pVGMfg4qbxXF2u+HHzMBGq8yrcu+UA2dqNumo9IWVey+nS/yKFDvzqEttBar2Bqre7P7xjU1rEaly3WSG11173ruiUFjirdQDfHqtuksNKPS5dWbO8kKAvVuCYjKinIa17Si50BphGh0TQFf/Z4Y5jAt9AnVEKluO2nMQivVz0Uet113CtS7ZQqzsqKM4PBVcAjX6NquaLUOp1WptxOqvaYA26nXZteCoGzDZssPJAXqHXfqdOjmquTSu3l9JcEOrr23gkNoF96rXvieuNDh3G7H0DUKG6/XrAURz4+Zhdt6r1qg3j3bQCkjuhscvD8V34k9gBe6J4ZKYifXqHKHzdRrg8ZaEFFNZ6Nt/EGJQL17g67sodbRiq7feGKI4MBmDYVq90THvdVXgLXXa8PGWhA1hOqPm34oKVB3g/eDlQ3daWA/Cg5CNf/pdLondt8pvLBIGay1XlPn1+Nik6FaoO6GQ43kw51cRcAWG9jUuJoRIVSj09lFaYTatn2wnrZevSZUC9TB2GP54Y6cBw1ss4F1H5JC9Zli+LlQj05nt5xs431A0NYjVAvUJTK1WZmggaUb3tS+CFRev+KzS6GzHUIPm0Fbz/J16FofTEYK1Oe9Vvs9KvT373vqfKfSGzTlrrh43X7G7WfiTBZxrQ01sNyj2kWgclhLawkIbd2Uzoup3yBMs1qoXlsbH3GE+rzg3932UDHKIj3cOWi/PziNnW9gB40prTwcWj5WOhKY9j22onS3neT6C3i6rR8K09zTxn9eVxsfLlC3QWbS3I4OlugwT7OrveIr/Z3ykXqqmOvso5LgEf3arhEdz6K8VQQwV53mwTkPhmqB+mEljwx6b7hpTkoO071e79opLIIprcxj0HbITmo40Dz9TUgrx37t7/rDHHWaMM1T9ejK10jIQN0GmlFz+x5riTSOZU/3Ns27jEb2LAUlJcGc3lQyeyh1KjxkKuzaVARwbzuf6mwLKzJX9lr14WTkVb5Hhf7eezU/cc4Ls5XacZ30er2xeqnz15i9XFm4Xm6Cj3Lkh0zemy5P3yg1/Kc+s7Aii3q7yoPzyIH6fcG/e83Tvks+9vOGEpj+xTIGUXdi8JCpeG8K3xkD1h6O3A8saKUH52EDdV6c7LLQX3+/xtU785OhUo/7uuDrraZr7Ewjy4qdtIg8ZCpbajs/N95/Bwsrsoql10z5LXjBlPw+a41baJU8On1pMbLON7L9xqJ/rBhcok2vzZ0HD5mACPWZhRVZ1VJrpoQO1G3ASSOGk0J//WFN+58G2CrrfUPnK8nG+1Ss5zqKVO+a6g1EYWFFVrXU1O/fKiiYkkepTyq6gA8LrgSver3elTqo08Fh0JgCxnpEGqV+q/MJBGnnvTfNuiy8ZsrvFRTKqCn3CXya9n1WycVb8iiJ0WnXV9el1xGu8ud/7Wec//okrzfxUAel39y+n7mXOyp/5u/aOy2vm3J3kpie20HjIRMQI0yn+uxESbBG6QHN3GsjhQ/UqbPY3mipQEpcnTWNhBzmqevRK8J+qUEl73tOt6+vQYWHnuqNT80KMyhy2J7M/PemZbqXy/SvpuzZJctKT6/3C5+ZYqo3ECn8wLoz2Fnbzp8J1P96X2igTo6b+KtHl7wAmzAtOHTJuP182PRDnrwA32X+HOUp0KmuqmnkOtVbRQbqih8yAcHYvWOufkHy5ZF/5o+ZMtQ2zGSw9vp6N8+iw1UE6rYgxm2BTJoyR0HTSEj/sWmZhVeE6ZwMCz4E0727f33V0DikAH2+q3oiB/hRDmoXTbkzThaR6q3TQn93ozlPSw9Lrmc6oZPm/kVO92Y6os/zta9zD9tr4+3e8a9UR13meutq2T5BXi09fV7mPlS/0vJM9Xt6leBMoL4bfErtRBwX3HGbp1NaqnHUBx2BRB+dHrefo65ch+nhZfv1LI8YRC/7vRJfycmzCQS++wP0p1yvjxf8dy8f6JAOcof0UPHCRlhY8TZEp4xzua6+QH6dKX1GM/XZ69xnr6285xql/q2iAhmVHDoDb6FV8nTvDw1dDg57gTuyqWJ/1VbwB118qJPfOXrRlLtt4bxeltg5UDvcCdFH7ef/2mv2RbpulwjTD3ZI20/qhL1K//38/xkrclhbGz9o6n5YleqT1Ad4luuajbW3uT47bT/TumxSUTnPta1vNYE6P1kYFXwyw1UaeaSkX+ivP7EYWedFXSwrhYAXXR8ZzU+4XzSFvme8wDVWWgfU6PRtX+Agh+jRPO/Hrdr/yP+fg/aPzxprb8A61PrqyjRIH6zrAeCC9Vmqy55VFqyffBD9W2UXYckjihGnTxqdZqcVYMFBoIhGLAeVg8Chup/f4dOOlNMRTSH6aBcd0XxPpIexR4I1LK/SV1dSu/9qV0H6vmDd3D40f1dB2fef2pe6qkCdL8BJwSdzEKgynL5fVnKwobvXVz9gYzvKQeC6pF96JlRPgl5ug4LuiUGlVcLsKxJXHbkvpsE68r0Bm1Lbw8Ef4bVrM9Py7Ju0xtOrXM9G9lqgvus86sksTMmjh5cWI+u8aK9IjHLnu0g5VL8Keq2V8h51re9Oj9vPs66+IpEf9NcyygMrK/x1wUWltvOo6w/Tc/0a/hWvx2ak1RioL5tyn6IMC5te+FBlWPo74aZ7d1+kh09Fh+mZBjc1tOcBr7VSZkIMK6wHzvOo9HXH743pKM9RE3+UB1ZVy+j0j9ldpazXkweaIr/i1TyWXaoL1LlhvSz4ECJ0itIxlLpY1KS0bXJqE2y691WEMD0jjcJNBOqt3xMl17nLOsqrzZfUPxnlDqlQDQ/XZf0KDjWF0mddeUVlwYwVOVS/Fqjveh/xZBbk2LXDBkWZ7j1tmMLIjW24UeoC1rf4q8IwPSr0HrkSqiF0H3ieMH1Q2noplYTq/YdmClcZqGc2LC9RPz+hK7nj2S/48hk1dN3LIMdxVGqD+kT9OwoYFjpbp+XGv6a9Wo9K39JQqIYH+48DYbqoUD0JeI4OBeq7jFLvRsmj06OIASegCA3uOPirBaNgx9Pv8O8mTAvVEEH00enpAmQh7vmZxUij1WF/CdR3T/So4JM8yNtOFSXASInFyLp/jaX7IsK7okfBT9WnYMfzp07ozr2LEqZ/CdWnana07T8Wsx0GP8yD0t6ZrrQOG+TrUaCeUXLjW+JIb8mV4SRvb0LHK7oI9VL0bdkC3kv9jnZC0++1X8F9f5VXyY54r6R+ii21qF30MH0aLUz/UodFm3E3EKjvKnna9+F9T0g8BNiY84YSKu40StVrbvdDPMifo3z+0idV7OP86WrjVcvCd2NX7PYb/YAi73E+rddOm9hb0UDk/uNTLlPfJfoDgybW1O//rNXze+Wd70kbSseFdjqm01+KuAkL37al9K3Wary3r5a4RgcPBJHnM9fupqeUX0V9Sn3fsQYKfF09jhpW9z6PPqMjSw8Gv6rdqU1+lasf9PCum/iveE3zVhosiLKH+L5A/V8fCu7UHTflTAUr+enipcXIqgjh45k/judo5PszjfzeTAX7xy+V7SL1S03bsv3tqtu46AuSjSsY2ZnWT1dtnXMeqEMKNfQfn3JUS/+yPc6ztg573cR4ODIQqP97gkftCX7blDl6mrbQGnT9fcT8dLHk9/jsPc19dcekubslxOUc98JsJTw72v1nbmTGFRWhKaybrXcHFRxmVQt2BeuQwryiPhiMvpvHfdJDwYsobexs/jJC/W9gKvWp73EBnfCSny6OK5qCy+Y7xLP36liJsEHRA/Wo0ro5TQ/97PKmBm1oSWF6L/C9XFsfKA1iprzVD3A4+7P9uN/crrcNc8G/+2GeetrVyrD0rQ5slQWU6GXgY0tTJKvcTio/lBu7vFGPlZ07Kln7IXK/+s52mQJ183PqZsnTLoZ+t8102qLtawpUYxD42N5Xvq6FXSeoxaF7OJwo/ep9gfp+JT8xOfa7uekBkgren656X2aj1FRSj0Vd3bvm0ekIg5gC9RMnOJ3cUi/wvbwtVdcqw8PCK0OLkQHFN/QBO6N2XdA+Ed8g6HGZYdI0nwIcw55A/TCj1PF/p3mNa36CCDpLRYv8/rTOaFP8IADM46+Ax3Spb3lbDhEOIs+iEKjvMSr4d9+fPbEduMj6hXeYPf0HnaVi24Ogx+VBp3aKegwCHpOFbpsfDwTTLKMIuzTsCdT3n+BJ4aH62O+yFpMK9waErckP3PaVxEbKNjXw/aCHpzN610gRELQeiximr/Ut7xgHOIa+QB2zwR7mzlQXOnRD1wDwgLeKYGMiP6jQGZ2RR3mUCRFFDNQjp/WOLwJ17AZq3JT9XlIXgmxajGyv4DJU6cGG5AUUD5WEQL1ovWwxsnt9UgQEFHEdCIM1d11FOhiB+n4lv5d07HdYiQUjYLNh+kJJbNSfQY/ri1N7f5ulCAgo2oPBNN37ymn9V+5rl/6Q9I/pD787pfcaNeVOSeyn7ap29Z5Gfu+l5IrQIi+w/nohzVh5035OlIaOqOC41k7pdXt/jRur5hOnveg3Zc9yVH/N77Qpe82PiUD9dAOVQvWw0EM43uHN+7rkGyNP+QfW1zka5jDdVxpbEbGcx6Z7P+qTQE0gER8KmmFzf94aRTkWU74fVvJI5SA/4dt2x7n0xciMTsN66oJUB71tP/80t1O8hWmBWmd0c8aKAIG604xQB2eE+gHpXYe2M3hV8I2dRqlPt/z/LH0658iVDwuH571cTw6a24VkBkplZ+ci7P7Tzu6T/ZU0gr+nNAgg2oJkEzNsBOrapRHLUhfQSVtonW/5Ji55urcVZGG+wNbPAfpl/rmvZDojZKDyKs5cUhlZPZ8I+gHvTQTqqqUpGm8L7aTs5cZ1tKWO9rDwStB2BtD8XBBmGpr3BOeiRByh1hmdzzeBGoG6s/cmAnW98uJkKVQPCz2E42Z705hLHp2+MgJChYF5+vnzlz9Trogj1LaamU9qw94oBgpvnwbqMATqmN4XHKj3U+W06bCYO+iDws8xROqMzIbj6fto+413LKP7I+AxGd2Zz0QREEC4NsqAjUBN83Oxj3HBgTGNHG/6Zi75qXh6b9rqi5QQlqeBePBLUJ4Nz9Qt4pRvQXG+vsrEwmSow9RfCNRd9qHgQJ0WJzvd1IJbeYXfkt/burQYGR0LzoOZkOz9ZWoPimOlMLerxir7lC3aLBuBWqBmpkEfpT1Vm3Kf/KbtrM429N8+bMp+Im66N7sOz+mJ/PP8va9UWEFfZ7RqyovSRWsDvzilAjV3jZpy91l+vcFAXfJ073Ga0u/SZkvheTpd+2Xz777NIFALiOvytyIAEKi77H3BgbqftrVKI+1rDgiDxlZZ8NQ98lcOz0afQaBWXvCwaO3k2CkVqJmRF/wYN2UvTjbawH+zVNfrfsAAM2sKTEO0BYJgeUZcBWrqos1EoK5AyYuTDdL2VunBwJqCQ78pdzuxRJimWeO9kEJ0esBkFJpdXocAdMdEEdThN0UwvzyiWfLNsc73nYeFn06LkbFKeNlLr1G0n6/tH7+3n7fCNDsWMVCPndaF+ijKi5Lb1f2A96RALVDzgJLfuz3MU1LX4bjkTppKjiUb/DTT46L98Z/2cyFEA8BamO6NQF2RUeGV1cp7RqeRucZWWdQVpKej0Z+b8mdnAAAgUO9GHtm8LPgQ1jHtu+TFyCbtObx0JbNAkE5Tuo1Gw/ZdKwKgUGNFIFDzuJKnfffzVj7LBozS98+1VRbzXOeHM0G6r0Rg+3q93pVSWJgyAxCoi2jk0wjnpOBDON7Rv9sFI1cwjwTp9MApTev+KEgDBTKqT6m0uQjUFSp9cbKFK66ZPXZLdWkxMh65vs+a2xW7B0oDAARqEKg3613hv/9wyX/HYmREC9L7ecGxN0oDAACBegt6vV6aVjUq+BCOt/TvdMXEHp3cE6ZP2q8Upi04BgCAQL1lJU/73svbX80bPNJU737Bx2t0mtnreS/vJ/1WaQAAIFDvQB7xnBR8CK839M920cgVSw7T/cZ+0gAACNSdUPLI5yBvgzVPACl5MbJRnqKPMJ2ud1O8AQAQqLsS1pqyt6k4XtM/02X2nmYaptPI9J7SgCLu2b5SWJiHhQACdVnyyOdlwYdwmLfDesyw4OO7shgZwjQUSaBenDqOUk0UAQJ13Uqe9r33WGDOC5fZKgthGgAQqOfvXyNQM69er3fVfl0VfAjHS/69rit99gDCdGTXTdmvywDAQ7x+IVCzhJJHQvt5W6z7wkjJFcKlxciqDtN7wnRng/R5+3nWlP0gki20TYpgoTpPBx5AoC7aZVP2aMt922KVvhjZucuyasJ09+rIoxSke73emYddaxfx4YRAvRj1HYBAXa4gi5P97Lzk0b1hwcczbs/JxJVZp/b6fduYbrVr6f4b5RD9f+39+Kr92MJus20QAjWU3GZE64voh1Tid0WwVueFh9A0In2afz4p/FzYKqveMH0Y4Pot0XQtiS+NB1qsx0tFsBCdd4qV2oy2/Y52WB5yCdQsWRmM2x8HhR7CSfv7Rwgi12kkzBVZZZhOjdeFkti4SQ7P31J4bm63pzNCis7obv2hCEAdhkAdwYeCA3UUwnS93mjA1h6c0+fL9Gf7undaesgRaZTSiKvyoi7XwdrwdE/abUagZlFpZDS/v6lTvzv2nq5QXgPAVO/lOjBXOTD/Pf05bwdIeecy3H3t9YG59RUBhUvtziDQ8Zg1IlCzgpGO/c5c6nxVy1Tvx41/Cc3XRpspJCSq0wVqKJFZIwI1K3gvUO+MxcgqlFfSHCiJO+H5Sw7OVx4yVeNLwPtgkK9nHq8D1X+ow7qn75QK1CwpwOJkpUrTVL2rUqfjyo//KoeOT0adCea5IpiLkTAQqNkR+1Bvjvd4t8/odIXyu9PDCg990txuc/esDdEv2s+pMF29iO+9D5zWuXjwQATh2jCzRwRqVpBHSidKYqtGiqBKwwqv8xSgU5B+Zzo3MyJuXbaXH5rxOJ121GHdZPaIQM2KjJhuMWQIFtV6XUkn47y5HY0+sgI3D4h6XQiLj8gPHPpKgtIFbdvMHhGoWTXkKYKt8fCizo7kfgUdyVEO0mceGvFEZ/Q66KG9dHYfNVAEBDJxfyJQM9u5SZWCRbK2UPl6d7RakUen05P6F3lE+tqpZk4R68JDp/VRfykCBOrO6nttRaBmdRYnU8ZsziDocZ3nhcZM7WZRUd+jFqofpmyI5Iu+CqWxbdaGpZHTtiMwabzftEkjRVCf9r7aa+It9pHC0JHt31jBt6ABK43Cui/+Ww8K00QT8UHyS33Ve+uv1IfbK7nPNh34EKi3I42gvlUMmwnTpsNWaxAwTB8YlUZn9F4pOB45vf/xWhGgDlN/Fepz4YH63fR6NeV7S6FPEWyM6d71irZQkdW70Rl9mGnfv8izdJQJoeT1h6INlOzl0Vju1l97hR/G/6Y/CNTbqRyuherNdBwFkKpFapzOTfNGZ/RJRmPvGioCghqrv8IbRDoYgXp7bOu0fkanVcYRpAdDZ5WeQ0/sN3RNBT2uQ6vl3nGsCAjqW8BjGjqt4dr/iUC9ZXlbp4mSWJs0AmNEr1LBOtWnFZ/KPVfzRnwJfGxvnN4fdWDqnPeVBEGNI7Z3Xlu5I8JrewL1jpwrgrW5tBhZ1aJ0JMf2UGcDIr8Kc5jfvaud6aOEFbhddN82P9+fHgQ4lGuBekchsIn7btu2eThRtyhThat9FaRtUAcu440ZBz621BE7qbwzetjY15Y6+szReG0ll0OEg5hdx0mg3m7Bm6a8ps5iXniHekUZoaq5PtCp2GxbE3mU+k3lnVLbcFKDqK+uWPsg2HRvgXo3LKS1Ogu88WeAYxhX/trCc5fxZq8voTKem5ubNDrfd3lTgagPnIc1v7aSj30oULOSPD3AVk/Lu27LcKQYqhehQ/ml8nM4cBm7vlZwWNtrA3lU3qJs1NJfnjQxF/Ot/bWVKAuzXQnUu2eUennCNFFU+2AtP6G2ZdZmjSs4xovKRnouGivjU5eoo9THFb+2EmXK+zeBuhsVhMXJluNhBFHUXAfYOmTDKlmzI3VIqxixzVO9B65sKhP1Fb+9psLZJnlWUZSH6UaoO9LRGSmJhV1ajIyZxohy2TpkO2p4reAk+t6u7fGlDqiFyKixv5xCS9R+37DC3S7eBLs2BeoOMNK6OIuRMVX8E85a95/O09wGLuGtqGUV+YscOiPeL+nh4UeXMuqxmHVXRW3/IFDb/5/+m0C9u870pKnjHbd1mbRlZssxonWUa2TLkO22MzW8q/8jdEa7p/LxfG6s6k3dIg+m9Nv7vJbZJ5GO84tArZJQVtAN1S3KFWi7DHVnBzumKXwGC9UXjcX7qFwFu+OcRJ/63R7fWbC67Eqg7lYlMWosTjavkSKA4qX3p7z/ru7clP0IoTr9/u0nhWmL98Gt6A8GP0Zd9Tu/jhNqZtp9M2YF6t3zLvUcHUKLkRFQv6aDzY3qidO+9Ya/htW+7wvV/ULvk+k076GrF/7tBwY/vsivrUTb7m98318UqFUSJTDdm19NAhzD88rOmVWK1aHbDNVfS5tGmR86fW5M84Y7KtkdZ3r/R2v3o9VnnwTqblYSKRhYbOuR4FTrasiED9SDWk5Wfn9q4LLdWTtz2cTdeuYhP0Z687VXwj1yIkzDo2qY0bmfX/eI0O6nMD0MeI4uBeruMgJbdwVKnfZrWOk7jxK+cbq1Mzvypr0Gv3Z1W600Nb39pCD9trG+ADwoL042ruBQ0/7URU//bn/3FKQjvuJ19dArqAJ1NyqJGkcP5lHDFB/qFnrRofweqz10u+Fdxcc+nQJ+0ZV3q/PCY2ftj98bszdgXrUMsqS+QZELLOZ6Ler+2g8+mBaoCzhJFbvM783AryZBjiPsyG3uCKQwbdStAyp5B/EpwxRgdxms84j02xykzdyAxeqxmgagpg8Ci3kNJE9Xj1yvXQrU3TdSBP9hujcP+TvIcfTz1KiIYdr7oN1zrgjuBOvUWR1uehQoj0b/mMaZg3SaCulBE6jHnuwj5FDd6enT+UHh1yb27gSXj+04JFB3RD5JQvW/rvL7MnCfSDMX3kR6l1qY1s4UJF2jaUTlnxyu37afw1XvxxygB2nqY34/+p/8/7GvNKxej6U6bFLZYae6qZPbAeaw/7WCNv/TY3/zd7dmp6Rp30PF8IPRaR4T6WFLaiDTFNCjAGF6GlCE6e461848GK5/7pXeXsvXuZ5J399++WfH+Z+dDd5/5nv5178ObKYeu6jsmAfN7cyadOzvdv1K5MyCo4MKyn6SH+QI1CVI20O1F+gkN8o1S5WErcR4tHILdjxpOuiXpyrsjofpw9zBESa63c5M2nM1EqqftDfTUfx1ZNm7z7DbemzU1mPHTZ0Pb1P9c9we//tdBOvKgvTUk+tcmfLdPUZmm2ZkMTKeCgUBD+ui1Pep8yJLFiArx2kT67UJoM56rFZ7OdT+kxdZ3OjrJDPrQKSp3Z8rC9OprXxylwyBuoNhUhF4qMBcxkFD9VlBQXqQG9gTl2M58gNL9SxQcj2W+gBmM97ONkr7Vk/D9XAdK4Pn9v3kl3UgapwRMNcgnynfHezoVD4dbxx09JH1S+83DgIeV1qk7GX7fdTVeyEvjPKmMW245LYmLZj1uvGKEVCu09wPMDvqtgyG03a5rd9/9Kmb21fkpjujjB/496ZB+Xnz71oQ3Jrr4bNA3U01L05mP27m9S3wsaUOQlp1+H0KPh0L0qluOtaBCSEthPdZMQAlymtCpMBjXYOH+xKzlNNizucd2DDlu5sVxLiJtYrxvK5LXpSJrRsHP74f70i1nYXv29gr94kgnaZ+pele33ODLEzHaWtMmQRKrsfOKu0zs+FM0szx7rRA3X3vHTM82ohOmjr2ouw3t+8ufc/75G5lKlb6/+T/XwrRaRRz6KoL6aixQBlQtlNFwLozySILJAvU3XVZYSdn5LSzoHFFx5pGhdPiX1/zqPV08ZH+mgL0dAGSH4ubpP9P/v/1XWZx5Q7DkZIACq7HUl/gnZJgTSaLvm7nHeoOd3LaTm0K1cNaHiBYjIwlfGrqHDntN/cvPpLC0bdHHjgMZn7+M/93+kJz9e3Npb2pi+/8Pct1wY3ioNJ67DTvkWxBLVa18ENmgbrb3lfUwbEYGcsGgRQivdP7b1ie3Y/SAiTMa7pabl9RFOdcEcDPIPRVMbCCyzzjYSGmfHc7LKRFFmpYaCE9XbcwDktXfooAVm5v0oOpV0qiyPZzpBjgZ7/Z+9Qsa+lXoATq7qthoS6j07h+oBudUe9Tl0V4gLv1WHqXeqQkWMLRIguRCdRlVQypUoi+OJmFJFjlHhk3daz2Ddtqc3RGyzA2uwvulR402UqLRVyuUp8K1GWI3LkZLfs0CGZ4hxDWF6qPdEY7z+rs8HAdNn2FRf+SeUxWrU8F6jJEnvZtui7rUOM2c7BJB0J1p53bGQMeDdWTXI/BU16tOrgnUJdTKYwDHtpkmZX04J57JFWE75VEcdJ5+7/GDIOu3lNGeLrpMr8nCjxej1kXgqcc5etkJQJ1OSKO5ApArFPqYE4UQ1HOvfLR6c5oup8OhOpOmQgIsFA9NnLP8IDRunZJEKjLqhAihYXUQRs5s6zxHknXlJHOclwZZSvivroSqjvVbr7yEAqW6kPrc/JrH2RtD1oE6rJEGqW+1ClgQ43mWEkUwXY/QjUL3jPrmJoIldZjR0I10zDdrPn9eoG6LJEqAtO9EdTq9c76CcWG6onS2ImjdU1NBKGaiqU27GDdg3oCdVkVQboIIuw5eeUpOxvu+Jv63e3730OPcu+tF43Vv7ftVJgGoZqVbey1GYG6PBGmfRudZtMN5llj6ndXGzOLw5R9b6VzmEaqL5XGVoysNQAbCdUe7NbX/zjY1ICeQF1eJZA6MZPCL2gdMbbBlj/d4x3QIKG6/aT7y0yQzTpa56I5wJ16LD2ocn/V4WqTYVqgLlfJo9Qji5GxrU5/s+ZFJ1jJuWmr4e6xs8aDq02GafcLbLYOGzUWXBSmBepqlTz9y3RvttlYpgrUE+jdG+XwRbx7LM04etZ4xWJdpu/4CdOwnTpsnEO12VPxjJsNLEAmUMe5+Uvdw3mcF1aDbd4vI6F65/e98g/eJrWf1CE9bYz0rGKSO39ei4Lt1mHTXQzce3GkB/kH25oVK1CX64PfGYTqjkudlFeKoZr7LM2eSquAj5XGwlKZvbDGAOys/pquDWGxsrL9WPx02w/yBepyb/zU+E5KusBNYUOori5MH1gzobr7bJJHq1819qye1/k2R1KAR+uw6YNB9Vd5JrnfsfW8IVCX7b3fFRYO1RZR2rw01eqFgFD1vXbZftK71aaBP935O1MU0Kn66yqHalvWFdTvaHY4y0egLv/i8bvCgh395vZdqYnS2FiYNhOA6f2WOqQpWJ8L1ne8y52/saKATtZdaWblqf5C500Xcjza5UN8gbrwm72QoHppMTI6du9Mnz5bgGS97JvLQx3TsxysTyvvnKYAnUalT83ggCLqr3FjtLqrUgZ61oWFHAXq8pUwldpiZHS1kz9dgETHdjUpIL2wTgJz3HPv8lTwo6auxcumawocGJWGIuuu08aii13qcxzselRaoI51k1813d47b2ILEDp+D1mZeDWXjdWJWfy+G+XFy1K4ftfEHbUe546f6d0QoM+d662jxjTwXUjhOc3ueda1+lSgjuG93w1WaiQn9tFdumF7ZeoqK957p3nUOt2DowAd1fT7p3fGnxmRhpD11mhmpo1gvZ3+xrRO7eTUe4E6hssOh4CR00NBjeR0ASXX7dN1zouuNmwUe/+N8xS+dA++yB2oUsJomqExXWgsdfrOrB0CgjVryREvcp3a2Yf3vztPIW7o65ubm9TBHXbtJjByRYn3U2oc23sqdeYv2s9AqfyUOgynXuNgC/fhz9eZ2ntxr/3az/fiy/zzXgcCdAr739K38Ax1B+vU523rqtQPP851FMtL/bA0w/VdKTlCoI7jvIOB2mJklNxApg7yQdtADnIDeVh742a/XHZ0L17n8Dqe/rX2vuy3X/0csv+YCdn7a77ur/J3Cs6pTriyXgDwRLDez/2GoVJZyFUO0pelDcgJ1IE6/+0NPG66M5o28d4YQe6tHx353IF/k4P1XiWHX9xTYupp83LAvbedyR3a2fv0obA9Dcy/3vMAy9ZPqV5JM91Oc5/BqPXj/Yw06+19yQ8rBepY3vtdYKMd+FoayKvcuI2ceQru0P7KqwrANuuhFBZTOzrKD+VT3+G1cP0zRH+K8gqZQB3rxr3UYYCtN5DT6eD9wg9tkuuPD6a0AsBa+w6pjU0LF77LfYdB+/krf9cw623ax/gScR2WnkscYHUzT59fNuW8bz1dWEmIhhj10E2QQxnnrQyhhvt20HRr0cV1BejUv/jSVLBwo0ANsLkGcn+mgex3oZOaQ/S0gfNeNAjUAjV06z7ez/2G5/m76yF7kj9fch+juv6FQA2wnQZybyZY93PQbjbQUE5mPn/nxm1iBBoEaoEawvQhnue+w/TPmzZdwHG2b3FtEUeBGqBrDebgnr/8a+CehuVZ1wIzIFBD1ff/r/2FRR/Y/7rrwST6VG2BGgCAaWd60H59DnI4aR/aV84qUILfFAEAAB3yTREAAjUAANuypwgABGoAABa3rwgABGoAABb3Z6BjsaUfIFADALA1kUao7VoACNQAAAjUAAI1AACd9MAe9iUzQg0I1AAAbMVfkQ6m1+t5hxoQqAEA2IpBoGMZO51ASX5XBABAV9zc3KT9lNP7wNe9Xs/U36fLq9/Een964qwCAjUAwMMhcJB/TN9/5EC492swbP+5Z22oFrAedxzseP52SoGS9BQBALDmwNxvv/ozQfn5TGDeW+A/NWoD9ZESfbCcU1l+X7BMu+6gPedjZxcQqAGAyGFuMBOSp6PM0yAtYG3nHJy1X2+CHdb/WZQMEKgBgNLD2uw07PT9Mv+twZZ/lUn7eSFk/ef8RBydvmrP8wtnFyiJd6gBoN5ANjuq/OfMz/0O/arpd3nbfkz9vutNsDCdjJ1WoDRGqAEgbmieji4P8l962dyz+Fchjnq93shZ/Tnd/nPAQ3vVnuNLZxgQqAGALgSvi/ZrGOiQqn+fOs8s+Np0axbBunh/GijOb4oAAML6Eux4PuZR95rD9OegYfpSmAYEagCgS8bBjudHoJzZx7o26V3yqA8UPrldgRKZ8g0AgbXh82vQEFbNO9V5ZDpN3z8MfJimewNFMkINALGNgx7XRRs031YQpvvN7TTvyGHadG9AoAYAOulD4GM7SSPwOXRGDNPD5nYBsn3XKEA3mfINAMEFnvY9lUY3j6JsuZQfEKTR98MKLs9Je96euUuBUhmhBoD4oo8ApneM0wrgH0serU7vSrefs+Z2VPrQtQnQfUaoASC4vKjV9xw8a3Deft6V8l5uPj8n7ee4onOUpPPzzPvTQMmMUANAcDmwXFZ0yG/azz9tUL3o8r7VaTQ9L6z2Pf/Oe5Vdmu+FaaD4NlYRAEB8eSr090oP/6q5nVo8bgPcVQfOQ5rO/bqJv9jYY4xOAwI1AFBUqE57GQ8rL4ZJc7uV2LdtBOwcoAft52X+7rsSfzhvy/5MMQACNQBQSqBOYe67kviPFKrTSOmX/OfxbABvg9/kiTKdhuTpz3/m74GivZfRaUCgBgCKDNXpnd0TJcEOpS3ORooBEKgBgNICdW0rftMtaZr9gWIAorDKNwBUJE+zPVUS7EC69o4UAyBQAwAlh+pRc/c9YdiG88feRwcosk1VBABQn7yY1tfG1G+247IN068UAxCNEWoAqFAeKTT1m21I15qp3oBADQCECtWj9mukJNiwV7bIAgRqACCiNEp9pRjYkLRFlusLCMs71ABQOVtpsSHv2jDttQIgNCPUAFC5PB037Q1sWi7rMhKmgSraUEUAACQ3NzeH7ddHJcGKxm2YPlAMQA2MUAMAP7Qh6LKxGjOrSe9L2x4LqKftVAQAwKybm5th+3WhJFgiTB9Y0RuoiRFqAOCOvJ2WkWoWcSlMAwI1AMDdUC0g8ZS0AJm9poE620tFAAA85ObmZr/9+tzYUov7nbdB+kwxALUyQg0APKgNSz/ei21u34+FqTQafSRMA9W3k4oAAHjKzc1NGqFOW2oNlEb1Ju3nVX7YAlA1I9QAwJPS+7F5b+F3SqNqafGxF8I0QG4fFQEAsIibm5vD5nZbLe9V1yNN8T7Ni9UBIFADACuE6n4O1QOlEd64uX1feqIoAO4y5RsAWFgKV3kK+Glja62opguPHQjTAA+0h4oAAFiF0eqQ0rvy5/aWBhCoAYDtBOth+/W28W51ycaN6d0AczPlGwBYi7xg1bPGSuClBukD07sBFmz7FAEAsG55Gvib9jNUGp0P0mlq91hRAAjUAIBgzdNG7ee9/aQBBGoAoJxgnfaw9o71bkzaz4cUpk3rBhCoAYDygnUK08P2c9x++kpkKy5TkG5D9KWiABCoAYAY4Xo/B2uj1psJ0Z/St62vAARqACB2uE6h+i/hWogGEKgBAJYP14McrtP3vhJ50CSH6C+mcwMI1AAAv4brfg7WL/N3v+LiSCtyj9vPt/RtYTEAgRoAYJGAnaaD7+dw/Tz/HDFkp/A8mQnPY2cfQKAGANhUyE6f9PPL/N316eLXOThf5+D842fhGUCgBgDoSuAe5B+ngbvJoXtq3eF7/Eto/pZ/nuRPCs1XzgxA+f5fgAEA/kM7mNQqy1cAAAAASUVORK5CYII='
                })]
              })]
            })
          }, link: 'https://magic.link/'
        },
        {
          name: 'Transak', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '101',
              height: '75',
              viewBox: '0 0 101 75',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [(0, o.jsxs)('g', {
                opacity: '0.4',
                children: [(0, o.jsx)('path', {
                  d: 'M72.7017 4.21834C72.7021 3.69536 72.5994 3.17745 72.3997 2.6942C72.2 2.21095 71.9072 1.77182 71.5379 1.40191C71.1686 1.032 70.7301 0.738563 70.2475 0.538358C69.7649 0.338153 69.2476 0.235107 68.7252 0.235107H31.5147C30.9923 0.235107 30.475 0.338153 29.9923 0.538358C29.5097 0.738563 29.0712 1.032 28.702 1.40191C28.3327 1.77182 28.0398 2.21095 27.8401 2.6942C27.6404 3.17745 27.5378 3.69536 27.5381 4.21834V41.4807C27.5379 42.0036 27.6407 42.5215 27.8404 43.0047C28.0402 43.4878 28.333 43.9269 28.7023 44.2968C29.0716 44.6667 29.51 44.9601 29.9925 45.1604C30.4751 45.3606 30.9923 45.4638 31.5147 45.4639H55.9666L72.7017 28.7037V4.21834Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M55.9668 45.464H68.7253C69.2477 45.464 69.765 45.3609 70.2477 45.1607C70.7303 44.9605 71.1687 44.6671 71.538 44.2972C71.9073 43.9273 72.2002 43.4881 72.3999 43.0049C72.5996 42.5216 72.7022 42.0037 72.7019 41.4808V28.705L55.9668 45.464Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M66.1223 21.3044L58.9635 14.1355L58.9504 14.1224L58.9231 14.0987C58.8756 14.0535 58.8269 14.0119 58.7771 13.9727C58.7272 13.9334 58.7058 13.918 58.669 13.893L58.618 13.8609C58.2106 13.5947 57.7182 13.4911 57.2382 13.5708C56.7583 13.6505 56.3256 13.9076 56.0259 14.2912L44.8929 25.4397V15.5096C44.8993 15.2471 44.8533 14.986 44.7574 14.7416C44.6615 14.4972 44.5177 14.2745 44.3345 14.0865C44.1514 13.8986 43.9325 13.7493 43.6908 13.6473C43.4491 13.5453 43.1895 13.4928 42.9272 13.4928C42.6649 13.4928 42.4052 13.5453 42.1635 13.6473C41.9218 13.7493 41.703 13.8986 41.5198 14.0865C41.3366 14.2745 41.1929 14.4972 41.097 14.7416C41.0011 14.986 40.955 15.2471 40.9614 15.5096V25.4374L36.8982 21.3674C36.5286 20.9984 36.0278 20.7914 35.5058 20.7921C34.9839 20.7928 34.4835 21.001 34.1149 21.3709C33.7463 21.7409 33.5396 22.2423 33.5403 22.7648C33.541 23.2873 33.7489 23.7882 34.1185 24.1572L41.5373 31.5875C41.5845 31.6344 41.634 31.6788 41.6857 31.7207C41.7356 31.7611 41.7867 31.7991 41.8401 31.8395C42.1055 32.016 42.41 32.125 42.7271 32.1569H42.7354C42.7995 32.1569 42.8625 32.1664 42.9266 32.1664H42.9563C43.0097 32.1664 43.0631 32.1664 43.1166 32.1581L43.1546 32.1521C43.2056 32.1521 43.2555 32.1403 43.3054 32.1307H43.3291C43.3837 32.1189 43.4395 32.1058 43.4941 32.0891H43.5025C43.5618 32.0701 43.6212 32.0499 43.6782 32.0261C43.7599 31.9919 43.8393 31.9522 43.9157 31.9073L43.9608 31.8811C44.035 31.8347 44.1064 31.7839 44.1745 31.729C44.1803 31.7228 44.1867 31.7172 44.1935 31.7123C44.2351 31.6767 44.2766 31.6398 44.3123 31.6006L55.5925 20.3083V30.2099C55.5861 30.4723 55.6321 30.7335 55.728 30.9779C55.8239 31.2223 55.9677 31.445 56.1508 31.6329C56.334 31.8208 56.5529 31.9702 56.7946 32.0722C57.0363 32.1741 57.2959 32.2267 57.5582 32.2267C57.8205 32.2267 58.0801 32.1741 58.3218 32.0722C58.5635 31.9702 58.7824 31.8208 58.9656 31.6329C59.1488 31.445 59.2925 31.2223 59.3884 30.9779C59.4843 30.7335 59.5304 30.4723 59.524 30.2099V20.2619L63.3367 24.0835C63.5189 24.2666 63.7355 24.4119 63.9739 24.5113C64.2123 24.6106 64.4679 24.662 64.7261 24.6624C64.9843 24.6628 65.2401 24.6124 65.4789 24.5138C65.7176 24.4153 65.9346 24.2707 66.1175 24.0882C66.3004 23.9057 66.4457 23.689 66.5449 23.4503C66.6441 23.2117 66.6954 22.9558 66.6959 22.6973C66.6963 22.4388 66.6459 22.1827 66.5475 21.9437C66.449 21.7047 66.3046 21.4875 66.1223 21.3044Z',
                  fill: 'url(#paint0_linear_8_1263)'
                }), (0, o.jsx)('path', {
                  d: 'M0.945801 58.4235H6.77827V73.6813H10.2728V58.4235H16.1052V55.1559H0.945801V58.4235Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M23.7625 59.7546C23.349 59.7835 22.9397 59.8568 22.5419 59.9733C22.1578 60.0845 21.7904 60.2468 21.4495 60.4559C21.0205 60.7059 20.6453 61.0384 20.3452 61.4342C20.2024 61.6227 20.0734 61.8214 19.9593 62.0285V59.7867H16.8721V73.681H20.3927V66.5799C20.3855 66.0929 20.4593 65.608 20.6112 65.1452C20.7462 64.7348 20.9657 64.3573 21.2555 64.0371C21.5453 63.7169 21.899 63.4611 22.2937 63.2861C22.7278 63.0822 23.1961 62.9612 23.6746 62.9295C24.1258 62.8846 24.5813 62.9249 25.0176 63.0484V59.7867C24.6012 59.7359 24.1809 59.7251 23.7625 59.7546Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M38.2786 61.9231C37.8248 61.0274 37.0565 60.331 36.1211 59.9678C35.1712 59.5898 34.0836 59.4008 32.8582 59.4008C31.1871 59.4008 29.8679 59.7613 28.9006 60.4824C27.9524 61.1752 27.2574 62.1603 26.9224 63.2865L30.0832 64.2898C30.1731 63.9986 30.3238 63.7299 30.5252 63.5014C30.7266 63.2729 30.9742 63.0899 31.2516 62.9644C31.7549 62.7283 32.3024 62.6015 32.8582 62.5923C33.7828 62.5923 34.4422 62.7853 34.8364 63.1712C35.1451 63.4731 35.3315 63.9129 35.398 64.4787L33.719 64.7296C32.819 64.8627 32.0135 65.0018 31.3027 65.1468C30.6791 65.2693 30.0652 65.4369 29.4658 65.6484C28.8109 65.8696 28.2058 66.2173 27.6847 66.6718C27.2579 67.0581 26.9297 67.5411 26.7277 68.0804C26.5248 68.6456 26.4247 69.2427 26.432 69.8432C26.4241 70.5828 26.6078 71.3117 26.9652 71.959C27.3307 72.6088 27.8747 73.1401 28.5325 73.49C29.2212 73.8712 30.0627 74.0622 31.0569 74.063C32.2562 74.063 33.2457 73.855 34.0254 73.4389C34.6976 73.0643 35.2927 72.5653 35.7792 71.9685V73.6767H38.8367V65.1908C38.8367 64.5568 38.811 63.9823 38.7595 63.4672C38.7017 62.926 38.5383 62.4014 38.2786 61.9231ZM35.0157 69.4616C34.8719 69.7291 34.6925 69.9758 34.4825 70.1951C34.1817 70.5166 33.8248 70.7805 33.4293 70.9736C32.9224 71.2154 32.365 71.3323 31.8038 71.3148C31.4486 71.3231 31.0952 71.2617 30.7636 71.1341C30.4929 71.0301 30.2585 70.8491 30.0892 70.6135C29.9269 70.3727 29.8439 70.0872 29.8517 69.7968C29.8486 69.5776 29.8991 69.3609 29.9989 69.1657C30.1128 68.9599 30.271 68.782 30.462 68.645C30.7183 68.4608 30.9978 68.3113 31.2932 68.2005C31.6335 68.0773 31.9808 67.9745 32.3334 67.8926C32.7292 67.7975 33.2472 67.6925 33.8876 67.5776C34.3009 67.5031 34.7952 67.4171 35.3707 67.3197C35.3636 67.5633 35.3517 67.8355 35.3327 68.1434C35.3137 68.5993 35.206 69.0471 35.0157 69.4616Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M54.8388 63.0996C54.6674 62.4686 54.3917 61.8707 54.023 61.3308C53.6127 60.7393 53.0635 60.2576 52.4236 59.9282C51.7373 59.5597 50.8507 59.3755 49.7639 59.3755C48.4015 59.3755 47.2731 59.6715 46.3786 60.2634C45.9685 60.5335 45.5949 60.8556 45.2672 61.2215V59.7868H42.1562V73.6811H45.7018V66.6311C45.7018 65.7642 45.798 65.0696 45.9903 64.5474C46.1381 64.0975 46.3918 63.6898 46.7301 63.3587C47.0038 63.1034 47.3337 62.9161 47.6931 62.8119C48.0064 62.7224 48.3302 62.6752 48.656 62.6717C49.4017 62.6717 49.978 62.8389 50.3849 63.1733C50.7863 63.5008 51.0905 63.932 51.2647 64.4202C51.4398 64.8986 51.5477 65.3991 51.5853 65.9072C51.6194 66.3993 51.6368 66.8043 51.6376 67.122V73.6835H55.1831V65.8846C55.1831 65.6525 55.1657 65.284 55.1309 64.7792C55.0876 64.2112 54.9898 63.6488 54.8388 63.0996Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M67.9225 66.3292C67.2852 65.9647 66.4394 65.645 65.385 65.37C64.3053 65.095 63.5022 64.8723 62.9758 64.702C62.4498 64.5296 62.103 64.3632 61.9356 64.1991C61.8541 64.1216 61.7897 64.0278 61.7465 63.9238C61.7034 63.8198 61.6825 63.7079 61.6851 63.5953C61.6851 63.1919 61.8798 62.8833 62.2693 62.6693C62.6588 62.4554 63.1733 62.3694 63.8129 62.4114C64.4719 62.4625 65.0003 62.6384 65.3803 62.9392C65.57 63.0855 65.7273 63.2697 65.8424 63.48C65.9574 63.6903 66.0277 63.9222 66.0488 64.1611L69.6204 63.518C69.5152 62.7128 69.1832 61.9543 68.6634 61.3309C68.1141 60.6928 67.414 60.2025 66.627 59.9045C65.7037 59.5553 64.7225 59.3851 63.7357 59.4029C62.614 59.4029 61.64 59.5812 60.8135 59.9378C60.0442 60.2504 59.3798 60.7761 58.8983 61.4533C58.4362 62.1376 58.1984 62.949 58.2179 63.7748C58.1986 64.4116 58.3543 65.0415 58.6679 65.5958C58.9672 66.0975 59.4552 66.5281 60.132 66.8879C60.8088 67.2477 61.7124 67.5738 62.8428 67.8662C63.845 68.1324 64.5835 68.3468 65.0585 68.5093C65.5334 68.6721 65.8398 68.8373 65.9775 69.0049C66.1216 69.1946 66.1943 69.429 66.1829 69.667C66.19 69.8674 66.1464 70.0663 66.0561 70.2452C65.9658 70.4242 65.8317 70.5773 65.6664 70.6905C65.3244 70.9282 64.8352 71.0566 64.2024 71.0566C63.4321 71.0566 62.7961 70.8723 62.2942 70.5038C61.7915 70.1324 61.4456 69.5864 61.3241 68.9728L57.7524 69.5125C57.9836 70.9627 58.6367 72.0844 59.7116 72.8776C60.7866 73.6709 62.1976 74.0671 63.9447 74.0663C65.7598 74.0663 67.1815 73.659 68.2098 72.8443C69.2381 72.0297 69.7526 70.9104 69.7534 69.4863C69.772 68.8433 69.6213 68.2067 69.3165 67.6403C69.0259 67.13 68.5613 66.693 67.9225 66.3292Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M83.6534 61.9231C83.1996 61.0274 82.4313 60.331 81.4959 59.9678C80.546 59.5898 79.4583 59.4008 78.2329 59.4008C76.5619 59.4008 75.2427 59.7613 74.2754 60.4824C73.3271 61.1752 72.6322 62.1603 72.2972 63.2865L75.4568 64.2898C75.68 63.6558 76.0699 63.214 76.6264 62.9644C77.1297 62.7283 77.6772 62.6015 78.2329 62.5923C79.1567 62.5923 79.8161 62.7853 80.2111 63.1712C80.5199 63.4731 80.7051 63.9129 80.7728 64.4787L79.0926 64.7296C78.1941 64.8627 77.3891 65.0018 76.6775 65.1468C76.0538 65.2693 75.4399 65.4369 74.8406 65.6484C74.1857 65.8696 73.5806 66.2173 73.0595 66.6718C72.6323 67.0578 72.304 67.5409 72.1024 68.0804C71.8996 68.6456 71.7995 69.2427 71.8068 69.8432C71.7982 70.5828 71.9819 71.312 72.3399 71.959C72.7055 72.6088 73.2494 73.1401 73.9073 73.49C74.596 73.8712 75.4374 74.0622 76.4317 74.063C77.6309 74.063 78.6204 73.855 79.4002 73.4389C80.0728 73.0648 80.668 72.5658 81.1539 71.9685V73.6767H84.2115V65.1908C84.2146 64.6153 84.1889 64.0401 84.1343 63.4672C84.077 62.9258 83.9136 62.4011 83.6534 61.9231ZM80.3904 69.4616C80.2466 69.7291 80.0673 69.9758 79.8573 70.1951C79.5562 70.5163 79.1994 70.7801 78.8041 70.9736C78.2971 71.2152 77.7398 71.3322 77.1785 71.3148C76.8234 71.3231 76.47 71.2617 76.1384 71.1341C75.8677 71.0301 75.6333 70.8491 75.4639 70.6135C75.3012 70.3729 75.2181 70.0873 75.2265 69.7968C75.2233 69.5776 75.2739 69.3609 75.3737 69.1657C75.4875 68.9599 75.6457 68.782 75.8368 68.645C76.093 68.4608 76.3725 68.3113 76.668 68.2005C77.0083 68.0773 77.3556 67.9745 77.7081 67.8926C78.1039 67.7975 78.622 67.6925 79.2624 67.5776C79.6756 67.5031 80.17 67.4171 80.7455 67.3197C80.7383 67.5633 80.7265 67.8355 80.7075 68.1434C80.6884 68.5993 80.5807 69.0471 80.3904 69.4616Z',
                  fill: 'white'
                }), (0, o.jsx)('path', {
                  d: 'M95.1126 66.7347L100.123 59.7869H95.806L91.1039 66.4768V55.1559H87.5584L87.5334 73.6813H91.1039V66.9915L95.9093 73.6813H100.457L95.1126 66.7347Z',
                  fill: 'white'
                })]
              }), (0, o.jsx)('defs', {
                children: (0, o.jsxs)('linearGradient', {
                  id: 'paint0_linear_8_1263',
                  x1: '31.4291',
                  y1: '16.7649',
                  x2: '56.0579',
                  y2: '41.9404',
                  gradientUnits: 'userSpaceOnUse',
                  children: [(0, o.jsx)('stop', {
                    offset: '0.13',
                    stopColor: '#348BED'
                  }), (0, o.jsx)('stop', { offset: '0.31', stopColor: '#2B80E8' }), (0, o.jsx)('stop', {
                    offset: '0.64',
                    stopColor: '#1461DB'
                  }), (0, o.jsx)('stop', { offset: '0.72', stopColor: '#0E57D7' })]
                })
              })]
            })
          }, link: 'https://transak.com/'
        },
        {
          name: 'Slowmist', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '144',
              height: '48',
              viewBox: '0 0 144 48',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              children: [(0, o.jsx)('g', {
                opacity: '0.4',
                children: (0, o.jsx)('rect', {
                  x: '0.078125',
                  y: '0.0754395',
                  width: '143.097',
                  height: '47.3482',
                  fill: 'url(#pattern1)'
                })
              }), (0, o.jsxs)('defs', {
                children: [(0, o.jsx)('pattern', {
                  id: 'pattern1',
                  patternContentUnits: 'objectBoundingBox',
                  width: '1',
                  height: '1',
                  children: (0, o.jsx)('use', {
                    xlinkHref: '#image0_8_1240',
                    transform: 'matrix(0.00290698 0 0 0.00878553 0 -0.000775215)'
                  })
                }), (0, o.jsx)('image', {
                  id: 'image0_8_1240',
                  width: '344',
                  height: '114',
                  xlinkHref: 'data:image/png;base64,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'
                })]
              })]
            })
          }, link: 'https://www.slowmist.com/'
        },
        {
          name: 'Blocksec', Logo: function () {
            return (0, o.jsxs)('svg', {
              width: '164',
              height: '38',
              viewBox: '0 0 164 38',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              children: [
                (0, o.jsx)('rect', {
                  opacity: '0.4',
                  width: '164',
                  height: '38',
                  fill: 'url(#pattern2)'
                }),
                (0, o.jsxs)('defs', {
                  children: [
                    (0, o.jsx)('pattern', {
                      id: 'pattern2',
                      patternContentUnits: 'objectBoundingBox',
                      width: '1',
                      height: '1',
                      children: (0, o.jsx)('use', {
                        xlinkHref: '#image0_8_1243',
                        transform: 'matrix(0.0045045 0 0 0.0194405 0 -0.00545282)'
                      })
                    }),
                    (0, o.jsx)('image', {
                      id: 'image0_8_1243',
                      width: '222',
                      height: '52',
                      xlinkHref: 'data:image/png;base64,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'
                    })
                  ]
                })]
            })
          },
          link: 'https://blocksec.com/'
        }
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
                    children: [(0, o.jsxs)('div', {
                      className: 'grid grid-cols-2 md:gap-7',
                      children: [(0, o.jsxs)('div', {
                        children: [(0, o.jsx)('h3', {
                          className: 'text-base leading-[18px] font-medium text-nexter-white',
                          children: 'Audit'
                        }), (0, o.jsx)('ul', {
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
                        })]
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
                      (0, o.jsxs)('div', {
                        className: 'md:mt-10 xl:mt-0', children: [
                          (0, o.jsx)('h3', {
                            className: 'text-base leading-[18px] font-medium text-nexter-white',
                            children: 'Newsletter'
                          }),
                          (0, o.jsx)('p', {
                            className: 'mt-3 md:mt-2 text-sm leading-[22px] md:leading-6 text-nexter-white opacity-60',
                            children: 'Be the first one to know about us!'
                          }),
                          i.succeeded && (0, o.jsx)('div', {
                            children: (0, o.jsx)('p', {
                              className: 'max-w-xs text-center pt-10 text-green sm:max-w-sm md:max-w-none text-xs',
                              children: 'Thank you for signing up. You will now receive news letters from our side'
                            })
                          }),
                          !i.succeeded && (0, o.jsxs)('form', {
                            className: 'mt-6 sm:flex sm:max-w-md',
                            onSubmit: n,
                            children: [
                              (0, o.jsxs)('div', {
                                children: [
                                  (0, o.jsx)('label', {
                                    htmlFor: 'email-address',
                                    className: 'sr-only',
                                    children: 'Email address'
                                  }),
                                  (0, o.jsx)('input', {
                                    type: 'email',
                                    name: 'email',
                                    onChange: function (e) {return c(e.target.value), void r()},
                                    value: l,
                                    id: 'email',
                                    placeholder: 'Enter your email',
                                    autoComplete: 'email',
                                    required: !0,
                                    className: 'w-full min-w-0 appearance-none rounded-md border-0 bg-gray-400/10 px-3 py-1.5 text-base leading-7 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full'
                                  }),
                                  'TYPE_EMAIL' === (null === i || void 0 === i || null === (e = i.errors[0]) || void 0 === e ? void 0 : e.code) && (0, o.jsx)('span', {
                                    className: 'block mt-2 text-red-500 text-xs',
                                    children: 'Enter a valid email address'
                                  })
                                ]
                              }),
                              (0, o.jsx)('div', {
                                className: 'mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0', children: (0, o.jsx)('button', {
                                  type: 'submit',
                                  className: ''.concat(!l && 'disabled:opacity-25', ' flex w-full items-center justify-center rounded-md bg-[#36353B] hover:bg-gradient-primary py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'),
                                  disabled: i.submitting || i.succeeded || !l, children: 'Subscribe'
                                })
                              })
                            ]
                          }),
                          // (0, o.jsx)('p', {
                          //   className: 'text-xs leading-5 text-gray-500 mt-6 lg:mt-12',
                          //   children: '\xa9 2023 Bhavish Labs Pte Ltd. All rights reserved.'
                          // })
                        ]
                      })]
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
              children: 'Ecosystem and Audit Partners'
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
