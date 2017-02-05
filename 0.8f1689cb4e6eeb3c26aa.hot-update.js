webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CatalogView = function () {\n    function CatalogView() {\n        _classCallCheck(this, CatalogView);\n\n        this.carousel = document.getElementById(\"productroll\");\n        this.theApp = null;\n    }\n\n    _createClass(CatalogView, [{\n        key: \"initCarousel\",\n        value: function initCarousel() {\n            console.log(\"initializing carousel\");\n            $(document).ready(function () {\n                $('.owl-carousel').owlCarousel({\n                    items: 1,\n                    loop: true,\n                    responsive: {\n                        0: {\n                            items: 1\n                        }, //from zero to 600 screen\n                        601: {\n                            items: 2\n                        }, //from 600 to 1050 screen\n                        1050: {\n                            items: 4\n                        } //from 1050 to 1240 screen\n                    }\n\n                });\n            });\n        }\n    }, {\n        key: \"onClickCartButton\",\n        value: function onClickCartButton(theApp) {\n            return function (e) {\n                console.log(e.target.getAttribute(\"data-sku\"));\n                var theSku = e.target.getAttribute(\"data-sku\");\n                theApp.shoppingCart.addItemToCart(theSku);\n            };\n        }\n    }, {\n        key: \"addProductsToCarousel\",\n        value: function addProductsToCarousel(products, theApp) {\n\n            this.theApp = theApp;\n\n            if (products === undefined || products == null) {\n                return; // do not do anything! there is no data\n            }\n\n            for (var p = 0; p < products.length; p++) {\n                var product = products[p];\n                console.log(product);\n                // each product is a product object\n                // use it to create the element\n\n                // create the DIV tag with class 'product-wrapper'\n                var newDiv = document.createElement(\"div\");\n                newDiv.setAttribute(\"class\", \"product-wrapper\");\n\n                // create a new IMG tag. Suggest to add data-sku attribute here too\n                // so that if you 'click' on the image, it would pop up a quick-view\n                // window and you can use the sku.\n                var newImg = document.createElement(\"img\");\n                newImg.setAttribute(\"src\", product.image);\n                newImg.setAttribute(\"alt\", \"\" + product.name); // this works too\n                newImg.setAttribute(\"data-sku\", product.sku);\n\n                var hr = document.createElement(\"hr\");\n\n                // create a new Paragraph to show a manufacturer\n                var newPara = document.createElement(\"p\");\n                newPara.setAttribute(\"class\", \"productmake\");\n                var newParaTextNode = document.createTextNode(product.manufacturer);\n                newPara.appendChild(newParaTextNode);\n\n                // create a new H3 tag to show the name\n                var newH3Tag = document.createElement(\"h3\");\n                var newH3TagTextNode = document.createTextNode(product.name);\n                newH3Tag.appendChild(newH3TagTextNode);\n\n                var newPricePara = document.createElement(\"p\");\n                newPricePara.setAttribute(\"class\", \"price\");\n                var newPriceParaTextNode = document.createTextNode(\"$\" + product.regularPrice);\n                newPricePara.appendChild(newPriceParaTextNode);\n\n                var quickViewButton = document.createElement(\"button\");\n                quickViewButton.setAttribute(\"id\", \"qv_\" + product.sku);\n                quickViewButton.setAttribute(\"data-sku\", product.sku);\n                quickViewButton.setAttribute(\"class\", \"quickViewButton\");\n                var quickViewTextNode = document.createTextNode(\"Quick View\");\n                quickViewButton.appendChild(quickViewTextNode);\n\n                var addToCartButton = document.createElement(\"button\");\n                addToCartButton.setAttribute(\"id\", \"cart_\" + product.sku);\n                addToCartButton.setAttribute(\"data-sku\", product.sku);\n                addToCartButton.setAttribute(\"class\", \"addToCartButton\");\n                var addToCartTextNode = document.createTextNode(\"Add to Cart\");\n                addToCartButton.appendChild(addToCartTextNode);\n                addToCartButton.addEventListener(\"click\", this.onClickCartButton(this.theApp), false);\n\n                newDiv.appendChild(newImg);\n                newDiv.appendChild(hr);\n                newDiv.appendChild(newPara);\n                newDiv.appendChild(newH3Tag);\n                newDiv.appendChild(newPricePara);\n                newDiv.appendChild(quickViewButton);\n                newDiv.appendChild(addToCartButton);\n                this.carousel.appendChild(newDiv);\n            }\n            this.initCarousel();\n        }\n    }]);\n\n    return CatalogView;\n}();\n\nexports.default = CatalogView;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ2F0YWxvZ1ZpZXcuanM/MDY1YSJdLCJuYW1lcyI6WyJDYXRhbG9nVmlldyIsImNhcm91c2VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRoZUFwcCIsImNvbnNvbGUiLCJsb2ciLCIkIiwicmVhZHkiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwibG9vcCIsInJlc3BvbnNpdmUiLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGhlU2t1Iiwic2hvcHBpbmdDYXJ0IiwiYWRkSXRlbVRvQ2FydCIsInByb2R1Y3RzIiwidW5kZWZpbmVkIiwicCIsImxlbmd0aCIsInByb2R1Y3QiLCJuZXdEaXYiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibmV3SW1nIiwiaW1hZ2UiLCJuYW1lIiwic2t1IiwiaHIiLCJuZXdQYXJhIiwibmV3UGFyYVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJtYW51ZmFjdHVyZXIiLCJhcHBlbmRDaGlsZCIsIm5ld0gzVGFnIiwibmV3SDNUYWdUZXh0Tm9kZSIsIm5ld1ByaWNlUGFyYSIsIm5ld1ByaWNlUGFyYVRleHROb2RlIiwicmVndWxhclByaWNlIiwicXVpY2tWaWV3QnV0dG9uIiwicXVpY2tWaWV3VGV4dE5vZGUiLCJhZGRUb0NhcnRCdXR0b24iLCJhZGRUb0NhcnRUZXh0Tm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrQ2FydEJ1dHRvbiIsImluaXRDYXJvdXNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNxQkEsVztBQUVqQiwyQkFBYTtBQUFBOztBQUNULGFBQUtDLFFBQUwsR0FBZ0JDLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBaEI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUVIOzs7O3VDQUVhO0FBQ1ZDLG9CQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDREMsY0FBRUwsUUFBRixFQUFZTSxLQUFaLENBQWtCLFlBQVU7QUFDeEJELGtC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T0FBN0IsRUFBcUMsaUJBQXJDO0FBQ0Esb0JBQUlpQixvQkFBb0J6QyxTQUFTZ0MsY0FBVCxDQUF3QixZQUF4QixDQUF4QjtBQUNBUSxnQ0FBZ0JOLFdBQWhCLENBQTRCTyxpQkFBNUI7O0FBRUEsb0JBQUlDLGtCQUFrQjFDLFNBQVN1QixhQUFULENBQXVCLFFBQXZCLENBQXRCO0FBQ0FtQixnQ0FBZ0JsQixZQUFoQixDQUE2QixJQUE3QixZQUEwQ0gsUUFBUU8sR0FBbEQ7QUFDQWMsZ0NBQWdCbEIsWUFBaEIsQ0FBNkIsVUFBN0IsRUFBd0NILFFBQVFPLEdBQWhEO0FBQ0FjLGdDQUFnQmxCLFlBQWhCLENBQTZCLE9BQTdCLEVBQXFDLGlCQUFyQztBQUNBLG9CQUFJbUIsb0JBQW9CM0MsU0FBU2dDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBeEI7QUFDQVUsZ0NBQWdCUixXQUFoQixDQUE0QlMsaUJBQTVCO0FBQ0FELGdDQUFnQkUsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQXlDLEtBQUtDLGlCQUFMLENBQXVCLEtBQUszQyxNQUE1QixDQUF6QyxFQUE2RSxLQUE3RTs7QUFJQW9CLHVCQUFPWSxXQUFQLENBQW1CVCxNQUFuQjtBQUNBSCx1QkFBT1ksV0FBUCxDQUFtQkwsRUFBbkI7QUFDQVAsdUJBQU9ZLFdBQVAsQ0FBbUJKLE9BQW5CO0FBQ0FSLHVCQUFPWSxXQUFQLENBQW1CQyxRQUFuQjtBQUNBYix1QkFBT1ksV0FBUCxDQUFtQkcsWUFBbkI7QUFDQWYsdUJBQU9ZLFdBQVAsQ0FBbUJNLGVBQW5CO0FBQ0FsQix1QkFBT1ksV0FBUCxDQUFtQlEsZUFBbkI7QUFDQSxxQkFBSzNDLFFBQUwsQ0FBY21DLFdBQWQsQ0FBMEJaLE1BQTFCO0FBQ0g7QUFDRyxpQkFBS3dCLFlBQUw7QUFDUDs7Ozs7O2tCQTdHZ0JoRCxXIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dWaWV3e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdHJvbGxcIik7XG4gICAgICAgIHRoaXMudGhlQXBwID0gbnVsbDtcblxuICAgIH1cblxuICAgIGluaXRDYXJvdXNlbCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRpYWxpemluZyBjYXJvdXNlbFwiKTtcbiAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XG4gICAgICAgICAgICAgICAgICAgMDp7XG4gICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgICAgICAgICB9LCAvL2Zyb20gemVybyB0byA2MDAgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgNjAxOntcbiAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MlxuICAgICAgICAgICAgICAgICAgIH0sIC8vZnJvbSA2MDAgdG8gMTA1MCBzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAxMDUwOntcbiAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6NFxuICAgICAgICAgICAgICAgICAgIH0gLy9mcm9tIDEwNTAgdG8gMTI0MCBzY3JlZW5cbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICB9KTtcbiAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25DbGlja0NhcnRCdXR0b24odGhlQXBwKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIpKTtcbiAgICAgICAgbGV0IHRoZVNrdSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIpO1xuICAgICAgICB0aGVBcHAuc2hvcHBpbmdDYXJ0LmFkZEl0ZW1Ub0NhcnQodGhlU2t1KTtcbiAgICB9XG59XG4gICAgYWRkUHJvZHVjdHNUb0Nhcm91c2VsKHByb2R1Y3RzLHRoZUFwcCl7XG5cbiAgICAgICAgdGhpcy50aGVBcHAgPSB0aGVBcHA7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzID09PSB1bmRlZmluZWQgfHwgcHJvZHVjdHMgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gOyAvLyBkbyBub3QgZG8gYW55dGhpbmchIHRoZXJlIGlzIG5vIGRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHA9MDsgcDxwcm9kdWN0cy5sZW5ndGg7IHArKyl7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RzW3BdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICAgICAgICAvLyBlYWNoIHByb2R1Y3QgaXMgYSBwcm9kdWN0IG9iamVjdFxuICAgICAgICAgICAgLy8gdXNlIGl0IHRvIGNyZWF0ZSB0aGUgZWxlbWVudFxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIERJViB0YWcgd2l0aCBjbGFzcyAncHJvZHVjdC13cmFwcGVyJ1xuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2R1Y3Qtd3JhcHBlclwiKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IElNRyB0YWcuIFN1Z2dlc3QgdG8gYWRkIGRhdGEtc2t1IGF0dHJpYnV0ZSBoZXJlIHRvb1xuICAgICAgICAgICAgLy8gc28gdGhhdCBpZiB5b3UgJ2NsaWNrJyBvbiB0aGUgaW1hZ2UsIGl0IHdvdWxkIHBvcCB1cCBhIHF1aWNrLXZpZXdcbiAgICAgICAgICAgIC8vIHdpbmRvdyBhbmQgeW91IGNhbiB1c2UgdGhlIHNrdS5cbiAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcbiAgICAgICAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYCR7cHJvZHVjdC5uYW1lfWApOyAvLyB0aGlzIHdvcmtzIHRvb1xuICAgICAgICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIscHJvZHVjdC5za3UpO1xuXG4gICAgICAgICAgICBsZXQgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBQYXJhZ3JhcGggdG8gc2hvdyBhIG1hbnVmYWN0dXJlclxuICAgICAgICAgICAgbGV0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIG5ld1BhcmEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInByb2R1Y3RtYWtlXCIpO1xuICAgICAgICAgICAgbGV0IG5ld1BhcmFUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2R1Y3QubWFudWZhY3R1cmVyKTtcbiAgICAgICAgICAgIG5ld1BhcmEuYXBwZW5kQ2hpbGQobmV3UGFyYVRleHROb2RlKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IEgzIHRhZyB0byBzaG93IHRoZSBuYW1lXG4gICAgICAgICAgICBsZXQgbmV3SDNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgICBsZXQgbmV3SDNUYWdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2R1Y3QubmFtZSk7XG4gICAgICAgICAgICBuZXdIM1RhZy5hcHBlbmRDaGlsZChuZXdIM1RhZ1RleHROb2RlKTtcblxuICAgICAgICAgICAgbGV0IG5ld1ByaWNlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbmV3UHJpY2VQYXJhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwcmljZVwiKTtcbiAgICAgICAgICAgIGxldCBuZXdQcmljZVBhcmFUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJFwiK3Byb2R1Y3QucmVndWxhclByaWNlKTtcbiAgICAgICAgICAgIG5ld1ByaWNlUGFyYS5hcHBlbmRDaGlsZChuZXdQcmljZVBhcmFUZXh0Tm9kZSk7XG5cbiAgICAgICAgICAgIGxldCBxdWlja1ZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcXVpY2tWaWV3QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsYHF2XyR7cHJvZHVjdC5za3V9YCk7XG4gICAgICAgICAgICBxdWlja1ZpZXdCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1za3VcIixwcm9kdWN0LnNrdSk7XG4gICAgICAgICAgICBxdWlja1ZpZXdCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInF1aWNrVmlld0J1dHRvblwiKVxuICAgICAgICAgICAgbGV0IHF1aWNrVmlld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJRdWljayBWaWV3XCIpO1xuICAgICAgICAgICAgcXVpY2tWaWV3QnV0dG9uLmFwcGVuZENoaWxkKHF1aWNrVmlld1RleHROb2RlKTtcblxuICAgICAgICAgICAgbGV0IGFkZFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIixgY2FydF8ke3Byb2R1Y3Quc2t1fWApO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtc2t1XCIscHJvZHVjdC5za3UpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJhZGRUb0NhcnRCdXR0b25cIilcbiAgICAgICAgICAgIGxldCBhZGRUb0NhcnRUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkIHRvIENhcnRcIik7XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9DYXJ0VGV4dE5vZGUpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMub25DbGlja0NhcnRCdXR0b24odGhpcy50aGVBcHApLGZhbHNlKTtcblxuXG5cbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdJbWcpO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGhyKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdIM1RhZyk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3UHJpY2VQYXJhKTtcbiAgICAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChxdWlja1ZpZXdCdXR0b24pO1xuICAgICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGFkZFRvQ2FydEJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdENhcm91c2VsKCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ2F0YWxvZ1ZpZXcuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})