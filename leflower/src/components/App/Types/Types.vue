<template>
    <div>
        <myhead :title="title"></myhead>
        <div v-for="item in typesArr" style="padding:0.9rem; margin-bottom:3.75rem">
            <h3 style="font-size:1rem;color:#f00;border:1px solid #ccc;border-radius:0.4rem;margin:0.5rem 0;text-indent:1rem;padding:0.6125rem 0;">{{item.title}}</h3>
            <div style=" border:1px solid #ccc;border-radius:0.4rem;">
                <div v-for="item2 in item.arr">
                    <h4 style="font-size:0.875rem;padding:0.75rem 0.875rem;color:#666">{{item2.name}}</h4>
                    <div style="display:flex;flex-wrap:wrap;justify-content:space-around;text-align:center;">
    
                        <div v-for="(item3,index) in item2.types" style="width:33%;flex-grow:1;">
                            <!--被三整除  -->
                             <div v-if="item2.types.length%3==0"> 
                                <div v-if="item2.types.length-1 == index||item2.types.length-2 == index||item2.types.length-3 == index" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                                <div v-else style="border-top:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                             </div> 
                            <!--余2  -->
                             <div v-else-if="item2.types.length%3==2">
                                <div v-if="item2.types.length-1 == index||item2.types.length-2 == index" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                                <div v-else style="border-top:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                            </div> 
                            <!--余1  -->
                             <div v-else>
                                <div v-if="item2.types.length-1 == index" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                                <div v-else style="border-top:1px solid #ccc;">
                                    <a href="#" style="display:inline-block;font-size:0.75rem;color:#666;padding:0.5rem 0;
                                                           ">
                                        {{item3}}</a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <foot></foot>
    </div>
</template>

<script>
import myhead from "@/components/Head/head"
import foot from "@/components/Footer/footer"
export default {
    data() {
        return {
            title: "产品分类",
            arr: ['11', '22', '33'],
            typesArr: [
                {
                    title: "鲜花",
                    arr: [
                        { name: "按用途", types: ['浪漫爱情', '生日祝福', '开业庆典', '致谢慰问', '家具生活', '商务会议', '哀思鲜花'] },
                        { name: "按对象", types: ['恋人', '朋友', '父母', '领导', '客户', '老师', '探病', '儿童'] },
                        {
                            name: "按花材", types: ['红玫瑰', '粉玫瑰', '白玫瑰', '香槟玫', '黄玫瑰', '紫玫瑰', '蓝玫瑰', '百合花', '康乃馨', '郁金香',
                                '向日葵', '扶郎花', '洋桔梗', '马蹄莲', '菊花', '红掌', '混搭', '七彩玫瑰', '满天星']
                        },
                        { name: "按支数", types: ['9支', '11支', '12支', '18支', '19支', '21支', '22支', '29支', '33支', '36支', '50支', '66支', '99支', '99支以上'] },
                        { name: "按节日", types: ['母亲节', '情人节', '父亲节', '教师节', '妇女节', '圣诞节', '清明节', '其他节日'] },
                        { name: "按类型", types: ['鲜花花束', '鲜花礼盒', '开业花篮', '鲜花花篮', '卡通花束', '瓶插鲜花'] },

                    ]
                },
                {
                    title: "蛋糕",
                    arr: [
                        { name: "按类型", types: ["奶油蛋糕", "水果蛋糕", "婚礼蛋糕"] }
                    ]
                },
                {
                    title: "卡通/巧克力",
                    arr: [
                        { name: "按品牌", types: ['德芙巧克力', '费列罗巧克力', '金帝巧克力'] },
                        { name: "按类型", types: ['巧克力花束', '盒装巧克力', '卡通花束'] },

                    ]
                },
                {
                    title: "绿植花卉",
                    arr: []
                },
                {
                    title: "商务专区",
                    arr: [
                        {
                            name: "按种类", types: ["讲台花", "签到花", "桌花", "胸花", "手捧花", "花篮", "花环", "腕花", "头花", "肩花", "剪彩球",
                                "剪刀", "气球门", "花门", "场地布置"]
                        },
                        { name: "按类型", types: ["高端素雅", "热烈喜庆"] },
                        { name: "自定义", types: ["按图定制", "个性设计"] }
                    ]
                },
                {
                    title: "哀思鲜花",
                    arr: [
                        { name: "按类型", types: ["花束系列", "花篮系列", "花圈系列"] }
                    ]
                },
                {
                    title: "永生花",
                    arr: []
                }
            ]
        }
    },
    components: {
        myhead,
        foot
    }
}
</script>
<style scoped>

</style>


