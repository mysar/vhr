<template>

  <div style="margin-top: 10px">
    <el-table
      :data="emps"
      size="mini"
      border
      stripe
      v-loading="tableLoading"
      style="width: 100%">
      <el-table-column
        type="selection"
        align="left"
        width="55">
      </el-table-column>
      <el-table-column
        prop="empName"
        align="left"
        fixed
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="empId"
        width="120"
        align="left"
        label="工号">
      </el-table-column>
      <el-table-column
        prop="time"
        width="200"
        align="left"
        label="发生时间">
      </el-table-column>
      <el-table-column
        prop="msg"
        width="120"
        label="简述信息">
      </el-table-column>


      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="right"
            width="200"
            @hide="updateSalaryCfg(scope.row.id)"
            :key="scope.row.id"
            trigger="click">
            <el-select size="mini" v-model="sid" placeholder="请选择">
              <el-option
                v-for="item in salaries"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-button
              size="mini"
              slot="reference"
              type="danger" @click="showUpdateView(scope.row)">修改
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: right;margin-top: 10px">
      <el-pagination
        background
        @current-change="currentChange"
        layout="prev, pager, next"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        emps: [],
        salaries: [],
        tableLoading: false,
        totalCount: -1,
        sid: '',
        osid: '',
        currentPage: 1
      }
    },
    mounted: function () {
      this.loadEmps();
    },
    methods: {
      showUpdateView(data){
        this.loadSalaries();
        if (data.salary) {
          this.sid = data.salary.id;
          this.osid = data.salary.id;
        } else {
          this.sid = '';
          this.osid = '';
        }
      },
      loadSalaries(){
        var _this = this;
        this.getRequest("/reward/getPage").then(resp => {
          if (resp && resp.status == 200) {
            _this.salaries = resp.data;
          }
        })
      },
      updateSalaryCfg(eid){
        var _this = this;
        if (this.osid == this.sid) {
          return;
        }
        this.putRequest("/salary/sobcfg/", {eid: eid, sid: this.sid}).then(resp => {
          if (resp && resp.status == 200) {
            var data = resp.data;
            _
            _this.loadEmps();
          }
        })
      },
      currentChange(currentPage){
        this.currentPage = currentPage;
        this.loadEmps();
      },
      loadEmps(){
        this.tableLoading = true;
        var _this = this;
        this.getRequest("/reward/getPage?page=" + this.currentPage + "&rows=10").then(resp => {
          _this.tableLoading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            _this.emps = data.respList;
            _this.totalCount = data.count;
          }
        })
      }
    }
  }
</script>

