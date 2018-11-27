<template>
  <div class="container">
    <TimeDom
      ref="time"
      v-if="showTime"
      :date="dateSelet"
      :index="4"
    ></TimeDom>
    <Comment v-if="showComment"></Comment>
    <transition
      name='fade'
      enter-active-class='animated zoomOutLeft'
      leave-active-class='animated zoomOutRight'
    >
          <div
      class="birth"
      v-if="showImage"
    >
      <div class="b-img "></div>
    </div>
      <!-- <div v-if='showImage'>hello world</div> -->
    </transition>
    <div
      class="mask"
      v-if="finalPanelShow"
    >
      <div class="content">
        <div class="score-container">
          <p class="title">本次得分</p>
          <p class="score">{{score}}</p>
        </div>
        <button
          class="restart"
          @click="restart"
        >
          重新开始
        </button>
      </div>
    </div>
    <div class="info">
      <div class="score-gaming">
        你的得分：<span class="score-current">{{score}}</span>
      </div>
      <div
        class="show-line"
        v-if="!showTest"
      >
        <button
          class="show"
          @click="clickStruct"
          v-if="flag"
        >
          close Struct
        </button>

        <button
          class="show"
          @click="clickTime"
          v-if="score > 3"
        >
          show Time
        </button>
        <button
          class="show"
          @click="clickTime"
          v-if="showTime"
        >
          close Time
        </button>
        <button
          class="show"
          @click="clickTimeBrfore"
          v-if="showTime"
        >
          Brfore Time
        </button>
        <button
          class="show"
          @click="clickTimeNext"
          v-if="showTime"
        >
          Next Time
        </button>
        <button
          class="show"
          @click="clickTimeFirst"
          v-if="showTime"
        >
          First Time
        </button>
        <button
          class="show"
          @click="clickComment"
          v-if="showComment"
        >
          close Story
        </button>
<!--         <button
          class="show"
          @click="clickImage"
          v-if="showImage"
        >
          close Image
        </button> -->
      </div>
      <div
        class="show-line"
        v-show="showTest"
      >
        <button
          class="show"
          @click="clickStruct"
        >
          show Struct
        </button>
         <button
          class="show"
          @click="clickTime"
        >
          show Time
        </button>
        <button
          class="show"
          @click="clickTimeBrfore"
          v-if="showTime"
        >
          Brfore Time
        </button>
        <button
          class="show"
          @click="clickTimeNext"
          v-if="showTime"
        >
          Next Time
        </button>
        <button
          class="show"
          @click="clickTimeFirst"
          v-if="showTime"
        >
          First Time
        </button>
        <button
          class="show"
          @click="clickComment"
        >
          showStory
        </button>
        <button
          class="show"
          @click="clickImage"
        >
          showImage
        </button>
      </div>
    </div>
    <canvas />
  </div>
