<template>
  <div
    class="modal show"
    style="top:24%;"
  >
    <div
      class="modal-dialog"
      style="opacity: .9"
    >
      <div
        class="modal-content"
        style="opacity:.85"
      >
        <div class="modal-header">
          <h1 class="text-center" style="color: #428ba9;font-family: 'JournalRegular', Arial, sans-serif;font-size: 7rem;">the times we together</h1>
          <p class="text-center small-title">Saya & Lewei</p>
          <p class="text-center small-title">Meet you , or nothing</p>
        </div>
        <div
          class="modal-body text-center flex-s"
          style="line-height: 1.5rem;font-family: 'JournalRegular', Arial, sans-serif;font-size: 3rem;"
        >
        <div>
            <p>
              <span id="day1" class="time-font">
                  {{date.getFullYear()}}
              </span>
              <span style="color:#ef9700">/&nbsp;
              </span>
              <span id="hour1" class="time-font">
                  {{date.getMonth() + 1}}
              </span>
              <span style="color:#ef9700">/&nbsp;</span>
              <span id="minute1" class="time-font">
                {{date.getDate()}}

              </span>
              <!-- <span style="color:#ef9700">/&nbsp;</span><span id="second" class="time-font"></span> -->
            </p>

            <p>
              year/month/date
            </p>
        </div>
        <div>
            <p class="flex-t">
              <span id="day" class="time-font">00</span><span style="color:#ef9700">/&nbsp;</span><span id="hour" class="time-font">00</span><span style="color:#ef9700">/&nbsp;</span>
              <span id="minute" class="time-font">00</span>
              <!-- <span style="color:#ef9700">/&nbsp;</span><span id="second" class="time-font"></span> -->
            </p>
            <p>
              days/hours/min
            </p>

        </div>


        </div>
        <p
          class="text-center tetss"
          style="color:#428ba9;font-size: 17px"
          id="say"
        >{{sayMsg}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import countTime from "@/utils/count-time.js"
export default {
  name: 'HelloWorld12',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      // year: '2018',
      // month: '02',
      // date: '14',
      dateString: '2018/2/14',
      sayMsg:'我们第一次打招呼',
      saysObj:{
        "2018/2/14" : "我们第一次打招呼",
        "2018/3/14" : "喵喵喵，你输给了我，内心超级开心",
        "2018/4/29" : "武汉,第一次见到你",
        "2018/5/19" : "广州, 第二次见到你",
        "2018/6/13" : "深圳, 第三次见到你",
        "2018/9/7" : "深圳, 第四次见到你",
        "2018/9/24" : "我买下了你,其实早就想买你了,终于买到了",
        "2018/9/26" : "和你一起接你家人,好紧张的",
        "2018/10/13" : "收到小黑,从此你走上小黑路,呜呜呜",
        "2018/10/27" : "你终于还是回家了,好好休养",
        "2018/11/28" : "天齐,祝你生日快乐, 我最喜欢你了",
      }
    }
  },
  props: {
    index: {
      type: [String, Number],
      // required: true,
    },
    date: {
      type: Date,
    }
  },
  watch: {
    date(val) {
      // debugger;
    },
  },
  methods: {
    updateDate(data) {
      var val =  data;
      var _this = this;
      // debugger;
      $(function() {
        //设置起始日期
        // debugger;

        _this.dateString = `${val.getFullYear()}/${val.getMonth() + 1}/${val.getDate()}`;
        // if(_this.dateString == '2018/2/14') {
        //   return;
        // }
        countTime(`${_this.dateString}`, 'day', 'hour', 'minute', 'second');
        var days = $('#day').text() || 0;
        // 设置标题
        if (parseInt(days / 365) != 0) {
          $(document).attr("title", "遇见你" + parseInt(days / 365) + "年,感谢相伴。");
        } else if (parseInt(days / 30) != 0) {
          $(document).attr("title", "遇见你" + parseInt(days / 30) + "个月,感谢相伴。");
        } else
          $(document).attr("title", "遇见你" + days + "天,感谢相伴。");
          console.log('1231111', _this.dateString)

        _this.sayMsg= _this.saysObj[_this.dateString];
        //设置每一张图片对应的文字
        // var says = new Array(
        //   "",
        //   "走过很多路,拍过很多照片，却只爱了一个人",
        //   "福州,乐咖乐。 爱看你吃饭的样子",
        //   "惊慌失措可爱的小表情",
        //   "福州，农林大学。 一起去看花，牵着手走过花海",
        //   "你是我这一生最美的桃花味麦旋风",
        //   "宁德，太姥山。 一早却比一世还长情",
        //   "丢在许愿池的那个愿望一定实现了吧",
        //   "福州，西湖公园。你在身边，你就是我最美的西湖",
        //   "福州，旋转寿司。食力战将非我们莫属",
        //   "福州，福大外国语学院。到此一游",
        //   "福州，第五大道。爱过这里的披萨，腻了全世界的披萨",
        //   "福州，福州大学图书馆。快毕业了才发现学校那么美，如你一般。",
        //   "福州，西禅寺。求了几辈子的佛，我们终于在一起了",
        //   "福州，福大学生街。一起看到了彩虹，传说，那样会很幸福",
        //   "宁德，太姥山。车上的照片也能拍得很美啊",
        //   "福州，福大金阁寺。你告诉我那是金阁寺所以我至今不知道它真正叫什么",
        //   "福州，EO。你说要减肥，所以我们走进了万科广场的EO",
        //   "福州，中亭街。草莓派很甜，我却能大块吃下去，厉害吧",
        //   "福州，爱琴海。躲在我后面，我保护你",
        //   "福州，爱琴海。我也终于有不进衣服店的理由了！",
        //   "福州，爱琴海。和我一样大的熊",
        //   "福州，爱琴海。再见了，爱琴海给我们带来快乐的地方",
        //   "福州，博士后广场。四年，我们学校的乐园",
        //   "福州，豆花新语。终于，我们毕业了，还好我们依然在一起",
        //   "厦门，前埔。奶茶与你，很搭哦",
        //   "厦门，前埔。躲在墙角偷偷拍照，嘿嘿",
        //   "厦门，火车站。发现新天地了",
        //   "厦门，五缘湾。五缘湾的夕阳，好美",
        //   "惠安，无名街道。好想带你走遍我活了十几年的地方",
        //   "厦门，软件园。原来七夕可以这么简单，一幅画，一句情话，幸福",
        //   "厦门，软件园。我也开始喜欢上画画了，画很多很多的你",
        //   "时间不停，爱你不止，携子之手，白头偕老"
        // );
        // var start = function() {
        //   var index = 0;
        //   var rate = 6000;
        //   // $('#say').text(says[this.index]);
        //   // var _play = function() {
        //   //   $('#say').hide();
        //   //   $('#say').text(says[(index++) % says.length]);
        //   //   $('#say').fadeToggle();
        //   //   $('#carousel').carousel('next');
        //   // };
        //   // setInterval(_play, rate);
        // }();
      });
    },

  },
  mounted() {
    this.$nextTick(() => {

    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  /*载入字体*/
  @font-face {
      font-family: 'JournalRegular';
      src: url('/static/fonts/journal-webfont.eot');
      src: url('/static/fonts/journal-webfont_162a16fe.eot') format('embedded-opentype'), url('/static/fonts/journal-webfont.woff') format('woff'), url('/static/fonts/journal-webfont.ttf') format('truetype'), url('/static/fonts/journal-webfont.svg') format('svg');
      font-weight: normal;
      font-style: normal;
  }
 .modal-bogy {
 }
 .flex-s {
    min-height: 108px;
    display: flex;
    justify-content: space-around;
 }
 .flex-t {

 }
 .tetss {
    padding-top: 5px;
        position: relative;
        top: -25px;
 }
  .carousel-fade .carousel-inner .item {
      opacity: 0;
      -webkit-transition-property: opacity;
      -moz-transition-property: opacity;
      -ms-transition-property: opacity;
      -o-transition-property: opacity;
      transition-property: opacity;
  }

  .carousel-fade .carousel-inner .active {
      opacity: 1;
  }

  .carousel-fade .carousel-inner .active.left,
  .carousel-fade .carousel-inner .active.right {
      left: 0;
      opacity: 0;
  }

  .carousel-fade .carousel-inner .next.left,
  .carousel-fade .carousel-inner .prev.right {
      opacity: 1;
  }

  .carousel-position {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
  }

  .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      opacity: .3;
      background-color: black;
  }

  .front {
      border: 5px solid red;
      width: 100%;
      height: 100%;
  }

  .container {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
  }

  .small-title {
      color: gray;
      line-height: 0.5rem;
      font-size: 10px;
  }

  .modal-content {
      background: #040404;
  }

  .time-font {
      color: #fff;
  }
</style>
