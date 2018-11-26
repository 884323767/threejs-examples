<template>
  <div id="mainDiv">
    <div id="content">
      <div id="code">
        <span class="comments">/**********</span><br />
               <span class="space"/><span class="comments">* 生日快乐，小猫咪</span><br />
               <span class="space"/><span class="comments">* 生日快乐，小可爱</span><br />
               <span class="space"/><span class="comments">* 生日快乐，七大爷</span><br />

               <span class="space"/><span class="comments">* 生日快乐，Saya</span><br />

               <span class="space"/><span class="comments">* 生日快乐，余天齐</span><br />
               <span class="space"/><span class="comments">* 生日快乐，我最爱的天齐</span><br />

               <span class="space"/><span class="comments">**********/</span><br />
                       <span class="keyword">/**********</span><br />

               <span class="space"/><span class="keyword">*小猫咪<span class="string">"追Saya"</span>，我爱你</span><br />
               <span class="space"/><span class="keyword">*小可爱<span class="string">"追Saya"</span>，我爱你</span><br />
               <span class="space"/><span class="keyword">*七大爷<span class="string">"追Saya"</span>，我爱你</span><br />
               <span class="space"/><span class="keyword">*Saya<span class="string">"我爱死你"</span>，我爱你</span><br />

        <span class="space"/><span class="keyword">*余天齐<span class="string">"追Saya"</span>，我爱你</span><br />
        <span class="space"/><span class="keyword">*我的天齐<span class="string">"Saya"</span>，我爱你</span><br />
        <span class="space"/><span class="keyword">*最爱你了</span><br />
        <span class="space"/><span class="keyword">*<span class="string">"喜欢喜欢喜s"</span>by 李乐伟</span><br />
        <span class="space"/><span class="keyword">**********/</span><br />
        ____
      </div>
<!--       <div id="loveHeart">
        <canvas id="garden"></canvas>
        <div id="words">
          <div id="messages">
            Minyue, I have fallen in love with you for
            <div id="elapseClock"></div>
          </div>
          <div id="loveu">
            Love u forever and ever.<br />
            <div class="signature">- hackerzhou</div>
          </div>
        </div>
      </div> -->
    </div>
<!--     <div id="copyright">
      Inspired by <a href="http://www.openrise.com/lab/FlowerPower/">FlowerPower</a> project.<br />
      Copyright © 2011 <a href='http://hackerzhou.me'>hackerzhou.me</a> 2009-2011
    </div> -->
  </div>
</template>
<script>
  import "@/utils/functions_dev"
  import "@/utils/garden_dev"
export default {
  name: 'comment',
  data() {
    return {

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

    }
  },
  mounted() {
    this.$nextTick(() => {
      // var offsetX = $("#loveHeart").width() / 2;
      // var offsetY = $("#loveHeart").height() / 2 - 55;
      var together = new Date();
      together.setFullYear(2010, 10, 2);
      together.setHours(20);
      together.setMinutes(0);
      together.setSeconds(0);
      together.setMilliseconds(0);

      if (!document.createElement('canvas').getContext) {
        var msg = document.createElement("div");
        msg.id = "errorMsg";
        msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
        document.body.appendChild(msg);
        $("#code").css("display", "none")
        // $("#copyright").css("position", "absolute");
        // $("#copyright").css("bottom", "10px");
        document.execCommand("stop");
      } else {
        // setTimeout(function() {
        //   startHeartAnimation();
        // }, 5000);

        window.timeElapse(together);
        setInterval(function() {
          window.timeElapse(together);
        }, 500);

        adjustCodePosition();
        $("#code").typewriter();
      }
    })
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

#mainDiv{
  width: 100%;
  height: 100%;
  background: #d9edf7;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

/*.string {
  color: red;
}*/
#loveHeart {
  float: left;
  width:670px;
  height:625px;
}

#garden {
  width: 100%;
  height: 100%;
}

#elapseClock {
  text-align: right;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#words {
  font-family: "sans-serif";
  width: 500px;
  font-size: 24px;
  color:#666;
}

#messages{
  display: none;
}

#elapseClock .digit{
  font-family: "digit";
  font-size: 36px;
}

#loveu{
  padding: 5px;
  font-size: 22px;
  margin-top: 80px;
  margin-right: 120px;
  text-align: right;
  display: none;
}

#loveu .signature{
  margin-top: 10px;
  font-size: 20px;
  font-style: italic;
}

#clickSound{
  display:none;
}

.content {
  display: flex;
  align-items: center;
}
#code {
  /*float: left;*/
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%,-50%);
  width: 440px;
  height: 400px;
  margin-top: 0px !important;
  margin: 0 auto;
  color: #333;
  font-family: "Consolas", "Monaco", "Bitstream Vera Sans Mono", "Courier New", "sans-serif";
  font-size: 12px;
}

#code .string{
  color: #d9edf6;
}

#code .keyword{
  color: #1a8dc5;
  font-weight:bold;
}

#code .placeholder{
  margin-left:15px;
}

#code .space{
  margin-left:7px;
}

#code .comments{
  color: #3f7f5f;
}

#copyright{
  margin-top: 10px;
  text-align: center;
  width:100%;
  color:#666;
}

#errorMsg{
  width: 100%;
  text-align: center;
  font-size: 24px;
  position: absolute;
  top: 100px;
  left:0px;
}

#copyright a{
  color:#666;
}
</style>
