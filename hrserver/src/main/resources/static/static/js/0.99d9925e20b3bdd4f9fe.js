webpackJsonp([0], {
    "+sH/": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            data: function () {
                return {
                    emps: [],
                    keywords: "",
                    fileUploadBtnText: "导入数据",
                    beginDateScope: "",
                    faangledoubleup: "fa-angle-double-up",
                    faangledoubledown: "fa-angle-double-down",
                    dialogTitle: "",
                    multipleSelection: [],
                    depTextColor: "#c0c4cc",
                    nations: [],
                    politics: [],
                    positions: [],
                    joblevels: [],
                    totalCount: -1,
                    currentPage: 1,
                    degrees: [{id: 4, name: "大专"}, {id: 5, name: "本科"}, {id: 6, name: "硕士"}, {
                        id: 7,
                        name: "博士"
                    }, {id: 3, name: "高中"}, {id: 2, name: "初中"}, {id: 1, name: "小学"}, {id: 8, name: "其他"}],
                    deps: [],
                    defaultProps: {label: "name", isLeaf: "leaf", children: "children"},
                    dialogVisible: !1,
                    tableLoading: !1,
                    advanceSearchViewVisible: !1,
                    showOrHidePop: !1,
                    showOrHidePop2: !1,
                    emp: {
                        name: "",
                        gender: "",
                        birthday: "",
                        idCard: "",
                        wedlock: "",
                        nationId: "",
                        nativePlace: "",
                        politicId: "",
                        email: "",
                        phone: "",
                        address: "",
                        departmentId: "",
                        departmentName: "所属部门...",
                        jobLevelId: "",
                        posId: "",
                        engageForm: "",
                        tiptopDegree: "",
                        specialty: "",
                        school: "",
                        beginDate: "",
                        workState: "",
                        workID: "",
                        contractTerm: "",
                        conversionTime: "",
                        notWorkDate: "",
                        beginContract: "",
                        endContract: "",
                        workAge: ""
                    },
                    rules: {
                        name: [{required: !0, message: "必填:姓名", trigger: "blur"}],
                        gender: [{required: !0, message: "必填:性别", trigger: "blur"}],
                        birthday: [{required: !0, message: "必填:出生日期", trigger: "blur"}],
                        idCard: [{
                            required: !0,
                            message: "必填:身份证号码",
                            trigger: "blur"
                        }, {
                            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
                            message: "身份证号码格式不正确",
                            trigger: "blur"
                        }],
                        wedlock: [{required: !0, message: "必填:婚姻状况", trigger: "blur"}],
                        nationId: [{required: !0, message: "必填:民族", trigger: "change"}],
                        nativePlace: [{required: !0, message: "必填:籍贯", trigger: "blur"}],
                        politicId: [{required: !0, message: "必填:政治面貌", trigger: "blur"}],
                        email: [{required: !0, message: "必填:电子邮箱", trigger: "blur"}, {
                            type: "email",
                            message: "邮箱格式不正确",
                            trigger: "blur"
                        }],
                        phone: [{required: !0, message: "必填:电话号码", trigger: "blur"}],
                        address: [{required: !0, message: "必填:联系地址", trigger: "blur"}],
                        departmentId: [{required: !0, message: "必填:部门", trigger: "change"}],
                        jobLevelId: [{required: !0, message: "必填:职称", trigger: "change"}],
                        posId: [{required: !0, message: "必填:职位", trigger: "change"}],
                        engageForm: [{required: !0, message: "必填:聘用形式", trigger: "blur"}],
                        tiptopDegree: [{required: !0, message: "必填:最高学历", trigger: "change"}],
                        specialty: [{required: !0, message: "必填:专业", trigger: "blur"}],
                        workID: [{required: !0, message: "必填:工号", trigger: "blur"}],
                        school: [{required: !0, message: "必填:毕业院校", trigger: "blur"}],
                        beginDate: [{required: !0, message: "必填:入职日期", trigger: "blur"}],
                        conversionTime: [{required: !0, message: "必填:转正日期", trigger: "blur"}],
                        beginContract: [{required: !0, message: "必填:合同起始日期", trigger: "blur"}],
                        endContract: [{required: !0, message: "必填:合同终止日期", trigger: "blur"}],
                        workAge: [{required: !0, message: "必填:工龄", trigger: "blur"}]
                    }
                }
            }, mounted: function () {
                this.initData(), this.loadEmps()
            }, methods: {
                fileUploadSuccess: function (e, t, i) {
                    e && this.$message({
                        type: e.status,
                        message: e.msg
                    }), this.loadEmps(), this.fileUploadBtnText = "导入数据"
                }, fileUploadError: function (e, t, i) {
                    this.$message({type: "error", message: "导入失败!"}), this.fileUploadBtnText = "导入数据"
                }, beforeFileUpload: function (e) {
                    this.fileUploadBtnText = "正在导入"
                }, exportEmps: function () {
                    window.open("/employee/basic/exportEmp", "_parent")
                }, cancelSearch: function () {
                    this.advanceSearchViewVisible = !1, this.emptyEmpData(), this.beginDateScope = "", this.loadEmps()
                }, showAdvanceSearchView: function () {
                    this.advanceSearchViewVisible = !this.advanceSearchViewVisible, this.keywords = "", this.advanceSearchViewVisible || (this.emptyEmpData(), this.beginDateScope = "", this.loadEmps())
                }, handleSelectionChange: function (e) {
                    this.multipleSelection = e
                }, deleteManyEmps: function () {
                    var e = this;
                    this.$confirm("此操作将删除[" + this.multipleSelection.length + "]条数据, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        for (var t = "", i = 0; i < e.multipleSelection.length; i++) t += e.multipleSelection[i].id + ",";
                        e.doDelete(t)
                    }).catch(function () {
                    })
                }, deleteEmp: function (e) {
                    var t = this;
                    this.$confirm("此操作将永久删除[" + e.name + "], 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        t.doDelete(e.id)
                    }).catch(function () {
                    })
                }, doDelete: function (e) {
                    this.tableLoading = !0;
                    var t = this;
                    this.deleteRequest("/employee/basic/emp/" + e).then(function (e) {
                        if (t.tableLoading = !1, e && 200 == e.status) {
                            e.data;
                            _, t.loadEmps()
                        }
                    })
                }, keywordsChange: function (e) {
                    "" == e && this.loadEmps()
                }, searchEmp: function () {
                    this.loadEmps()
                }, currentChange: function (e) {
                    this.currentPage = e, this.loadEmps()
                }, loadEmps: function () {
                    var e = this, t = this;
                    this.tableLoading = !0, this.getRequest("/employee/basic/emp?page=" + this.currentPage + "&size=10&keywords=" + this.keywords + "&politicId=" + this.emp.politicId + "&nationId=" + this.emp.nationId + "&posId=" + this.emp.posId + "&jobLevelId=" + this.emp.jobLevelId + "&engageForm=" + this.emp.engageForm + "&departmentId=" + this.emp.departmentId + "&beginDateScope=" + this.beginDateScope).then(function (i) {
                        if (e.tableLoading = !1, i && 200 == i.status) {
                            var a = i.data;
                            t.emps = a.emps, t.totalCount = a.count
                        }
                    })
                }, addEmp: function (e) {
                    var t = this, i = this;
                    this.$refs[e].validate(function (e) {
                        if (!e) return !1;
                        t.emp.id ? (t.tableLoading = !0, t.putRequest("/employee/basic/emp", t.emp).then(function (e) {
                            if (i.tableLoading = !1, e && 200 == e.status) {
                                e.data;
                                i.dialogVisible = !1, i.emptyEmpData(), i.loadEmps()
                            }
                        })) : (t.tableLoading = !0, t.postRequest("/employee/basic/emp", t.emp).then(function (e) {
                            if (i.tableLoading = !1, e && 200 == e.status) {
                                e.data;
                                _, i.dialogVisible = !1, i.emptyEmpData(), i.loadEmps()
                            }
                        }))
                    })
                }, cancelEidt: function () {
                    this.dialogVisible = !1, this.emptyEmpData()
                }, showDepTree: function () {
                    this.showOrHidePop = !this.showOrHidePop
                }, showDepTree2: function () {
                    this.showOrHidePop2 = !this.showOrHidePop2
                }, handleNodeClick: function (e) {
                    this.emp.departmentName = e.name, this.emp.departmentId = e.id, this.showOrHidePop = !1, this.depTextColor = "#606266"
                }, handleNodeClick2: function (e) {
                    this.emp.departmentName = e.name, this.emp.departmentId = e.id, this.showOrHidePop2 = !1, this.depTextColor = "#606266"
                }, initData: function () {
                    var e = this;
                    this.getRequest("/employee/basic/basicdata").then(function (t) {
                        if (t && 200 == t.status) {
                            var i = t.data;
                            e.nations = i.nations, e.politics = i.politics, e.deps = i.deps, e.positions = i.positions, e.joblevels = i.joblevels, e.emp.workID = i.workID
                        }
                    })
                }, showEditEmpView: function (e) {
                    console.log(e), this.dialogTitle = "编辑员工", this.emp = e, this.emp.birthday = this.formatDate(e.birthday), this.emp.conversionTime = this.formatDate(e.conversionTime), this.emp.beginContract = this.formatDate(e.beginContract), this.emp.endContract = this.formatDate(e.endContract), this.emp.beginDate = this.formatDate(e.beginDate), this.emp.nationId = e.nation.id, this.emp.politicId = e.politicsStatus.id, this.emp.departmentId = e.department.id, this.emp.departmentName = e.department.name, this.emp.jobLevelId = e.jobLevel.id, this.emp.posId = e.position.id, delete this.emp.workAge, delete this.emp.notWorkDate, this.dialogVisible = !0
                }, showAddEmpView: function () {
                    this.dialogTitle = "添加员工", this.dialogVisible = !0;
                    var e = this;
                    this.getRequest("/employee/basic/maxWorkID").then(function (t) {
                        t && 200 == t.status && (e.emp.workID = t.data)
                    })
                }, emptyEmpData: function () {
                    this.emp = {
                        name: "",
                        gender: "",
                        birthday: "",
                        idCard: "",
                        wedlock: "",
                        nationId: "",
                        nativePlace: "",
                        politicId: "",
                        email: "",
                        phone: "",
                        address: "",
                        departmentId: "",
                        departmentName: "所属部门...",
                        jobLevelId: "",
                        posId: "",
                        engageForm: "",
                        tiptopDegree: "",
                        specialty: "",
                        school: "",
                        beginDate: "",
                        workState: "",
                        workID: "",
                        contractTerm: "",
                        conversionTime: "",
                        notWorkDate: "",
                        beginContract: "",
                        endContract: "",
                        workAge: ""
                    }
                }
            }
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("el-container", [i("el-header", {
                    staticStyle: {
                        padding: "0px",
                        display: "flex",
                        "justify-content": "space-between",
                        "align-items": "center"
                    }
                }, [i("div", {staticStyle: {display: "inline"}}, [i("el-input", {
                    staticStyle: {
                        width: "300px",
                        margin: "0px",
                        padding: "0px"
                    },
                    attrs: {
                        placeholder: "通过员工名搜索员工,记得回车哦...",
                        clearable: "",
                        size: "mini",
                        disabled: e.advanceSearchViewVisible,
                        "prefix-icon": "el-icon-search"
                    },
                    on: {change: e.keywordsChange},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.searchEmp(t)
                        }
                    },
                    model: {
                        value: e.keywords, callback: function (t) {
                            e.keywords = t
                        }, expression: "keywords"
                    }
                }), e._v(" "), i("el-button", {
                    staticStyle: {"margin-left": "5px"},
                    attrs: {type: "primary", size: "mini", icon: "el-icon-search"},
                    on: {click: e.searchEmp}
                }, [e._v("搜索\n        ")]), e._v(" "), i("el-button", {
                    staticStyle: {"margin-left": "5px"},
                    attrs: {slot: "reference", type: "primary", size: "mini"},
                    on: {click: e.showAdvanceSearchView},
                    slot: "reference"
                }, [i("i", {
                    staticClass: "fa fa-lg",
                    class: [e.advanceSearchViewVisible ? e.faangledoubleup : e.faangledoubledown],
                    staticStyle: {"margin-right": "5px"}
                }), e._v("高级搜索\n        ")])], 1), e._v(" "), i("div", {
                    staticStyle: {
                        "margin-left": "5px",
                        "margin-right": "20px",
                        display: "inline"
                    }
                }, [i("el-upload", {
                    staticStyle: {display: "inline"},
                    attrs: {
                        "show-file-list": !1,
                        accept: "application/vnd.ms-excel",
                        action: "/employee/basic/importEmp",
                        "on-success": e.fileUploadSuccess,
                        "on-error": e.fileUploadError,
                        disabled: "正在导入" == e.fileUploadBtnText,
                        "before-upload": e.beforeFileUpload
                    }
                }, [i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "success",
                        loading: "正在导入" == e.fileUploadBtnText
                    }
                }, [i("i", {
                    staticClass: "fa fa-lg fa-level-up",
                    staticStyle: {"margin-right": "5px"}
                }), e._v(e._s(e.fileUploadBtnText) + "\n          ")])], 1), e._v(" "), i("el-button", {
                    attrs: {
                        type: "success",
                        size: "mini"
                    }, on: {click: e.exportEmps}
                }, [i("i", {
                    staticClass: "fa fa-lg fa-level-down",
                    staticStyle: {"margin-right": "5px"}
                }), e._v("导出数据\n        ")]), e._v(" "), i("el-button", {
                    attrs: {
                        type: "primary",
                        size: "mini",
                        icon: "el-icon-plus"
                    }, on: {click: e.showAddEmpView}
                }, [e._v("\n          添加员工\n        ")])], 1)]), e._v(" "), i("el-main", {
                    staticStyle: {
                        "padding-left": "0px",
                        "padding-top": "0px"
                    }
                }, [i("div", [i("transition", {attrs: {name: "slide-fade"}}, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.advanceSearchViewVisible,
                        expression: "advanceSearchViewVisible"
                    }],
                    staticStyle: {
                        "margin-bottom": "10px",
                        border: "1px",
                        "border-radius": "5px",
                        "border-style": "solid",
                        padding: "5px 0px 5px 0px",
                        "box-sizing": "border-box",
                        "border-color": "#20a0ff"
                    }
                }, [i("el-row", [i("el-col", {attrs: {span: 5}}, [e._v("\n                政治面貌:\n                "), i("el-select", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", placeholder: "政治面貌"},
                    model: {
                        value: e.emp.politicId, callback: function (t) {
                            e.$set(e.emp, "politicId", t)
                        }, expression: "emp.politicId"
                    }
                }, e._l(e.politics, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("el-col", {attrs: {span: 4}}, [e._v("\n                民族:\n                "), i("el-select", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", placeholder: "请选择民族"},
                    model: {
                        value: e.emp.nationId, callback: function (t) {
                            e.$set(e.emp, "nationId", t)
                        }, expression: "emp.nationId"
                    }
                }, e._l(e.nations, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("el-col", {attrs: {span: 4}}, [e._v("\n                职位:\n                "), i("el-select", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", placeholder: "请选择职位"},
                    model: {
                        value: e.emp.posId, callback: function (t) {
                            e.$set(e.emp, "posId", t)
                        }, expression: "emp.posId"
                    }
                }, e._l(e.positions, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("el-col", {attrs: {span: 4}}, [e._v("\n                职称:\n                "), i("el-select", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", placeholder: "请选择职称"},
                    model: {
                        value: e.emp.jobLevelId, callback: function (t) {
                            e.$set(e.emp, "jobLevelId", t)
                        }, expression: "emp.jobLevelId"
                    }
                }, e._l(e.joblevels, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("el-col", {attrs: {span: 7}}, [e._v("\n                聘用形式:\n                "), i("el-radio-group", {
                    model: {
                        value: e.emp.engageForm,
                        callback: function (t) {
                            e.$set(e.emp, "engageForm", t)
                        },
                        expression: "emp.engageForm"
                    }
                }, [i("el-radio", {attrs: {label: "劳动合同"}}, [e._v("劳动合同")]), e._v(" "), i("el-radio", {
                    staticStyle: {"margin-left": "15px"},
                    attrs: {label: "劳务合同"}
                }, [e._v("劳务合同")])], 1)], 1)], 1), e._v(" "), i("el-row", {staticStyle: {"margin-top": "10px"}}, [i("el-col", {attrs: {span: 5}}, [e._v("\n                所属部门:\n                "), i("el-popover", {
                    attrs: {
                        placement: "right",
                        title: "请选择部门",
                        trigger: "manual"
                    }, model: {
                        value: e.showOrHidePop2, callback: function (t) {
                            e.showOrHidePop2 = t
                        }, expression: "showOrHidePop2"
                    }
                }, [i("el-tree", {
                    attrs: {
                        data: e.deps,
                        "default-expand-all": !0,
                        props: e.defaultProps,
                        "expand-on-click-node": !1
                    }, on: {"node-click": e.handleNodeClick2}
                }), e._v(" "), i("div", {
                    staticStyle: {
                        width: "130px",
                        height: "26px",
                        display: "inline-flex",
                        "font-size": "13px",
                        border: "1px",
                        "border-radius": "5px",
                        "border-style": "solid",
                        "padding-left": "13px",
                        "box-sizing": "border-box",
                        "border-color": "#dcdfe6",
                        cursor: "pointer",
                        "align-items": "center"
                    },
                    style: {color: e.depTextColor},
                    attrs: {slot: "reference"},
                    on: {click: e.showDepTree2},
                    slot: "reference"
                }, [e._v(e._s(e.emp.departmentName) + "\n                  ")])], 1)], 1), e._v(" "), i("el-col", {attrs: {span: 10}}, [e._v("\n                入职日期:\n                "), i("el-date-picker", {
                    attrs: {
                        "unlink-panels": "",
                        size: "mini",
                        type: "daterange",
                        "value-format": "yyyy-MM-dd",
                        "range-separator": "至",
                        "start-placeholder": "开始日期",
                        "end-placeholder": "结束日期"
                    }, model: {
                        value: e.beginDateScope, callback: function (t) {
                            e.beginDateScope = t
                        }, expression: "beginDateScope"
                    }
                })], 1), e._v(" "), i("el-col", {attrs: {span: 5, offset: 4}}, [i("el-button", {
                    attrs: {size: "mini"},
                    on: {click: e.cancelSearch}
                }, [e._v("取消")]), e._v(" "), i("el-button", {
                    attrs: {
                        icon: "el-icon-search",
                        type: "primary",
                        size: "mini"
                    }, on: {click: e.searchEmp}
                }, [e._v("搜索")])], 1)], 1)], 1)]), e._v(" "), i("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.tableLoading,
                        expression: "tableLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {data: e.emps, border: "", stripe: "", size: "mini"},
                    on: {"selection-change": e.handleSelectionChange}
                }, [i("el-table-column", {
                    attrs: {
                        type: "selection",
                        align: "left",
                        width: "30"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "name",
                        align: "left",
                        fixed: "",
                        label: "姓名",
                        width: "90"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "workID",
                        width: "85",
                        align: "left",
                        label: "工号"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "gender",
                        label: "性别",
                        width: "50"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "85", align: "left", label: "出生日期"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.birthday)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "idCard",
                        width: "150",
                        align: "left",
                        label: "身份证号码"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "wedlock",
                        width: "70",
                        label: "婚姻状况"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "50",
                        prop: "nation.name",
                        label: "民族"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "nativePlace",
                        width: "80",
                        label: "籍贯"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "politicsStatus.name",
                        label: "政治面貌"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "email",
                        width: "180",
                        align: "left",
                        label: "电子邮件"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "phone",
                        width: "100",
                        label: "电话号码"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "address",
                        width: "220",
                        align: "left",
                        label: "联系地址"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "department.name",
                        align: "left",
                        width: "100",
                        label: "所属部门"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "100",
                        align: "left",
                        prop: "position.name",
                        label: "职位"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "jobLevel.name",
                        width: "100",
                        align: "left",
                        label: "职称"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "engageForm",
                        label: "聘用形式"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "85", align: "left", label: "入职日期"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.beginDate)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "85", align: "left", label: "转正日期"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.conversionTime)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "95", align: "left", label: "合同起始日期"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.beginContract)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "95", align: "left", label: "合同截至日期"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.endContract)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {align: "left", width: "70", label: "合同期限"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.contractTerm) + "年")]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        align: "left",
                        prop: "tiptopDegree",
                        label: "最高学历"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {fixed: "right", label: "操作", width: "195"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                staticStyle: {padding: "3px 4px 3px 4px", margin: "2px"},
                                attrs: {size: "mini"},
                                on: {
                                    click: function (i) {
                                        e.showEditEmpView(t.row)
                                    }
                                }
                            }, [e._v("编辑\n              ")]), e._v(" "), i("el-button", {
                                staticStyle: {
                                    padding: "3px 4px 3px 4px",
                                    margin: "2px"
                                }, attrs: {type: "primary", size: "mini"}
                            }, [e._v("查看高级资料\n              ")]), e._v(" "), i("el-button", {
                                staticStyle: {
                                    padding: "3px 4px 3px 4px",
                                    margin: "2px"
                                }, attrs: {type: "danger", size: "mini"}, on: {
                                    click: function (i) {
                                        e.deleteEmp(t.row)
                                    }
                                }
                            }, [e._v("删除\n              ")])]
                        }
                    }])
                })], 1), e._v(" "), i("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "space-between",
                        margin: "2px"
                    }
                }, [e.emps.length > 0 ? i("el-button", {
                    attrs: {
                        type: "danger",
                        size: "mini",
                        disabled: 0 == e.multipleSelection.length
                    }, on: {click: e.deleteManyEmps}
                }, [e._v("批量删除\n          ")]) : e._e(), e._v(" "), i("el-pagination", {
                    attrs: {
                        background: "",
                        "page-size": 10,
                        "current-page": e.currentPage,
                        layout: "prev, pager, next",
                        total: e.totalCount
                    }, on: {"current-change": e.currentChange}
                })], 1)], 1)])], 1), e._v(" "), i("el-form", {
                    ref: "addEmpForm",
                    staticStyle: {margin: "0px", padding: "0px"},
                    attrs: {model: e.emp, rules: e.rules}
                }, [i("div", {staticStyle: {"text-align": "left"}}, [i("el-dialog", {
                    staticStyle: {padding: "0px"},
                    attrs: {title: e.dialogTitle, "close-on-click-modal": !1, visible: e.dialogVisible, width: "77%"},
                    on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }
                    }
                }, [i("el-row", [i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "姓名:",
                        prop: "name"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "150px"},
                    attrs: {"prefix-icon": "el-icon-edit", size: "mini", placeholder: "请输入员工姓名"},
                    model: {
                        value: e.emp.name, callback: function (t) {
                            e.$set(e.emp, "name", t)
                        }, expression: "emp.name"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 5}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "性别:",
                        prop: "gender"
                    }
                }, [i("el-radio-group", {
                    model: {
                        value: e.emp.gender, callback: function (t) {
                            e.$set(e.emp, "gender", t)
                        }, expression: "emp.gender"
                    }
                }, [i("el-radio", {attrs: {label: "男"}}, [e._v("男")]), e._v(" "), i("el-radio", {
                    staticStyle: {"margin-left": "15px"},
                    attrs: {label: "女"}
                }, [e._v("女")])], 1)], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "出生日期:",
                        prop: "birthday"
                    }
                }, [i("el-date-picker", {
                    staticStyle: {width: "150px"},
                    attrs: {size: "mini", "value-format": "yyyy-MM-dd HH:mm:ss", type: "date", placeholder: "出生日期"},
                    model: {
                        value: e.emp.birthday, callback: function (t) {
                            e.$set(e.emp, "birthday", t)
                        }, expression: "emp.birthday"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 7}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "政治面貌:",
                        prop: "politicId"
                    }
                }, [i("el-select", {
                    staticStyle: {width: "200px"},
                    attrs: {size: "mini", placeholder: "政治面貌"},
                    model: {
                        value: e.emp.politicId, callback: function (t) {
                            e.$set(e.emp, "politicId", t)
                        }, expression: "emp.politicId"
                    }
                }, e._l(e.politics, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1)], 1)])], 1), e._v(" "), i("el-row", [i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "民族:",
                        prop: "nationId"
                    }
                }, [i("el-select", {
                    staticStyle: {width: "150px"},
                    attrs: {size: "mini", placeholder: "请选择民族"},
                    model: {
                        value: e.emp.nationId, callback: function (t) {
                            e.$set(e.emp, "nationId", t)
                        }, expression: "emp.nationId"
                    }
                }, e._l(e.nations, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 5}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "籍贯:",
                        prop: "nativePlace"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "120px"},
                    attrs: {size: "mini", placeholder: "员工籍贯"},
                    model: {
                        value: e.emp.nativePlace, callback: function (t) {
                            e.$set(e.emp, "nativePlace", t)
                        }, expression: "emp.nativePlace"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "电子邮箱:",
                        prop: "email"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "150px"},
                    attrs: {"prefix-icon": "el-icon-message", size: "mini", placeholder: "电子邮箱地址..."},
                    model: {
                        value: e.emp.email, callback: function (t) {
                            e.$set(e.emp, "email", t)
                        }, expression: "emp.email"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 7}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "联系地址:",
                        prop: "address"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {"prefix-icon": "el-icon-edit", size: "mini", placeholder: "联系地址..."},
                    model: {
                        value: e.emp.address, callback: function (t) {
                            e.$set(e.emp, "address", t)
                        }, expression: "emp.address"
                    }
                })], 1)], 1)])], 1), e._v(" "), i("el-row", [i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "职位:",
                        prop: "posId"
                    }
                }, [i("el-select", {
                    staticStyle: {width: "150px"},
                    attrs: {size: "mini", placeholder: "请选择职位"},
                    model: {
                        value: e.emp.posId, callback: function (t) {
                            e.$set(e.emp, "posId", t)
                        }, expression: "emp.posId"
                    }
                }, e._l(e.positions, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 5}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "职称:",
                        prop: "jobLevelId"
                    }
                }, [i("el-select", {
                    staticStyle: {width: "120px"},
                    attrs: {size: "mini", placeholder: "请选择职称"},
                    model: {
                        value: e.emp.jobLevelId, callback: function (t) {
                            e.$set(e.emp, "jobLevelId", t)
                        }, expression: "emp.jobLevelId"
                    }
                }, e._l(e.joblevels, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "所属部门:",
                        prop: "departmentId"
                    }
                }, [i("el-popover", {
                    attrs: {placement: "right", title: "请选择部门", trigger: "manual"},
                    model: {
                        value: e.showOrHidePop, callback: function (t) {
                            e.showOrHidePop = t
                        }, expression: "showOrHidePop"
                    }
                }, [i("el-tree", {
                    attrs: {
                        data: e.deps,
                        "default-expand-all": !0,
                        props: e.defaultProps,
                        "expand-on-click-node": !1
                    }, on: {"node-click": e.handleNodeClick}
                }), e._v(" "), i("div", {
                    staticStyle: {
                        width: "150px",
                        height: "26px",
                        display: "inline-flex",
                        "font-size": "13px",
                        border: "1px",
                        "border-radius": "5px",
                        "border-style": "solid",
                        "padding-left": "13px",
                        "box-sizing": "border-box",
                        "border-color": "#dcdfe6",
                        cursor: "pointer",
                        "align-items": "center"
                    }, style: {color: e.depTextColor}, attrs: {slot: "reference"}, on: {
                        click: function (t) {
                            return "button" in t || !e._k(t.keyCode, "left", 37, t.key) ? "button" in t && 0 !== t.button ? null : void e.showDepTree(t) : null
                        }
                    }, slot: "reference"
                }, [e._v(e._s(e.emp.departmentName) + "\n                  ")])], 1)], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 7}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "电话号码:",
                        prop: "phone"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {"prefix-icon": "el-icon-phone", size: "mini", placeholder: "电话号码..."},
                    model: {
                        value: e.emp.phone, callback: function (t) {
                            e.$set(e.emp, "phone", t)
                        }, expression: "emp.phone"
                    }
                })], 1)], 1)])], 1), e._v(" "), i("el-row", [i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "工号:",
                        prop: "workID"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "150px"},
                    attrs: {disabled: "", size: "mini", placeholder: "员工工号..."},
                    model: {
                        value: e.emp.workID, callback: function (t) {
                            e.$set(e.emp, "workID", t)
                        }, expression: "emp.workID"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 5}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "学历:",
                        prop: "tiptopDegree"
                    }
                }, [i("el-select", {
                    staticStyle: {width: "120px"},
                    attrs: {size: "mini", placeholder: "最高学历"},
                    model: {
                        value: e.emp.tiptopDegree, callback: function (t) {
                            e.$set(e.emp, "tiptopDegree", t)
                        }, expression: "emp.tiptopDegree"
                    }
                }, e._l(e.degrees, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.name}})
                }))], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "毕业院校:",
                        prop: "school"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "150px"},
                    attrs: {"prefix-icon": "el-icon-edit", size: "mini", placeholder: "毕业院校名称"},
                    model: {
                        value: e.emp.school, callback: function (t) {
                            e.$set(e.emp, "school", t)
                        }, expression: "emp.school"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 7}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "专业名称:",
                        prop: "specialty"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {"prefix-icon": "el-icon-edit", size: "mini", placeholder: "专业名称"},
                    model: {
                        value: e.emp.specialty, callback: function (t) {
                            e.$set(e.emp, "specialty", t)
                        }, expression: "emp.specialty"
                    }
                })], 1)], 1)])], 1), e._v(" "), i("el-row", [i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "入职日期:",
                        prop: "beginDate"
                    }
                }, [i("el-date-picker", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", type: "date", "value-format": "yyyy-MM-dd HH:mm:ss", placeholder: "入职日期"},
                    model: {
                        value: e.emp.beginDate, callback: function (t) {
                            e.$set(e.emp, "beginDate", t)
                        }, expression: "emp.beginDate"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "转正日期:",
                        prop: "conversionTime"
                    }
                }, [i("el-date-picker", {
                    staticStyle: {width: "130px"},
                    attrs: {size: "mini", "value-format": "yyyy-MM-dd HH:mm:ss", type: "date", placeholder: "转正日期"},
                    model: {
                        value: e.emp.conversionTime, callback: function (t) {
                            e.$set(e.emp, "conversionTime", t)
                        }, expression: "emp.conversionTime"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "合同起始日期:",
                        prop: "beginContract"
                    }
                }, [i("el-date-picker", {
                    staticStyle: {width: "135px"},
                    attrs: {size: "mini", "value-format": "yyyy-MM-dd HH:mm:ss", type: "date", placeholder: "合同起始日期"},
                    model: {
                        value: e.emp.beginContract, callback: function (t) {
                            e.$set(e.emp, "beginContract", t)
                        }, expression: "emp.beginContract"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "合同终止日期:",
                        prop: "endContract"
                    }
                }, [i("el-date-picker", {
                    staticStyle: {width: "135px"},
                    attrs: {"value-format": "yyyy-MM-dd HH:mm:ss", size: "mini", type: "date", placeholder: "合同终止日期"},
                    model: {
                        value: e.emp.endContract, callback: function (t) {
                            e.$set(e.emp, "endContract", t)
                        }, expression: "emp.endContract"
                    }
                })], 1)], 1)])], 1), e._v(" "), i("el-row", [i("el-col", {attrs: {span: 8}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "身份证号码:",
                        prop: "idCard"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "180px"},
                    attrs: {"prefix-icon": "el-icon-edit", size: "mini", placeholder: "请输入员工身份证号码..."},
                    model: {
                        value: e.emp.idCard, callback: function (t) {
                            e.$set(e.emp, "idCard", t)
                        }, expression: "emp.idCard"
                    }
                })], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 8}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "聘用形式:",
                        prop: "engageForm"
                    }
                }, [i("el-radio-group", {
                    model: {
                        value: e.emp.engageForm, callback: function (t) {
                            e.$set(e.emp, "engageForm", t)
                        }, expression: "emp.engageForm"
                    }
                }, [i("el-radio", {attrs: {label: "劳动合同"}}, [e._v("劳动合同")]), e._v(" "), i("el-radio", {
                    staticStyle: {"margin-left": "15px"},
                    attrs: {label: "劳务合同"}
                }, [e._v("劳务合同")])], 1)], 1)], 1)]), e._v(" "), i("el-col", {attrs: {span: 8}}, [i("div", [i("el-form-item", {
                    attrs: {
                        label: "婚姻状况:",
                        prop: "wedlock"
                    }
                }, [i("el-radio-group", {
                    model: {
                        value: e.emp.wedlock, callback: function (t) {
                            e.$set(e.emp, "wedlock", t)
                        }, expression: "emp.wedlock"
                    }
                }, [i("el-radio", {attrs: {label: "已婚"}}, [e._v("已婚")]), e._v(" "), i("el-radio", {
                    staticStyle: {"margin-left": "15px"},
                    attrs: {label: "未婚"}
                }, [e._v("未婚")]), e._v(" "), i("el-radio", {
                    staticStyle: {"margin-left": "15px"},
                    attrs: {label: "离异"}
                }, [e._v("离异")])], 1)], 1)], 1)])], 1), e._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {size: "mini"},
                    on: {click: e.cancelEidt}
                }, [e._v("取 消")]), e._v(" "), i("el-button", {
                    attrs: {size: "mini", type: "primary"},
                    on: {
                        click: function (t) {
                            e.addEmp("addEmpForm")
                        }
                    }
                }, [e._v("确 定")])], 1)], 1)], 1)])], 1)
            }, staticRenderFns: []
        };
        var n = i("VU/8")(a, l, !1, function (e) {
            i("YAMm")
        }, null, null);
        t.default = n.exports
    }, "/LNZ": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            mounted: function () {
                this.loadTableData()
            }, methods: {
                updatePosNameExec: function () {
                    var e = this;
                    if (this.isNotNullORBlank(this.updatePosName)) {
                        this.loading = !0;
                        var t = this;
                        this.putRequest("position" == this.state ? "/system/basic/position" : "/system/basic/joblevel", {
                            name: this.updatePosName,
                            id: this.updatePosId,
                            titleLevel: this.updateTitleLevel
                        }).then(function (i) {
                            if (t.loading = !1, i && 200 == i.status) {
                                e.dialogVisible = !1;
                                i.data;
                                _, t.loadTableData()
                            }
                        })
                    } else this.$message.warning("position" == this.state ? "职位名称不能为空!" : "职称名称不能为空!")
                }, deleteMany: function () {
                    var e = this, t = this;
                    this.$confirm("删除" + this.multipleSelection.length + "条数据, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        var e = "";
                        t.multipleSelection.forEach(function (t) {
                            e = e + t.id + ","
                        }), t.doDelete(e)
                    }).catch(function () {
                        e.$message({type: "info", message: "已取消删除"})
                    })
                }, addPosition: function () {
                    if (this.isNotNullORBlank(this.positionName)) if ("jobtitle" != this.state || this.isNotNullORBlank(this.titleLevel)) {
                        var e = this;
                        this.loading = !0, this.postRequest("position" == this.state ? "/system/basic/position" : "/system/basic/joblevel", {
                            name: this.positionName,
                            titleLevel: this.titleLevel
                        }).then(function (t) {
                            if (e.loading = !1, t && 200 == t.status) {
                                t.data;
                                _, e.loadTableData(), e.positionName = "", e.titleLevel = ""
                            }
                        })
                    } else this.$message.warning("请选择职称级别!"); else this.$message.warning("position" == this.state ? "职位名称不能为空!" : "职称名称不能为空!")
                }, handleSelectionChange: function (e) {
                    this.multipleSelection = e
                }, handleEdit: function (e, t) {
                    this.updatePosName = t.name, this.updatePosId = t.id, this.updateTitleLevel = t.titleLevel, this.dialogVisible = !0
                }, handleDelete: function (e, t) {
                    var i = this, a = this;
                    this.$confirm("删除[" + t.name + "], 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        a.doDelete(t.id)
                    }).catch(function () {
                        i.$message({type: "info", message: "已取消删除"})
                    })
                }, doDelete: function (e) {
                    var t = this;
                    t.loading = !0;
                    var i = "position" == this.state ? "/system/basic/position/" : "/system/basic/joblevel/";
                    this.deleteRequest(i + e).then(function (e) {
                        t.loading = !1, e && 200 == e.status && t.loadTableData()
                    })
                }, loadTableData: function () {
                    var e = this;
                    this.loading = !0, this.getRequest("position" == this.state ? "/system/basic/positions" : "/system/basic/joblevels").then(function (t) {
                        e.loading = !1, t && 200 == t.status && (e.posData = t.data)
                    })
                }
            }, data: function () {
                return {
                    positionName: "",
                    updatePosName: "",
                    updateTitleLevel: "",
                    titleLevel: "",
                    updatePosId: -1,
                    loading: !1,
                    dialogVisible: !1,
                    multipleSelection: [],
                    type: [],
                    titleLevels: ["正高级", "副高级", "中级", "初级", "员级"],
                    nameLabelName: "position" == this.state ? "职位名称" : "职称名称",
                    posData: []
                }
            }, props: ["state"]
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("div", {staticStyle: {"text-align": "left"}}, [i("el-input", {
                    staticStyle: {width: "300px"},
                    attrs: {
                        placeholder: "position" == e.state ? "添加职位..." : "添加职称...",
                        size: "mini",
                        "prefix-icon": "el-icon-plus"
                    },
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.addPosition(t)
                        }
                    },
                    model: {
                        value: e.positionName, callback: function (t) {
                            e.positionName = t
                        }, expression: "positionName"
                    }
                }), e._v(" "), "jobtitle" == e.state ? i("el-select", {
                    attrs: {size: "mini", placeholder: "职称等级"},
                    model: {
                        value: e.titleLevel, callback: function (t) {
                            e.titleLevel = t
                        }, expression: "titleLevel"
                    }
                }, e._l(e.titleLevels, function (e) {
                    return i("el-option", {key: e, attrs: {label: e, value: e}})
                })) : e._e(), e._v(" "), i("el-button", {
                    attrs: {type: "primary", icon: "el-icon-plus", size: "mini"},
                    on: {click: e.addPosition}
                }, [e._v("添加")])], 1), e._v(" "), i("div", {staticStyle: {"margin-top": "10px"}}, [i("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticStyle: {width: "80%"},
                    attrs: {data: e.posData, size: "mini", stripe: "", border: ""},
                    on: {"selection-change": e.handleSelectionChange}
                }, [i("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "55",
                        align: "left"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "编号",
                        width: "80",
                        align: "left"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "position" == e.state ? "职位名称" : "职称名称",
                        width: "180",
                        align: "left"
                    }
                }), e._v(" "), "jobtitle" == e.state ? i("el-table-column", {
                    attrs: {
                        prop: "titleLevel",
                        label: "职称级别",
                        width: "180",
                        align: "left"
                    }
                }) : e._e(), e._v(" "), i("el-table-column", {
                    attrs: {width: "180", label: "创建时间", align: "left"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.createDate)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {label: "操作", align: "left"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini"}, on: {
                                    click: function (i) {
                                        e.handleEdit(t.$index, t.row)
                                    }
                                }
                            }, [e._v("编辑\n          ")]), e._v(" "), i("el-button", {
                                attrs: {
                                    size: "mini",
                                    type: "danger"
                                }, on: {
                                    click: function (i) {
                                        e.handleDelete(t.$index, t.row)
                                    }
                                }
                            }, [e._v("删除\n          ")])]
                        }
                    }])
                })], 1)], 1), e._v(" "), i("div", {
                    staticStyle: {
                        "text-align": "left",
                        "margin-top": "10px"
                    }
                }, [e.posData.length > 0 ? i("el-button", {
                    attrs: {
                        type: "danger",
                        size: "mini",
                        disabled: 0 == e.multipleSelection.length
                    }, on: {click: e.deleteMany}
                }, [e._v("批量删除\n    ")]) : e._e()], 1), e._v(" "), i("div", {staticStyle: {"text-align": "left"}}, [i("el-dialog", {
                    attrs: {
                        title: "position" == e.state ? "编辑职位名称" : "编辑职称",
                        visible: e.dialogVisible,
                        width: "25%"
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }
                    }
                }, [i("el-input", {
                    attrs: {size: "mini", placeholder: "请输入新的职位名称..."},
                    model: {
                        value: e.updatePosName, callback: function (t) {
                            e.updatePosName = t
                        }, expression: "updatePosName"
                    }
                }), e._v(" "), "jobtitle" == e.state ? i("el-select", {
                    staticStyle: {"margin-top": "10px"},
                    attrs: {size: "mini", placeholder: "职称等级"},
                    model: {
                        value: e.updateTitleLevel, callback: function (t) {
                            e.updateTitleLevel = t
                        }, expression: "updateTitleLevel"
                    }
                }, e._l(e.titleLevels, function (e) {
                    return i("el-option", {key: e, attrs: {label: e, value: e}})
                })) : e._e(), e._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {size: "mini"}, on: {
                        click: function (t) {
                            e.dialogVisible = !1
                        }
                    }
                }, [e._v("取 消")]), e._v(" "), i("el-button", {
                    attrs: {type: "primary", size: "mini"},
                    on: {click: e.updatePosNameExec}
                }, [e._v("确 定")])], 1)], 1)], 1)])
            }, staticRenderFns: []
        }, n = i("VU/8")(a, l, !1, null, null, null);
        t.default = n.exports
    }, "2eoi": function (e, t, i) {
        var a = {
            "./Home.vue": "lO7g",
            "./Login.vue": "xJsL",
            "./chat/Chat.vue": "T5Y6",
            "./chat/FriendChat.vue": "ngyR",
            "./chat/Notification.vue": "Gpj+",
            "./emp/EmpAdv.vue": "ABUp",
            "./emp/EmpBasic.vue": "+sH/",
            "./personnel/PerEc.vue": "GZY3",
            "./personnel/PerEmp.vue": "XGB5",
            "./personnel/PerMv.vue": "F1RE",
            "./personnel/PerSalary.vue": "nSLl",
            "./personnel/PerTrain.vue": "K5YU",
            "./salary/SalMonth.vue": "R27X",
            "./salary/SalSearch.vue": "mNON",
            "./salary/SalSob.vue": "VnTu",
            "./salary/SalSobCfg.vue": "YbFX",
            "./salary/SalTable.vue": "tQt2",
            "./statistics/StaAll.vue": "4/RD",
            "./statistics/StaPers.vue": "97Ts",
            "./statistics/StaRecord.vue": "Tlrr",
            "./statistics/StaScore.vue": "r3HF",
            "./system/SysBasic.vue": "fc7a",
            "./system/SysCfg.vue": "ubks",
            "./system/SysData.vue": "UK/j",
            "./system/SysHr.vue": "ewEk",
            "./system/SysInit.vue": "agXO",
            "./system/SysLog.vue": "ZDkW",
            "./system/basic/DepMana.vue": "FvOz",
            "./system/basic/ECMana.vue": "5xQo",
            "./system/basic/JobTitleMana.vue": "c98W",
            "./system/basic/MenuRole.vue": "eLaH",
            "./system/basic/PosMana.vue": "/LNZ"
        };

        function l(e) {
            return i(n(e))
        }

        function n(e) {
            var t = a[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }

        l.keys = function () {
            return Object.keys(a)
        }, l.resolve = n, e.exports = l, l.id = "2eoi"
    }, "4/RD": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    综合信息统计\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, "4MSD": function (e, t) {
    }, "5xQo": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("奖惩规则")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, "97Ts": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    人事信息统计\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, ABUp: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("高级资料")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, F1RE: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("员工调动")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, FvOz: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i("bOdI"), l = i.n(a), n = {
            data: function () {
                return {
                    keywords: "",
                    depName: "",
                    treeLoading: !1,
                    dialogVisible: !1,
                    allDeps: [],
                    pDep: "",
                    treeData: [],
                    defaultProps: {label: "name", isLeaf: "leaf", children: "children"}
                }
            }, mounted: function () {
                this.treeLoading = !0, this.loadTreeData()
            }, watch: {
                keywords: function (e) {
                    this.$refs.tree.filter(e)
                }
            }, methods: {
                filterNode: function (e, t) {
                    return !e || -1 !== t.name.indexOf(e)
                }, loadTreeData: function () {
                    var e = this;
                    this.getRequest("/system/basic/dep/-1").then(function (t) {
                        e.treeLoading = !1, t && 200 == t.status && (e.treeData = t.data)
                    })
                }, setDataToTree: function (e, t, i) {
                    for (var a = 0; a < e.length; a++) {
                        var l = e[a];
                        if (l.id == t) return void (e[a].children = e[a].children.concat(i));
                        this.setDataToTree(l.children, t, i)
                    }
                }, addDep: function () {
                    var e = this;
                    this.dialogVisible = !1, this.treeLoading = !0, this.postRequest("/system/basic/dep", {
                        name: this.depName,
                        parentId: this.pDep
                    }).then(function (t) {
                        if (e.treeLoading = !1, t && 200 == t.status) {
                            var i = t.data;
                            e.depName = "", e.setDataToTree(e.treeData, e.pDep, i.msg)
                        }
                    })
                }, loadAllDeps: function () {
                    var e = this;
                    this.getRequest("/system/basic/deps").then(function (t) {
                        t && 200 == t.status && (e.allDeps = t.data)
                    })
                }, showAddDepView: function (e, t) {
                    this.loadAllDeps(), this.dialogVisible = !0, this.pDep = e.id, t.stopPropagation()
                }, deleteDep: function (e, t) {
                    var i = this;
                    e.children.length > 0 ? this.$message({
                        message: "该部门下尚有其他部门，不能被删除!",
                        type: "warning"
                    }) : this.$confirm("删除[" + e.name + "]部门, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        i.treeLoading = !0, i.deleteRequest("/system/basic/dep/" + e.id).then(function (t) {
                            if (i.treeLoading = !1, t && 200 == t.status) {
                                t.data;
                                i.deleteLocalDep(i.treeData, e)
                            }
                        })
                    }).catch(function () {
                        i.$message({type: "info", message: "已取消删除"})
                    }), t.stopPropagation()
                }, deleteLocalDep: function (e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        if (a.id == t.id) return void e.splice(i, 1);
                        this.deleteLocalDep(a.children, t)
                    }
                }, renderContent: function (e, t) {
                    var i, a, n = this, s = t.node, r = t.data;
                    t.store;
                    return e("span", {style: "flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"}, [e("span", null, [e("span", null, [s.label])]), e("span", null, [e("el-button", (i = {
                        style: "font-size: 12px;",
                        attrs: {type: "primary", size: "mini"}
                    }, l()(i, "style", "padding:3px"), l()(i, "on", {
                        click: function () {
                            return n.showAddDepView(r, event)
                        }
                    }), i), ["添加部门"]), e("el-button", (a = {
                        style: "font-size: 12px;",
                        attrs: {type: "danger", size: "mini"}
                    }, l()(a, "style", "padding:3px"), l()(a, "on", {
                        click: function () {
                            return n.deleteDep(r, event)
                        }
                    }), a), ["删除部门"])])])
                }
            }
        }, s = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("div", {staticStyle: {"text-align": "left"}}, [i("el-input", {
                    staticStyle: {
                        width: "500px",
                        margin: "0px",
                        padding: "0px"
                    },
                    attrs: {placeholder: "输入部门名称搜索部门...", size: "mini", "prefix-icon": "el-icon-search"},
                    model: {
                        value: e.keywords, callback: function (t) {
                            e.keywords = t
                        }, expression: "keywords"
                    }
                })], 1), e._v(" "), i("div", [i("el-tree", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.treeLoading,
                        expression: "treeLoading"
                    }],
                    ref: "tree",
                    staticStyle: {width: "500px", "margin-top": "10px"},
                    attrs: {
                        props: e.defaultProps,
                        data: e.treeData,
                        "filter-node-method": e.filterNode,
                        "render-content": e.renderContent
                    }
                }), e._v(" "), i("div", {staticStyle: {"text-align": "left"}}, [i("el-dialog", {
                    attrs: {
                        title: "添加部门",
                        visible: e.dialogVisible,
                        width: "25%"
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }
                    }
                }, [i("div", [i("span", [e._v("上级部门")]), e._v(" "), i("el-select", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请选择", size: "mini"},
                    model: {
                        value: e.pDep, callback: function (t) {
                            e.pDep = t
                        }, expression: "pDep"
                    }
                }, e._l(e.allDeps, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("div", {staticStyle: {"margin-top": "10px"}}, [i("span", [e._v("部门名称")]), e._v(" "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {size: "mini", placeholder: "请输入部门名称..."},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.addDep(t)
                        }
                    },
                    model: {
                        value: e.depName, callback: function (t) {
                            e.depName = t
                        }, expression: "depName"
                    }
                })], 1), e._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {size: "small"}, on: {
                        click: function (t) {
                            e.dialogVisible = !1
                        }
                    }
                }, [e._v("取消")]), e._v(" "), i("el-button", {
                    attrs: {size: "small", type: "primary"},
                    on: {click: e.addDep}
                }, [e._v("添加")])], 1)])], 1)], 1)])
            }, staticRenderFns: []
        }, r = i("VU/8")(n, s, !1, null, null, null);
        t.default = r.exports
    }, GZY3: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("员工奖惩")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, K5YU: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("员工培训")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, R27X: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    月末处理\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, TgRz: function (e, t, i) {
        "use strict";
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("职称管理")])])
            }]
        };
        t.a = a
    }, Tlrr: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    人事记录统计\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, "UK/j": function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    备份恢复数据库\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, VnTu: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            data: function () {
                return {
                    dialogVisible: !1,
                    tableLoading: !1,
                    index: 0,
                    salaries: [],
                    multipleSelection: [],
                    salary: {
                        id: "",
                        createDate: "",
                        basicSalary: "",
                        trafficSalary: "",
                        lunchSalary: "",
                        bonus: "",
                        pensionBase: "",
                        pensionPer: "",
                        medicalBase: "",
                        medicalPer: "",
                        accumulationFundBase: "",
                        accumulationFundPer: ""
                    }
                }
            }, methods: {
                deleteAll: function () {
                    var e = this;
                    this.$confirm("删除[" + this.multipleSelection.length + "]条记录, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        var t = "";
                        e.multipleSelection.forEach(function (e) {
                            t = t + e.id + ","
                        }), e.doDelete(t)
                    }).catch(function () {
                        e.$message({type: "info", message: "已取消删除"})
                    })
                }, handleSelectionChange: function (e) {
                    this.multipleSelection = e
                }, handleEdit: function (e, t) {
                    this.dialogVisible = !0, t.createDate = new Date(t.createDate), delete t.allSalary, this.salary = t
                }, handleDelete: function (e, t) {
                    var i = this;
                    this.$confirm("删除[" + t.name + "]账套, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        i.doDelete(t.id)
                    }).catch(function () {
                        i.$message({type: "info", message: "已取消删除"})
                    })
                }, doDelete: function (e) {
                    var t = this;
                    t.tableLoading = !0, this.deleteRequest("/salary/sob/salary/" + e).then(function (e) {
                        if (t.tableLoading = !1, e && 200 == e.status) {
                            e.data;
                            _, t.loadSalaryCfg()
                        }
                    })
                }, next: function () {
                    var e = this, t = this;
                    7 == this.index ? this.salary.createDate && this.salary.basicSalary && this.salary.trafficSalary && this.salary.lunchSalary && this.salary.bonus && this.salary.pensionBase && this.salary.pensionPer && this.salary.medicalBase && this.salary.medicalPer && this.salary.accumulationFundBase && this.salary.accumulationFundPer ? this.salary.id ? (t.tableLoading = !0, this.putRequest("/salary/sob/salary", this.salary).then(function (e) {
                        if (t.tableLoading = !1, e && 200 == e.status) {
                            e.data;
                            _, t.dialogVisible = !1, t.index = 0, t.loadSalaryCfg()
                        }
                    })) : this.$prompt("请输入账套名称", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消"
                    }).then(function (i) {
                        var a = i.value;
                        e.salary.name = a, e.postRequest("/salary/sob/salary", e.salary).then(function (e) {
                            if (e && 200 == e.status) {
                                e.data;
                                _, t.dialogVisible = !1, t.index = 0, t.loadSalaryCfg()
                            }
                        })
                    }).catch(function () {
                    }) : this.$message({type: "error", message: "字段不能为空!"}) : this.index++
                }, loadSalaryCfg: function () {
                    this.tableLoading = !0;
                    var e = this;
                    this.getRequest("/salary/sob/salary").then(function (t) {
                        e.tableLoading = !1, t && 200 == t.status && (e.salaries = t.data)
                    })
                }, emptySalary: function () {
                    this.salary = {
                        id: "",
                        createDate: "",
                        basicSalary: "",
                        trafficSalary: "",
                        lunchSalary: "",
                        bonus: "",
                        pensionBase: "",
                        pensionPer: "",
                        medicalBase: "",
                        medicalPer: "",
                        accumulationFundBase: "",
                        accumulationFundPer: ""
                    }, this.index = 0
                }
            }, mounted: function () {
                this.loadSalaryCfg()
            }
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("el-container", [i("el-header", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "padding-left": "0px"
                    }
                }, [i("el-button", {
                    attrs: {icon: "el-icon-plus", type: "primary", size: "mini"},
                    on: {
                        click: function (t) {
                            e.dialogVisible = !0
                        }
                    }
                }, [e._v("添加账套")]), e._v(" "), i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "success",
                        icon: "el-icon-refresh"
                    }, on: {click: e.loadSalaryCfg}
                })], 1), e._v(" "), i("el-main", {
                    staticStyle: {
                        "padding-left": "0px",
                        "padding-top": "0px"
                    }
                }, [i("div", [i("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.tableLoading,
                        expression: "tableLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {data: e.salaries, stripe: "", size: "mini"},
                    on: {"selection-change": e.handleSelectionChange}
                }, [i("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "30"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "120",
                        prop: "name",
                        label: "账套名称"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "basicSalary",
                        label: "基本工资"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "trafficSalary",
                        label: "交通补助"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "lunchSalary",
                        label: "午餐补助"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "bonus",
                        width: "70",
                        label: "奖金"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {width: "100", label: "启用时间"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(e._f("formatDate")(t.row.createDate)))]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        label: "养老金",
                        align: "center"
                    }
                }, [i("el-table-column", {
                    attrs: {
                        prop: "pensionPer",
                        width: "70",
                        label: "比率"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "pensionBase",
                        label: "基数"
                    }
                })], 1), e._v(" "), i("el-table-column", {
                    attrs: {
                        label: "医疗保险",
                        align: "center"
                    }
                }, [i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "medicalPer",
                        label: "比率"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "medicalBase",
                        width: "70",
                        label: "基数"
                    }
                })], 1), e._v(" "), i("el-table-column", {
                    attrs: {
                        label: "公积金",
                        align: "center"
                    }
                }, [i("el-table-column", {
                    attrs: {
                        width: "70",
                        prop: "accumulationFundPer",
                        label: "比率"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "accumulationFundBase",
                        width: "70",
                        label: "基数"
                    }
                })], 1), e._v(" "), i("el-table-column", {
                    attrs: {
                        label: "操作",
                        align: "center"
                    }
                }, [i("el-table-column", {
                    attrs: {label: "编辑", align: "center"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini"}, on: {
                                    click: function (i) {
                                        e.handleEdit(t.$index, t.row)
                                    }
                                }
                            }, [e._v("编辑\n                ")])]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {label: "删除", align: "center"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini", type: "danger"}, on: {
                                    click: function (i) {
                                        e.handleDelete(t.$index, t.row)
                                    }
                                }
                            }, [e._v("删除\n                ")])]
                        }
                    }])
                })], 1)], 1)], 1), e._v(" "), 0 != e.salaries ? i("div", {
                    staticStyle: {
                        "text-align": "left",
                        "margin-top": "10px"
                    }
                }, [i("el-button", {
                    attrs: {
                        type: "danger",
                        round: "",
                        size: "mini",
                        disabled: 0 == e.multipleSelection.length
                    }, on: {click: e.deleteAll}
                }, [e._v("批量删除\n        ")])], 1) : e._e()])], 1), e._v(" "), i("div", {staticStyle: {"text-align": "left"}}, [i("el-dialog", {
                    attrs: {
                        title: "添加工资账套",
                        visible: e.dialogVisible,
                        width: "50%",
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogVisible = t
                        }, close: e.emptySalary
                    }
                }, [i("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "flex-start"
                    }
                }, [i("el-steps", {
                    attrs: {
                        active: e.index,
                        direction: "vertical"
                    }
                }, [i("el-step", {
                    attrs: {
                        title: "基本工资",
                        size: "mini"
                    }
                }), e._v(" "), i("el-step", {attrs: {title: "交通补助"}}), e._v(" "), i("el-step", {attrs: {title: "午餐补助"}}), e._v(" "), i("el-step", {attrs: {title: "奖金"}}), e._v(" "), i("el-step", {attrs: {title: "养老金"}}), e._v(" "), i("el-step", {attrs: {title: "医疗保险"}}), e._v(" "), i("el-step", {attrs: {title: "公积金"}}), e._v(" "), i("el-step", {attrs: {title: "启用时间"}})], 1), e._v(" "), i("div", {
                    staticStyle: {
                        "margin-left": "30px",
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center",
                        width: "80%"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == e.index,
                        expression: "index==0"
                    }]
                }, [e._v("\n            基本工资：\n            "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入基本工资...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.basicSalary, callback: function (t) {
                            e.$set(e.salary, "basicSalary", t)
                        }, expression: "salary.basicSalary"
                    }
                })], 1), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.index,
                        expression: "index==1"
                    }]
                }, [e._v("\n            交通补助：\n            "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入交通补助...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.trafficSalary, callback: function (t) {
                            e.$set(e.salary, "trafficSalary", t)
                        }, expression: "salary.trafficSalary"
                    }
                })], 1), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 == e.index,
                        expression: "index==2"
                    }]
                }, [e._v("\n            午餐补助：\n            "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入午餐补助...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.lunchSalary, callback: function (t) {
                            e.$set(e.salary, "lunchSalary", t)
                        }, expression: "salary.lunchSalary"
                    }
                })], 1), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 3 == e.index,
                        expression: "index==3"
                    }]
                }, [e._v("\n            奖金：\n            "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入奖金...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.bonus, callback: function (t) {
                            e.$set(e.salary, "bonus", t)
                        }, expression: "salary.bonus"
                    }
                })], 1), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 4 == e.index,
                        expression: "index==4"
                    }]
                }, [i("div", [e._v("\n              养老金比率：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入养老金比率...", size: "mini", type: "number"},
                    model: {
                        value: e.salary.pensionPer, callback: function (t) {
                            e.$set(e.salary, "pensionPer", t)
                        }, expression: "salary.pensionPer"
                    }
                })], 1), e._v(" "), i("div", {staticStyle: {"margin-top": "10px"}}, [e._v("\n              养老金基数：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入养老金基数...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.pensionBase, callback: function (t) {
                            e.$set(e.salary, "pensionBase", t)
                        }, expression: "salary.pensionBase"
                    }
                })], 1)]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 5 == e.index,
                        expression: "index==5"
                    }]
                }, [i("div", [e._v("\n              医疗保险比率：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入医疗保险比率...", size: "mini", type: "number"},
                    model: {
                        value: e.salary.medicalPer, callback: function (t) {
                            e.$set(e.salary, "medicalPer", t)
                        }, expression: "salary.medicalPer"
                    }
                })], 1), e._v(" "), i("div", {staticStyle: {"margin-top": "10px"}}, [e._v("\n              医疗保险基数：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入医疗保险基数...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.medicalBase, callback: function (t) {
                            e.$set(e.salary, "medicalBase", t)
                        }, expression: "salary.medicalBase"
                    }
                })], 1)]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 6 == e.index,
                        expression: "index==6"
                    }]
                }, [i("div", [e._v("\n              公积金比率：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入公积金比率...", size: "mini", type: "number"},
                    model: {
                        value: e.salary.accumulationFundPer, callback: function (t) {
                            e.$set(e.salary, "accumulationFundPer", t)
                        }, expression: "salary.accumulationFundPer"
                    }
                })], 1), e._v(" "), i("div", {staticStyle: {"margin-top": "10px"}}, [e._v("\n              公积金基数：\n              "), i("el-input", {
                    staticStyle: {width: "200px"},
                    attrs: {placeholder: "请输入公积金基数...", size: "mini", type: "number"},
                    nativeOn: {
                        keyup: function (t) {
                            if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;
                            e.next(t)
                        }
                    },
                    model: {
                        value: e.salary.accumulationFundBase, callback: function (t) {
                            e.$set(e.salary, "accumulationFundBase", t)
                        }, expression: "salary.accumulationFundBase"
                    }
                })], 1)]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 7 == e.index,
                        expression: "index==7"
                    }]
                }, [e._v("\n            启用时间：\n            "), i("el-date-picker", {
                    staticStyle: {width: "200px"},
                    attrs: {type: "date", size: "mini", "value-format": "yyyy-MM-dd", placeholder: "选择日期"},
                    model: {
                        value: e.salary.createDate, callback: function (t) {
                            e.$set(e.salary, "createDate", t)
                        }, expression: "salary.createDate"
                    }
                })], 1)])], 1), e._v(" "), i("div", {
                    staticStyle: {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        padding: "0px",
                        margin: "0px"
                    }
                }, [0 != e.index ? i("el-button", {
                    attrs: {round: "", size: "mini"}, on: {
                        click: function (t) {
                            e.index--
                        }
                    }
                }, [e._v("上一步")]) : e._e(), e._v(" "), i("el-button", {
                    attrs: {
                        type: "primary",
                        round: "",
                        size: "mini"
                    }, domProps: {textContent: e._s(7 == e.index ? "完成" : "下一步")}, on: {click: e.next}
                })], 1)])], 1)], 1)
            }, staticRenderFns: []
        };
        var n = i("VU/8")(a, l, !1, function (e) {
            i("4MSD")
        }, null, null);
        t.default = n.exports
    }, XGB5: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("员工资料")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, XSWk: function (e, t) {
    }, YAMm: function (e, t) {
    }, YbFX: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            data: function () {
                return {emps: [], salaries: [], tableLoading: !1, totalCount: -1, sid: "", osid: "", currentPage: 1}
            }, mounted: function () {
                this.loadEmps()
            }, methods: {
                showUpdateView: function (e) {
                    this.loadSalaries(), e.salary ? (this.sid = e.salary.id, this.osid = e.salary.id) : (this.sid = "", this.osid = "")
                }, loadSalaries: function () {
                    var e = this;
                    this.getRequest("/salary/sobcfg/salaries").then(function (t) {
                        t && 200 == t.status && (e.salaries = t.data)
                    })
                }, updateSalaryCfg: function (e) {
                    var t = this;
                    this.osid != this.sid && this.putRequest("/salary/sobcfg/", {
                        eid: e,
                        sid: this.sid
                    }).then(function (e) {
                        if (e && 200 == e.status) {
                            e.data;
                            _, t.loadEmps()
                        }
                    })
                }, currentChange: function (e) {
                    this.currentPage = e, this.loadEmps()
                }, loadEmps: function () {
                    this.tableLoading = !0;
                    var e = this;
                    this.getRequest("/salary/sobcfg/emp?page=" + this.currentPage + "&size=10").then(function (t) {
                        if (e.tableLoading = !1, t && 200 == t.status) {
                            var i = t.data;
                            e.emps = i.emps, e.totalCount = i.count
                        }
                    })
                }
            }
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticStyle: {"margin-top": "10px"}}, [i("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.tableLoading,
                        expression: "tableLoading"
                    }], staticStyle: {width: "100%"}, attrs: {data: e.emps, size: "mini", border: "", stripe: ""}
                }, [i("el-table-column", {
                    attrs: {
                        type: "selection",
                        align: "left",
                        width: "55"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "name",
                        align: "left",
                        fixed: "",
                        label: "姓名",
                        width: "120"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "workID",
                        width: "120",
                        align: "left",
                        label: "工号"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "email",
                        width: "200",
                        align: "left",
                        label: "电子邮件"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "phone",
                        width: "120",
                        label: "电话号码"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {
                        prop: "department.name",
                        align: "left",
                        width: "120",
                        label: "所属部门"
                    }
                }), e._v(" "), i("el-table-column", {
                    attrs: {label: "工资账套", align: "center"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-tooltip", {attrs: {placement: "right"}}, [i("div", {
                                attrs: {slot: "content"},
                                slot: "content"
                            }, [t.row.salary ? [i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("基本工资")]), e._v("\n                ￥" + e._s(t.row.salary.basicSalary) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("奖金")]), e._v("\n                ￥" + e._s(t.row.salary.bonus) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("午餐补助")]), e._v("\n                ￥" + e._s(t.row.salary.lunchSalary) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("交通补助")]), e._v("\n                ￥" + e._s(t.row.salary.trafficSalary) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("养老金基数")]), e._v("\n                ￥" + e._s(t.row.salary.pensionBase) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("养老金比率")]), e._v("\n                " + e._s(t.row.salary.pensionPer) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("公积金基数")]), e._v("\n                ￥" + e._s(t.row.salary.accumulationFundBase) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("公积金比率")]), e._v("\n                " + e._s(t.row.salary.accumulationFundPer) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("医疗保险基数")]), e._v("\n                ￥" + e._s(t.row.salary.medicalBase) + "\n              ")], 1), e._v(" "), i("div", [i("el-tag", {attrs: {size: "mini"}}, [e._v("医疗保险比率")]), e._v("\n                " + e._s(t.row.salary.medicalPer) + "\n              ")], 1)] : e._e()], 2), e._v(" "), i("el-tag", {attrs: {size: "mini"}}, [e._v(e._s(t.row.salary ? t.row.salary.name : "暂未设置"))])], 1)]
                        }
                    }])
                }), e._v(" "), i("el-table-column", {
                    attrs: {label: "操作", align: "center"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-popover", {
                                key: t.row.id,
                                attrs: {placement: "right", width: "200", trigger: "click"},
                                on: {
                                    hide: function (i) {
                                        e.updateSalaryCfg(t.row.id)
                                    }
                                }
                            }, [i("el-select", {
                                attrs: {size: "mini", placeholder: "请选择"},
                                model: {
                                    value: e.sid, callback: function (t) {
                                        e.sid = t
                                    }, expression: "sid"
                                }
                            }, e._l(e.salaries, function (e) {
                                return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                            })), e._v(" "), i("el-button", {
                                attrs: {slot: "reference", size: "mini", type: "danger"},
                                on: {
                                    click: function (i) {
                                        e.showUpdateView(t.row)
                                    }
                                },
                                slot: "reference"
                            }, [e._v("修改账套\n          ")])], 1)]
                        }
                    }])
                })], 1), e._v(" "), i("div", {
                    staticStyle: {
                        "text-align": "right",
                        "margin-top": "10px"
                    }
                }, [i("el-pagination", {
                    attrs: {background: "", layout: "prev, pager, next", total: e.totalCount},
                    on: {"current-change": e.currentChange}
                })], 1)], 1)
            }, staticRenderFns: []
        }, n = i("VU/8")(a, l, !1, null, null, null);
        t.default = n.exports
    }, ZDkW: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    操作日志管理\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, agXO: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    初始化数据库\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, bOdI: function (e, t, i) {
        "use strict";
        t.__esModule = !0;
        var a, l = i("C4MV"), n = (a = l, a && a.__esModule ? a : {default: a});
        t.default = function (e, t, i) {
            return t in e ? (0, n.default)(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
    }, c98W: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i("XSWk"), l = i.n(a);
        for (var n in a) "default" !== n && (s = n, i.d(t, s, function () {
            return a[s]
        }));
        var s, r = i("TgRz"), o = i("VU/8")(l.a, r.a, !1, null, null, null);
        t.default = o.exports
    }, chGk: function (e, t) {
    }, eLaH: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i("oAV5"), l = {
            mounted: function () {
                this.loading = !0, this.initRoles()
            }, methods: {
                deleteRole: function (e, t) {
                    var i = this;
                    this.$confirm("删除角色[" + t + "], 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        i.loading = !0, i.deleteRequest("/system/basic/role/" + e).then(function (e) {
                            e && 200 == e.status ? i.initRoles() : i.loading = !1
                        })
                    }).catch(function () {
                        i.$message({type: "info", message: "已取消删除"})
                    })
                }, addNewRole: function () {
                    if (Object(a.b)(this.newRole, this.newRoleZh)) {
                        this.loading = !0;
                        var e = this;
                        this.postRequest("/system/basic/addRole", {
                            role: this.newRole,
                            roleZh: this.newRoleZh
                        }).then(function (t) {
                            if (t && 200 == t.status) {
                                t.data;
                                _, e.initRoles(), e.newRole = "", e.newRoleZh = ""
                            } else e.loading = !1
                        })
                    }
                }, updateRoleMenu: function (e) {
                    var t = this.$refs.tree[e].getCheckedKeys(!0), i = this;
                    this.putRequest("/system/basic/updateMenuRole", {
                        rid: this.activeColItem,
                        mids: t
                    }).then(function (e) {
                        e && 200 == e.status && (i.activeColItem = -1)
                    })
                }, collapseChange: function (e) {
                    if ("" != e) {
                        var t = this;
                        this.getRequest("/system/basic/menuTree/" + e).then(function (e) {
                            if (e && 200 == e.status) {
                                var i = e.data;
                                t.treeData = i.menus, t.checkedKeys = i.mids
                            }
                        })
                    }
                }, handleCheckChange: function (e, t, i) {
                }, initRoles: function () {
                    var e = this;
                    this.getRequest("/system/basic/roles").then(function (t) {
                        e.loading = !1, t && 200 == t.status && (e.roles = t.data, e.activeColItem = -1)
                    })
                }, cancelUpdateRoleMenu: function () {
                    this.activeColItem = -1
                }
            }, data: function () {
                return {
                    props: {label: "name", children: "children"},
                    newRole: "",
                    newRoleZh: "",
                    roles: [],
                    treeData: [],
                    checkedKeys: [],
                    loading: !1,
                    activeColItem: -1
                }
            }
        }, n = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }], staticStyle: {"text-align": "left"}
                }, [i("el-input", {
                    staticStyle: {width: "250px"},
                    attrs: {placeholder: "请输入角色英文名称...", size: "mini"},
                    model: {
                        value: e.newRole, callback: function (t) {
                            e.newRole = t
                        }, expression: "newRole"
                    }
                }, [i("template", {slot: "prepend"}, [e._v("ROLE_")])], 2), e._v(" "), i("el-input", {
                    staticStyle: {width: "250px"},
                    attrs: {placeholder: "请输入角色中文名称...", size: "mini"},
                    model: {
                        value: e.newRoleZh, callback: function (t) {
                            e.newRoleZh = t
                        }, expression: "newRoleZh"
                    }
                }), e._v(" "), i("el-button", {
                    staticStyle: {"margin-left": "5px"},
                    attrs: {type: "primary", size: "mini"},
                    on: {click: e.addNewRole}
                }, [e._v("添加角色")])], 1), e._v(" "), i("div", {
                    staticStyle: {
                        "margin-top": "10px",
                        "text-align": "left"
                    }
                }, [i("el-collapse", {
                    staticStyle: {width: "500px"},
                    attrs: {accordion: ""},
                    on: {change: e.collapseChange},
                    model: {
                        value: e.activeColItem, callback: function (t) {
                            e.activeColItem = t
                        }, expression: "activeColItem"
                    }
                }, e._l(e.roles, function (t, a) {
                    return i("el-collapse-item", {
                        key: t.name,
                        attrs: {title: t.nameZh, name: t.id}
                    }, [i("el-card", {staticClass: "box-card"}, [i("div", {
                        attrs: {slot: "header"},
                        slot: "header"
                    }, [i("span", [e._v("可访问的资源")]), e._v(" "), i("el-button", {
                        staticStyle: {
                            color: "#f6061b",
                            margin: "0px",
                            float: "right",
                            padding: "3px 0",
                            width: "15px",
                            height: "15px"
                        }, attrs: {type: "text", icon: "el-icon-delete"}, on: {
                            click: function (i) {
                                e.deleteRole(t.id, t.nameZh)
                            }
                        }
                    })], 1), e._v(" "), i("div", [i("el-tree", {
                        key: t.id,
                        ref: "tree",
                        refInFor: !0,
                        attrs: {
                            props: e.props,
                            data: e.treeData,
                            "default-checked-keys": e.checkedKeys,
                            "node-key": "id",
                            "show-checkbox": "",
                            "highlight-current": ""
                        },
                        on: {"check-change": e.handleCheckChange}
                    })], 1), e._v(" "), i("div", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-end",
                            "margin-right": "10px"
                        }
                    }, [i("el-button", {
                        attrs: {size: "mini"},
                        on: {click: e.cancelUpdateRoleMenu}
                    }, [e._v("取消修改")]), e._v(" "), i("el-button", {
                        attrs: {type: "primary", size: "mini"},
                        on: {
                            click: function (t) {
                                e.updateRoleMenu(a)
                            }
                        }
                    }, [e._v("确认修改")])], 1)])], 1)
                }))], 1)])
            }, staticRenderFns: []
        }, s = i("VU/8")(l, n, !1, null, null, null);
        t.default = s.exports
    }, ewEk: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            data: function () {
                return {
                    keywords: "",
                    fullloading: !1,
                    hrs: [],
                    cardLoading: [],
                    eploading: [],
                    allRoles: [],
                    moreBtnState: !1,
                    selRoles: [],
                    selRolesBak: []
                }
            }, mounted: function () {
                this.initCards(), this.loadAllRoles()
            }, methods: {
                searchClick: function () {
                    this.initCards(), this.loadAllRoles()
                }, updateHrRoles: function (e, t) {
                    this.moreBtnState = !1;
                    var i = this;
                    if (this.selRolesBak.length == this.selRoles.length) {
                        for (var a = 0; a < this.selRoles.length; a++) for (var l = 0; l < this.selRolesBak.length; l++) if (this.selRoles[a] == this.selRolesBak[l]) {
                            this.selRolesBak.splice(l, 1);
                            break
                        }
                        if (0 == this.selRolesBak.length) return
                    }
                    this.eploading.splice(t, 1, !0), this.putRequest("/system/hr/roles", {
                        hrId: e,
                        rids: this.selRoles
                    }).then(function (a) {
                        if (i.eploading.splice(t, 1, !1), a && 200 == a.status) {
                            var l = a.data;
                            _, "success" == l.status && i.refreshHr(e, t)
                        }
                    })
                }, refreshHr: function (e, t) {
                    var i = this;
                    i.cardLoading.splice(t, 1, !0), this.putRequest("/system/hr/id/" + e).then(function (e) {
                        i.cardLoading.splice(t, 1, !1), i.hrs.splice(t, 1, e.data)
                    })
                }, loadSelRoles: function (e, t) {
                    var i = this;
                    this.moreBtnState = !0, this.selRoles = [], this.selRolesBak = [], e.forEach(function (e) {
                        i.selRoles.push(e.id), i.selRolesBak.push(e.id)
                    })
                }, loadAllRoles: function () {
                    var e = this;
                    this.getRequest("/system/basic/roles").then(function (t) {
                        e.fullloading = !1, t && 200 == t.status && (e.allRoles = t.data)
                    })
                }, switchChange: function (e, t, i) {
                    var a = this;
                    a.cardLoading.splice(i, 1, !0), this.putRequest("/system/hr/", {
                        enabled: e,
                        id: t
                    }).then(function (e) {
                        if (a.cardLoading.splice(i, 1, !1), e && 200 == e.status) {
                            var l = e.data;
                            _, "error" == l.status && a.refreshHr(t, i)
                        } else a.refreshHr(t, i)
                    })
                }, initCards: function () {
                    this.fullloading = !0;
                    var e, t = this;
                    e = "" === this.keywords ? "all" : this.keywords, this.getRequest("/system/hr/" + e).then(function (e) {
                        if (e && 200 == e.status) {
                            t.hrs = e.data;
                            var i = e.data.length;
                            t.cardLoading = Array.apply(null, Array(i)).map(function (e, t) {
                                return !1
                            }), t.eploading = Array.apply(null, Array(i)).map(function (e, t) {
                                return !1
                            })
                        }
                    })
                }, deleteHr: function (e) {
                    var t = this;
                    this.fullloading = !0, this.deleteRequest("/system/hr/" + e).then(function (e) {
                        if (t.fullloading = !1, e && 200 == e.status) {
                            var i = e.data;
                            _, "success" == i.status && (t.initCards(), t.loadAllRoles())
                        }
                    })
                }
            }
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.fullloading,
                        expression: "fullloading"
                    }], staticStyle: {"margin-top": "10px"}
                }, [i("div", {
                    staticStyle: {
                        "margin-bottom": "10px",
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center"
                    }
                }, [i("el-input", {
                    staticStyle: {width: "400px", "margin-right": "10px"},
                    attrs: {placeholder: "默认展示部分用户，可以通过用户名搜索更多用户...", "prefix-icon": "el-icon-search", size: "small"},
                    model: {
                        value: e.keywords, callback: function (t) {
                            e.keywords = t
                        }, expression: "keywords"
                    }
                }), e._v(" "), i("el-button", {
                    attrs: {size: "small", type: "primary", icon: "el-icon-search"},
                    on: {click: e.searchClick}
                }, [e._v("搜索")])], 1), e._v(" "), i("div", {
                    staticStyle: {
                        display: "flex",
                        "justify-content": "space-around",
                        "flex-wrap": "wrap",
                        "text-align": "left"
                    }
                }, e._l(e.hrs, function (t, a) {
                    return i("el-card", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.cardLoading[a],
                            expression: "cardLoading[index]"
                        }], key: t.id, staticStyle: {width: "350px", "margin-bottom": "20px"}
                    }, [i("div", {
                        staticClass: "clearfix",
                        attrs: {slot: "header"},
                        slot: "header"
                    }, [i("span", [e._v(e._s(t.name))]), e._v(" "), i("el-button", {
                        staticStyle: {
                            color: "#f6061b",
                            margin: "0px",
                            float: "right",
                            padding: "3px 0",
                            width: "15px",
                            height: "15px"
                        }, attrs: {type: "text", icon: "el-icon-delete"}, on: {
                            click: function (i) {
                                e.deleteHr(t.id)
                            }
                        }
                    })], 1), e._v(" "), i("div", [i("div", {
                        staticStyle: {
                            width: "100%",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [i("img", {
                        staticStyle: {width: "70px", height: "70px", "border-radius": "70px"},
                        attrs: {src: t.userface, alt: "item.name"}
                    })]), e._v(" "), i("div", {staticStyle: {"margin-top": "20px"}}, [i("div", [i("span", {staticClass: "user-info"}, [e._v("用户名:" + e._s(t.name))])]), e._v(" "), i("div", [i("span", {staticClass: "user-info"}, [e._v("手机号码:" + e._s(t.phone))])]), e._v(" "), i("div", [i("span", {staticClass: "user-info"}, [e._v("电话号码:" + e._s(t.telephone))])]), e._v(" "), i("div", [i("span", {staticClass: "user-info"}, [e._v("地址:" + e._s(t.address))])]), e._v(" "), i("div", {
                        staticClass: "user-info",
                        staticStyle: {display: "flex", "align-items": "center", "margin-bottom": "3px"}
                    }, [e._v("\n              用户状态:\n              "), i("el-switch", {
                        key: t.id,
                        staticStyle: {display: "inline", "margin-left": "5px"},
                        attrs: {
                            "active-color": "#13ce66",
                            "inactive-color": "#aaaaaa",
                            "active-text": "启用",
                            "inactive-text": "禁用"
                        },
                        on: {
                            change: function (i) {
                                e.switchChange(t.enabled, t.id, a)
                            }
                        },
                        model: {
                            value: t.enabled, callback: function (i) {
                                e.$set(t, "enabled", i)
                            }, expression: "item.enabled"
                        }
                    })], 1), e._v(" "), i("div", {staticClass: "user-info"}, [e._v("\n              用户角色:\n              "), e._l(t.roles, function (t) {
                        return i("el-tag", {
                            key: t.id,
                            staticStyle: {"margin-right": "5px"},
                            attrs: {type: "success", size: "mini", "disable-transitions": !1}
                        }, [e._v(e._s(t.nameZh) + "\n              ")])
                    }), e._v(" "), i("el-popover", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.eploading[a],
                            expression: "eploading[index]"
                        }],
                        key: t.id,
                        attrs: {placement: "right", title: "角色列表", width: "200", trigger: "click"},
                        on: {
                            hide: function (i) {
                                e.updateHrRoles(t.id, a)
                            }
                        }
                    }, [i("el-select", {
                        attrs: {multiple: "", placeholder: "请选择角色"},
                        model: {
                            value: e.selRoles, callback: function (t) {
                                e.selRoles = t
                            }, expression: "selRoles"
                        }
                    }, e._l(e.allRoles, function (e) {
                        return i("el-option", {key: e.id, attrs: {label: e.nameZh, value: e.id}})
                    })), e._v(" "), i("el-button", {
                        staticStyle: {color: "#09c0f6", "padding-top": "0px"},
                        attrs: {slot: "reference", type: "text", icon: "el-icon-more", disabled: e.moreBtnState},
                        on: {
                            click: function (i) {
                                e.loadSelRoles(t.roles, a)
                            }
                        },
                        slot: "reference"
                    })], 1)], 2), e._v(" "), i("div", [i("span", {staticClass: "user-info"}, [e._v("备注:" + e._s(t.remark))])])])])])
                }))])
            }, staticRenderFns: []
        };
        var n = i("VU/8")(a, l, !1, function (e) {
            i("chGk")
        }, null, null);
        t.default = n.exports
    }, fc7a: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i("eLaH"), l = i("FvOz"), n = i("5xQo"), s = i("c98W"), r = i("/LNZ"), o = {
            data: function () {
                return {defaultTab: "depMana"}
            },
            methods: {},
            components: {
                "menu-role": a.default,
                "dep-mana": l.default,
                "ec-mana": n.default,
                "jobtitle-mana": s.default,
                "pos-mana": r.default
            }
        }, c = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticStyle: {"margin-top": "10px"}}, [i("el-tabs", {
                    attrs: {type: "card"},
                    model: {
                        value: e.defaultTab, callback: function (t) {
                            e.defaultTab = t
                        }, expression: "defaultTab"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        label: "部门管理",
                        name: "depMana"
                    }
                }, [i("dep-mana")], 1), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        label: "职位管理",
                        name: "positionMana"
                    }
                }, [i("pos-mana", {attrs: {state: "position"}})], 1), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        label: "职称管理",
                        name: "jobTitleMana"
                    }
                }, [i("pos-mana", {attrs: {state: "jobtitle"}})], 1), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        label: "奖惩规则",
                        name: "ecCfg"
                    }
                }, [i("ec-mana")], 1), e._v(" "), i("el-tab-pane", {
                    attrs: {
                        label: "权限组",
                        name: "menuRole"
                    }
                }, [i("menu-role")], 1)], 1)], 1)
            }, staticRenderFns: []
        }, d = i("VU/8")(o, c, !1, null, null, null);
        t.default = d.exports
    }, mNON: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    工资表查询\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, nSLl: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("员工调薪")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, r3HF: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    员工积分统计\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }, tQt2: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("el-container", [i("el-header", {
                    staticStyle: {
                        "text-align": "left",
                        "padding-left": "0px",
                        "margin-top": "10px"
                    }
                }, [i("el-tag", {attrs: {size: "medium"}}, [e._v("请选择部门:")]), e._v(" "), i("el-select", {
                    attrs: {
                        size: "mini",
                        placeholder: "请选择"
                    }, model: {
                        value: e.depId, callback: function (t) {
                            e.depId = t
                        }, expression: "depId"
                    }
                }, e._l(e.deps, function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                }))], 1), e._v(" "), i("el-main", [e._v("Main")])], 1)], 1)
            }, staticRenderFns: []
        }, l = i("VU/8")({
            data: function () {
                return {depId: 1, deps: []}
            }, methods: {
                loadDeps: function () {
                    var e = this;
                    this.getRequest("/salary/table/deps").then(function (t) {
                        t && 200 == t.status && (e.deps = t.data)
                    })
                }
            }, mounted: function () {
                this.loadDeps()
            }
        }, a, !1, null, null, null);
        t.default = l.exports
    }, ubks: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = {
            render: function () {
                this.$createElement;
                this._self._c;
                return this._m(0)
            }, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [t("h1", [this._v("\n    系统管理\n  ")])])
            }]
        }, l = i("VU/8")(null, a, !1, null, null, null);
        t.default = l.exports
    }
});
//# sourceMappingURL=0.99d9925e20b3bdd4f9fe.js.map