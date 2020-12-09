function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module-ngfactory~pages-forgot-forgot-module-ngfactory~pages-login-login-~ea352f7c"], {
  /***/
  "./src/services/apis.service.ts":
  /*!**************************************!*\
    !*** ./src/services/apis.service.ts ***!
    \**************************************/

  /*! exports provided: AuthInfo, ApisService */

  /***/
  function srcServicesApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInfo", function () {
      return AuthInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInfo =
    /*#__PURE__*/
    function () {
      function AuthInfo($uid) {
        _classCallCheck(this, AuthInfo);

        this.$uid = $uid;
      }

      _createClass(AuthInfo, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.$uid;
        }
      }]);

      return AuthInfo;
    }();

    var ApisService =
    /*#__PURE__*/
    function () {
      function ApisService(http) {
        _classCallCheck(this, ApisService);

        this.http = http;
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ApisService.UNKNOWN_USER);
        /** Http Options */

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }
      /** Captura de errores */


      _createClass(ApisService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])("Something bad happened; please try again later.");
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var credential = {
            user: email,
            pass: password
          };
          console.log(credential);
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].login, JSON.stringify(credential), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
        }
      }, {
        key: "resetpassword",
        value: function resetpassword(email, token) {
          var _this = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].resetpassword + email, opt).toPromise().then(function (email) {
              resolve(email);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers(token) {
          var _this2 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this2.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getusers, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getQuestionnariesActive",
        value: function getQuestionnariesActive(token) {
          var _this3 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this3.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].questionnaries + 'A', opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getQUsersByQuestionnaries",
        value: function getQUsersByQuestionnaries(id, token) {
          var _this4 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this4.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].usersbyquestionnaries + id, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "registerusers",
        value: function registerusers(users, token) {
          var _this5 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this5.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].register, users, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addUser",
        value: function addUser(user, token) {
          var _this6 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this6.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].adduser, user, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser(user, token) {
          var _this7 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this7.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updateuser, user, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getRoles",
        value: function getRoles(token) {
          var _this8 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this8.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].roles, opt).toPromise().then(function (roles) {
              resolve(roles);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addRolesByUser",
        value: function addRolesByUser(rol, token) {
          var _this9 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this9.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rolesbyuser, rol, opt).toPromise().then(function (roles) {
              resolve(roles);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "removeRolesByUser",
        value: function removeRolesByUser(rol, token) {
          var _this10 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this10.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].removeroles, rol, opt).toPromise().then(function (roles) {
              resolve(roles);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getclients",
        value: function getclients(token) {
          var _this11 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this11.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].client, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addclient",
        value: function addclient(client, token) {
          var _this12 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this12.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addclient, client, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateclient",
        value: function updateclient(client, token) {
          var _this13 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this13.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updateclient, client, opt).toPromise().then(function (users) {
              resolve(users);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getflowers",
        value: function getflowers(token) {
          var _this14 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this14.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].flowers, opt).toPromise().then(function (flowers) {
              resolve(flowers);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addflowers",
        value: function addflowers(flower, token) {
          var _this15 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this15.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addflowers, flower, opt).toPromise().then(function (flower) {
              resolve(flower);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateflower",
        value: function updateflower(flower, token) {
          var _this16 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this16.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updateflowers, flower, opt).toPromise().then(function (flower) {
              resolve(flower);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getflowerbyname",
        value: function getflowerbyname(name, token) {
          var _this17 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this17.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchflower + name, opt).toPromise().then(function (flowers) {
              resolve(flowers);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addResourcesflowers",
        value: function addResourcesflowers(flower, token) {
          var _this18 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this18.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addresourcesflower, flower, opt).toPromise().then(function (flower) {
              resolve(flower);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "removeResourcesflowers",
        value: function removeResourcesflowers(idResource, token) {
          var _this19 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this19.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].removeresourcesflower + idResource, null, opt).toPromise().then(function (flower) {
              resolve(flower);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getfinca",
        value: function getfinca(token) {
          var _this20 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this20.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].finca, opt).toPromise().then(function (finca) {
              resolve(finca);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addfinca",
        value: function addfinca(finca, token) {
          var _this21 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this21.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addfinca, finca, opt).toPromise().then(function (finca) {
              resolve(finca);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updatefinca",
        value: function updatefinca(finca, token) {
          var _this22 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this22.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updatefinca, finca, opt).toPromise().then(function (finca) {
              resolve(finca);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getdeliveries",
        value: function getdeliveries(token) {
          var _this23 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this23.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].empresaCargo, opt).toPromise().then(function (delivery) {
              resolve(delivery);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "adddelivery",
        value: function adddelivery(delivery, token) {
          var _this24 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this24.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addempresaCargo, delivery, opt).toPromise().then(function (delivery) {
              resolve(delivery);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updatedelivery",
        value: function updatedelivery(delivery, token) {
          var _this25 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this25.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updateempresaCargo, delivery, opt).toPromise().then(function (delivery) {
              resolve(delivery);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getmarks",
        value: function getmarks(idCliente, token) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this26 = this;

            var opt;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    opt = {
                      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                      })
                    };
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this26.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].marcaciones + idCliente, opt).toPromise().then(function (mark) {
                        resolve(mark);
                      }).catch(function (error) {
                        reject(error);
                      });
                    }));

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "addmark",
        value: function addmark(mark, token) {
          var _this27 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this27.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].addmarcaciones, mark, opt).toPromise().then(function (mark) {
              resolve(mark);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updatemark",
        value: function updatemark(mark, token) {
          var _this28 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this28.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].updatemarcaciones, mark, opt).toPromise().then(function (mark) {
              resolve(mark);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "registerInvoice",
        value: function registerInvoice(invoice, token) {
          var _this29 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this29.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].registerinvoice, invoice, opt).toPromise().then(function (invoice) {
              resolve(invoice);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "registerPaymentClaim",
        value: function registerPaymentClaim(payment, token) {
          var _this30 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this30.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].registerpaymentandclaim, payment, opt).toPromise().then(function (invoice) {
              resolve(invoice);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "registerPrealert",
        value: function registerPrealert(prealert, token) {
          var _this31 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this31.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].registerprealert, prealert, opt).toPromise().then(function (prealert) {
              resolve(prealert);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getObjectbyName",
        value: function getObjectbyName(type, name, token) {
          var _this32 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this32.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].searchtype + type + '/' + name, opt).toPromise().then(function (invoice) {
              resolve(invoice);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getsales",
        value: function getsales(dateIni, dateFin, token) {
          var _this33 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this33.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getsales + dateIni + '/' + dateFin, opt).toPromise().then(function (sales) {
              resolve(sales);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getInvoicesbyClient",
        value: function getInvoicesbyClient(idClient, dateIni, dateFin, token) {
          var _this34 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this34.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getinvoicesbyclient + idClient + '/' + dateIni + '/' + dateFin, opt).toPromise().then(function (sales) {
              resolve(sales);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMarcbyName",
        value: function getMarcbyName(idClient, name, token) {
          var _this35 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this35.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getmarcsbyname + idClient + '/' + name, opt).toPromise().then(function (marc) {
              resolve(marc);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getPrealertActive",
        value: function getPrealertActive(token) {
          var _this36 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this36.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].getprealertactive, opt).toPromise().then(function (marc) {
              resolve(marc);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(email, token) {
          var _this37 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this37.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].sendEmail, email, opt).toPromise().then(function (email) {
              resolve(email);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getinvoicesdraft",
        value: function getinvoicesdraft(token) {
          var _this38 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this38.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].invoicesdrafts, opt).toPromise().then(function (invoice) {
              resolve(invoice);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getcharts",
        value: function getcharts(token) {
          var _this39 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this39.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].charts, opt).toPromise().then(function (invoice) {
              resolve(invoice);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getprealertsdraft",
        value: function getprealertsdraft(token) {
          var _this40 = this;

          var opt = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          return new Promise(function (resolve, reject) {
            _this40.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].prealertdrafts, opt).toPromise().then(function (prealert) {
              resolve(prealert);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "httpPost",
        value: function httpPost(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded") //.set("Authorization", `Bearer ${environment.stripe.sk}`),

          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "httpGet",
        value: function httpGet(url) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded") //.set("Authorization", `Bearer ${environment.stripe.sk}`),

          };
          return this.http.get(url, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element == "object") {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
          } else {
            new_list.push(key + "=" + encodeURIComponent(element));
          }

          return new_list.join("&");
        }
      }]);

      return ApisService;
    }();

    ApisService.UNKNOWN_USER = new AuthInfo(null);
    ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      factory: function ApisService_Factory() {
        return new ApisService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      },
      token: ApisService,
      providedIn: "root"
    });
    /***/
  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module-ngfactory~pages-forgot-forgot-module-ngfactory~pages-login-login-~ea352f7c-es5.js.map