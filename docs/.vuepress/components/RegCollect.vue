<template>
    <div class="reg_wrap">
        <div>
            <div class="regs">
                <el-input 
                    v-model="regParren"
                    placeholder="请输入正则表达式"
                    clearable
                ></el-input>
                <el-checkbox v-model="isGlobal">全局搜索</el-checkbox>
                <el-checkbox v-model="isIgnoreLower">忽略大小写</el-checkbox>
            </div>
            <p>测试的值</p>
            <el-input 
                v-model="testVal"
                placeholder="请输入要测试的值"
                type="textarea"
                clearable
            ></el-input>
            <p></p>
            <el-button type="primary" size="mini" @click="matching('reg')">正则匹配</el-button>
            <el-button type="primary" size="mini" @click="matching('str')">字符串匹配</el-button>
            <p>字符串匹配结果:{{ isMatching }}</p>
            <span >正则匹配结果:</span>
            <p></p>
            <el-input type="textarea" v-model="result"></el-input>
            <p>替换文本</p>
            <div>
                <el-input
                    v-model="replaceStr"
                    placeholder="请输入替换文本"
                >
                    <template slot="append">
                        <el-button type="primary" @click="replaceString">替换</el-button>
                    </template>
                </el-input>
                <p></p>
            </div>
            <div>
                <p>替换结果</p>
                <el-input type="textarea" v-model="replaceResult"></el-input>
            </div>
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
            isMatching: '',
            isGlobal: false,
            isIgnoreLower: true,
            result: '',
            curRegexp: '',
            replaceStr:'',
            replaceResult: ''
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
        matching(rule) {
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
                    this.curRegexp = reg;
                    if(rule === 'reg') {
                        const res = reg.test(this.testVal);
                        this.isMatching = res ? "匹配" : '不匹配';
                    } else if(rule === 'str') {
                        const res = this.testVal.match(reg);
                        if(this.isGlobal) {
                            this.result = `共找到${res.length}个匹配\n${res.join(' ')}`;
                        } else {
                            this.result = `匹配位置:${res['index']}\n匹配结果:${res[0]}`;
                        }
                        console.log(res);
                    }
                } catch (error) {
                    this.curRegexp = '';
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
        },
        // 替换
        replaceString() {
            if(this.curRegexp && this.testVal && this.replaceStr){
                this.replaceResult = this.testVal.replace(this.curRegexp, this.replaceStr)
                console.log(this.replaceResult, 99);
            } else {
                this.replaceResult = '';
            }
        }

    }

}
</script>
<style scoped>
.regs{
    display: flex;
    align-items: center;
}
.regs .el-input{
    padding-right: 20px;
   flex: 1;
}
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
