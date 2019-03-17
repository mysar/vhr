<template>
  <div>
    <el-container>
      <el-header style="padding: 0px;display:flex;justify-content:space-between;align-items: center">

        <div style="margin-left: 5px;margin-right: 20px;display: inline">
          <div style="display: inline">
            <el-input placeholder="通过员工名搜索员工,记得回车哦..."
              clearable
              @change="keywordsChange"
              style="width: 300px;margin: 0px;padding: 0px;"
              size="mini"
              :disabled="advanceSearchViewVisible"
              @keyup.enter.native="searchEmp"
              prefix-icon="el-icon-search"
              v-model="keywords"/>

            <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="searchEmp">搜索</el-button>

          </div>

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
            <el-table-column align="left" prop="jbgz" label="基本工资" width="120"/>
            <el-table-column align="left" prop="jj" label="奖金"/>
            <el-table-column align="left" prop="wcbz" label="午餐补助"/>
            <el-table-column align="left" prop="jtbz" label="交通补助"/>
          </el-table>
          <!-- 批量删除按钮 -->
          <div style="display: flex; float:right;justify-content: space-between;margin: 2px;">
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
    </el-container>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        emp: [],
        keywords: '',
        faangledoubleup: 'fa-angle-double-up',
        faangledoubledown: 'fa-angle-double-down',
        dialogTitle: '',
        multipleSelection: [],
        depTextColor: '#c0c4cc',

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
          id: '',
          name: '',
          userId: '',
          info: '',
          jbgz: '',
          jj: '',
        }
      };
    },
    mounted: function () {
      this.loadEmps();
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
        this.getRequest("/salary/table/getPerson?page=" + this.currentPage + "&rows=10&keywords=" + this.keywords).then(resp => {
          this.tableLoading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            _this.emps = data.respList;
            _this.totalCount = data.count;
          }
        })
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
      }
    }
  };
</script>
