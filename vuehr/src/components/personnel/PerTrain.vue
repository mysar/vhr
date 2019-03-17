<template>
  <div>
    <el-container>
      <el-header style="padding: 0px;display:flex;justify-content:space-between;align-items: center">

        <div style="margin-left: 5px;margin-right: 20px;display: inline">

          <el-button type="primary" size="mini" icon="el-icon-plus" @click="showAddEmpView">
            添加员工培训数据
          </el-button>
        </div>
      </el-header>
      <el-main style="padding-left: 0px;padding-top: 0px">
        <div>
          <!-- 数据表格加载 -->
          <el-table :data="emps" v-loading="tableLoading" border stripe @selection-change="handleSelectionChange"
                    size="mini"
                    style="width: 100%">
            <el-table-column type="selection" width="30"/>
            <el-table-column align="left" prop="id" label="ID" width="80"/>
            <el-table-column align="left" prop="name" label="姓名" width="120"/>
            <el-table-column align="left" prop="userId" label="用户id" width="120"/>
            <el-table-column align="left" prop="info" label="详细信息"/>


            <el-table-column
              fixed="right"
              width="200"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="showEditEmpView(scope.row)" style="padding: 3px 4px 3px 4px;margin: 2px" size="mini">编辑
                </el-button>
                <el-button type="danger" style="padding: 3px 4px 3px 4px;margin: 2px" size="mini"
                           @click="deleteEmp(scope.row)" icon="el-icon-delete" />
              </template>
            </el-table-column>
          </el-table>
          <!-- 批量删除按钮 -->
          <div style="display: flex;justify-content: space-between;margin: 2px">
            <el-button type="danger" size="mini" v-if="emps.length>0" :disabled="multipleSelection.length==0"
                       @click="deleteManyEmps">批量删除
            </el-button>
            <el-pagination
              background
              :page-size="10"
              :current-page="currentPage"
              @current-change="currentChange"
              layout="prev, pager, next"
              :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </el-main>


      <!-- 新增修改弹出框 -->
    </el-container>
    <el-form :model="emp" :rules="rules" ref="addEmpForm" style="margin: 0px;padding: 0px;">
      <div style="text-align: left">
        <el-dialog
          :title="dialogTitle"
          style="padding: 50px;"
          :close-on-click-modal="false"
          :visible.sync="dialogVisible"
          width="50%">
          <el-row>
            <el-col :span="6">
              <div>
                <el-form-item label="姓名:" prop="name">
                  <el-input prefix-icon="el-icon-edit" v-model="emp.name" size="mini" style="width: 150px"
                            placeholder="请输入员工姓名" />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-form-item label="用户id:" prop="userId">
                  <el-input prefix-icon="el-icon-edit" v-model="emp.userId" size="mini" style="width: 150px"
                            placeholder="请输入员工id" />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div>
                <el-form-item label="详细信息:" prop="info">
                  <el-input prefix-icon="el-icon-edit" v-model="emp.info" type="textarea" style="width: 320px"
                            :rows="3"
                            placeholder="" />
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="cancelEidt">取 消</el-button>
    <el-button size="mini" type="primary" @click="addEmp('addEmpForm')">确 定</el-button>
  </span>
        </el-dialog>
      </div>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        emp: [],
        keywords: '',
        fileUploadBtnText: '导入数据',
        beginDateScope: '',
        faangledoubleup: 'fa-angle-double-up',
        faangledoubledown: 'fa-angle-double-down',
        dialogTitle: '',
        multipleSelection: [],
        depTextColor: '#c0c4cc',
        nations: [],
        politics: [],
        positions: [],
        joblevels: [],
        totalCount: -1,
        currentPage: 1,
        defaultProps: {
          label: 'name',
          isLeaf: 'leaf',
          children: 'children'
        },
        dialogVisible: false,
        tableLoading: false,
        advanceSearchViewVisible: false,
        showOrHidePop: false,
        showOrHidePop2: false,
        emp: {
          name: '',
          userId: '',
          info: ''
        },
        rules: {
          name: [{required: true, message: '必填:姓名', trigger: 'blur'}],
          userId: [{required: true, message: '必填:userId', trigger: 'blur'}],
          idCard: [{
            required: true,
            message: '必填:身份证号码',
            trigger: 'blur'
          }, {
            pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
            message: '身份证号码格式不正确',
            trigger: 'blur'
          }]
        }
      };
    },
    mounted: function () {
//      this.initData();
      this.loadEmps();
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteManyEmps(){
        this.$confirm('此操作将删除[' + this.multipleSelection.length + ']条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var ids = '';
          for (var i = 0; i < this.multipleSelection.length; i++) {
            ids += this.multipleSelection[i].id + ",";
          }
          this.doDelete(ids);
        }).catch(() => {
        });
      },
      deleteEmp(row){
        this.$confirm('此操作将永久删除[' + row.name + '], 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doDelete(row.id);
        }).catch(() => {
        });
      },
      doDelete(ids){
        this.tableLoading = true;
        var _this = this;
        this.deleteRequest("/train/delete/" + ids).then(resp => {
          _this.tableLoading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            _this.loadEmps();
          }
        })
      },
      keywordsChange(val){
        if (val == '') {
          this.loadEmps();
        }
      },
      searchEmp(){
        this.loadEmps();
      },
      currentChange(currentChange){
        this.currentPage = currentChange;
        this.loadEmps();
      },
      loadEmps(){
        var _this = this;
        this.tableLoading = true;
        this.getRequest("/train/getPage?page=" + this.currentPage + "&rows=10&keywords=" + this.keywords).then(resp => {
          this.tableLoading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            _this.emps = data.respList;
            _this.totalCount = data.count;
//            _this.emptyEmpData();
          }
        })
      },
      addEmp(formName){
        var _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.emp.id) {
              //更新
              this.tableLoading = true;
              this.putRequest("/train/update", this.emp).then(resp => {
                _this.tableLoading = false;
                if (resp && resp.status == 200) {
                  var data = resp.respList;
                  _this.dialogVisible = false;
                  _this.emptyEmpData();
                  _this.loadEmps();
                }
              })
            } else {
              //添加
              this.tableLoading = true;
              this.postRequest("/train/add", this.emp).then(resp => {
                _this.tableLoading = false;
                if (resp && resp.status == 200) {
                  var data = resp.data;
                  _this.dialogVisible = false;
                  _this.emptyEmpData();
                  _this.loadEmps();
                }
              })
            }
          } else {
            return false;
          }
        });
      },
      cancelEidt(){
        this.dialogVisible = false;
        this.emptyEmpData();
      },
      showDepTree(){
        this.showOrHidePop = !this.showOrHidePop;
      },
      showDepTree2(){
        this.showOrHidePop2 = !this.showOrHidePop2;
      },
      handleNodeClick(data) {
        this.emp.departmentName = data.name;
        this.emp.departmentId = data.id;
        this.showOrHidePop = false;
        this.depTextColor = '#606266';
      },
      handleNodeClick2(data) {
        this.emp.departmentName = data.name;
        this.emp.departmentId = data.id;
        this.showOrHidePop2 = false;
        this.depTextColor = '#606266';
      },
//      initData(){
//        var _this = this;
//        this.getRequest("/employee/basic/basicdata").then(resp => {
//          if (resp && resp.status == 200) {
//            var data = resp.data;
//            _this.nations = data.nations;
//            _this.politics = data.politics;
//            _this.deps = data.deps;
//            _this.positions = data.positions;
//            _this.joblevels = data.joblevels;
//            _this.emp.workID = data.workID;
//          }
//        })
//      },
      showEditEmpView(row){
        console.log(row)
        this.dialogTitle = "编辑信息";
        this.emp = row;
        this.emp.userId = row.userId;
        this.emp.name = row.name;
        this.emp.info = row.info;

        delete this.emp.notWorkDate;
        this.dialogVisible = true;
      },
      showAddEmpView(){
        this.dialogTitle = "添加培训信息";
        this.dialogVisible = true;

        delete this.emp.userId;
        delete this.emp.info;
        delete this.emp.id;
        delete this.emp.name;

        var _this = this;
      },
      emptyEmpData(){
        this.emp = {
          name: '',
          userId: '',
          info: '',
        }
      }
    }
  };
</script>
<style>
  .el-dialog__body {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
