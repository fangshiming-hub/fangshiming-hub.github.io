<template>
    <div class="reg_wrap">
        <div>
            <h3>测试一下</h3>
            <el-checkbox v-model="isGlobal">全局搜索</el-checkbox>
            <el-checkbox v-model="isIgnoreLower">忽略大小写</el-checkbox>
            <p>正则表达式</p>
            <el-input 
                v-model="regParren"
                placeholder="请输入正则表达式"
                clearable
            ></el-input>
            <p>测试的值</p>
            <el-input 
                v-model="testVal"
                placeholder="请输入要测试的值"
                clearable
            ></el-input>
            <p></p>
            <el-button type="primary" size="mini" @click="testReg">测试</el-button>
            <p>测试结果:{{ result }}</p>
        </div>
        <el-divider>常见正则</el-divider>
        <div 
            v-for="reg in regs"
            :key="reg.desc"
        >
            <div class="reg_item">
                <span class="desc">{{ reg.desc }}:</span>
                <span class="parren">{{ reg.parren }}</span>
                <el-tooltip content="点击复制" placement="left">
                    <i style="cursor: pointer" class="el-icon-document-copy" @click="copy(reg.parren)"></i>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'demo',
    data() {
        return {
            regs: [
                {
                    parren: '/^[0-9]*$/',
                    desc: '数字'
                },
                {
                    parren: '/^[\\u4e00-\\u9fa5]*$/',
                    desc: '汉字'
                },
                {
                    parren: '/^[a-z]*$/',
                    desc: '小写字母'
                },
                {
                    parren: '/^[A-Z]*$/',
                    desc: '大写字母'
                },

            ],
            regParren: '',
            testVal: '',
            result: '',
            isGlobal: false,
            isIgnoreLower: true
        }
    },
    methods: {
        // 复制
        copy(text) {
            this.regParren = text;
            const input = document.createElement('input');
            input.setAttribute('readonly', 'readonly');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                this.$message({
                    type:'success',
                    message: '复制成功!'
                })
            }
            document.body.removeChild(input);
        },
        // 测试正则
        testReg() {
            if(this.regParren && this.testVal) {
                let reg = this.regParren;
                if(this.isIgnoreLower) {
                    reg += 'i';
                }
                if(this.isGlobal) {
                    reg += 'g';
                }
                try {
                    reg = eval(reg);
                    const res = reg.test(this.testVal);
                    this.result = res ? "匹配" : '不匹配';
                } catch (error) {
                    this.$message({
                        type:'error',
                        message: '请输入正确的正则表达式'
                    })
                }
            } else {
                this.$message({
                    type:'warning',
                    message: '请输入正则表达式和测试的值!'
                })
            }
        }
    }

}
</script>
<style scoped>
.reg_item{
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
}
.desc{
    display: inline-block;
    width: 100px ;
}
.parren{
    flex: 1;
}

</style>