</template>
<script>
import Game from './js/game.js';
import TimeDom from '@/components/time.vue';
import Comment from '@/components/comment.vue';
export default {
  data() {
    return {
      game: null,
      score: 0,
      showTest: false,
      finalPanelShow: false,
      flag: false,
      showTime: false,
      timeList: ["2018/2/14", "2018/3/14", "2018/4/29", "2018/5/19", "2018/6/13", "2018/9/7", "2018/9/24", "2018/9/26", "2018/10/13", "2018/10/27", "2018/11/28"],
      index: 0,
      struct: false,
      showComment: false,
      showImage: false,
      dateSelet: new Date('2018/02/14')
    }
  },
  components: {
    TimeDom,
    Comment,
  },
  watch: {
    score(val) {
      var rate = 2;
      if (val == 2 * rate) {
        console.log('不错')
        this.clickTimeFuntction();

      } else if (val == 4* rate) {
        console.log('很不错')
        // this.clickTimeFuntction(new Date('2018/11/28'));

        // this.clickImage();
        this.clickComment();
        console.log('超不错')
      } else if (val == 6* rate) {
        // this.clickComment();
        // console.log('超不错')

        console.log('不错')
        this.clickTimeFuntction(new Date('2018/11/28'));
      } else if (val == 8* rate) {
        this.clickStruct();
        console.log('相当不错')
        // console.log('不错')
        // this.clickTimeFuntction(new Date('2018/11/28'));
      } else if (val == 10* rate) {
        this.clickStruct();
        console.log('相当不错')
      }
    },
  },
  methods: {
    // 游戏重新开始，执行函数
    restart() {
      this.finalPanelShow = false
      this.game.restart()
    },
    // 游戏失败执行函数
    failed() {
      console.log('失败了');
      this.score = this.game.score
      this.finalPanelShow = true
    },
    hideTest(test) {
      const keyCode = test.keyCode;
      // ios 和 手机 这个~按键也可以
      if (test === 27 || keyCode === 27 || keyCode === 192) {
        this.showTest = !this.showTest;
      }
    },
    clickTimeFirst() {
      this.index = 0;
      this.dateSelet = new Date(this.timeList[this.index]);
      try {
        this.$refs.time.updateDate(this.dateSelet);

      } catch (e) {
        console.log(e);
      }
    },
    clickTimeBrfore() {
      console.log('clickTimeBrfore' , this.index , this.timeList[this.index])
      // this.dateSelet =
      if (this.index >= 1) {
        this.index--;
        this.dateSelet = new Date(this.timeList[this.index]);
        try {
          this.$refs.time.updateDate(this.dateSelet);

        } catch (e) {
          console.log(e);
        }
      }
    },
    clickTimeNext() {
      console.log('clickTimeNext' , this.index , this.timeList[this.index])

      if (this.index <= this.timeList.length - 2) {
        this.index++;
        this.dateSelet = new Date(this.timeList[this.index]);
        try {
          this.$refs.time.updateDate(this.dateSelet);

        } catch (e) {
          console.log(e);
        }
      }
    },
    clickStruct() {
      this.game = null;
      this.flag = !this.flag;
      this.game = new Game(this.flag);
      this.game.addSuccessFn(this.success)
      this.game.addFailedFn(this.failed)
      this.game.init()
    },
    clickComment() {
      this.showComment = !this.showComment;
    },
    clickTimeFuntction(val) {
      if (val) {
        this.dateSelet = val;
      } else {
        this.dateSelet = new Date('2018/02/14')
      }
      this.showTime = !this.showTime;
      this.$nextTick(() => {
        // debugger;
        try {
          this.$refs.time.updateDate(this.dateSelet);

        } catch (e) {
          console.log(e);
        }

      })
    },
    clickTime() {
      this.clickTimeFuntction();
    },
    clickImage() {
      this.showImage = !this.showImage;
      // if(this.showImage) {
      //   $('.birth').addClass('bounceOutLeft');

      // }
    },
    // 游戏成功，更新分数
    success(score) {
      this.score = score
    }
  },
  mounted() {
    this.game = new Game(this.flag)
    this.game.addSuccessFn(this.success)
    this.game.addFailedFn(this.failed)
    this.game.init()
    this.$nextTick(() => {
      // this.clickTime();
      setTimeout(() => {
        document.onkeydown = this.hideTest;
      }, 200);
      // this.showComment = true;
    })
  }
}

</script>
<style lang="scss" scoped>
.container {
  width: 100%; // height: 100%;
  background: #ffffff;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.birth {

}

.b-img {
  background: url(../../assets/birthday.png) center no-repeat;
  background-size: contain;
  height: 80%;
  position: absolute;
  width: 80%;
  right: 40px;
  transform: rotate(270deg);
}

body {
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.mask {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
  border: 5px solid rgba(255, 255, 255, 0.05);
}

.show-line {
  display: flex;
flex-direction: row;
 margin:50px;
 button {
  margin: 10px;
 }
}
.score-container {
  color: #ffffff;
  text-align: center;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
}

.score {
  font-size: 100px;
  font-weight: bold;
  margin-top: 20px;
}

button.restart {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background: white;
  border: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

button.restart:hover {
  color: #232323;
}

.info {
  margin: 20px 0;
  position: absolute;
  text-align: center;
  opacity: 0.2;
  width: 100%;
}

.info a {
  display: block;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  text-decoration: none;
}

a.title {
  font-size: 20px;
  font-weight: bold;
}

.score-gaming {
  margin-top: 10px;
  color: #000;
  font-size: 28px;
  /* text-align: left; */
  font-weight: bold;
}

</style>
